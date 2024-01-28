import { useEffect, useState } from "react";

export default function useLocalStorageState(key: string, initalState: any) {
  const storedValue = localStorage.getItem(key) || null;
  const [value, setValue] = useState<boolean>(
    storedValue ? JSON.parse(storedValue) : initalState
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
