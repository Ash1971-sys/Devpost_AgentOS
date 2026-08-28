
import Link from "next/link";
import PublicNavbar from "@/components/PublicNavbar";

export default function LandingPage() {
  return (
    <div className="mesh-gradient" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        flex: 1 
      }}>
        <PublicNavbar />

        {/* Hero Section */}
      <main className="px-4 pb-12 md:py-24" style={{ paddingTop: 32, textAlign: "center", position: "relative" }}>
        
        <div style={{ zIndex: 10, width: "100%" }}>
          <h1 className="animate-fade-in-up mt-4 md:mt-10" style={{
            fontSize: "clamp(36px, 8vw, 84px)", fontWeight: 900, lineHeight: 1.05,
            letterSpacing: "-0.04em", marginBottom: 24, maxWidth: 1000, marginInline: "auto"
          }}>
            The autonomous workspace that <br className="hidden md:block" />
            <span className="gradient-text">builds its own tools.</span>
          </h1>
          <p className="animate-fade-in-up" style={{
            fontSize: "clamp(18px, 2.5vw, 24px)", color: "var(--text-secondary)",
            marginBottom: 48, maxWidth: 700, animationDelay: "0.1s", margin: "0 auto 48px", fontWeight: 400
          }}>
            Give AgentOS a goal. It plans the workflow, executes the tasks, and if an integration is missing, it dynamically generates and deploys it.
          </p>
          <div className="animate-fade-in-up" style={{ display: "flex", gap: 16, justifyContent: "center", animationDelay: "0.2s" }}>
            <Link href="/get-started" className="btn btn-primary btn-lg">Start Building Free</Link>
          </div>
        </div>

        {/* Animated Node Demo - Desktop */}
        <div className="hidden md:block diagram-zoom-wrapper animate-fade-in-up" style={{ marginTop: 80, animationDelay: "0.3s", zIndex: 10 }}>
          <div id="demo" className="diagram-zoom glass-card" style={{ background: "var(--bg-secondary)", borderRadius: 16 }}>
            <div style={{ width: 1000, height: "100%", position: "relative" }}>
          {/* Header */}
          <div style={{
            height: 48, borderBottom: "1px solid var(--border-primary)",
            display: "flex", alignItems: "center", padding: "0 16px", gap: 8,
            background: "rgba(0,0,0,0.2)"
          }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "var(--error)" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "var(--warning)" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "var(--success)" }} />
            <span style={{ marginLeft: 16, fontSize: 13, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>workflow-engine-active</span>
          </div>

          {/* SVG Connections */}
          <svg style={{ position: "absolute", top: 48, left: 0, width: "100%", height: "calc(100% - 48px)", pointerEvents: "none" }}>
            {/* Curved Path 1 */}
            <path d="M 210 150 C 310 150, 360 100, 460 100" stroke="var(--accent-pink)" strokeWidth="3" fill="none" strokeOpacity="0.3" />
            <path d="M 210 150 C 310 150, 360 100, 460 100" stroke="var(--accent-pink)" strokeWidth="2" fill="none" className="animate-dash" strokeDasharray="10 20" />
            
            {/* Curved Path 2 */}
            <path d="M 210 150 C 310 150, 310 250, 460 250" stroke="var(--accent-purple)" strokeWidth="3" fill="none" strokeOpacity="0.3" />
            <path d="M 210 150 C 310 150, 310 250, 460 250" stroke="var(--accent-purple)" strokeWidth="2" fill="none" className="animate-dash" strokeDasharray="10 20" />

            {/* Curved Path 3 */}
            <path d="M 680 100 C 715 100, 715 150, 750 150" stroke="var(--accent)" strokeWidth="3" fill="none" strokeOpacity="0.3" />
            <path d="M 680 100 C 715 100, 715 150, 750 150" stroke="var(--accent)" strokeWidth="2" fill="none" className="animate-dash" strokeDasharray="10 20" />
          </svg>

          {/* Nodes */}
          <div style={{ position: "absolute", top: 48, left: 0, width: "100%", height: "calc(100% - 48px)" }}>
            
            {/* Trigger Node */}
            <div className="node-card animate-float" style={{ position: "absolute", left: 40, top: 120, width: 170 }}>
              <div style={{ fontSize: 24 }}>⚡</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>User Intent</div>
                <div style={{ fontSize: 11, color: "var(--text-tertiary)" }}>Trigger</div>
              </div>
              <div className="node-port right"></div>
            </div>

            {/* MCP Factory Node */}
            <div className="node-card animate-float" style={{ position: "absolute", left: 460, top: 70, width: 220, animationDelay: "1s" }}>
              <div className="node-port left"></div>
              <div style={{ fontSize: 24 }}>🛠️</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>MCP Factory</div>
                <div style={{ fontSize: 11, color: "var(--accent-pink)", fontWeight: 600 }}>Building Notion API...</div>
              </div>
              <div className="node-port right"></div>
            </div>

            {/* Web Search Node */}
            <div className="node-card animate-float" style={{ position: "absolute", left: 460, top: 220, width: 220, animationDelay: "2s", opacity: 0.7 }}>
              <div className="node-port left"></div>
              <div style={{ fontSize: 24 }}>🌐</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>Web Search</div>
                <div style={{ fontSize: 11, color: "var(--text-tertiary)" }}>Completed</div>
              </div>
            </div>

            {/* Execution Node */}
            <div className="node-card animate-float" style={{ position: "absolute", left: 750, top: 120, width: 200, animationDelay: "1.5s" }}>
              <div className="node-port left"></div>
              <div style={{ fontSize: 24 }}>✅</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>Notion Sync</div>
                <div style={{ fontSize: 11, color: "var(--success)" }}>Data inserted</div>
              </div>
            </div>

          </div>
          </div>
          </div>
        </div>

        {/* Animated Node Demo - Mobile Stack */}
        <div className="md:hidden flex flex-col animate-fade-in-up glass-card mx-auto w-full max-w-sm text-left" style={{ marginTop: 40, animationDelay: "0.3s", zIndex: 10, background: "var(--bg-secondary)", borderRadius: 16, padding: "16px" }}>
          {/* Header */}
          <div style={{
            display: "flex", alignItems: "center", gap: 8, marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid var(--border-primary)"
          }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--error)" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--warning)" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--success)" }} />
            <span style={{ marginLeft: 8, fontSize: 12, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>workflow-active</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="node-card w-full" style={{ padding: "12px 16px" }}>
              <div style={{ fontSize: 24 }}>⚡</div>
              <div className="flex-1">
                <div style={{ fontSize: 14, fontWeight: 700 }}>User Intent</div>
                <div style={{ fontSize: 11, color: "var(--text-tertiary)" }}>Trigger</div>
              </div>
            </div>
            
            <div style={{ width: 2, height: 20, background: "var(--accent-pink)", opacity: 0.5 }} />

            <div className="node-card w-full" style={{ padding: "12px 16px" }}>
              <div style={{ fontSize: 24 }}>🛠️</div>
              <div className="flex-1">
                <div style={{ fontSize: 14, fontWeight: 700 }}>MCP Factory</div>
                <div style={{ fontSize: 11, color: "var(--accent-pink)", fontWeight: 600 }}>Building Notion API...</div>
              </div>
            </div>

            <div style={{ width: 2, height: 20, background: "var(--accent-purple)", opacity: 0.5 }} />

            <div className="node-card w-full" style={{ padding: "12px 16px" }}>
              <div style={{ fontSize: 24 }}>🌐</div>
              <div className="flex-1">
                <div style={{ fontSize: 14, fontWeight: 700 }}>Web Search</div>
                <div style={{ fontSize: 11, color: "var(--text-tertiary)" }}>Completed</div>
              </div>
            </div>

            <div style={{ width: 2, height: 20, background: "var(--accent)", opacity: 0.5 }} />

            <div className="node-card w-full" style={{ padding: "12px 16px" }}>
              <div style={{ fontSize: 24 }}>✅</div>
              <div className="flex-1">
                <div style={{ fontSize: 14, fontWeight: 700 }}>Notion Sync</div>
                <div style={{ fontSize: 11, color: "var(--success)" }}>Data inserted</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* App Integrations Marquee Showcase */}
      <section style={{ padding: "60px 0", background: "var(--bg-primary)", position: "relative", overflow: "hidden" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <p style={{ fontSize: 14, fontWeight: 600, color: "var(--text-tertiary)", letterSpacing: 2, textTransform: "uppercase" }}>
            Connects with your favorite tools
          </p>
        </div>
        <div className="marquee-container animate-fade-in-up">
          <div className="marquee-content" style={{ display: "flex", gap: 64, alignItems: "center" }}>
            {/* Repeated logos for infinite scroll effect */}
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} style={{ display: "flex", gap: 64, alignItems: "center" }}>
                <span style={{ fontSize: 32, fontWeight: 700, color: "var(--text-secondary)" }}>Stripe</span>
                <span style={{ fontSize: 32, fontWeight: 700, color: "var(--text-secondary)" }}>Slack</span>
                <span style={{ fontSize: 32, fontWeight: 700, color: "var(--text-secondary)" }}>Notion</span>
                <span style={{ fontSize: 32, fontWeight: 700, color: "var(--text-secondary)" }}>GitHub</span>
                <span style={{ fontSize: 32, fontWeight: 700, color: "var(--text-secondary)" }}>Gmail</span>
                <span style={{ fontSize: 32, fontWeight: 700, color: "var(--text-secondary)" }}>Discord</span>
                <span style={{ fontSize: 32, fontWeight: 700, color: "var(--text-secondary)" }}>Jira</span>
                <span style={{ fontSize: 32, fontWeight: 700, color: "var(--text-secondary)" }}>Salesforce</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 md:py-32 px-5 relative" style={{ background: "var(--bg-primary)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <h2 className="animate-fade-in-up" style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, marginBottom: 24 }}>
              Everything you need to <span className="gradient-text">automate anything.</span>
            </h2>
            <p style={{ fontSize: 20, color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto" }}>
              AgentOS combines the power of LLMs with deterministic workflow execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card animate-fade-in-up p-6 md:p-8 border-t-2 border-[var(--accent-pink)]">
              <div className="text-4xl mb-6">🧠</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Autonomous Planning</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Give AgentOS a high-level goal, and it will break it down into a DAG of executable tasks, routing them to specialized sub-agents.
              </p>
            </div>
            
            <div className="glass-card animate-fade-in-up p-6 md:p-8 border-t-2 border-[var(--accent-purple)]" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl mb-6">🛠️</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Dynamic MCP Builder</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Missing an API connector? AgentOS will search the web, read the docs, and write the Python MCP connector from scratch.
              </p>
            </div>
            
            <div className="glass-card animate-fade-in-up p-6 md:p-8 border-t-2 border-[var(--accent)]" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl mb-6">🔒</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Enterprise Security</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Built with full AST static analysis, sandboxed Docker execution, Google OAuth, and strict CSP headers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 md:py-32 px-5 relative overflow-hidden">
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(180deg, var(--bg-primary) 0%, rgba(139, 92, 246, 0.05) 100%)", zIndex: -1 }} />
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, marginBottom: 24 }}>
              How AgentOS Works
            </h2>
          </div>

          <div className="flex flex-col gap-16 md:gap-24">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="flex-1 w-full">
                <div className="gradient-text" style={{ fontSize: 80, fontWeight: 900, lineHeight: 1, marginBottom: 24, opacity: 0.8 }}>01</div>
                <h3 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>Define your Intent</h3>
                <p style={{ fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  Start by typing what you want to achieve. No coding required. The Intent Agent parses your request and maps it to the necessary systems.
                </p>
              </div>
              <div className="glass-card flex-1 w-full p-8" style={{ background: "rgba(0,0,0,0.85)" }}>
                <div style={{ fontFamily: "var(--font-mono)", color: "var(--success)" }}>
                  &gt; Goal: Analyze our latest Stripe transactions and generate a PDF report.
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
              <div className="flex-1 w-full">
                <div className="gradient-text" style={{ fontSize: 80, fontWeight: 900, lineHeight: 1, marginBottom: 24, opacity: 0.8 }}>02</div>
                <h3 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>Dynamic Assembly</h3>
                <p style={{ fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  If a tool doesn't exist, the platform automatically writes and validates the Model Context Protocol (MCP) server for the integration on-the-fly.
                </p>
              </div>
              <div className="glass-card flex-1 w-full p-8" style={{ background: "rgba(0,0,0,0.85)" }}>
                <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                  <div className="spinner" style={{ width: 24, height: 24, borderColor: "var(--accent-pink) transparent transparent transparent" }} />
                  <span style={{ color: "var(--accent-pink)", fontFamily: "var(--font-mono)" }}>Building Stripe MCP...</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="flex-1 w-full">
                <div className="gradient-text" style={{ fontSize: 80, fontWeight: 900, lineHeight: 1, marginBottom: 24, opacity: 0.8 }}>03</div>
                <h3 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>Execute & Monitor</h3>
                <p style={{ fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  The Orchestrator executes the workflow, handling retries, circuit breakers, and human-in-the-loop approvals automatically.
                </p>
              </div>
              <div className="glass-card flex-1 w-full p-8" style={{ background: "rgba(0,0,0,0.85)", color: "white", fontFamily: "var(--font-mono)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 8 }}>
                    <span>Fetch Data</span> <span style={{ color: "var(--success)" }}>DONE</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 8 }}>
                    <span>Generate PDF</span> <span style={{ color: "var(--success)" }}>DONE</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Email User</span> <span style={{ color: "var(--success)" }}>DONE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-5 text-center relative" style={{ background: "var(--bg-secondary)" }}>
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 800, height: 1, background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 900, marginBottom: 32 }}>
            Ready to build the future?
          </h2>
          <p style={{ fontSize: "clamp(18px, 4vw, 24px)", color: "var(--text-secondary)", marginBottom: 48 }}>
            Join thousands of developers automating their workflows with AgentOS.
          </p>
          <Link href="/signup" className="btn btn-primary btn-lg" style={{ transform: "scale(1.1)" }}>
            Get Started for Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-16 pb-8 px-5" style={{ borderTop: "1px solid var(--border-primary)", background: "var(--bg-primary)" }}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12" style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="col-span-2 lg:col-span-1 mb-2 lg:mb-0">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 24, height: 24, borderRadius: "6px",
                background: "linear-gradient(135deg, var(--accent), var(--accent-pink))",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, fontWeight: 800, color: "white"
              }}>A</div>
              <span style={{ fontSize: 18, fontWeight: 800 }}>AgentOS</span>
            </div>
            <p style={{ color: "var(--text-tertiary)", fontSize: 14, lineHeight: 1.6 }}>
              The open-source autonomous workflow engine for the AI era.
            </p>
          </div>
          
          <div>
            <h2 style={{ fontWeight: 600, marginBottom: 16, fontSize: 15 }}>Product</h2>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12, color: "var(--text-secondary)", fontSize: 14 }}>
              <li><Link href="/features" className="hover:text-[var(--text-primary)] transition-colors">Features</Link></li>
              <li><Link href="/integrations" className="hover:text-[var(--text-primary)] transition-colors">Integrations</Link></li>
              <li><Link href="/pricing" className="hover:text-[var(--text-primary)] transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h2 style={{ fontWeight: 600, marginBottom: 16, fontSize: 15 }}>Resources</h2>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12, color: "var(--text-secondary)", fontSize: 14 }}>
              <li><Link href="/docs" className="hover:text-[var(--text-primary)] transition-colors">Documentation</Link></li>
              <li><Link href="/blog" className="hover:text-[var(--text-primary)] transition-colors">Blog</Link></li>
              <li><Link href="/community" className="hover:text-[var(--text-primary)] transition-colors">Community</Link></li>
            </ul>
          </div>
          
          <div className="col-span-2 lg:col-span-1">
            <h2 style={{ fontWeight: 600, marginBottom: 16, fontSize: 15 }}>Legal</h2>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12, color: "var(--text-secondary)", fontSize: 14 }}>
              <li><Link href="/privacy" className="hover:text-[var(--text-primary)] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[var(--text-primary)] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div style={{ maxWidth: 1200, margin: "48px auto 0", paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontSize: 13, color: "var(--text-tertiary)" }}>© 2026 AgentOS Inc. All rights reserved.</p>
          <div style={{ display: "flex", gap: 16, color: "var(--text-tertiary)" }}>
            <Link href="https://twitter.com/AgentOS" target="_blank" rel="noopener noreferrer" aria-label="AgentOS on Twitter" className="hover:text-[var(--text-primary)] transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </Link>
            <Link href="https://github.com/Ash1971-sys/Devpost_AgentOS" target="_blank" rel="noopener noreferrer" aria-label="AgentOS on GitHub" className="hover:text-[var(--text-primary)] transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </Link>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
