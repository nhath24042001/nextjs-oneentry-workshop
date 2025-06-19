import PropertyCard from "./PropertyCard";
import Reveal from "./Reveal";

import { defineOneEntry } from 'oneentry';

const { Products } = defineOneEntry(process.env.NEXT_PUBLIC_ONEENTRY_DOMAIN as string, { token: process.env.NEXT_PUBLIC_ONEENTRY_TOKEN })


export default async function FeaturedProperty() {
    const productList = (await Products.getProducts()).items;
    const formatProduct = productList.map((product) => {
        return {
            id: product.id,
            slug: product.attributeValues.slug.value,
            name: product.attributeValues.name.value,
            description: product.attributeValues.description.value,
            price: product.attributeValues.price.value,
            image: product.attributeValues.image.value.downloadLink,
            location: product.attributeValues.location.value,
            type: product.attributeValues.type.value,
            featuredimage: product.attributeValues.featuredimage.value.map((image) => image.downloadLink),
        };
    })

    return (
        <Reveal>
            <section className="relative bg-[#f6f1ee]">
                <div
                    className="absolute top-0 left-0 w-full h-16 bg-white"
                    style={{
                        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 80%)',
                    }}
                />

                <div className="relative z-10 px-8 py-20">
                    <div className="flex justify-between items-center mb-8">
                        <div></div>
                        <h2 className="text-lg tracking-wide uppercase">Featured Sales</h2>
                        <button className="border border-black px-4 py-2 text-sm uppercase hover:bg-black hover:text-white transition-all">
                            View all sales
                        </button>
                    </div>

                    <div className="mx-auto container">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {formatProduct.map((property) => (
                                <PropertyCard key={property.id} property={property} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Reveal>
    )
}