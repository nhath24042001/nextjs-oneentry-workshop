import { IProperty } from "@/typings";

export default function PropertyCard({ property }: { property: IProperty }) {
    return (
        <div className="group overflow-hidden cursor-pointer">
            <div className="aspect-[4/3] overflow-hidden">
                <img src={property.image} alt={property.image} className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
            </div>
            <div className="mt-2">
                <div className="flex justify-between items-start">
                    <h3 className="text-md font-medium">{property.name}</h3>
                    <p className="text-sm font-semibold">{property.price}</p>
                </div>
                <div className="flex justify-between items-start">
                    <p className="text-sm text-gray-500">{property.location}</p>
                    <p className="text-sm text-gray-500">{property.type}</p>
                </div>
            </div>
        </div>
    )
}