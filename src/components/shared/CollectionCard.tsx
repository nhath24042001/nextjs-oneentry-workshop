import { IProperty } from "@/typings";

export default function CollectionCard({ property }: { property: Partial<IProperty> }) {
    return (
        <div className="group overflow-hidden cursor-pointer">
            <div className="aspect-[4/3] overflow-hidden">
                <img src={property.image} alt={property.image} className="object-cover w-full h-full" />
            </div>
            <h3 className="mt-2 text-sm text-center">{property.name}</h3>
        </div >
    )
}