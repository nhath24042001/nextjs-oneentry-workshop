import { WorkshopCard } from '@/components/shared/WorkshopCard'
import { Workshop } from '@/typings';

const mockData: Workshop[] = [
  {
    id: '1',
    title: 'Thiết kế UI với Figma',
    description: 'Hướng dẫn tạo UI chuyên nghiệp.',
    date: '2025-06-15T09:00:00Z',
    price: 200000,
    location: 'TP. HCM',
    image: '',
  },
];

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {mockData.map((workshop) => (
        <WorkshopCard key={workshop.id} workshop={workshop} />
      ))}
    </div>
  );
}