const Noggles = ({ className = "w-12 h-auto" }) => (
  <svg viewBox="0 0 100 40" className={className} fill="currentColor">
    <rect x="5" y="5" width="30" height="30" rx="2" />
    <rect x="65" y="5" width="30" height="30" rx="2" />
    <rect x="35" y="15" width="30" height="10" />
    <rect x="0" y="15" width="5" height="10" />
    <rect x="95" y="15" width="5" height="10" />
    <rect x="12" y="12" width="16" height="16" fill="white" />
    <rect x="72" y="12" width="16" height="16" fill="white" />
  </svg>
);

export { Noggles };
