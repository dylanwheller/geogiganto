import React, { useMemo } from 'react';
import Svg, { Circle, Defs, Ellipse, G, LinearGradient, Path, Polygon, Rect, Stop } from 'react-native-svg';

type Props = { worldId: number; width: number; height: number; accent: string };
type Dim = Pick<Props, 'width' | 'height'>;

function rng(seed: number) {
  let s = seed * 9301 + 49297;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function Specks({ worldId, width, height }: Props) {
  const dots = useMemo(() => {
    const r = rng(worldId + 5);
    return Array.from({ length: 30 }, () => ({ x: r() * width, y: r() * height, r: 1 + r() * 1.5, o: 0.15 + r() * 0.3 }));
  }, [worldId, width, height]);
  return (
    <G>
      {dots.map((d, i) => (
        <Circle key={i} cx={d.x} cy={d.y} r={d.r} fill="#bbf7d0" opacity={d.o} />
      ))}
    </G>
  );
}

function wave(w: number, y: number, amp: number, len: number) {
  let d = `M 0 ${y}`;
  for (let x = 0; x < w; x += len) d += ` q ${len / 4} ${-amp} ${len / 2} 0 t ${len / 2} 0`;
  return d;
}

// World 1 — Continents & Countries: a globe and a compass rose.
function Continents({ width: w, height: h }: Dim) {
  const cx = w * 0.14;
  const cy = h * 0.12;
  const r = w * 0.2;
  const cc = { x: w * 0.9, y: h * 0.84 };
  return (
    <G>
      <Circle cx={cx} cy={cy} r={r} fill="#2563eb" />
      <Ellipse cx={cx + r * 0.1} cy={cy - r * 0.2} rx={r * 0.4} ry={r * 0.3} fill="#22c55e" />
      <Ellipse cx={cx - r * 0.35} cy={cy + r * 0.35} rx={r * 0.25} ry={r * 0.2} fill="#16a34a" />
      <Ellipse cx={cx + r * 0.45} cy={cy + r * 0.4} rx={r * 0.18} ry={r * 0.13} fill="#4ade80" />
      <Ellipse cx={cx} cy={cy} rx={r} ry={r * 0.3} fill="none" stroke="#93c5fd" strokeWidth={1.5} opacity={0.5} />
      <Circle cx={cc.x} cy={cc.y} r={w * 0.07} fill="none" stroke="#4ade80" strokeWidth={2} opacity={0.6} />
      <Polygon points={`${cc.x},${cc.y - w * 0.09} ${cc.x + 6},${cc.y} ${cc.x},${cc.y + w * 0.09} ${cc.x - 6},${cc.y}`} fill="#4ade80" opacity={0.7} />
      <Polygon points={`${cc.x - w * 0.09},${cc.y} ${cc.x},${cc.y + 6} ${cc.x + w * 0.09},${cc.y} ${cc.x},${cc.y - 6}`} fill="#86efac" opacity={0.5} />
      <Path d={`M 0 ${h * 0.6} Q ${w * 0.08} ${h * 0.55} ${w * 0.05} ${h * 0.5} M ${w * 0.95} ${h * 0.35} Q ${w * 0.9} ${h * 0.4} ${w} ${h * 0.45}`} stroke="#4ade80" strokeWidth={2} strokeDasharray="3 6" fill="none" opacity={0.4} />
    </G>
  );
}

// World 2 — Oceans & Waterways: waves, a sailboat and a palm island.
function Oceans({ width: w, height: h }: Dim) {
  return (
    <G>
      {[0.18, 0.3, 0.55, 0.7, 0.9].map((y, i) => (
        <Path key={i} d={wave(w, h * y, 6, 44)} stroke="#38bdf8" strokeWidth={2.5} fill="none" opacity={0.25 + (i % 2) * 0.1} />
      ))}
      <Path d={`M ${w * 0.72} ${h * 0.14} h ${w * 0.16} l -6 10 h ${-w * 0.14} z`} fill="#a16207" />
      <Path d={`M ${w * 0.8} ${h * 0.14} V ${h * 0.03}`} stroke="#e5e7eb" strokeWidth={2} />
      <Polygon points={`${w * 0.8},${h * 0.035} ${w * 0.8},${h * 0.135} ${w * 0.72},${h * 0.135}`} fill="#f8fafc" opacity={0.9} />
      <Polygon points={`${w * 0.81},${h * 0.05} ${w * 0.81},${h * 0.135} ${w * 0.87},${h * 0.135}`} fill="#e2e8f0" opacity={0.85} />
      <Ellipse cx={w * 0.07} cy={h * 0.3} rx={w * 0.09} ry={h * 0.02} fill="#ca8a04" />
      <Path d={`M ${w * 0.07} ${h * 0.29} q -4 -${h * 0.06} -${w * 0.05} -${h * 0.05} M ${w * 0.07} ${h * 0.29} q 4 -${h * 0.06} ${w * 0.05} -${h * 0.05}`} stroke="#22c55e" strokeWidth={4} fill="none" strokeLinecap="round" />
      <Circle cx={w * 0.92} cy={h * 0.52} r={4} fill="#7dd3fc" opacity={0.6} />
      <Circle cx={w * 0.95} cy={h * 0.47} r={2.5} fill="#7dd3fc" opacity={0.6} />
    </G>
  );
}

// World 3 — Climates & Biomes: a sun, a rain cloud, mountains and a volcano.
function Climates({ width: w, height: h }: Dim) {
  const sx = w * 0.86;
  const sy = h * 0.1;
  return (
    <G>
      <Circle cx={sx} cy={sy} r={w * 0.11} fill="#facc15" />
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i * Math.PI) / 4;
        return <Path key={i} d={`M ${sx + Math.cos(a) * w * 0.14} ${sy + Math.sin(a) * w * 0.14} L ${sx + Math.cos(a) * w * 0.19} ${sy + Math.sin(a) * w * 0.19}`} stroke="#fde047" strokeWidth={3} strokeLinecap="round" />;
      })}
      <Ellipse cx={w * 0.08} cy={h * 0.34} rx={w * 0.07} ry={h * 0.022} fill="#cbd5e1" opacity={0.8} />
      <Ellipse cx={w * 0.13} cy={h * 0.32} rx={w * 0.06} ry={h * 0.025} fill="#e2e8f0" opacity={0.8} />
      <Path d={`M ${w * 0.06} ${h * 0.37} l -3 10 M ${w * 0.1} ${h * 0.37} l -3 10 M ${w * 0.14} ${h * 0.37} l -3 10`} stroke="#7dd3fc" strokeWidth={2} strokeLinecap="round" />
      <Polygon points={`0,${h} ${w * 0.1},${h * 0.9} ${w * 0.2},${h}`} fill="#57534e" />
      <Polygon points={`${w * 0.1},${h * 0.9} ${w * 0.085},${h * 0.925} ${w * 0.115},${h * 0.925}`} fill="#f1f5f9" />
      <Polygon points={`${w * 0.12},${h} ${w * 0.17},${h * 0.93} ${w * 0.22},${h}`} fill="#44403c" />
      <Polygon points={`${w * 0.9},${h * 0.5} ${w * 0.97},${h * 0.4} ${w * 1.04},${h * 0.5}`} fill="#7c2d12" />
      <Circle cx={w * 0.97} cy={h * 0.385} r={4} fill="#f97316" />
    </G>
  );
}

