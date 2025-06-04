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
  {
    id: '2',
    title: 'Lập trình React cơ bản',
    description: 'Khóa học lập trình React từ cơ bản đến nâng cao.',
    date: '2025-07-01T10:00:00Z',
    price: 300000,
    location: 'Hà Nội',
    image: '',
  },
  {
    id: '3',
    title: 'Kỹ năng giao tiếp hiệu quả',
    description: 'Phát triển kỹ năng giao tiếp trong công việc.',
    date: '2025-08-20T14:00:00Z',
    price: 150000,
    location: 'Đà Nẵng',
    image: '',
  },
  {
    id: '4',
    title: 'Khóa học Python cơ bản',
    description: 'Học lập trình Python từ những kiến thức cơ bản.',
    date: '2025-09-10T11:00:00Z',
    price: 250000,
    location: 'Cần Thơ',
    image: '',
  },
  {
    id: '5',
    title: 'Thiết kế đồ họa với Adobe Illustrator',
    description: 'Khóa học thiết kế đồ họa chuyên nghiệp.',
    date: '2025-10-05T13:00:00Z',
    price: 180000,
    location: 'Nha Trang',
    image: '',
  },
];

export default function HomePage() {
  return (
    <main className="bg-muted dark:bg-zinc-950 text-gray-800 dark:text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 min-h-[200px]">
          {mockData.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </div>
      </div>
    </main>
  );
}