import { useEffect, useState } from "react";

function useDebounce(value, delay = 500) {
  const [debounceValue, setDebounceValue] = useState("");
  useEffect(() => {
    const timerId = setTimeout(() => setDebounceValue(value), delay);
    return () => {
      clearTimeout(timerId);
    };
  }, [value, delay]);
  return debounceValue;
}

export default useDebounce;
