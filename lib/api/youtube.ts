const API_KEY = process.env.YOUTUBE_API_KEY!;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID!;

function formatDuration(duration: string) {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

  if (!match) return "0:00";

  const hours = parseInt(match[1] || "0");
  const minutes = parseInt(match[2] || "0");
  const seconds = parseInt(match[3] || "0");

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
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

export async function getLatestVideo() {

  const searchResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=1&order=date&type=video&key=${API_KEY}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!searchResponse.ok) {
    throw new Error("Failed to fetch latest YouTube video.");
  }

  const searchData = await searchResponse.json();

  const video = searchData.items[0];

  const videoId = video.id.videoId;

  const videoResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoId}&key=${API_KEY}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!videoResponse.ok) {
    throw new Error("Failed to fetch video details.");
  }

  const videoData = await videoResponse.json();

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

  const playlistResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${limit}&key=${API_KEY}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!playlistResponse.ok) {
    throw new Error("Failed to fetch playlist.");
  }

  const playlistData = await playlistResponse.json();

  const videos = await Promise.all(

    playlistData.items.map(async (item: any) => {

      const videoId = item.snippet.resourceId.videoId;

      const videoResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoId}&key=${API_KEY}`,
        {
          next: {
            revalidate: 3600,
          },
        }
      );

      const videoData = await videoResponse.json();

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

  return videos;

}