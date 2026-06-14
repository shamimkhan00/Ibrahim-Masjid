import { NextResponse } from "next/server";
import { getStore } from "@netlify/blobs";
import initialPrayers from "@/data/prayers.json";

export async function GET() {
  // 1. 💡 Check if running locally first. If yes, return the file data immediately and skip Netlify code.
  if (process.env.NODE_ENV === "development") {
    return NextResponse.json(initialPrayers, {
      headers: { "Cache-Control": "no-store, no-cache, must-revalidate" }
    });
  }

  try {
    // 2. This code will now ONLY run when deployed live on Netlify's cloud infrastructure
    const store = getStore("masjid-data");
    const savedData = await store.get("prayer-timings", { type: "json" });
    const data = savedData || initialPrayers;

    return NextResponse.json(data, {
      headers: { 
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate" 
      }
    });
  } catch (error) {
    console.error("Failed to read prayer storage on production:", error);
    return NextResponse.json(initialPrayers);
  }
}