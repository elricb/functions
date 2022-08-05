export default function (base: string): string {
  return base.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
