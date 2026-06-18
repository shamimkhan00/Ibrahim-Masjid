import { NextResponse } from "next/server";
import initialPrayers from "@/data/prayers.json";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { getStore } = await import("@netlify/blobs");
    const store = getStore("masjid-data");
    const savedData = await store.get("prayer-timings", { type: "json" });
    
    return NextResponse.json(savedData || initialPrayers, {
      headers: { 
        // 1. Directs the user's browser not to cache anything
        "Cache-Control": "no-store, no-cache, must-revalidate",
        
        // 2. ⚡ THE SOLID FIX: Forces Netlify's edge CDN network to drop all cache instantly on the first click
        "Netlify-CDN-Cache-Control": "no-store, no-cache, must-revalidate",
        "CDN-Cache-Control": "no-store, no-cache, must-revalidate"
      }
    });
  } catch (error) {
    return NextResponse.json(initialPrayers, {
      headers: { "Cache-Control": "no-store, no-cache, must-revalidate" }
    });
  }
}