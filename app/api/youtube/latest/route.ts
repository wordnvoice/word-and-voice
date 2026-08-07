import { NextResponse } from "next/server";
import { getLatestVideo } from "@/lib/api/youtube";

export async function GET() {
  try {
    const video = await getLatestVideo();

    return NextResponse.json(video);

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        error: "Unable to fetch latest video.",
      },
      {
        status: 500,
      }
    );
  }
}