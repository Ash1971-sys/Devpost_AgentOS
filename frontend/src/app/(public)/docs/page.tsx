import PublicNavbar from "@/components/PublicNavbar";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="mesh-gradient" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <PublicNavbar />

      <main className="px-4 py-12 md:py-20 flex-1 flex flex-col items-center">
        <div className="max-w-5xl w-full text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 gradient-text">
            Documentation
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
            Learn how to build, deploy, and scale autonomous AI agents with AgentOS.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="glass-card p-6 md:p-10 border-t-2 border-[var(--accent)]">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Quickstart</h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Learn how to install the CLI and initialize your first autonomous workflow in under 5 minutes.
              </p>
              <Link href="#" className="text-[var(--accent)] font-bold hover:underline">Read Guide &rarr;</Link>
            </div>
            
            <div className="glass-card p-6 md:p-10 border-t-2 border-[var(--accent-pink)]">
              <h2 className="text-xl md:text-2xl font-bold mb-4">MCP Servers</h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Connect external APIs like Stripe, Slack, and GitHub. If a server doesn't exist, we'll build it.
              </p>
              <Link href="#" className="text-[var(--accent-pink)] font-bold hover:underline">View Docs &rarr;</Link>
            </div>
            
            <div className="glass-card p-6 md:p-10 border-t-2 border-[var(--accent-purple)]">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Human-in-the-Loop</h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Configure approval checkpoints for sensitive actions, ensuring complete control over automation.
              </p>
              <Link href="#" className="text-[var(--accent-purple)] font-bold hover:underline">Learn More &rarr;</Link>
            </div>
            
            <div className="glass-card p-6 md:p-10 border-t-2 border-[var(--success)]">
              <h2 className="text-xl md:text-2xl font-bold mb-4">API Reference</h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
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
