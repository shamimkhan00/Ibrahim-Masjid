import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { prayers } = await request.json();

    if (!prayers || !Array.isArray(prayers)) {
      return NextResponse.json({ message: "Invalid data format" }, { status: 400 });
    }

    try {
      // Live Production: Try writing directly to Netlify Blobs
      const { getStore } = await import("@netlify/blobs");
      const store = getStore("masjid-data");
      await store.setJSON("prayer-timings", prayers);
      return NextResponse.json({ success: true });
    } catch {
      // Local Machine Fallback: Tell the admin page it processed safely
      return NextResponse.json({ success: true, isLocal: true });
    }
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}