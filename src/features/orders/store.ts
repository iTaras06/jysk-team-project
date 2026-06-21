import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Order, OrderCustomer, OrderItem } from "@/types/order";

interface OrdersState {
  orders: Order[];
  createOrder: (data: {
    items: OrderItem[];
    total: number;
    customer: OrderCustomer;
  }) => Order;
}

// Історія замовлень зберігається в localStorage (навчальний варіант,
// без бекенда). createOrder генерує номер і повертає створене замовлення.
export const useOrdersStore = create<OrdersState>()(
  persist(
    (set) => ({
      orders: [],
      createOrder: ({ items, total, customer }) => {
        const now = new Date();
        const order: Order = {
          id: "HG" + now.getTime().toString().slice(-7),
          createdAt: now.toISOString(),
          items,
          total,
          customer,
          status: "Прийнято",
        };
        set((state) => ({ orders: [order, ...state.orders] }));
        return order;
      },
    }),
    { name: "hyggy-orders" },
  ),
);
