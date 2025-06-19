import Image from "next/image"

import Reveal from "./Reveal"
import CollectionCard from "./CollectionCard"

const featuredCollection = [
    {
        name: 'Prime London Homes',
        image: 'https://images.unsplash.com/photo-1510265119258-db115b0e8172?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fExvbmRvbiUyMGhvdXNlfGVufDB8fDB8fHww'
    },
    {
        name: 'Period Conversations',
        image: 'https://images.unsplash.com/photo-1463741408080-b210ee5227dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fExvbmRvbiUyMGhvdXNlfGVufDB8fDB8fHww'
    },
    {
        name: 'Family Homes',
        image: 'https://images.unsplash.com/photo-1617986482110-c605b4bfffb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fExvbmRvbiUyMGhvdXNlfGVufDB8fDB8fHww'
    },
    {
        name: 'London Houses with Gardens',
        image: 'https://images.unsplash.com/photo-1732299871793-c967ebab2d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fExvbmRvbiUyMGhvdXNlfGVufDB8fDB8fHww'
    },
    {
        name: 'Contemporary Homes',
        image: 'https://images.unsplash.com/photo-1646939495131-2a3a48c5ec1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fExvbmRvbiUyMGhvdXNlfGVufDB8fDB8fHww'
    },
    {
        name: 'Sustainable Homes',
        image: 'https://images.unsplash.com/photo-1610957548662-78a50f1e2348?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fExvbmRvbiUyMGhvdXNlfGVufDB8fDB8fHww'
    }
]

export default function FeaturedCollection() {
    return (
        <Reveal>
            <section className="relative ">
                <div className="relative z-10 px-8 py-16">
                    <div className="flex justify-between items-center mb-8">
                        <div></div>
                        <h2 className="text-lg tracking-wide uppercase">Featured Collections</h2>
                        <button className="border border-black px-4 py-2 text-sm uppercase hover:bg-black hover:text-white transition-all">
                            View all collections
                        </button>
                    </div>

                    <div className="grid grid-cols-2">
                        <div className="bg-[#f6f1ee] flex flex-col items-center justify-center h-full w-full">
                            <div className="flex flex-col justify-between items-center h-70 w-full py-5">
                                <h6 className="text-xs border-b border-black py-1">FEATURED COLLECTION</h6>
                                <h1 className="text-2xl">London Homes with Gardens</h1>
                                <button className="border border-black px-4 py-2 text-sm uppercase hover:bg-black hover:text-white transition-all cursor-pointer">
                                    View all sales
                                </button>
                            </div>

                            <div className="relative w-full h-full">
                                <div
                                    className="absolute -top-1 left-0 w-full h-16 bg-[#f6f1ee]"
                                    style={{
                                        clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)',
                                        zIndex: 10,
                                        width: '100.1%'
                                    }}
                                />

                                <Image
                                    src={'/images/bg-feature-collection.jpg'}
                                    fill
                                    className="object-cover"
                                    alt="feature_collection_img" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-5 px-5">
                            {featuredCollection.map((collection, index) => (
                                <CollectionCard key={index} property={collection} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Reveal>
    )
}