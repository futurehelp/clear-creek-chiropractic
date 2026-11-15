import Image from "next/image";
import { locations, navigationLinks } from "@/lib/site-content";
import { externalLinkProps } from "@/components/ui/motion-presets";

/** Footer content is data-driven so it stays aligned with the header navigation. */
export function SiteFooter() {
  return (
    <footer>
      <div className="footer-brand">
        <Image src="/images/logo.png" width={281} height={144} alt="Clear Creek Chiropractic Center" />
        <p>Thoughtful chiropractic care.<br />A friendlier way forward.</p>
        <a href="tel:+12815254130">(281) 525-4130 ↗</a>
        <a href="mailto:info@clearcreekchiro.com">info@clearcreekchiro.com</a>
      </div>

      <div>
        <div className="footer-kicker">EXPLORE</div>
        {navigationLinks.map((link) => (
          <a key={link.label} href={link.href} {...(link.external ? externalLinkProps : {})}>
            {link.label}
          </a>
        ))}
      </div>

      <div>
        <div className="footer-kicker">VISIT US</div>
        {locations.map((location) => (
          <a key={location.name} href="#locations">
            <b>{location.name}</b><br />
            {location.address}<br />
            {location.city}
          </a>
        ))}
      </div>

      <div>
        <div className="footer-kicker">GENERAL HOURS</div>
        <p><b>Mon–Thu</b><br />8:00 AM–6:00 PM</p>
        <p><b>Friday</b><br />8:00 AM–12:00 PM</p>
        <p><b>Sat–Sun</b><br />Closed</p>
        <small>Hours may vary by location. Please call to confirm.</small>
      </div>

      <div className="copyright">© 2026 Clear Creek Chiropractic Center · Care designed around you.</div>
    </footer>
  );
}
