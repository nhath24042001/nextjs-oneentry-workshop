import FeaturedProperty from "@/components/shared/FeaturedProperty";
import { Header } from "@/components/shared/Header";
import HeroSection from "@/components/shared/Hero";
import QuoteSection from "@/components/shared/QuoteSection";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <QuoteSection />
        <FeaturedProperty />
      </main>
    </>
  )
}
