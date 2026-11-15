"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { treatments } from "@/lib/site-content";
import { ArrowLink } from "@/components/ui/arrow-link";
import { buttonMotion, cardMotion } from "@/components/ui/motion-presets";

/** Hero section: the primary conversion area and visual anchor. */
export function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <div className="eyebrow"><i />CHIROPRACTIC CARE, MADE PERSONAL</div>
        <h1>More<br />movement.<br /><em>More life.</em><sup>✳</sup></h1>
        <p>Feel supported, heard, and ready to move forward. Individualized chiropractic and rehabilitation care right here in Greater Houston.</p>
        <div className="actions">
          <motion.a className="button purple" href="#appointment" {...buttonMotion}>
            Request an appointment <ArrowRight size={17} />
          </motion.a>
          <ArrowLink href="#treatments">Explore treatments</ArrowLink>
        </div>
      </div>

      <div className="hero-art">
        <div className="hero-ribbon" />
        <Image className="hero-main-image" src="/images/hero-original.jpg" width={1500} height={1000} alt="Chiropractor assisting a patient at Clear Creek Chiropractic Center" />
        <Image className="hero-inset" src="/images/clinic-original.jpg" width={1788} height={2560} alt="Inside Clear Creek Chiropractic Center" />
        <div className="hero-badge">YOUR<br /><b>HEALTH,</b><br />YOUR<br />PACE. <span>↗</span></div>
        <div className="hero-note"><span>✳</span><span>+</span><span>✦</span> Patient-first care in <b>three local communities</b></div>
      </div>

      <div className="hero-foot">
        <span>Here for your everyday movement</span>
        <span>SCROLL TO DISCOVER YOUR OPTIONS ↓</span>
        <span>Serving League City • Sharpstown • Channelview</span>
      </div>
    </section>
  );
}

/** Short positioning statement introducing the practice's care philosophy. */
export function IntroSection() {
  return (
    <section className="intro" id="story">
      <div className="intro-mark">✳</div>
      <div>
        <p>Care should feel <em>human.</em> Our approach starts with listening to what matters to you, then exploring the care that fits.</p>
        <ArrowLink href="#team">A little about us</ArrowLink>
      </div>
    </section>
  );
}

/** Treatment cards share one data-driven renderer instead of repeated JSX. */
export function TreatmentsSection() {
  return (
    <section className="treatments" id="treatments">
      <div className="section-head">
        <div>
          <div className="kicker">WHAT WE CAN HELP WITH</div>
          <h2>Every body is different.<br /><em>So is our care.</em></h2>
        </div>
        <p>From everyday discomfort to injury-focused rehabilitation, discover how our team approaches movement and wellbeing.</p>
      </div>

      <div className="treatment-grid">
        {treatments.map((treatment) => (
          <motion.a className="treatment" href="#appointment" key={treatment.title} {...cardMotion}>
            <span>{treatment.number}</span>
            <div className="treatment-art">
              <motion.img src={treatment.image} alt="" whileHover={{ scale: 1.08 }} transition={{ duration: 0.45 }} />
            </div>
            <h3>{treatment.title}</h3>
            <p>{treatment.description}</p>
            <ArrowRight size={17} />
          </motion.a>
        ))}
      </div>

      <ArrowLink href="#treatments">Discover all treatments</ArrowLink>
    </section>
  );
}
