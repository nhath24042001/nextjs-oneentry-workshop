import { Workshop } from '@/typings';

export function WorkshopCard({ workshop }: { workshop: Workshop }) {
  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-xl font-bold">{workshop.title}</h2>
      <p>{workshop.description}</p>
      <p className="text-sm text-gray-500">📍 {workshop.location}</p>
      <p className="text-sm">🕒 {new Date(workshop.date).toLocaleString()}</p>
      <p className="font-semibold text-blue-600">💰 {workshop.price} VND</p>
    </div>
  );
}