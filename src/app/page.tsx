import FeaturedCollection from "@/components/shared/FeaturedColection";
import FeaturedProperty from "@/components/shared/FeaturedProperty";
import { Header } from "@/components/shared/Header";
import HeroSection from "@/components/shared/Hero";
import QuoteSection from "@/components/shared/QuoteSection";
import { QuoteSectionProps } from "@/typings";

const firstQuote: QuoteSectionProps = {
  quote: "An estate agency like no other, The Modern House sells the most incredible design-led homes in urban and rural locations in the UK”",
  author: "Evening Standard",
  buttonText: "Get a Free Market Appraisal",
  backgroundColor: "#FFF",
  textColor: "#000",
}

const secondQuote: QuoteSectionProps = {
  quote: "One of the 100 Best Things in the World",
  author: "GQ",
  buttonText: "How much is my home worth?",
  backgroundColor: "#000",
  textColor: "#FFF",
}

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <QuoteSection props={firstQuote} />
        <FeaturedProperty />
        <QuoteSection props={secondQuote} />
        <FeaturedCollection />
      </main>
    </>
  )
}
