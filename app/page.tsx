import type { Metadata } from "next";
import PrayerTimings from "@/components/PrayerTimings";
import Donate from "@/components/Donate";

export const metadata: Metadata = {
  title: "Ibrahim Masjid – Kolkata | Prayer Times, Donations & Contact",
  description:
    "Ibrahim Masjid in Taltala, Kolkata. Join us for daily prayers, Jumu'ah, Taraweeh & community events. Donate online, check prayer timings, or reach Imam Mohammed Rehan Khan.",
  keywords:
    "Ibrahim Masjid, Masjid Kolkata, mosque Kolkata, prayer times Kolkata, Jumu'ah Kolkata, Islamic centre Kolkata, mosque Taltala, donate mosque",
  openGraph: {
    title: "Ibrahim Masjid – Kolkata",
    description:
      "A place of prayer, community and faith in the heart of Kolkata.",
    url: "https://ibrahimmasjid.org",
    siteName: "Ibrahim Masjid",
    locale: "en_IN",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <main className="site-main">
        {/* ── NAV ── */}
        <header className="nav">
          <div className="nav-inner container">
            <div className="nav-brand">
              <span className="brand-arabic" aria-hidden="true">
                مسجد ابراهیم
              </span>
              <span className="brand-english">Ibrahim Masjid</span>
            </div>
            <nav aria-label="Primary navigation">
              <ul className="nav-links">
                <li>
                  <a href="#timings">Timings</a>
                </li>
                <li>
                  <a href="#donate">Donate</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* ── HERO ── */}
        <section className="hero" aria-label="Welcome to Ibrahim Masjid">
          <div className="hero-pattern" aria-hidden="true"></div>
          <div className="container hero-content">
            <p className="hero-eyebrow">Assalamu Alaikum</p>
            <h1 className="hero-title">
              Ibrahim
              <br />
              <span className="hero-title-accent">Masjid</span>
            </h1>
            <p className="hero-tagline">
              A house of Allah in the heart of Kolkata —<br />
              open for every prayer, every soul.
            </p>
            <div className="hero-ctas">
              <a href="#timings" className="btn btn-primary">
                Prayer Times
              </a>
              <a href="#donate" className="btn btn-outline">
                Support the Masjid
              </a>
            </div>
          </div>
          <div className="hero-scroll-hint" aria-hidden="true">
            <span></span>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section className="about section" id="about" aria-label="About Ibrahim Masjid">
          <div className="container">
            <div className="section-label">Our Masjid</div>
            <h2 className="section-title">A Community Built on Faith</h2>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  Ibrahim Masjid stands as a G+3 floor structure in the
                  Taltala neighbourhood of Kolkata, serving hundreds of Muslims
                  every day. On Jumu'ah, our halls fill completely — a
                  testament to the unity of the community.
                </p>
                <p>
                  During Ramadan we host two full Taraweeh sessions each night.
                  Our Imam, <strong>Mohammed Rehan Khan</strong>, is available
                  for spiritual guidance, family counseling, and community
                  queries.
                </p>
                <p>
                  The masjid also offers premium quality dry fruits, original
                  honey, and dates — sourced with care and available through
                  the Imam.
                </p>
              </div>
              <div className="about-stats">
                <div className="stat-card">
                  <span className="stat-number">5</span>
                  <span className="stat-label">Daily Prayers</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">G+3</span>
                  <span className="stat-label">Floor Masjid</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">2×</span>
                  <span className="stat-label">Taraweeh (Ramadan)</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">Jumu'ah</span>
                  <span className="stat-label">Every Friday</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRAYER TIMINGS ── */}
        <PrayerTimings />

        {/* ── DONATE ── */}
        <Donate></Donate>

        {/* ── IMAM ── */}
        <section className="imam section" id="imam" aria-label="About the Imam">
          <div className="container">
            <div className="section-label">Leadership</div>
            <h2 className="section-title">Imam Mohammed Rehan Khan</h2>
            <div className="imam-grid">
              <div className="imam-avatar" aria-hidden="true">
                <span>MRK</span>
              </div>
              <div className="imam-info">
                <p>
                  Imam Mohammed Rehan Khan leads all five daily prayers and the
                  Friday Jumu'ah at Ibrahim Masjid. He is available for
                  spiritual counseling, guidance for parents and guardians, and
                  community consultations.
                </p>
                <ul className="imam-services">
                  <li>Spiritual guidance &amp; Islamic queries</li>
                  <li>Guardian &amp; family consultation</li>
                  <li>Nikah &amp; religious ceremonies</li>
                  <li>Premium dry fruits, honey &amp; dates available</li>
                </ul>
                <a
                  href="#contact"
                  className="btn btn-primary"
                  aria-label="Contact the Imam"
                >
                  Contact the Imam
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="contact section" id="contact" aria-label="Contact Ibrahim Masjid">
          <div className="container">
            <div className="section-label">Get in Touch</div>
            <h2 className="section-title">Visit or Contact Us</h2>
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon" aria-hidden="true">📍</span>
                  <div>
                    <p className="contact-type">Address</p>
                    <address className="contact-value">
                      5B, Grant St, Esplanade,
                      <br />
                      Dharmatala, Taltala,
                      <br />
                      Kolkata, West Bengal 700013
                    </address>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon" aria-hidden="true">📞</span>
                  <div>
                    <p className="contact-type">Phone</p>
                    <a href="tel:+919088608610" className="contact-value link">
                      +91 90886 08610
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon" aria-hidden="true">🕌</span>
                  <div>
                    <p className="contact-type">Imam</p>
                    <p className="contact-value">Mohammed Rehan Khan</p>
                  </div>
                </div>
              </div>

              {/* Ask the Imam form */}
              <form
                className="contact-form"
                aria-label="Send a message to the Imam"
              >
                <h3 className="form-title">Ask the Imam</h3>
                <div className="form-group">
                  <label htmlFor="cf-name">Your Name</label>
                  <input
                    type="text"
                    id="cf-name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cf-phone">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    id="cf-phone"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    autoComplete="tel"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cf-message">Your Question or Message</label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows={4}
                    placeholder="Write your question here…"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-full">
                  Send Message
                </button>
                <p className="form-note">
                  The Imam will respond as soon as possible, in sha Allah.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="footer">
          <div className="container footer-inner">
            <div className="footer-brand">
              <span className="brand-arabic" aria-hidden="true">
                مسجد ابراهیم
              </span>
              <span>Ibrahim Masjid, Kolkata</span>
            </div>
            <p className="footer-copy">
              5B Grant St, Taltala, Kolkata 700013 ·{" "}
              <a href="tel:+919088608610">+91 90886 08610</a>
            </p>
            <p className="footer-dua" aria-label="Islamic invocation">
              بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
            </p>
          </div>
        </footer>
      </main>

      {/* Global styles – move to globals.css in production */}
      {/* <style jsx global>{`
        
      `}</style> */}
    </>
  );
}
