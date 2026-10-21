// Animated sunset-over-the-ocean background (no video needed).
export function OceanBackground() {
  return (
    <div className="ocean-bg absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-[38%] h-40 w-40 -translate-x-1/2 rounded-full bg-[#fff1cf] opacity-80 blur-sm" />
      <svg className="wave absolute bottom-0 left-[-10%] h-[45%] w-[120%]" viewBox="0 0 1200 400" preserveAspectRatio="none">
        <path d="M0 120 C 200 60 400 180 600 120 S 1000 60 1200 120 V400 H0 Z" fill="#3f8597" opacity="0.55" />
      </svg>
      <svg className="wave wave-2 absolute bottom-0 left-[-10%] h-[35%] w-[120%]" viewBox="0 0 1200 400" preserveAspectRatio="none">
        <path d="M0 160 C 250 100 450 220 700 160 S 1050 110 1200 160 V400 H0 Z" fill="#1f5f73" opacity="0.8" />
      </svg>
      <svg className="absolute bottom-0 left-0 h-[14%] w-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path d="M0 40 C 300 10 600 70 1200 30 V100 H0 Z" fill="#f2dfc2" />
      </svg>
    </div>
  );
}
