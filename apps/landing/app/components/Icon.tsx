// Small line icons drawn in SVG (no icon library, no images).
const paths: Record<string, React.ReactNode> = {
  rings: (<><circle cx="9" cy="14" r="5" /><circle cx="15" cy="14" r="5" /><path d="M10 5l2-2 2 2-2 2z" /></>),
  glass: (<><path d="M7 3h10l-1 7a4 4 0 0 1-8 0z" /><path d="M12 14v6M8 21h8" /></>),
  pot: (<><path d="M4 10h16v3a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6z" /><path d="M2 10h20M9 6c0-1 1-2 1-3M14 6c0-1 1-2 1-3" /></>),
  heart: (<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />),
  cap: (<><path d="M2 9l10-5 10 5-10 5z" /><path d="M6 11v5c3 2 9 2 12 0v-5M22 9v6" /></>),
  briefcase: (<><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18" /></>),
  pen: (<><path d="M4 20l4-1 11-11-3-3L5 16z" /><path d="M14 6l3 3" /></>),
  chat: (<><path d="M4 5h16v11H9l-5 4z" /><path d="M8 10h8M8 13h5" /></>),
  check: (<><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></>),
  list: (<><path d="M9 6h11M9 12h11M9 18h11" /><circle cx="4.5" cy="6" r="1" /><circle cx="4.5" cy="12" r="1" /><circle cx="4.5" cy="18" r="1" /></>),
  qr: (<><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><path d="M14 14h3v3M21 14v7h-7M17 21v-1" /></>),
  clock: (<><circle cx="12" cy="13" r="8" /><path d="M12 9v4l3 2M9 2h6" /></>),
  thanks: (<><path d="M3 8l9 6 9-6" /><rect x="3" y="5" width="18" height="14" rx="2" /></>),
  chart: (<><path d="M4 20V4M4 20h16" /><path d="M8 16v-4M12 16V8M16 16v-6" /></>),
  whatsapp: (<><path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z" /><path d="M9 9c0 3 3 6 6 6l1-1.5-2-1-1 1c-1 0-2.5-1.5-2.5-2.5l1-1-1-2z" /></>),
  instagram: (<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" /></>),
  pin: (<><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></>),
  calendar: (<><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>),
  plus: (<path d="M12 5v14M5 12h14" />),
  arrow: (<path d="M5 12h14M13 6l6 6-6 6" />),
  menu: (<path d="M4 7h16M4 12h16M4 17h16" />),
  close: (<path d="M6 6l12 12M18 6L6 18" />),
};

export function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {paths[name] ?? paths.check}
    </svg>
  );
}
