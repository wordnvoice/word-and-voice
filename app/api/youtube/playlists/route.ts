import { NextResponse } from "next/server";
import { playlists } from "@/data/playlists";
import { getPlaylistVideos } from "@/lib/api/youtube";

export async function GET() {
  try {
    const data = await Promise.all(
      playlists.map(async (playlist) => ({
        title: playlist.title,
        id: playlist.id,
        url: `https://www.youtube.com/playlist?list=${playlist.id}`,
        videos: await getPlaylistVideos(playlist.id),
      }))
    );

    return NextResponse.json(data);

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        error: "Unable to fetch playlists.",
      },
      {
        status: 500,
      }
    );
  }
}