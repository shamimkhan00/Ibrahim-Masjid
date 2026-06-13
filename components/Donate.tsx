export default async function Donate() {
    return (
        <section className="donate section" id="donate" aria-label="Donate to Ibrahim Masjid">
          <div className="container">
            <div className="section-label">Sadaqah & Zakat</div>
            <h2 className="section-title">Support Ibrahim Masjid</h2>
            <p className="section-sub">
              Your generosity keeps the masjid running, pays for maintenance,
              and supports the community. Every contribution counts.
            </p>
            <div className="donate-grid">
              <div className="donate-card donate-card--main">
                <div className="donate-icon" aria-hidden="true">🕌</div>
                <h3>General Donation</h3>
                <p>
                  Support the daily upkeep, electricity, water, and cleaning
                  of the masjid.
                </p>
                <a
                  href="tel:+919088608610"
                  className="btn btn-primary"
                  aria-label="Call to donate"
                >
                  Call to Donate
                </a>
                <a
          href="upi://pay?pa=khanmdrehan853-2@okhdfcbank&pn=MOHAMMAD%20REHMAN%20KHAN&tn=General%20Donation"
          className="btn btn-primary"
        >
          Donate Now
        </a>
              </div>
              {/* <div className="donate-card">
                <div className="donate-icon" aria-hidden="true">📿</div>
                <h3>Ramadan Fund</h3>
                <p>
                  Help us host Taraweeh, Iftar arrangements and community
                  programs during the blessed month.
                </p>
                <a href="tel:+919088608610" className="btn btn-outline">
                  Contribute
                </a>
              </div> */}
              <div className="donate-card">
                <div className="donate-icon" aria-hidden="true">🏗️</div>
                <h3>Infrastructure</h3>
                <p>
                  Contribute towards expansion, repairs, and improving
                  facilities for worshippers.
                </p>
                <a href="tel:+919088608610" className="btn btn-outline">
                  Contribute
                </a>
              </div>
            </div>

            <div className="bank-details">
              <p className="bank-title">Donation enquiries</p>
              <p>
                Please contact us directly at{" "}
                <a href="tel:+919088608610" className="link">
                  +91 90886 08610
                </a>{" "}
                or visit the masjid. Online payment integration coming soon.
              </p>
            </div>
          </div>
        </section>
    )
}