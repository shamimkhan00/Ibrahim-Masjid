import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  // Verify our secret token password
  if (secret !== "IbrahimMasjidSecret2026!") {
    return NextResponse.json({ message: "Invalid secret token" }, { status: 401 });
  }

  try {
    // 💡 Added the mandatory profile argument to satisfy TypeScript and Next.js requirements.
    // { expire: 0 } ensures the old cache is dropped instantly on the very first request.
    revalidateTag("prayer-times", { expire: 0 });
    
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json({ message: "Error revalidating tag" }, { status: 500 });
  }
}