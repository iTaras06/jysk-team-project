export interface OrderItem {
  id: string;
  title: string;
  price: number;
  qty: number;
}

export interface OrderCustomer {
  name: string;
  email: string;
  phone: string;
  city: string;
  address: string;
  delivery: "courier" | "pickup";
  payment: "card" | "cash";
}

export interface Order {
  id: string;
  createdAt: string;
  items: OrderItem[];
  total: number;
  customer: OrderCustomer;
  status: string;
}
