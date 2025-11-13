
export interface Program {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  program: string;
  quote: string;
  imageUrl: string;
}

export interface Transformation {
  id: number;
  name: string;
  story: string;
  beforeUrl: string;
  afterUrl: string;
}

export interface FAQ {
    id: number;
    question: string;
    answer: string;
}
