// // import { getPrayerTimes, PrayerTime } from "@/lib/getPrayerTimes";

// // const arabicNames: Record<string, string> = {
// //   Fajr: "الفجر",
// //   Zuhr: "الظهر",
// //   Asr: "العصر",
// //   Maghrib: "المغرب",
// //   Isha: "العشاء",
// // };

// // export default async function PrayerTimings() {
// //   const prayers = await getPrayerTimes();

// //   // Clean fallback UI if the Google Sheet API fails to load
// //   if (!prayers || prayers.length === 0) {
// //     return (
// //       <section className="timings section" id="timings">
// //         <div className="container text-center py-8">
// //           <p className="text-white/70">
// //             Prayer schedule is temporarily unavailable. Please check back shortly.
// //           </p>
// //         </div>
// //       </section>
// //     );
// //   }

// //   return (
// //     <section
// //       className="timings section"
// //       id="timings"
// //       aria-label="Prayer timings"
// //     >
// //       <div className="container">
// //         <div className="section-label">Daily Schedule</div>

// //         <h2 className="section-title">
// //           Prayer & Azan Timings
// //         </h2>

// //         <p className="section-sub">
// //           Timings below are updated by the Imam.{" "}
// //           <span className="live-badge">
// //             Refresh to get Updated Time
// //           </span>
// //         </p>

// //         <div className="timings-grid">
// //           {prayers.map((prayer: PrayerTime) => (
// //             <div
// //               className="timing-card"
// //               key={prayer.prayer}
// //             >
// //               <div className="timing-arabic">
// //                 {arabicNames[prayer.prayer] || ""}
// //               </div>

// //               <div className="timing-name">
// //                 {prayer.prayer}
// //               </div>

// //               <div className="timing-detail">
// //                 <span className="timing-label">
// //                   Jamat
// //                 </span>
// //                 <span className="timing-value">
// //                   {prayer.jamat}
// //                 </span>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="jumuah-card">
// //           <div className="jumuah-inner">
// //             <div className="jumuah-day">
// //               Friday · Jumu'ah
// //             </div>

// //             <div className="jumuah-time">
// //               12:30 PM
// //             </div>

// //             <p className="jumuah-note">
// //               The hall fills completely on Jumu'ah.
// //               Please arrive early.
// //             </p>
// //           </div>
// //         </div>

// //         <div className="sheets-notice">
// //           <div className="sheets-icon">📋</div>

// //           <p>
// //             <strong>Live prayer schedule.</strong>{" "}
// //             Timings are updated directly by the Imam
// //             and reflected automatically on the website.
// //           </p>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



// "use client";

// import { useEffect, useState } from "react";
// import { getPrayerTimes, PrayerTime } from "@/lib/getPrayerTimes";

// const arabicNames: Record<string, string> = {
//   Fajr: "الفجر",
//   Zuhr: "الظهر",
//   Asr: "العصر",
//   Maghrib: "المغرب",
//   Isha: "العشاء",
// };

// export default function PrayerTimings() {
//   const [prayers, setPrayers] = useState<PrayerTime[]>([]);

//   useEffect(() => {
//     const fetchFreshTimings = async () => {
//       const data = await getPrayerTimes();
//       if (data && data.length > 0) {
//         setPrayers(data);
//       }
//     };

//     // 1. Fetch immediately when the user loads the page
//     fetchFreshTimings();

//     // 2. Automatically sync in the background every 60 seconds (no refresh required)
//     const interval = setInterval(fetchFreshTimings, 60000);

//     return () => clearInterval(interval);
//   }, []);

//   // Instant layout fallback to show before Google Sheets data finishes loading
//   const displayPrayers = prayers.length > 0 ? prayers : [
//     { prayer: "Fajr", azan: "--:--", jamat: "--:--" },
//     { prayer: "Zuhr", azan: "--:--", jamat: "--:--" },
//     { prayer: "Asr", azan: "--:--", jamat: "--:--" },
//     { prayer: "Maghrib", azan: "--:--", jamat: "--:--" },
//     { prayer: "Isha", azan: "--:--", jamat: "--:--" },
//   ];

//   return (
//     <section
//       className="timings section"
//       id="timings"
//       aria-label="Prayer timings"
//     >
//       <div className="container">
//         <div className="section-label">Daily Schedule</div>

//         <h2 className="section-title">
//           Prayer & Azan Timings
//         </h2>

//         <p className="section-sub">
//           Timings below are updated by the Imam.{" "}
//           <span className="live-badge">
//             Live Updates
//           </span>
//         </p>

