export type PrayerTime = {
  prayer: string;
  azan: string;
  jamat: string;
};

export async function getPrayerTimes(): Promise<PrayerTime[]> {
  const apiUrl = process.env.NEXT_PUBLIC_PRAYER_API;
  
  if (!apiUrl) {
    console.error("Error: NEXT_PUBLIC_PRAYER_API environment variable is missing.");
    return [];
  }

  try {
    const res = await fetch(apiUrl, {
      // "no-store" bypasses the server cache completely.
      // Every single page refresh will now fetch 100% live data on the first click.
      cache: "no-store", 
    });

    if (!res.ok) {
      throw new Error(`API responded with status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Failed to fetch live prayer timings from Google Sheets:", error);
    return [];
  }
}