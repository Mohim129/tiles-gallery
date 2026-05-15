import { NextResponse } from "next/server";
import { getTileById } from "@/lib/tiles";

export async function GET(request, { params }) {
  const { id } = await params;
  try {
    const tile = await getTileById(id);
    if (!tile) {
      return NextResponse.json({ error: "Tile not found" }, { status: 404 });
    }
    return NextResponse.json(tile);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch tile" }, { status: 500 });
  }
}
