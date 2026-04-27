import {
  BrandsStrip,
  CommunitySection,
  CtaSection,
  FeaturesSection,
  HomeHero,
  PageRevealEffects,
  StepsSection,
  TestimonialsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <PageRevealEffects />
      <HomeHero />
      <BrandsStrip />
      <StepsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CommunitySection />
      <CtaSection />
    </main>
  );
}
