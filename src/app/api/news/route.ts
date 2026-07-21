import { NextResponse } from "next/server";
import { fetchNews } from "../../../services/rss/fetchNews";

export async function GET() {
  try {
    const news = await fetchNews();

    return NextResponse.json({
      success: true,
      count: news.length,
      data: news,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "뉴스를 가져오지 못했습니다.",
      },
      { status: 500 }
    );
  }
}