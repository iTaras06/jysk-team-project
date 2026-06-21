export interface Product {
  id: string;
  slug: string;
  title: string;
  price: number;
  oldPrice?: number;
  categorySlug: string;
  label?: string;
  color?: string;
  image?: string;
  description?: string;
  isRecommended?: boolean;
}
