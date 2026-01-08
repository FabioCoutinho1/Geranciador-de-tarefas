import { useCallback } from "react";

export function useTeste() {
  const log = useCallback((a, b, c) => {
    const newTask = b.filter((el) => {
      if (a !== "") {
        return el.taskName.includes(a.toLowerCase().trim());
      }
      return [...b];
    });
    c(newTask);
  });

  return [log];
}
