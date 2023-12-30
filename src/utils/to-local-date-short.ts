export default function toLocalDateShort(date: Date | string) {
  return new Date(date).toLocaleDateString("fa-IR");
}