//         <div className="timings-grid">
//           {displayPrayers.map((prayer) => (
//             <div
//               className="timing-card"
//               key={prayer.prayer}
//             >
//               <div className="timing-arabic">
//                 {arabicNames[prayer.prayer] || ""}
//               </div>

//               <div className="timing-name">
//                 {prayer.prayer}
//               </div>

//               <div className="timing-detail">
//                 <span className="timing-label">
//                   Jamat
//                 </span>

//                 <span className="timing-value">
//                   {prayer.jamat}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="jumuah-card">
//           <div className="jumuah-inner">
//             <div className="jumuah-day">
//               Friday · Jumu'ah
//             </div>

//             <div className="jumuah-time">
//               12:30 PM
//             </div>

//             <p className="jumuah-note">
//               The hall fills completely on Jumu'ah.
//               Please arrive early and bring your own
//               prayer mat if possible.
//             </p>
//           </div>
//         </div>

//         <div className="sheets-notice">
//           <div className="sheets-icon">📋</div>

//           <p>
//             <strong>Live prayer schedule.</strong>
//             Timings are updated directly by the Imam
//             and reflected automatically on the website.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { useEffect, useState } from "react";
import { getPrayerTimes, PrayerTime } from "@/lib/getPrayerTimes";

const arabicNames: Record<string, string> = {
  Fajr: "الفجر",
  Zuhr: "الظهر",
  Asr: "العصر",
  Maghrib: "المغرب",
  Isha: "العشاء",
};

export default function PrayerTimings() {
  const [prayers, setPrayers] = useState<PrayerTime[]>([]);

  useEffect(() => {
    let isMounted = true;

    const applyTimings = (data: PrayerTime[]) => {
      if (!isMounted || !Array.isArray(data) || data.length === 0) {
        return;
      }

      setPrayers(data);
    };

    const fetchFreshTimings = async () => {
      const data = await getPrayerTimes();
      applyTimings(data);
    };

    const broadcastChannel =
      typeof window !== "undefined" && "BroadcastChannel" in window
        ? new BroadcastChannel("prayer-timings")
        : null;

    const handlePrayerUpdate = (event: MessageEvent) => {
      const nextPrayers = event.data?.prayers;

      if (Array.isArray(nextPrayers)) {
        applyTimings(nextPrayers as PrayerTime[]);
        return;
      }

      fetchFreshTimings();
    };

    const handleStorageUpdate = (event: StorageEvent) => {
      if (event.key !== "local_prayer_timings" || !event.newValue) {
        return;
      }

      try {
        const nextPrayers = JSON.parse(event.newValue) as PrayerTime[];
        applyTimings(nextPrayers);
      } catch {
        fetchFreshTimings();
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        fetchFreshTimings();
      }
    };

    fetchFreshTimings();

    const interval = setInterval(fetchFreshTimings, 30_000);

    broadcastChannel?.addEventListener("message", handlePrayerUpdate);
    window.addEventListener("storage", handleStorageUpdate);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      isMounted = false;
      clearInterval(interval);
      broadcastChannel?.removeEventListener("message", handlePrayerUpdate);
      broadcastChannel?.close();
      window.removeEventListener("storage", handleStorageUpdate);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const displayPrayers = prayers.length > 0 ? prayers : [
    { prayer: "Fajr", azan: "--:--", jamat: "--:--" },
    { prayer: "Zuhr", azan: "--:--", jamat: "--:--" },
    { prayer: "Asr", azan: "--:--", jamat: "--:--" },
    { prayer: "Maghrib", azan: "--:--", jamat: "--:--" },
    { prayer: "Isha", azan: "--:--", jamat: "--:--" },
  ];

  return (
    <section className="timings section" id="timings" aria-label="Prayer timings">
      <div className="container">
        <div className="section-label">Daily Schedule</div>
        <h2 className="section-title">Prayer & Azan Timings</h2>
        <p className="section-sub">
          Timings below are updated by the Imam. <span className="live-badge">Live Updates</span>
        </p>

        <div className="timings-grid">
          {displayPrayers.map((prayer) => (
            <div className="timing-card" key={prayer.prayer}>
              <div className="timing-arabic">{arabicNames[prayer.prayer] || ""}</div>
              <div className="timing-name">{prayer.prayer}</div>
              <div className="timing-detail">
                <span className="timing-label">Jamat</span>
                <span className="timing-value">{prayer.jamat}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="jumuah-card">
          <div className="jumuah-inner">
            <div className="jumuah-day">Friday · Jumu&apos;ah</div>
            <div className="jumuah-time">12:30 PM</div>
            <p className="jumuah-note">
              The hall fills completely on Jumu&apos;ah. Please arrive early.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}