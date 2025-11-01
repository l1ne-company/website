"use client";

import React from 'react';

export default function TopOverview({ compact = false, hideCompletion = false }: { compact?: boolean; hideCompletion?: boolean }) {
  const gridCols = compact ? '1fr' : '1fr 1fr 1fr';
  const gapPx = compact ? 6 : 8;
  const headerCls = compact
    ? 'text-sm text-[#d79326ff] pl-2 pr-2 bg-[#130f04ff]'
    : 'text-lg text-[#d79326ff] pl-2 pr-2 bg-[#130f04ff]';
  const labelCls = compact ? 'text-xs' : 'text-md';
  const valueCls = compact ? 'text-base' : 'text-xl';

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: gridCols,
        gap: `${gapPx}px`,
        height: '100%',
        minHeight: 0,
      }}
    >
      {/* Main Metrics card */}
      <div style={{ background: '#000' }}>
        <div className={headerCls}>SYSTEM METRICS</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: gapPx, color: '#cfcfcf', padding: '8px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className={labelCls} style={{ color: '#a0a0a0'}}>SYSTEMS ONLINE</div>
            <div className={valueCls} style={{ marginTop: 4 }}>128</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className={labelCls} style={{ color: '#a0a0a0'}}>BUILDS VERIFIED</div>
            <div className={valueCls} style={{ marginTop: 4 }}>1,547</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className={labelCls} style={{ color: '#a0a0a0'}}>UPTIME</div>
            <div className={valueCls} style={{ marginTop: 4 }}>99.9%</div>
          </div>
        </div>
      </div>

      {/* Live Throughput card */}
      <div style={{ background: '#000' }}>
        <div className={headerCls}>DEPLOYMENT STATS</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: gapPx, color: '#cfcfcf', padding: '8px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className={labelCls} style={{ color: '#a0a0a0'}}>DEPLOYS / HOUR</div>
            <div className={valueCls} style={{ marginTop: 4 }}>42</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className={labelCls} style={{ color: '#a0a0a0'}}>CACHE HIT RATE</div>
            <div className={valueCls} style={{ marginTop: 4 }}>94%</div>
          </div>
        </div>
      </div>

      {/* System Health chart (optionally hidden on mobile) */}
      {hideCompletion ? null : (
        <div style={{ background: '#000', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          <div className={headerCls}>SYSTEM HEALTH</div>
          <div style={{ padding: '8px', flex: 1, minHeight: 0, height: compact ? 120 : undefined }}>
            <Chart compact={compact} />
          </div>
        </div>
      )}
    </div>
  );
}

function Chart({ compact }: { compact?: boolean }) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  // Static uptime data showing healthy system
  const points = React.useMemo(() => {
    const data = [];
    for (let i = 0; i <= 100; i++) {
      const t = i;
      // Simulate smooth uptime around 99.9%
      const v = 0.999 + Math.sin(i * 0.2) * 0.001;
      data.push({ t, v });
    }
    return data;
  }, []);

  const [size, setSize] = React.useState({ w: 300, h: 120 });

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const r = new ResizeObserver(() => setSize({ w: el.clientWidth, h: el.clientHeight }));
    r.observe(el);
    setSize({ w: el.clientWidth, h: el.clientHeight });
    return () => r.disconnect();
  }, []);

  const pad = 12;
  const w = Math.max(10, size.w);
  const h = Math.max(10, size.h);
  const span = 100;
  const yMax = 1.0;
  const yTopPct = 100;

  const d = React.useMemo(() => {
    if (!points.length) return '';
    const coords = points.map(({ t, v }) => {
      const x = pad + (t / span) * Math.max(1, w - pad * 2);
      const vy = Math.max(0, Math.min(1, v / yMax));
      const y = pad + (1 - vy) * Math.max(1, h - pad * 2);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    });
    return `M ${coords.join(' L ')}`;
  }, [points, w, h]);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', height: '100%' }}>
      <svg width="100%" height="100%" style={{ display: 'block' }}>
        <line x1={pad} y1={h - pad} x2={w - pad} y2={h - pad} stroke="#555" strokeWidth={1} />
        <line x1={pad} y1={pad} x2={pad} y2={h - pad} stroke="#555" strokeWidth={1} />
        <text x={w / 2} y={h} textAnchor="middle" fill="#888" fontSize={10}>Time</text>
        <text x={pad + 2} y={h - pad - 2} fill="#666" fontSize={9}>0%</text>
        <text x={pad + 2} y={pad + 9} fill="#666" fontSize={9}>{yTopPct}%</text>
        <path d={d} fill="none" stroke="#944de6" strokeWidth={2} />
      </svg>
    </div>
  );
}
