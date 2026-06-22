export interface Store {
  id: number;
  name: string;
  city: string;
  address: string;
  isOpen: boolean;
  hours: string;
}

export const stores: Store[] = [
  {
    id: 1,
    name: "HYGGY Київ, ТЦ Променада",
    city: "Київ",
    address: "просп. Миколи Бажана, 14А",
    isOpen: true,
    hours: "Зачиняється о 20:00",
  },
  {
    id: 2,
    name: "HYGGY Львів, ТЦ Forum",
    city: "Львів",
    address: "вул. Під Дубом, 7Б",
    isOpen: true,
    hours: "Зачиняється о 21:00",
  },
  {
    id: 3,
    name: "HYGGY Одеса, ТЦ Riviera",
    city: "Одеса",
    address: "Фонтанська дорога, 25",
    isOpen: false,
    hours: "Відчиниться о 10:00",
  },
  {
    id: 4,
    name: "HYGGY Дніпро, ТЦ Most City",
    city: "Дніпро",
    address: "вул. Глінки, 2",
    isOpen: true,
    hours: "Зачиняється о 20:00",
  },
  {
    id: 5,
    name: "HYGGY Харків, ТЦ Nikolsky",
    city: "Харків",
    address: "вул. Сумська, 114",
    isOpen: true,
    hours: "Зачиняється о 21:00",
  },
  {
    id: 6,
    name: "HYGGY Житомир, ТЦ Олді",
    city: "Житомир",
    address: "вул. Михайла Грушевського, 5",
    isOpen: false,
    hours: "Відчиниться о 10:00",
  },
];
