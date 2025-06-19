import Image from "next/image";
import { notFound } from "next/navigation";

import { Header } from "@/components/shared/Header";
import { properties } from "@/data/property";
interface PageProps {
    params: {
        slug: string;
    };
}

export default function SaleDetailPage({ params }: PageProps) {

    const property = properties.find((property) => property.slug === params.slug);

    console.log('sale detail page', property);

    if (!property) {
        return notFound();
    }

    return (
        <>
            <Header />
            <main className="bg-[#f6f1ee]">
                <section className="grid grid-cols-12">
                    <div className="col-span-8">
                        <div className="relative w-full min-h-[93vh]">
                            <Image
                                src={'/images/bg-sale-list.jpg'}
                                alt="hero_img"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                objectFit="cover"
                                priority
                            />
                        </div>
                        <div className="flex justify-end bg-[#f6f1ee]">
                            <div className="w-[70%] py-10">
                                <blockquote className="text-2xl italic font-serif max-w-4xl mb-6">
                                    “Elevated living spaces take in immersive views of the surrounding pastoral landscape”
                                </blockquote>

                                <p className="text-start">{property.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 h-full">
                        <div className="sticky top-40 flex justify-center">
                            <div className="flex flex-col items-start">
                                <h1 className="text-2xl">{property.name}</h1>
                                <h4 className="text-sm mb-5">{property.location}</h4>

                                <p className="text-sm">{property.price}</p>
                                <p className="text-sm mb-5">{property.type}</p>

                                <button className="bg-black text-sm text-white px-5 py-2 cursor-pointer hover:opacity-80 w-full">REQUEST VIEWING</button>
                                <button className="mt-3 mb-5 bg-black text-sm text-white px-5 py-2 cursor-pointer hover:opacity-80 w-full">REGISTER FOR SIMILAR HOMES</button>

                                <p className="">or call (+84) 364 392 404</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto grid grid-cols-2 gap-10 my-10">
                    {property.featuredImage.map((image, index) => (
                        <div key={index} className="relative w-full h-[50vh] aspect-[4/3]">
                            <Image
                                src={`/images/feature-img.jpg`}
                                alt={`property_image_${index}`}
                                fill
                                objectFit="cover"
                                quality={100}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    ))}
                </section>

                <section className="bg-black text-white relative">
                    <div
                        className="absolute -top-5 left-0 w-full h-16 bg-[#f6f1ee]"
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)',
                            zIndex: 10,
                            width: '100.1%'
                        }}
                    />
                    <div className="py-16">
                        <h1 className="text-center text-2xl">Interested? Let's talk.</h1>

                        <div className="mt-5 flex justify-center gap-16">
                            <p className="text-xs border-b border-white py-2">(+84) 364 394 404</p>
                            <p className="text-xs border-b border-white py-2">EMAIL US</p>
                            <p className="text-xs border-b border-white py-2">REQUEST VIEWING</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
} 