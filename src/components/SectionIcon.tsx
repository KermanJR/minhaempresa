const SectionIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="12" stroke="#00ff41" strokeWidth="1.5" />
    <line x1="14" y1="4" x2="14" y2="24" stroke="#00ff41" strokeWidth="1.5" />
    <line x1="4" y1="14" x2="24" y2="14" stroke="#00ff41" strokeWidth="1.5" />
    <circle cx="8" cy="8" r="1.5" fill="#00ff41" />
    <circle cx="20" cy="8" r="1.5" fill="#00ff41" />
    <circle cx="8" cy="20" r="1.5" fill="#00ff41" />
    <circle cx="20" cy="20" r="1.5" fill="#00ff41" />
    <circle cx="14" cy="14" r="2" fill="#00ff41" />
  </svg>
);

export default SectionIcon;
