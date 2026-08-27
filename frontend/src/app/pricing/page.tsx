"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";
import PublicNavbar from "@/components/PublicNavbar";

function TiltCard({ children, className, style }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Subtler 5-degree tilt for a smoother, less aggressive feel
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    
    setTilt(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt("");
  };

  const baseTransform = style?.transform || "";
  const innerStyle = { ...style };
  delete innerStyle.transform;

  return (
    <div 
      style={{
        transform: isHovered ? `${baseTransform} translateY(-12px)` : baseTransform,
        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        perspective: "1200px",
        zIndex: isHovered ? 10 : style?.zIndex,
        height: "100%"
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div 
        ref={cardRef}
        className={className}
        style={{
          ...innerStyle,
          transform: isHovered ? tilt : "rotateX(0deg) rotateY(0deg)",
          transition: isHovered 
            ? "transform 0.1s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.5s" 
            : "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: isHovered ? "0 25px 50px rgba(236, 72, 153, 0.25)" : style?.boxShadow,
          height: "100%",
          margin: 0
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="mesh-gradient">
      <PublicNavbar />

      <main className="py-12 px-4 md:py-20 md:px-8">
        <div style={{ maxWidth: 1200, margin: "0 auto", paddingBottom: 80 }}>
          <div style={{ textAlign: "center", marginBottom: 80, marginTop: 40 }}>

            <h1 className="animate-fade-in-up" style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 900, marginBottom: 24, color: "var(--text-primary)" }}>
              Simple, transparent pricing.
            </h1>
            <p className="animate-fade-in-up" style={{ fontSize: 20, color: "var(--text-secondary)", animationDelay: "0.1s" }}>
              Start for free, upgrade when you need more power.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32, alignItems: "stretch" }}>
            
            {/* Starter Plan */}
            <TiltCard className="glass-card pricing-card animate-fade-in-up" style={{ padding: 40, animationDelay: "0.2s", display: "flex", flexDirection: "column" }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8 }}>Starter</h2>
              <p style={{ color: "var(--text-secondary)", marginBottom: 24 }}>Perfect for individuals exploring automation.</p>
              <div style={{ fontSize: 48, fontWeight: 800, marginBottom: 24 }}>₹299<span style={{ fontSize: 16, color: "var(--text-tertiary)", fontWeight: 400 }}>/mo</span></div>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: 32, display: "flex", flexDirection: "column", gap: 12, flex: 1, fontWeight: 500, WebkitFontSmoothing: "antialiased" }}>
                <li style={{ display: "flex", gap: 8 }}><span style={{ color: "var(--success)" }}>✓</span> 100 Workflow runs/mo</li>
                <li style={{ display: "flex", gap: 8 }}><span style={{ color: "var(--success)" }}>✓</span> 5 Custom MCPs</li>
                <li style={{ display: "flex", gap: 8 }}><span style={{ color: "var(--success)" }}>✓</span> Community Support</li>
              </ul>
              <Link href="/signup" className="btn btn-secondary" style={{ width: "100%", marginTop: "auto" }}>Get Started</Link>
            </TiltCard>

            {/* Pro Plan */}
            <TiltCard className="glass-card pricing-card animate-fade-in-up" style={{ padding: 40, border: "2px solid var(--accent)", position: "relative", animationDelay: "0.3s", boxShadow: "0 20px 40px rgba(216, 133, 143, 0.15)", overflow: "visible", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "var(--accent)", color: "#5c1621", padding: "4px 16px", borderRadius: 100, fontSize: 12, fontWeight: 800, letterSpacing: 1 }}>
                MOST POPULAR
              </div>
              <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8 }}>Professional</h2>
              <p style={{ color: "var(--text-secondary)", marginBottom: 24 }}>For teams building production AI workflows.</p>
              <div style={{ fontSize: 48, fontWeight: 800, marginBottom: 24, color: "var(--accent)" }}>₹899<span style={{ fontSize: 16, color: "var(--text-tertiary)", fontWeight: 400 }}>/mo</span></div>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: 32, display: "flex", flexDirection: "column", gap: 12, flex: 1, fontWeight: 500, WebkitFontSmoothing: "antialiased" }}>
                <li style={{ display: "flex", gap: 8 }}><span style={{ color: "var(--success)" }}>✓</span> Unlimited Workflow runs</li>
                <li style={{ display: "flex", gap: 8 }}><span style={{ color: "var(--success)" }}>✓</span> Unlimited Custom MCPs</li>
                <li style={{ display: "flex", gap: 8 }}><span style={{ color: "var(--success)" }}>✓</span> GPT-4o & Claude 3.5 Sonnet Support</li>
                <li style={{ display: "flex", gap: 8 }}><span style={{ color: "var(--success)" }}>✓</span> Priority Email Support</li>
              </ul>
              <Link href="/signup" className="btn btn-primary" style={{ width: "100%", marginTop: "auto" }}>Upgrade to Pro</Link>
            </TiltCard>

            {/* Enterprise Plan */}
            <TiltCard className="glass-card pricing-card animate-fade-in-up" style={{ padding: 40, animationDelay: "0.4s", display: "flex", flexDirection: "column" }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8 }}>Enterprise</h2>
              <p style={{ color: "var(--text-secondary)", marginBottom: 24 }}>Custom solutions for large organizations.</p>
              <div style={{ fontSize: 48, fontWeight: 800, marginBottom: 24 }}>₹1199<span style={{ fontSize: 16, color: "var(--text-tertiary)", fontWeight: 400 }}>/mo</span></div>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: 32, display: "flex", flexDirection: "column", gap: 12, flex: 1, fontWeight: 500, WebkitFontSmoothing: "antialiased" }}>
                <li style={{ display: "flex", gap: 8 }}><span style={{ color: "var(--success)" }}>✓</span> Dedicated Infrastructure</li>
                <li style={{ display: "flex", gap: 8 }}><span style={{ color: "var(--success)" }}>✓</span> VPC Peering & SOC2 Compliance</li>
                <li style={{ display: "flex", gap: 8 }}><span style={{ color: "var(--success)" }}>✓</span> Dedicated Success Manager</li>
                <li style={{ display: "flex", gap: 8 }}><span style={{ color: "var(--success)" }}>✓</span> 99.99% Uptime SLA</li>
              </ul>
              <Link href="/contact" className="btn btn-secondary" style={{ width: "100%", marginTop: "auto" }}>Contact Sales</Link>
            </TiltCard>

          </div>
        </div>
      </main>
    </div>
  );
}
