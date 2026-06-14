// // export type PrayerTime = {
// //   prayer: string;
// //   azan: string;
// //   jamat: string;
// // };

// // export async function getPrayerTimes(): Promise<PrayerTime[]> {
// //   const apiUrl = process.env.NEXT_PUBLIC_PRAYER_API;
  
// //   if (!apiUrl) {
// //     console.error("Error: NEXT_PUBLIC_PRAYER_API environment variable is missing.");
// //     return [];
// //   }

// //   try {
// //     const res = await fetch(apiUrl, {
// //       // "no-store" bypasses the server cache completely.
// //       // Every single page refresh will now fetch 100% live data on the first click.
// //       cache: "no-store", 
// //     });

// //     if (!res.ok) {
// //       throw new Error(`API responded with status: ${res.status}`);
// //     }

// //     return await res.json();
// //   } catch (error) {
// //     console.error("Failed to fetch live prayer timings from Google Sheets:", error);
// //     return [];
// //   }
// // }


// export type PrayerTime = {
//   prayer: string;
//   azan: string;
//   jamat: string;
// };

// export async function getPrayerTimes(): Promise<PrayerTime[]> {
//   const apiUrl = process.env.NEXT_PUBLIC_PRAYER_API;
  
//   if (!apiUrl) {
//     console.error("Error: NEXT_PUBLIC_PRAYER_API is missing.");
//     return [];
//   }

//   try {
//     // cache: "no-store" tells the browser to pull 100% fresh data from Google Sheets every single time
//     const res = await fetch(apiUrl, { cache: "no-store" });

//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }

//     return await res.json();
//   } catch (error) {
//     console.error("Failed to fetch live prayer timings:", error);
//     return [];
//   }
// }




export type PrayerTime = {
  prayer: string;
  azan: string;
  jamat: string;
};

export async function getPrayerTimes(): Promise<PrayerTime[]> {
  try {
    const res = await fetch("/api/prayer-times", { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to pull internal times");
    return await res.json();
  } catch (error) {
    console.error("Data layer retrieval error:", error);
    return [];
  }
}