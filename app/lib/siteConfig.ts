/**
 * Explicit false / 0 / no / off is a hard override: the feed cannot turn
 * cigarettes back on. An empty value is not that override. The day-to-day
 * coded switch stays in showCigarettes.ts.
 */
export function cigaretteEnvHardOff(raw: string | undefined = process.env.SHOW_CIGARETTES ?? process.env.NEXT_PUBLIC_SHOW_CIGARETTES): boolean {
  if (raw == null) return false;
  return /^(0|false|no|off)$/i.test(raw.trim());
}
