const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

function formatDuration(duration: string) {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

  if (!match) return "0:00";

  const hours = parseInt(match[1] || "0");
  const minutes = parseInt(match[2] || "0");
  const seconds = parseInt(match[3] || "0");

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  }

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function formatViews(views: string) {
  const count = Number(views);

  if (count >= 1_000_000) {
    return `${(count / 1_000_000).toFixed(1)}M`;
  }

  if (count >= 1_000) {
    return `${(count / 1_000).toFixed(1)}K`;
  }

  return count.toLocaleString();
}

function checkEnvironmentVariables() {
  if (!API_KEY) {
    throw new Error("Missing YOUTUBE_API_KEY environment variable.");
  }

  if (!CHANNEL_ID) {
    throw new Error("Missing YOUTUBE_CHANNEL_ID environment variable.");
  }
}

export async function getLatestVideo() {
  checkEnvironmentVariables();

  const searchResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=1&order=date&type=video&key=${API_KEY}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!searchResponse.ok) {
    const errorText = await searchResponse.text();

    console.error("YouTube latest video API error:", {
      status: searchResponse.status,
      response: errorText,
    });

    throw new Error(
      `Failed to fetch latest YouTube video. Status: ${searchResponse.status}`
    );
  }

  const searchData = await searchResponse.json();

  if (!searchData.items || searchData.items.length === 0) {
    throw new Error("No YouTube videos were found for this channel.");
  }

  const video = searchData.items[0];

  const videoId = video.id?.videoId;

  if (!videoId) {
    throw new Error("YouTube latest video response did not contain a video ID.");
  }

  const videoResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoId}&key=${API_KEY}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!videoResponse.ok) {
    const errorText = await videoResponse.text();

    console.error("YouTube video details API error:", {
      status: videoResponse.status,
      response: errorText,
      videoId,
    });

    throw new Error(
      `Failed to fetch video details. Status: ${videoResponse.status}`
    );
  }

  const videoData = await videoResponse.json();

  if (!videoData.items || videoData.items.length === 0) {
    throw new Error(`No YouTube details found for video ${videoId}.`);
  }

  const details = videoData.items[0];

  return {
    id: videoId,
    title: video.snippet.title,
    thumbnail: video.snippet.thumbnails.high.url,
    duration: formatDuration(details.contentDetails.duration),
    views: formatViews(details.statistics.viewCount),
    url: `https://www.youtube.com/watch?v=${videoId}`,
  };
}

export async function getPlaylistVideos(
  playlistId: string,
  limit: number = 4
) {
  checkEnvironmentVariables();

  if (!playlistId) {
    throw new Error("YouTube playlist ID is missing.");
  }

  const playlistResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${limit}&key=${API_KEY}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!playlistResponse.ok) {
    const errorText = await playlistResponse.text();

    console.error("YouTube playlist API error:", {
      status: playlistResponse.status,
      response: errorText,
      playlistId,
    });

    throw new Error(
      `Failed to fetch playlist. Status: ${playlistResponse.status}`
    );
  }

  const playlistData = await playlistResponse.json();

  if (!playlistData.items || playlistData.items.length === 0) {
    return [];
  }

  const videos = await Promise.all(
    playlistData.items.map(async (item: any) => {
      const videoId = item.snippet?.resourceId?.videoId;

      if (!videoId) {
        console.error("YouTube playlist item has no video ID:", item);
        return null;
      }

      const videoResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoId}&key=${API_KEY}`,
        {
          next: {
            revalidate: 3600,
          },
        }
      );

      if (!videoResponse.ok) {
        const errorText = await videoResponse.text();

        console.error("YouTube playlist video details API error:", {
          status: videoResponse.status,
          response: errorText,
          videoId,
          playlistId,
        });

        return null;
      }

      const videoData = await videoResponse.json();

      if (!videoData.items || videoData.items.length === 0) {
        console.error(
          `No YouTube video details found for video ${videoId}.`
        );

        return null;
      }

      const details = videoData.items[0];

      return {
        id: videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high.url,
        duration: formatDuration(details.contentDetails.duration),
        views: formatViews(details.statistics.viewCount),
        url: `https://www.youtube.com/watch?v=${videoId}`,
      };
    })
  );

  return videos.filter(Boolean);
}