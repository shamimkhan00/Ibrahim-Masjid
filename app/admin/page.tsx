"use client";

import { useState, useEffect } from "react";
import { getPrayerTimes, PrayerTime } from "@/lib/getPrayerTimes";

export default function AdminPage() {
  const [prayers, setPrayers] = useState<PrayerTime[]>([]);
  const [status, setStatus] = useState({ message: "", isError: false });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const loadPrayers = async () => {
      const localSaved = window.localStorage.getItem("local_prayer_timings");

      if (localSaved) {
        try {
          const parsedPrayers = JSON.parse(localSaved) as PrayerTime[];
          if (!cancelled) {
            setPrayers(parsedPrayers);
          }
          return;
        } catch {
          // Fall back to the shared store if the local cache cannot be parsed.
        }
      }

      const data = await getPrayerTimes();
      if (!cancelled && data.length > 0) {
        setPrayers(data);
      }
    };

    void loadPrayers();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleTimeChange = (index: number, field: "azan" | "jamat", value: string) => {
    const updated = [...prayers];
    updated[index][field] = value;
    setPrayers(updated);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setStatus({ message: "", isError: false });

    try {
      const res = await fetch("/api/admin/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prayers }), // No password sent here anymore
      });

      if (res.ok) {
        const resData = await res.json();
        const updatePayload = JSON.stringify(prayers);

        window.localStorage.setItem("local_prayer_timings", updatePayload);

        if (typeof window !== "undefined" && "BroadcastChannel" in window) {
          const channel = new BroadcastChannel("prayer-timings");
          channel.postMessage({ prayers, updatedAt: Date.now() });
          channel.close();
        }
        
        if (resData.isLocal) {
          setStatus({ message: "Saved locally! (Changes visible on your device)", isError: false });
        } else {
          setStatus({ message: "Times updated successfully live on the internet!", isError: false });
        }
      } else {
        const errData = await res.json();
        setStatus({ message: errData.message || "Failed to update.", isError: true });
      }
    } catch {
      setStatus({ message: "Connection error occurred.", isError: true });
    } finally {
      setSaving(false);
    }
  };

  return (
    <main style={{ maxWidth: "500px", margin: "40px auto", padding: "20px", color: "#fff", background: "#111", borderRadius: "12px", border: "1px solid #333", fontFamily: "sans-serif" }}>
      <h2 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "6px", textAlign: "center" }}>Masjid Management Panel</h2>
      <p style={{ color: "#888", fontSize: "14px", marginBottom: "24px", textAlign: "center" }}>Update daily Jamat or Azan times instantly.</p>

      {status.message && (
        <div style={{ padding: "12px", borderRadius: "6px", marginBottom: "16px", fontSize: "14px", background: status.isError ? "#451a03" : "#064e3b", color: status.isError ? "#f97316" : "#34d399" }}>
          {status.message}
        </div>
      )}

      <form onSubmit={handleSave}>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "24px" }}>
          {prayers.map((p, idx) => (
            <div key={p.prayer} style={{ background: "#1a1a1a", padding: "14px", borderRadius: "8px", border: "1px solid #2a2a2a" }}>
              <strong style={{ display: "block", marginBottom: "8px", color: "#10b981", fontSize: "16px" }}>{p.prayer}</strong>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={{ fontSize: "11px", color: "#aaa", display: "block", marginBottom: "4px" }}>Azan Time</label>
                  <input 
                    type="text" 
                    value={p.azan || ""} 
                    onChange={(e) => handleTimeChange(idx, "azan", e.target.value)}
                    style={{ width: "100%", padding: "8px", background: "#111", border: "1px solid #333", color: "#fff", borderRadius: "4px" }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "11px", color: "#aaa", display: "block", marginBottom: "4px" }}>Jamat Time</label>
                  <input 
                    type="text" 
                    value={p.jamat || ""} 
                    onChange={(e) => handleTimeChange(idx, "jamat", e.target.value)}
                    style={{ width: "100%", padding: "8px", background: "#111", border: "1px solid #333", color: "#fff", borderRadius: "4px" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          type="submit" 
          disabled={saving}
          style={{ width: "100%", padding: "14px", background: "#10b981", color: "#fff", border: "none", borderRadius: "6px", fontWeight: "bold", cursor: "pointer", fontSize: "15px", opacity: saving ? 0.6 : 1 }}
        >
          {saving ? "Publishing Changes..." : "Publish Times Live"}
        </button>
      </form>
    </main>
  );
}