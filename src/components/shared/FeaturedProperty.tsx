import { properties } from "@/data/property";
import PropertyCard from "./PropertyCard";

export default function FeaturedProperty() {
    return (
        <section className="relative bg-[#f6f1ee]">
            {/* !TODO:  */}
            {/* <div
                className="absolute top-0 left-0 w-full h-16 bg-white"
                style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0% 100%)',
                }}
            /> */}

            <div className="relative z-10 px-8 py-16">
                <div className="flex justify-between items-center mb-8">
                    <div></div>
                    <h2 className="text-lg tracking-wide uppercase">Featured Sales</h2>
                    <button className="border border-black px-4 py-2 text-sm uppercase hover:bg-black hover:text-white transition-all">
                        View all sales
                    </button>
                </div>

                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {properties.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}