import PublicNavbar from "@/components/PublicNavbar";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="mesh-gradient" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <PublicNavbar />

      <main className="px-4 py-12 md:py-20 flex-1 flex flex-col items-center">
        <div style={{ maxWidth: 1000, width: "100%", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, marginBottom: 24 }} className="gradient-text">
            Documentation
          </h1>
          <p style={{ fontSize: 20, color: "var(--text-secondary)", marginBottom: 48, maxWidth: 600, margin: "0 auto 48px" }}>
            Learn how to build, deploy, and scale autonomous AI agents with AgentOS.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32, textAlign: "left" }}>
            <div className="glass-card" style={{ padding: 32 }}>
              <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Quickstart</h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: 24, lineHeight: 1.6 }}>
                Get up and running with AgentOS in less than 5 minutes.
              </p>
              <Link href="/get-started" className="text-primary hover:underline font-semibold">
                Read guide &rarr;
              </Link>
            </div>

            <div className="glass-card" style={{ padding: 32 }}>
              <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>MCP Servers</h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: 24, lineHeight: 1.6 }}>
                Learn how to dynamically generate Model Context Protocol servers.
              </p>
              <Link href="#" className="text-primary hover:underline font-semibold">
                Read guide &rarr;
              </Link>
            </div>

            <div className="glass-card" style={{ padding: 32 }}>
              <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Human-in-the-Loop</h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: 24, lineHeight: 1.6 }}>
                Set up approval workflows for critical agent actions.
              </p>
              <Link href="#" className="text-primary hover:underline font-semibold">
                Read guide &rarr;
              </Link>
            </div>

            <div className="glass-card" style={{ padding: 32 }}>
              <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>API Reference</h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: 24, lineHeight: 1.6 }}>
                Explore the complete AgentOS REST and GraphQL APIs.
              </p>
              <Link href="#" className="text-primary hover:underline font-semibold">
                Read docs &rarr;
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
