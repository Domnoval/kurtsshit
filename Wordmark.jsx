// Wordmark.jsx — TCCYG logo (quick & dirty, slab + amber fissure)

function TccygMark({ size = 40, glow = true }) {
  // Square tile: stacked "TC" over "YG" with an amber fissure between
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className="logo-mark-svg" aria-hidden="true">
      <rect x="1" y="1" width="38" height="38" rx="3"
            fill="#141820" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      {/* Amber fissure — horizontal crack across the middle */}
      <path d="M 2 19.5 L 12 19.2 L 14 20.8 L 22 19.6 L 26 20.4 L 38 19.8"
            stroke={glow ? "url(#tccygFissure)" : "#FF9F1C"}
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
            filter={glow ? "url(#tccygGlow)" : undefined} />
      <defs>
        <linearGradient id="tccygFissure" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"  stopColor="#FF9F1C" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#FFAE3D" stopOpacity="1" />
          <stop offset="100%" stopColor="#FF9F1C" stopOpacity="0.3" />
        </linearGradient>
        <filter id="tccygGlow" x="-50%" y="-200%" width="200%" height="500%">
          <feGaussianBlur stdDeviation="1.1" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* TC */}
      <text x="20" y="15" textAnchor="middle"
            fontFamily="'Roboto Slab', serif" fontWeight="900" fontSize="11"
            fill="#F8F9FA" letterSpacing="0.5">TC</text>
      {/* YG */}
      <text x="20" y="32" textAnchor="middle"
            fontFamily="'Roboto Slab', serif" fontWeight="900" fontSize="11"
            fill="#F8F9FA" letterSpacing="0.5">YG</text>
      {/* Single center C, small */}
      <text x="20" y="24" textAnchor="middle"
            fontFamily="'Roboto Slab', serif" fontWeight="900" fontSize="4.5"
            fill="#FF9F1C" letterSpacing="0.3"
            style={{ filter: 'drop-shadow(0 0 3px rgba(255,159,28,0.8))' }}>C</text>
    </svg>
  );
}

function TccygWordmark({ height = 22, showFissure = true }) {
  // "TCCYG" as slab text with an amber fissure stroke behind the middle C
  const w = height * 5.4;
  return (
    <svg width={w} height={height} viewBox="0 0 270 50" className="logo-wordmark-svg" aria-hidden="true">
      <defs>
        <linearGradient id="wmFissure" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"  stopColor="#FF9F1C" stopOpacity="0" />
          <stop offset="25%" stopColor="#FF9F1C" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#FFAE3D" stopOpacity="1" />
          <stop offset="75%" stopColor="#FF9F1C" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FF9F1C" stopOpacity="0" />
        </linearGradient>
        <filter id="wmGlow" x="-20%" y="-200%" width="140%" height="500%">
          <feGaussianBlur stdDeviation="1.8" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {showFissure && (
        <path d="M 8 26 L 60 25.5 L 72 27 L 110 24.8 L 125 27 L 160 25.2 L 200 26.5 L 262 26"
              stroke="url(#wmFissure)"
              strokeWidth="1.6"
              fill="none"
              strokeLinecap="round"
              filter="url(#wmGlow)" />
      )}
      <text x="6" y="38"
            fontFamily="'Roboto Slab', serif" fontWeight="900" fontSize="42"
            fill="#F8F9FA" letterSpacing="2">TCCYG</text>
    </svg>
  );
}

window.TccygMark = TccygMark;
window.TccygWordmark = TccygWordmark;
