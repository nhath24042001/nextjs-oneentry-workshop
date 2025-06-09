export default function QuoteSection() {
    return (
        <section className="text-center py-12 px-4 bg-white">
            <blockquote className="text-xl italic font-serif max-w-4xl mx-auto mb-6">
                “An estate agency like no other, The Modern House sells the most incredible design-led homes in urban and rural locations in the UK” — <span className="font-semibold">Evening Standard</span>
            </blockquote>
            <button className="border border-black px-6 py-3 text-sm uppercase hover:bg-black hover:text-white transition-all">
                Get a Free Market Appraisal
            </button>
        </section>
    )
}