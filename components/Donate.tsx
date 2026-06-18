"use client";

import { useState } from "react";
import { QRCodeSVG } from 'qrcode.react';

export default function Donate() {
    const [showQR, setShowQR] = useState(false);

    const paymentData = "upi://pay?pa=khanmdrehan853-2@okhdfcbank&pn=MOHAMMAD%20REHAN%20KHAN&cu=INR&tn=Payment";
    
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
                        
                        <div style={{}}>
                            <button
                                type="button"
                                onClick={() => setShowQR((prev) => !prev)}
                                className="btn btn-outline"
                                style={{ flex: "1", minWidth: "140px", textAlign: "center", cursor: "pointer" }}
                            >
                                {showQR ? "Hide QR Code" : "QR Donation"}
                            </button>
                        </div>

                        {/* Hard conditional check: If showQR is false, nothing renders here */}
                        {showQR && (
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "24px" }}>
                                <div className="bg-[#faf8f2]" style={{ border: "1px solid var(--sand)", borderRadius: "var(--radius-sm)", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <div style={{ backgroundColor: "#ffffff", padding: "12px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <QRCodeSVG
                                            value={paymentData}
                                            size={200}
                                            level={"H"}
                                        />
                                    </div>

                                    <p className="text-sm font-semibold mt-4 text-[var(--green)] tracking-wider uppercase text-center">
                                        Scan to Donate Any Amount
                                    </p>
                                    <p className="text-xs text-center text-gray-500 mt-1">
                                        khanmdrehan853-2@okhdfcbank
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

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
                        or visit the masjid.
                    </p>
                </div>
            </div>
        </section>
    );
}

