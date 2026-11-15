"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { reviews, teamMembers } from "@/lib/site-content";
import { ArrowLink } from "@/components/ui/arrow-link";
import { cardMotion } from "@/components/ui/motion-presets";

/** Story section combines the image collage with the care principles. */
export function TeamStorySection() {
  return (
    <section className="split" id="team">
      <div className="split-images">
        <Image src="/images/treatment-original.jpg" width={1024} height={700} alt="Chiropractic treatment at Clear Creek" />
        <Image src="/images/sports-original.jpg" width={615} height={270} alt="Sports and movement care" />
        <div className="experience">10+<span>YEARS OF<br /><b>EXPERIENCE</b></span></div>
      </div>
      <div className="split-copy">
        <div className="kicker">A FRIENDLIER KIND OF CARE</div>
        <h2>Real people.<br />Real conversations.<br /><em>Real attention.</em></h2>
        <p>At Clear Creek Chiropractic Center, we believe your goals deserve to be heard. Led by Dr. Louie Robinson, our team takes time to understand what you&apos;re working toward and discuss your options.</p>
        <ul>
          <li><Check size={15} />Care that starts with listening</li>
          <li><Check size={15} />Individual treatment plans</li>
          <li><Check size={15} />Nonsurgical care options</li>
        </ul>
        <ArrowLink href="#team-cards">Meet our team</ArrowLink>
      </div>
    </section>
  );
}

/** Three-step explainer for new patients. */
export function StepsSection() {
  const steps = [
    ["01 ↗", "Reach out", "Send an appointment request or call the clinic that works for you."],
    ["02 ↗", "We’ll connect", "Our team will confirm availability and answer your questions."],
    ["03 ✳", "Let’s make a plan", "Discuss your goals and explore appropriate care together."],
  ] as const;

  return (
    <section className="steps">
      <div className="kicker">FIRST VISIT? YOU&apos;RE IN THE RIGHT PLACE</div>
      <h2>Getting started<br /><em>is simple.</em></h2>
      <div className="step-grid">
        {steps.map(([number, title, description]) => (
          <div key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Testimonial carousel with motion-enabled previous/next controls. */
export function ReviewsSection() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const review = reviews[reviewIndex];

  return (
    <section className="reviews" id="reviews">
      <div className="kicker">KIND WORDS FROM PATIENTS</div>
      <h2>Good care makes<br /><em>a difference.</em></h2>
      <p>A few experiences shared by patients who visited Clear Creek.</p>
      <ArrowLink href="#reviews">See more patient stories</ArrowLink>
      <div className="quote-mark">“</div>
      <blockquote>“{review.quote}”</blockquote>
      <div className="review-by">— {review.author}</div>
      <div className="review-controls">
        <span>0{reviewIndex + 1} / 04</span>
        <div>
          <motion.button type="button" aria-label="Previous testimonial" onClick={() => setReviewIndex((current) => (current + reviews.length - 1) % reviews.length)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ArrowLeft size={16} />
          </motion.button>
          <motion.button type="button" aria-label="Next testimonial" onClick={() => setReviewIndex((current) => (current + 1) % reviews.length)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ArrowRight size={16} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}

/** Rounded team cards preserve the original portraits and card hierarchy. */
export function TeamCardsSection() {
  return (
    <section className="team-section" id="team-cards">
      <div className="kicker">GET TO KNOW THE TEAM</div>
      <h2>Friendly faces.<br /><em>Focused care.</em></h2>
      <p>A team rooted in the communities we serve.</p>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <motion.a href="#appointment" key={member.name} {...cardMotion}>
            <motion.img src={member.image} alt={member.imageAlt} whileHover={{ scale: 1.05 }} transition={{ duration: 0.45 }} />
            <div className="team-card-copy">
              <strong>{member.name}</strong>
              <span>{member.role}</span>
              <i className="team-arrow">↗</i>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
