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
            <h2 className="section-title">Maulana Imam Mohammed Rehan Khan</h2>
            <div className="imam-grid">
              {/* <div className="imam-avatar" aria-hidden="true">
                <span>MRK</span>
              </div> */}
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
              <div className="contact-map" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d921.1054495909381!2d88.35354792592629!3d22.5633223483105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027707f3dc8559%3A0x2c2b2c6069957792!2sIbrahim%20masjid!5e0!3m2!1sen!2sin!4v1781780450257!5m2!1sen!2sin"
                    width="100%" /* Changed to 100% so it fits nicely inside the layout container */
                    // height="350" 
                    style={{ border: 0, borderRadius: '8px' }} /* Added a small border radius to match modern UI aesthetics */

                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ibrahim Masjid Location Map"
                  />
                </div>
              <div className="ask-imam-card">
                <p className="ask-imam-eyebrow">
                  Free of Cost Guidance
                </p>

                <h3 className="ask-imam-title">
                  Ask the Imam
                </h3>

                <p className="ask-imam-description">
                  Seek trusted guidance on any question or personal advice. Our
                  community support services are completely private,
                  confidential, and free of charge.
                </p>

                <div className="ask-imam-inner">
                  <div className="ask-imam-summary">
                    {/* <span
                      className="ask-imam-icon"
                      aria-hidden="true"
                    >
                      💬
                    </span> */}
                    {/* <div className="ask-imam-copy">
                      <h4 className="ask-imam-subtitle">
                        General or Personal Matters
                      </h4>
                      <p className="ask-imam-summary-text">
                        Message the Imam directly on WhatsApp for a private
                        consultation about family matters, religious questions,
                        or everyday guidance.
                      </p>
                    </div> */}
                  </div>

                  <a
                    href="https://wa.me/919088608610"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ask-imam-button"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ask-imam-button-icon"
                    >
                      <path d="M12.004 2.001c-5.514 0-9.996 4.481-9.996 9.995 0 1.758.459 3.474 1.33 4.993L2 22l5.149-1.306a9.96 9.96 0 0 0 4.855 1.252h.004c5.514 0 9.995-4.481 9.995-9.995 0-2.674-1.041-5.188-2.93-7.075A9.926 9.926 0 0 0 12.004 2Zm0 18.243h-.003a8.206 8.206 0 0 1-4.181-1.139l-.299-.177-3.056.775.818-2.976-.194-.306a8.204 8.204 0 0 1-1.262-4.366c0-4.532 3.687-8.219 8.22-8.219a8.17 8.17 0 0 1 5.818 2.412 8.13 8.13 0 0 1 2.404 5.807c0 4.532-3.686 8.219-8.219 8.219Zm4.52-6.164c-.247-.124-1.463-.722-1.691-.805-.227-.084-.392-.124-.557.124-.165.248-.639.805-.783.969-.144.165-.289.186-.536.062-.247-.124-1.042-.384-1.986-1.223-.734-.654-1.23-1.462-1.374-1.71-.144-.248-.015-.382.109-.506.112-.11.247-.289.371-.433.124-.144.165-.248.247-.413.083-.165.041-.309-.021-.433-.062-.124-.557-1.341-.764-1.835-.201-.482-.406-.416-.557-.424l-.473-.009c-.165 0-.433.062-.66.309-.227.248-.866.846-.866 2.063s.887 2.393 1.01 2.558c.124.165 1.748 2.667 4.237 3.74.593.256 1.056.409 1.417.523.595.189 1.136.163 1.563.099.477-.071 1.463-.598 1.67-1.18.206-.582.206-1.08.144-1.18-.062-.1-.227-.165-.474-.289Z" />
                    </svg>
                    Connect on WhatsApp
                  </a>

                  <p className="ask-imam-note">
                    The Imam will respond to your messages as soon as possible,
                    in sha Allah.
                  </p>
                </div>
              </div>
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
