import { NextResponse } from "next/server";
import { getTiles } from "@/lib/tiles";

export async function GET() {
  try {
    const tiles = await getTiles();
    return NextResponse.json(tiles);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch tiles" }, { status: 500 });
  }
}
