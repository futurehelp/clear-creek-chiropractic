import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { TopLine } from "@/components/layout/top-line";
import {
  AppointmentSection,
  AttorneysSection,
  FinalCtaSection,
  LocationsSection,
} from "@/components/sections/conversion";
import {
  ReviewsSection,
  StepsSection,
  TeamCardsSection,
  TeamStorySection,
} from "@/components/sections/experience";
import {
  HeroSection,
  IntroSection,
  TreatmentsSection,
} from "@/components/sections/primary";

/** Top-level composition for the single-page marketing site. */
export function SitePage() {
  return (
    <main>
      <TopLine />
      <SiteHeader />
      <HeroSection />
      <IntroSection />
      <TreatmentsSection />
      <TeamStorySection />
      <StepsSection />
      <ReviewsSection />
      <TeamCardsSection />
      <LocationsSection />
      <AppointmentSection />
      <AttorneysSection />
      <FinalCtaSection />
      <SiteFooter />
    </main>
  );
}
