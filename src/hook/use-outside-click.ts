import { useEffect, useRef } from "react";

export default function useOutSideClick(
  handler: () => void,
  listenCapturing: boolean = true
) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClick(e: any) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }
    document.addEventListener("click", handleClick, listenCapturing);
    return () => document.removeEventListener("click", handleClick, listenCapturing);
  }, [ref]);

  return ref;
}
