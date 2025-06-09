import Reveal from "./Reveal";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="h-[93vh] grid grid-cols-10">
            <div className="col-span-7 relative">
                <Image
                    src={'/images/bg-hero.jpg'}
                    alt="hero_img"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="col-span-3 flex items-center justify-center bg-stone-100 px-10">
                <Reveal>
                    <h5 className="border-black border-b-2 w-fit mb-3 text-sm">Today at the Modern House</h5>
                    <h1 className="text-3xl font-semibold">Villa Verde: an elegant Edwardian villa on leafy Wolseley Road, perfectly poised between Highgate and Crouch End, north London</h1>
                    <button className="mt-3 border border-black px-3 py-2 text-xs cursor-pointer hover:bg-black hover:text-white transition-all duration-500">VIEW SALES LISTING</button>
                </Reveal>
            </div>
        </section>
    );
}