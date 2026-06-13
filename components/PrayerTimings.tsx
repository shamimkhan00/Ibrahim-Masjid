import { getPrayerTimes, PrayerTime } from "@/lib/getPrayerTimes";

const arabicNames: Record<string, string> = {
  Fajr: "الفجر",
  Zuhr: "الظهر",
  Asr: "العصر",
  Maghrib: "المغرب",
  Isha: "العشاء",
};

export default async function PrayerTimings() {
  const prayers = await getPrayerTimes();

  // Clean fallback UI if the Google Sheet API fails to load
  if (!prayers || prayers.length === 0) {
    return (
      <section className="timings section" id="timings">
        <div className="container text-center py-8">
          <p className="text-white/70">
            Prayer schedule is temporarily unavailable. Please check back shortly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="timings section"
      id="timings"
      aria-label="Prayer timings"
    >
      <div className="container">
        <div className="section-label">Daily Schedule</div>

        <h2 className="section-title">
          Prayer & Azan Timings
        </h2>

        <p className="section-sub">
          Timings below are updated by the Imam.{" "}
          <span className="live-badge">
            Refresh to get Updated Time
          </span>
        </p>

        <div className="timings-grid">
          {prayers.map((prayer: PrayerTime) => (
            <div
              className="timing-card"
              key={prayer.prayer}
            >
              <div className="timing-arabic">
                {arabicNames[prayer.prayer] || ""}
              </div>

              <div className="timing-name">
                {prayer.prayer}
              </div>

              <div className="timing-detail">
                <span className="timing-label">
                  Jamat
                </span>
                <span className="timing-value">
                  {prayer.jamat}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="jumuah-card">
          <div className="jumuah-inner">
            <div className="jumuah-day">
              Friday · Jumu'ah
            </div>

            <div className="jumuah-time">
              12:30 PM
            </div>

            <p className="jumuah-note">
              The hall fills completely on Jumu'ah.
              Please arrive early.
            </p>
          </div>
        </div>

        <div className="sheets-notice">
          <div className="sheets-icon">📋</div>

          <p>
            <strong>Live prayer schedule.</strong>{" "}
            Timings are updated directly by the Imam
            and reflected automatically on the website.
          </p>
        </div>
      </div>
    </section>
  );
}