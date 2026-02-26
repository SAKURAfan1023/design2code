import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogoWallSection from "@/components/LogoWallSection";
import IntroductionSection from "@/components/IntroductionSection";
import IndustryHighlightsSection from "@/components/IndustryHighlightsSection";
import UseCasesSection from "@/components/UseCasesSection";
import DeploymentSection from "@/components/DeploymentSection";
import FinalCTASection from "@/components/FinalCTASection";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-white">
      <Header />
      <HeroSection />
      <LogoWallSection />
      <IntroductionSection />
      <IndustryHighlightsSection />
      <UseCasesSection />
      <DeploymentSection />
      <FinalCTASection />
    </main>
  );
}
