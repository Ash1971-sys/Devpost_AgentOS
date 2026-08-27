"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PublicNavbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let currentLastScrollY = 0;
    
    // Defer initial read to avoid Forced Reflow on mount
    requestAnimationFrame(() => {
      currentLastScrollY = window.scrollY;
    });
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > currentLastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      currentLastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/docs", label: "Docs" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <header className="navbar-public" style={{
        padding: "20px clamp(16px, 5vw, 40px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid var(--border-primary)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        position: "sticky", 
        top: 0, 
        zIndex: 100,
        transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }} aria-label="AgentOS Home">
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 32, height: 32, borderRadius: "8px",
              background: "linear-gradient(135deg, var(--accent), var(--accent-pink))",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16, fontWeight: 800, color: "white",
              boxShadow: "0 0 15px rgba(236, 72, 153, 0.4)"
            }}>
              A
            </div>
            <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.5px" }} className="gradient-text">
              AgentOS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <nav style={{ display: "flex", gap: 32, fontSize: 14, fontWeight: 600, color: "var(--text-secondary)" }}>
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="hover:text-[var(--text-primary)] transition-colors whitespace-nowrap"
                style={{ color: pathname === link.href ? "var(--text-primary)" : "var(--text-secondary)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div style={{ display: "flex", gap: 16 }}>
            <Link href="/login" className="btn btn-ghost whitespace-nowrap">Sign In</Link>
            <Link href="/get-started" className="btn btn-primary whitespace-nowrap">Get Started</Link>
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-[110]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          style={{ gap: 6 }}
        >
          <span style={{ width: 24, height: 2, background: "var(--text-primary)", borderRadius: 2, transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out", transform: isMobileMenuOpen ? 'translateY(8px) rotate(45deg)' : 'none' }}></span>
          <span style={{ width: 24, height: 2, background: "var(--text-primary)", borderRadius: 2, transition: "opacity 0.3s ease-in-out", opacity: isMobileMenuOpen ? 0 : 1 }}></span>
          <span style={{ width: 24, height: 2, background: "var(--text-primary)", borderRadius: 2, transition: "transform 0.3s ease-in-out", transform: isMobileMenuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none' }}></span>
        </button>
      </header>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden fixed inset-0 top-[73px] z-[90] glass-card transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'}`}
        style={{ 
          position: "fixed",
          background: "var(--bg-card)",
          backdropFilter: "blur(40px)",
          border: "none",
          borderTop: "1px solid var(--border-primary)",
          borderRadius: "0 0 16px 16px",
          height: "calc(100vh - 73px)",
          overflowY: "auto",
          padding: "24px"
        }}
      >
        <nav style={{ display: "flex", flexDirection: "column", gap: 24, fontSize: 18, fontWeight: 600 }}>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="transition-colors border-b border-[var(--border-primary)] pb-4"
              style={{ color: pathname === link.href ? "var(--text-primary)" : "var(--text-secondary)" }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 16 }}>
            <Link href="/login" className="btn btn-ghost" style={{ justifyContent: "center" }}>Sign In</Link>
            <Link href="/get-started" className="btn btn-primary" style={{ justifyContent: "center" }}>Get Started for Free</Link>
          </div>
        </nav>
      </div>
    </>
  );
}
