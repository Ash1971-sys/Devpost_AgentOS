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
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
        padding: "20px 40px",
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
        <Link href="/" style={{ textDecoration: "none" }}>
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

        {/* Desktop & Mobile Navigation */}
        <div className="navbar-public-links hide-scrollbar" style={{ display: "flex", gap: 32, alignItems: "center", overflowX: "auto" }}>
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
      </header>
    </>
  );
}
