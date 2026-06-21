"use client";

import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

// Поки клієнт не "ожив", persist-стори ще не прочитали localStorage.
// useSyncExternalStore повертає false на сервері й під час гідратації
// та true на клієнті — так уникаємо розбіжності server/client
// без setState в useEffect.
export function useHydrated(): boolean {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}
