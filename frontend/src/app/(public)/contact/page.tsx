"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import PublicNavbar from "@/components/PublicNavbar";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    
    const subject = encodeURIComponent("Inquiry from AgentOS Website");
    const bodyText = encodeURIComponent(`From: ${email}\n\nMessage:\n${message}`);
    
    // Direct link to Gmail web compose window
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=godumang35@gmail.com&su=${subject}&body=${bodyText}`;
    window.open(gmailUrl, "_blank");

    setStatus("success");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="mesh-gradient" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navbar */}
      <PublicNavbar />

      {/* Content */}
      <main className="px-4 py-12 md:py-20" style={{ flex: 1, maxWidth: 1000, margin: "0 auto", width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 800, marginBottom: 24 }} className="gradient-text">
            Get in Touch
          </h1>
          <p style={{ fontSize: 20, color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto" }}>
            Have a question about AgentOS, or want to discuss enterprise deployments? 
            Reach out to our founding team directly.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))", gap: 48, alignItems: "start" }}>
          {/* Contact Details */}
          <div className="glass-card" style={{ padding: 40, borderTop: "4px solid var(--accent-pink)" }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24 }}>Connect with us</h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--text-primary)" }}>Umang Vijay</h3>
                <p style={{ color: "var(--accent)", fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Co-Founder & CTO</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <a href="mailto:godumang35@gmail.com" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--text-secondary)", textDecoration: "none" }} className="hover:text-primary">
                    <span style={{ fontSize: 20 }}>✉️</span> godumang35@gmail.com
                  </a>
                  <a href="https://www.linkedin.com/in/umangvijay/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--text-secondary)", textDecoration: "none" }} className="hover:text-primary">
                    <span style={{ fontSize: 20 }}>🔗</span> LinkedIn Profile
                  </a>
                  <a href="https://github.com/umangvijay" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--text-secondary)", textDecoration: "none" }} className="hover:text-primary">
                    <span style={{ fontSize: 20 }}>💻</span> GitHub Repository
                  </a>
                  <span style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--text-secondary)", marginTop: 4 }}>
                    <span style={{ fontSize: 20 }}>🌍</span> Remote
                  </span>
                </div>
              </div>

              <div style={{ height: 1, background: "var(--border-primary)" }} />

              <div>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--text-primary)" }}>Ashmit Rana</h3>
                <p style={{ color: "var(--accent)", fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Co-Founder & CEO</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <a href="https://www.linkedin.com/in/ashmit-rana-43351628b" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--text-secondary)", textDecoration: "none" }} className="hover:text-primary">
                    <span style={{ fontSize: 20 }}>🔗</span> LinkedIn Profile
                  </a>
                  <a href="https://github.com/Ash1971-sys" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--text-secondary)", textDecoration: "none" }} className="hover:text-primary">
                    <span style={{ fontSize: 20 }}>💻</span> GitHub Repository
                  </a>
                  <span style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--text-secondary)", marginTop: 4 }}>
                    <span style={{ fontSize: 20 }}>🌍</span> Remote
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card" style={{ padding: 40, borderTop: "4px solid var(--accent-purple)" }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24 }}>Send a Message</h2>
            
            {status === "success" ? (
              <div style={{ padding: 32, textAlign: "center", background: "var(--success-subtle)", borderRadius: "var(--radius-md)", border: "1px solid var(--success)" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>📧</div>
                <h3 style={{ fontSize: 20, color: "var(--success)", marginBottom: 8 }}>Ready to Send!</h3>
                <p style={{ color: "var(--text-secondary)" }}>Your default email app has been opened with your message pre-filled. Please click send from there!</p>
                <button onClick={() => setStatus("idle")} className="btn btn-secondary" style={{ marginTop: 24 }}>
                  Go back
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 6 }}>
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    className="input"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ width: "100%" }}
                  />
                </div>
                
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 6 }}>
                    Your Message
                  </label>
                  <textarea
                    className="input"
                    placeholder="How can we help you automate your business?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    style={{ width: "100%", minHeight: 150, resize: "vertical" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={status === "sending"}
                  style={{ width: "100%", marginTop: 8 }}
                >
                  {status === "sending" ? <span className="spinner" /> : "Send to godumang35@gmail.com"}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ padding: "64px 40px", borderTop: "1px solid var(--border-primary)", background: "var(--bg-primary)", marginTop: 80 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center", color: "var(--text-secondary)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 24 }}>
            <div style={{
              width: 24, height: 24, borderRadius: "6px",
              background: "linear-gradient(135deg, var(--accent), var(--accent-pink))",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 12, fontWeight: 800, color: "white"
            }}>A</div>
            <span style={{ fontSize: 18, fontWeight: 800 }}>AgentOS</span>
          </div>
          <p>© 2026 AgentOS Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