// World 4 — Flags & Capitals: map pins, flags and a tower.
function Flags({ width: w, height: h }: Dim) {
  const pin = (x: number, y: number, c: string) => (
    <G key={`${x}${y}`}>
      <Path d={`M ${x} ${y} c -${w * 0.045} -${w * 0.05} -${w * 0.045} -${w * 0.11} 0 -${w * 0.11} c ${w * 0.045} 0 ${w * 0.045} ${w * 0.06} 0 ${w * 0.11} z`} fill={c} />
      <Circle cx={x} cy={y - w * 0.075} r={w * 0.017} fill="#052e16" />
    </G>
  );
  return (
    <G>
      {pin(w * 0.12, h * 0.14, '#ef4444')}
      {pin(w * 0.9, h * 0.9, '#f59e0b')}
      <Rect x={w * 0.86} y={h * 0.04} width={2} height={h * 0.13} fill="#e5e7eb" />
      <Rect x={w * 0.87} y={h * 0.04} width={w * 0.1} height={h * 0.028} fill="#3b82f6" />
      <Rect x={w * 0.87} y={h * 0.068} width={w * 0.1} height={h * 0.028} fill="#f8fafc" />
      <Rect x={w * 0.87} y={h * 0.096} width={w * 0.1} height={h * 0.028} fill="#ef4444" />
      <Polygon points={`${w * 0.06},${h} ${w * 0.11},${h * 0.86} ${w * 0.16},${h}`} fill="none" stroke="#4ade80" strokeWidth={2} opacity={0.7} />
      <Path d={`M ${w * 0.08} ${h * 0.96} H ${w * 0.14} M ${w * 0.09} ${h * 0.92} H ${w * 0.13}`} stroke="#4ade80" strokeWidth={2} opacity={0.6} />
      <Circle cx={w * 0.94} cy={h * 0.5} r={5} fill="#facc15" opacity={0.6} />
    </G>
  );
}

export default function MapBackdrop({ worldId, width, height, accent }: Props) {
  const Scene = worldId === 2 ? Oceans : worldId === 3 ? Climates : worldId === 4 ? Flags : Continents;
  return (
    <Svg width={width} height={height}>
      <Defs>
        <LinearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#04110a" />
          <Stop offset="0.6" stopColor="#091a0e" />
          <Stop offset="1" stopColor={accent} stopOpacity={0.35} />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={width} height={height} fill="url(#sky)" />
      <Specks worldId={worldId} width={width} height={height} accent={accent} />
      <Scene width={width} height={height} />
    </Svg>
  );
}
