export function roundTo(x: number, granularity: number): number {
  const factor = 1 / granularity;
  const upscaled = x * factor;
  const rounded = Math.round(upscaled);
  const downscaled = rounded / factor;
  return downscaled;
}
