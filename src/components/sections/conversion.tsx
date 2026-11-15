"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import { locations } from "@/lib/site-content";
import { ArrowLink } from "@/components/ui/arrow-link";
import { buttonMotion, externalLinkProps } from "@/components/ui/motion-presets";

/** Location cards generate their map links from the shared location model. */
export function LocationsSection() {
  return (
    <section className="locations" id="locations">
      <div className="kicker">A LOCATION THAT WORKS FOR YOU</div>
      <h2>Care close<br /><em>to home.</em></h2>
      <p>Three convenient locations in Greater Houston. Find the office that fits your day.</p>
      <div className="location-grid">
        {locations.map((location) => (
          <div className="location" key={location.name}>
            <span>{location.number}</span>
            <h3>{location.name}</h3>
            <p>{location.address}<br />{location.city}</p>
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapsQuery)}`} {...externalLinkProps}>
              Directions ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Presentation-only appointment form until a booking endpoint is selected. */
export function AppointmentSection() {
  return (
    <section className="appointment" id="appointment">
      <div className="appointment-copy">
        <div className="kicker">READY WHEN YOU ARE</div>
        <h2>Let&apos;s get<br /><em>you moving.</em></h2>
        <p>Tell us where and when you&apos;d like to come in. We&apos;ll reach out to confirm your visit.</p>
        <div className="talk">
          <span>Prefer to talk?</span>
          <a href="tel:+12815254130"><Phone size={15} /> (281) 525-4130 ↗</a>
        </div>
      </div>

      <div className="appointment-side">
        <Image src="/images/appointment-original.jpg" width={2496} height={1216} alt="Movement and rehabilitation at Clear Creek" />
        <div className="form-title">Appointment request <span>We&apos;ll be in touch to confirm</span></div>
        <form onSubmit={(event) => event.preventDefault()}>
          <label>Full name *<input placeholder="Your full name" /></label>
          <label>Phone number *<input placeholder="(281) 555-0000" /></label>
          <label>Email address *<input placeholder="you@example.com" /></label>
          <label>
            Preferred location *
            <select defaultValue="">
              <option value="" disabled>Select a clinic</option>
              <option>League City</option>
              <option>Sharpstown</option>
              <option>Channelview</option>
            </select>
          </label>
          <label>Preferred date *<input type="date" /></label>
          <label>
            Preferred time *
            <select defaultValue="">
              <option value="" disabled>Select a time</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>First available</option>
            </select>
          </label>
          <label className="consent">
            <input type="checkbox" /> I understand this is a request, not a confirmed appointment, and the clinic may contact me using the details provided.
          </label>
          <small>Please do not include symptoms, diagnoses, or other medical information. The clinic will confirm available times directly.</small>
          <motion.button className="button purple" type="submit" {...buttonMotion}>
            Send appointment request <ArrowRight size={16} />
          </motion.button>
        </form>
      </div>
    </section>
  );
}

/** Dedicated referral CTA for legal professionals. */
export function AttorneysSection() {
  return (
    <section className="attorneys" id="attorneys">
      <div className="kicker">FOR LEGAL PROFESSIONALS</div>
      <div>
        <h2>Need to coordinate a<br /><em>client referral?</em></h2>
        <p>Attorneys and law firm staff can reach our team through a dedicated, straightforward referral inquiry.</p>
      </div>
      <ArrowLink href="mailto:info@clearcreekchiro.com">Attorney referral inquiries</ArrowLink>
    </section>
  );
}

/** Final high-intent CTA before the footer. */
export function FinalCtaSection() {
  return (
    <section className="final-cta">
      <div className="kicker">LET&apos;S GET MOVING</div>
      <h2>Make room for more<br /><em>good days.</em></h2>
      <p>We&apos;re here to help you take that first step.</p>
      <div>
        <motion.a className="button purple" href="#appointment" {...buttonMotion}>
          Request a visit <ArrowRight size={16} />
        </motion.a>
        <ArrowLink href="tel:+12815254130">Call the clinic <Phone size={15} /></ArrowLink>
      </div>
    </section>
  );
}
