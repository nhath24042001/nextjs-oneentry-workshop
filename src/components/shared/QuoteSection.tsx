'use client'
import { useState } from "react";

import { QuoteSectionProps } from "@/typings";
import Reveal from "./Reveal";

export default function QuoteSection({ props }: { props: QuoteSectionProps }) {
    const [isHovering, setIsHovering] = useState(false);

    const bgColor = props.backgroundColor || "#f6f1ee";
    const textColor = props.textColor || "#000";
    return (
        <Reveal>
            <section
                className="text-center py-12 px-4 relative"
                style={{ backgroundColor: bgColor, color: textColor }}
            >
                <blockquote className="text-xl italic font-serif max-w-4xl mx-auto mb-6">
                    “{props.quote}” —{" "}
                    <span className="font-semibold">{props.author}</span>
                </blockquote>
                <button
                    className="border px-6 py-3 text-sm uppercase transition-all cursor-pointer"
                    style={{
                        color: isHovering ? bgColor : textColor,
                        backgroundColor: isHovering ? textColor : "transparent",
                        borderColor: textColor,
                    }}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {props.buttonText}
                </button>
            </section>
        </Reveal>
    )
}