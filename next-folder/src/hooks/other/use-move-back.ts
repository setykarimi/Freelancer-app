import { useRouter } from "next/router";

export default function useMoveBack() {
  const router = useRouter();
  return () => router.push(-1);
}
