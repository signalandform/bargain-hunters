import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LocationSection } from "@/components/LocationSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { SocialSection } from "@/components/SocialSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <LocationSection />
        <ReviewsSection />
        <SocialSection />
      </main>
      <SiteFooter />
    </div>
  );
}
