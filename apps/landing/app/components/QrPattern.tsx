// A QR-*like* pattern generated from a seed string. It is decorative only
// (not a scannable QR code) so the mockup needs no images or libraries.
const N = 25;

function rng(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
  return () => {
    h ^= h << 13; h ^= h >>> 17; h ^= h << 5;
    return ((h >>> 0) % 1000) / 1000;
  };
}

const inFinder = (x: number, y: number) =>
  (x < 8 && y < 8) || (x >= N - 8 && y < 8) || (x < 8 && y >= N - 8);

function cells(seed: string) {
  const r = rng(seed);
  const out: [number, number][] = [];
  for (let y = 0; y < N; y++)
    for (let x = 0; x < N; x++) {
      if (inFinder(x, y)) continue;
      if (y === 6 || x === 6) { if ((x + y) % 2 === 0) out.push([x, y]); continue; } // timing lines
      if (x >= 16 && x <= 20 && y >= 16 && y <= 20) continue; // alignment square drawn below
      if (r() > 0.52) out.push([x, y]);
    }
  return out;
}

function Finder({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <rect x={x} y={y} width={7} height={7} rx={1.2} fill="currentColor" />
      <rect x={x + 1} y={y + 1} width={5} height={5} rx={0.8} fill="#fff" />
      <rect x={x + 2} y={y + 2} width={3} height={3} rx={0.6} fill="currentColor" />
    </g>
  );
}

export function QrPattern({ seed, className = "" }: { seed: string; className?: string }) {
  return (
    <svg viewBox={`-1 -1 ${N + 2} ${N + 2}`} className={className} role="img" aria-label="QR entry pass (illustration)" shapeRendering="crispEdges">
      <rect x={-1} y={-1} width={N + 2} height={N + 2} fill="#fff" rx={1.5} />
      {cells(seed).map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x + 0.06} y={y + 0.06} width={0.88} height={0.88} rx={0.2} fill="currentColor" />
      ))}
      <Finder x={0} y={0} />
      <Finder x={N - 7} y={0} />
      <Finder x={0} y={N - 7} />
      <rect x={16} y={16} width={5} height={5} rx={0.8} fill="currentColor" />
      <rect x={17} y={17} width={3} height={3} rx={0.5} fill="#fff" />
      <rect x={18} y={18} width={1} height={1} fill="currentColor" />
    </svg>
  );
}
