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

export interface FormField {
  type: string;
  marker: string;
  isLogin: boolean;
  isSignUp: boolean;
  position: number;
  settings: unknown;
  isVisible: boolean;
  listTitles: string[];
  validators: unknown;
  localizeInfos: LocalizeInfos;
  additionalFields: [];
  isNotificationEmail: boolean;
  isNotificationPhoneSMS: unknown;
  isNotificationPhonePush: unknown;
}
export interface LocalizeInfos {
  title: string;
}

export interface IProperty {
  id: number;
  name: string;
  image: string;
  location: string;
  price: string;
  type: string;
  slug: string;
  description: string;
  featuredImage: string[];
}

export interface QuoteSectionProps {
  quote: string;
  author: string;
  buttonText: string;
  backgroundColor?: string;
  textColor?: string;
}
