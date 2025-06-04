export interface Workshop {
  id: string;
  title: string;
  description: string;
  date: string;
  price: number;
  location: string;
  image: string;
}

export interface Registration {
  id: string;
  user: string;
  workshop: string;
  paid: boolean;
  payment_id: string;
}
