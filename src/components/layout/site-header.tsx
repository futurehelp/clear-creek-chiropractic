"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";
import { navigationLinks } from "@/lib/site-content";
import { buttonMotion, externalLinkProps } from "@/components/ui/motion-presets";

/** Responsive header with a motion-enabled mobile menu control. */
export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="logo" href="#home" aria-label="Clear Creek Chiropractic Center home">
        <Image src="/images/logo.png" width={281} height={144} alt="Clear Creek Chiropractic Center" />
      </a>

      <nav
        className={mobileOpen ? "open" : ""}
        aria-label="Main navigation"
        onClick={() => setMobileOpen(false)}
      >
        {navigationLinks.map((link) => (
          <a key={link.label} href={link.href} {...(link.external ? externalLinkProps : {})}>
            {link.label}
          </a>
        ))}
      </nav>

      <motion.a className="nav-button" href="#appointment" {...buttonMotion}>
        Book a visit <ArrowRight size={16} />
      </motion.a>

      <motion.button
        className="menu"
        type="button"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((isOpen) => !isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
      >
        <Menu />
      </motion.button>
    </header>
  );
}
