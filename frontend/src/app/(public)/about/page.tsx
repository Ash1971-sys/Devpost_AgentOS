import Link from "next/link";
import PublicNavbar from "@/components/PublicNavbar";

export default function AboutPage() {
  return (
    <div className="mesh-gradient" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navbar */}
      <PublicNavbar />

      <main className="px-4 py-12 md:py-20" style={{ flex: 1, maxWidth: 800, margin: "0 auto", textAlign: "left" }}>
        <h1 style={{ fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 800, marginBottom: 24 }} className="gradient-text">
          About Us
        </h1>
        <p style={{ fontSize: 20, color: "var(--text-secondary)", marginBottom: 40, lineHeight: 1.6 }}>
          We are building the future of autonomous workspaces. 
          AgentOS was created with a singular vision: an AI assistant shouldn't be limited by the tools its developers hardcoded for it.
        </p>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 32, marginBottom: 80 }}>
          <div className="glass-card" style={{ padding: 40, borderLeft: "4px solid var(--accent-pink)" }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Our Mission</h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 16 }}>
              Our mission is to bridge the gap between static automation platforms and true artificial general intelligence.
              When you give a goal to AgentOS, it doesn't just execute predefined scripts. It reasons about the required steps,
              searches for missing capabilities, reads documentation, and physically writes the software it needs to accomplish your goal.
            </p>
          </div>
          <div className="glass-card" style={{ padding: 40, borderLeft: "4px solid var(--accent-purple)" }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>The Vision</h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
              By leveraging the Google Gemini ADK and dynamic Model Context Protocol (MCP) generation, we are making the world's
              first truly self-expanding AI workspace. A system where developers spend zero time writing boilerplate API wrappers,
              and 100% of their time solving actual business problems.
            </p>
          </div>
        </div>

        {/* The Team */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 40, textAlign: "center" }}>Meet the Team</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32 }}>
            <div style={{ textAlign: "center" }}>
              <img src="/images/umang-vijay.png" alt="Umang Vijay" style={{ width: 120, height: 120, borderRadius: "50%", objectFit: "cover", objectPosition: "top", margin: "0 auto 20px", display: "block" }} />
              <h3 style={{ fontSize: 20, fontWeight: 700 }}>Umang Vijay</h3>
              <p style={{ color: "var(--accent)" }}>Co-Founder & CTO</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <img src="/images/ashmit-rana.png" alt="Ashmit Rana" style={{ width: 120, height: 120, borderRadius: "50%", objectFit: "cover", objectPosition: "top", margin: "0 auto 20px", display: "block" }} />
              <h3 style={{ fontSize: 20, fontWeight: 700 }}>Ashmit Rana</h3>
              <p style={{ color: "var(--accent)" }}>Co-Founder & CEO</p>
            </div>
          </div>
        </div>

        {/* The Journey */}
        <div className="glass-card" style={{ padding: 60, marginBottom: 80, textAlign: "center" }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 24 }}>The AgentOS Journey</h2>
          <p style={{ fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.6, maxWidth: 600, margin: "0 auto" }}>
            Born out of a Google DevPost hackathon, AgentOS started as an ambitious idea to combine LangChain-style reasoning
            with enterprise-grade deterministic execution. Today, it stands as the most advanced autonomous workspace available,
            powered by Google Gemini.
          </p>
        </div>

        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <Link href="/get-started" className="btn btn-primary btn-lg">Try AgentOS Now</Link>
          <Link href="/features" className="btn btn-secondary btn-lg">View Features</Link>
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
