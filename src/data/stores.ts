export interface Store {
  id: number;
  name: string;
  city: string;
  address: string;
  isOpen: boolean;
  hours: string;
  // Графік на тиждень: будні та вихідні.
  week: { weekday: string; weekend: string };
}

export const stores: Store[] = [
  {
    id: 1,
    name: "HYGGY Київ, ТЦ Променада",
    city: "Київ",
    address: "просп. Миколи Бажана, 14А",
    isOpen: true,
    hours: "Зачиняється о 20:00",
    week: { weekday: "10:00 – 20:00", weekend: "10:00 – 19:00" },
  },
  {
    id: 2,
    name: "HYGGY Львів, ТЦ Forum",
    city: "Львів",
    address: "вул. Під Дубом, 7Б",
    isOpen: true,
    hours: "Зачиняється о 21:00",
    week: { weekday: "10:00 – 21:00", weekend: "10:00 – 20:00" },
  },
  {
    id: 3,
    name: "HYGGY Одеса, ТЦ Riviera",
    city: "Одеса",
    address: "Фонтанська дорога, 25",
    isOpen: false,
    hours: "Відчиниться о 10:00",
    week: { weekday: "10:00 – 20:00", weekend: "10:00 – 19:00" },
  },
  {
    id: 4,
    name: "HYGGY Дніпро, ТЦ Most City",
    city: "Дніпро",
    address: "вул. Глінки, 2",
    isOpen: true,
    hours: "Зачиняється о 20:00",
    week: { weekday: "10:00 – 20:00", weekend: "10:00 – 19:00" },
  },
  {
    id: 5,
    name: "HYGGY Харків, ТЦ Nikolsky",
    city: "Харків",
    address: "вул. Сумська, 114",
    isOpen: true,
    hours: "Зачиняється о 21:00",
    week: { weekday: "10:00 – 21:00", weekend: "10:00 – 20:00" },
  },
  {
    id: 6,
    name: "HYGGY Житомир, ТЦ Олді",
    city: "Житомир",
    address: "вул. Михайла Грушевського, 5",
    isOpen: false,
    hours: "Відчиниться о 10:00",
    week: { weekday: "10:00 – 20:00", weekend: "10:00 – 18:00" },
  },
];
