export interface QuoteSectionProps {
    quote: string;
    author: string;
    buttonText: string;
    backgroundColor?: string;
    textColor?: string;
}

export default function QuoteSection({ props }: { props: QuoteSectionProps }) {
    return (
        <section className="text-center py-12 px-4" style={{ backgroundColor: props.backgroundColor || '#f6f1ee', color: props.textColor || '#000' }}>
            <blockquote className="text-xl italic font-serif max-w-4xl mx-auto mb-6">
                “{props.quote}” — <span className="font-semibold">{props.author}</span>
            </blockquote>
            <button className="border px-6 py-3 text-sm uppercase hover:bg-black transition-all cursor-pointer" style={{ color: props.textColor || '#000', borderColor: props.textColor || '#000'}}>
                {props.buttonText}
            </button>
        </section>
    )
}