import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ══════════════════════════════════════════
   FA icon per concept
   ══════════════════════════════════════════ */
const ICONS = {
  src: 'fa-file-code', source: 'fa-file-code', prep: 'fa-gears', preprocessor: 'fa-gears',
  comp: 'fa-microchip', compiler: 'fa-microchip', obj: 'fa-cube', object: 'fa-cube',
  link: 'fa-link', linker: 'fa-link', exe: 'fa-rocket', binary: 'fa-rocket',
  cpp: 'fa-bolt', java: 'fa-mug-hot', py: 'fa-code', python: 'fa-code',
  pop: 'fa-list-ol', oop: 'fa-cubes',
  c: 'fa-copyright', cpp98: 'fa-book', cpp11: 'fa-star', cpp17: 'fa-bullseye',
  keyboard: 'fa-keyboard', cin: 'fa-right-to-bracket', cout: 'fa-right-from-bracket',
  monitor: 'fa-desktop', variables: 'fa-database', ram: 'fa-memory',
  input: 'fa-right-to-bracket', output: 'fa-right-from-bracket',
  stream: 'fa-water', header: 'fa-file-lines', main: 'fa-flag-checkered',
  encap: 'fa-lock', abs: 'fa-eye-slash', inh: 'fa-sitemap', poly: 'fa-shapes',
  encapsulation: 'fa-lock', abstraction: 'fa-eye-slash', inheritance: 'fa-sitemap',
  polymorphism: 'fa-shapes', ios: 'fa-arrows-up-down', istream: 'fa-right-to-bracket',
  ostream: 'fa-right-from-bracket', valid: 'fa-check', invalid: 'fa-xmark',
  identifier: 'fa-tag', keyword: 'fa-key', escape: 'fa-arrow-turn-down',
  comment: 'fa-comment', int: 'fa-hashtag', float: 'fa-divide', char: 'fa-font',
  bool: 'fa-toggle-on', string: 'fa-quote-right',
  win: 'fa-windows', dos: 'fa-terminal', tc: 'fa-floppy-disk',
  vscode: 'fa-code', ext: 'fa-puzzle-piece', mingw: 'fa-gear',
  inc: 'fa-paperclip', ret: 'fa-arrow-right-from-bracket',
  err: 'fa-bug', syn: 'fa-spell-check', run: 'fa-person-running', log: 'fa-brain',
  in: 'fa-file-import', algo: 'fa-list-check', dry: 'fa-pen-nib', mod: 'fa-cubes', asm: 'fa-file-lines'
};

function getIcon(id, label) {
  const lo = id.toLowerCase();
  if (ICONS[lo]) return ICONS[lo];
  for (const [k, v] of Object.entries(ICONS)) {
    if (label.toLowerCase().includes(k)) return v;
  }
  return 'fa-circle-dot';
}

/* ══════════════════════════════════════════
   Colors
   ══════════════════════════════════════════ */
const COLORS = [
  { ring: '#FFAFCC', bg: '#FFF0F6', text: '#9B1B50' },
  { ring: '#CDB4DB', bg: '#F5EEF8', text: '#5B2D7A' },
  { ring: '#A2D2FF', bg: '#EBF3FF', text: '#1A4D80' },
  { ring: '#BDE0FE', bg: '#EEF6FF', text: '#1E5A8A' },
  { ring: '#FFC8DD', bg: '#FFF2F7', text: '#8A2050' },
  { ring: '#FFD6A5', bg: '#FFF5E6', text: '#7A4400' },
  { ring: '#CAFFBF', bg: '#F0FFE8', text: '#1A5A10' },
  { ring: '#9BF6FF', bg: '#E6FDFF', text: '#0A505A' },
];

/* ══════════════════════════════════════════
   Shorten line
   ══════════════════════════════════════════ */
function shorten(x1, y1, x2, y2, off) {
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  if (len === 0) return { x: x2, y: y2 };
  const r = Math.max(0, (len - off) / len);
  return { x: x1 + dx * r, y: y1 + dy * r };
}

/* ══════════════════════════════════════════
   Wrap label into lines
   ══════════════════════════════════════════ */
function wrapLabel(label, max = 15) {
  if (label.length <= max) return [label];
  const brk = label.indexOf(': ');
  if (brk > 0 && brk < label.length - 2) return [label.slice(0, brk + 1), label.slice(brk + 2)];
  const par = label.indexOf('(');
  if (par > 0) return [label.slice(0, par).trim(), label.slice(par)];
  const sp = label.lastIndexOf(' ', max);
  if (sp > 3) return [label.slice(0, sp), label.slice(sp + 1)];
  return [label];
}

/* ══════════════════════════════════════════
   COMPONENT
   ══════════════════════════════════════════ */
const R = 44;            // circle radius
const TARGET_W = 800;    // fixed canvas width
const TARGET_H = 500;    // fixed canvas height
const PAD_X = 100;       // horizontal padding
const PAD_Y = 100;       // vertical padding (for labels)

function InteractiveDiagram({ data }) {
  const [active, setActive] = useState(data.controls[0]?.id || null);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    setActive(data.controls[0]?.id || null);
    setHovered(null);
  }, [data]);

  const ctrl = data.controls.find(c => c.id === active) || {};
  const hlN = ctrl.highlightNodes || [];
  const hlE = ctrl.highlightEdges || [];

  const cMap = useMemo(() => {
    const m = {};
    data.nodes.forEach((n, i) => { m[n.id] = COLORS[i % COLORS.length]; });
    return m;
  }, [data.nodes]);

  // Use the ORIGINAL positions from data, but strictly scale and center them into our fixed canvas
  const positions = useMemo(() => {
    const nodes = data.nodes;
    if (nodes.length === 0) return {};

    // 1. Find bounding box of original data
    const xs = nodes.map(n => n.x);
    const ys = nodes.map(n => n.y);
    const minX = Math.min(...xs), maxX = Math.max(...xs);
    const minY = Math.min(...ys), maxY = Math.max(...ys);
    const dataW = Math.max(maxX - minX, 1);
    const dataH = Math.max(maxY - minY, 1);

    // 2. Calculate available area
    const availW = TARGET_W - PAD_X * 2;
    const availH = TARGET_H - PAD_Y * 2;

    // 3. Compute scale factor (preserve aspect ratio)
    let scale = 1;
    if (maxX > minX && maxY > minY) {
      scale = Math.min(availW / dataW, availH / dataH);
    } else if (maxX > minX) {
      scale = availW / dataW;
    } else if (maxY > minY) {
      scale = availH / dataH;
    }
    
    // Clamp scale so nodes aren't absurdly far apart if there are only a few
    scale = Math.min(scale, 2.5);

    // 4. Center the scaled bounding box inside the fixed canvas
    const scaledW = dataW * scale;
    const scaledH = dataH * scale;
    const offsetX = (TARGET_W - scaledW) / 2 - minX * scale;
    const offsetY = (TARGET_H - scaledH) / 2 - minY * scale;

    // 5. Apply to all nodes
    const pos = {};
    nodes.forEach(n => {
      pos[n.id] = {
        x: n.x * scale + offsetX,
        y: n.y * scale + offsetY,
      };
    });

    return pos;
  }, [data.nodes]);

  const viewBox = `0 0 ${TARGET_W} ${TARGET_H}`;

  return (
    <div className="my-10 w-full rounded-3xl overflow-hidden bg-white"
      style={{
        boxShadow: '0 16px 48px rgba(205,180,219,0.14), 0 4px 12px rgba(0,0,0,0.03)',
        border: '1px solid rgba(205,180,219,0.18)',
      }}
    >
      <div className="h-1.5 bg-gradient-to-r from-lime via-olive to-forest" />

      <div className="flex flex-col lg:flex-row">

        {/* ── Controls ── */}
        <div className="lg:w-[260px] shrink-0 p-5 lg:p-6 border-b lg:border-b-0 lg:border-r border-forest/10"
          style={{ background: 'linear-gradient(180deg, #F8F6FC 0%, #FFF 100%)' }}
        >
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm"
              style={{ background: 'linear-gradient(135deg, #FFAFCC, #CDB4DB)', boxShadow: '0 4px 12px rgba(255,175,204,0.3)' }}>
              <i className="fa-solid fa-diagram-project"></i>
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm text-cream">Interactive Flow</h3>
              <p className="text-[11px] text-cream/35">Click to explore</p>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 overflow-y-auto max-h-[400px] custom-scrollbar">
            {data.controls.map((c, i) => {
              const on = active === c.id;
              return (
                <motion.button key={c.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, type: 'spring', stiffness: 350, damping: 28 }}
                  onClick={() => setActive(c.id)}
                  className={`flex items-center gap-3 p-3 rounded-xl text-left cursor-pointer transition-all duration-200 ${
                    on ? 'bg-white border border-forest/15' : 'border border-transparent hover:bg-white/80'
                  }`}
                  style={on ? { boxShadow: '0 4px 16px rgba(205,180,219,0.15)' } : {}}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                    on ? 'text-white' : 'bg-forest/8 text-cream/30'
                  }`}
                    style={on ? { background: 'linear-gradient(135deg, #FFAFCC, #A2D2FF)', boxShadow: '0 2px 8px rgba(255,175,204,0.3)' } : {}}
                  >
                    {i + 1}
                  </div>
                  <span className={`text-sm leading-snug ${on ? 'text-cream font-semibold' : 'text-cream/45'}`}>{c.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* ── Canvas ── */}
        <div className="flex-1 flex items-center justify-center p-2 lg:p-4 relative overflow-hidden bg-white">

          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'radial-gradient(circle, #1E293B 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }} />

          <svg className="w-full" viewBox={viewBox} preserveAspectRatio="xMidYMid meet"
            style={{ height: 'auto', minHeight: '350px', maxHeight: '550px' }}
          >
            <defs>
              <marker id="a-def" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
                <path d="M0,1 L8,4 L0,7" fill="none" stroke="#CDB4DB" strokeWidth="1.5" strokeLinecap="round" />
              </marker>
              <marker id="a-act" markerWidth="12" markerHeight="10" refX="11" refY="5" orient="auto">
                <path d="M0,1 L10,5 L0,9" fill="none" stroke="#FFAFCC" strokeWidth="2" strokeLinecap="round" />
              </marker>
              <filter id="node-glow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="6" result="b"/>
                <feFlood floodColor="#FFAFCC" floodOpacity="0.2" result="c"/>
                <feComposite in="c" in2="b" operator="in" result="s"/>
                <feMerge><feMergeNode in="s"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <filter id="node-shadow" x="-20%" y="-10%" width="140%" height="150%">
                <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#CDB4DB" floodOpacity="0.2"/>
              </filter>
            </defs>

            {/* Edges */}
            {data.edges.map((edge, i) => {
              const fp = positions[edge.from];
              const tp = positions[edge.to];
              if (!fp || !tp) return null;

              const isOn = hlE.includes(edge.id) ||
                (hlN.includes(edge.from) && hlN.includes(edge.to));

              const end = shorten(fp.x, fp.y, tp.x, tp.y, R + 10);
              const start = shorten(tp.x, tp.y, fp.x, fp.y, R + 4);

              return (
                <motion.line key={edge.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isOn ? 1 : 0.35, x1: start.x, y1: start.y, x2: end.x, y2: end.y }}
                  transition={{ delay: i * 0.06, duration: 0.4, type: 'spring', bounce: 0 }}
                  strokeWidth={isOn ? 3 : 2}
                  stroke={isOn ? '#FFAFCC' : '#D4C5DB'}
                  strokeLinecap="round"
                  strokeDasharray={isOn ? '12 6' : '0'}
                  markerEnd={`url(#a-${isOn ? 'act' : 'def'})`}
                  className={isOn ? 'animate-dash' : ''}
                  style={{ transition: 'opacity 0.3s, stroke 0.3s' }}
                />
              );
            })}

            {/* Nodes */}
            <AnimatePresence>
              {data.nodes.map((node, i) => {
                const p = positions[node.id];
                if (!p) return null;
                const isOn = hlN.includes(node.id);
                const isHov = hovered === node.id;
                const c = cMap[node.id];
                const icon = getIcon(node.id, node.label);
                const lines = wrapLabel(node.label);

                return (
                  <motion.g key={node.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, x: p.x, y: p.y }}
                    transition={{ delay: i * 0.06, type: 'spring', stiffness: 280, damping: 22 }}
                    onMouseEnter={() => setHovered(node.id)}
                    onMouseLeave={() => setHovered(null)}
                    className="cursor-pointer"
                    whileHover={{ scale: 1.08 }}
                  >
                    {/* Glow ring */}
                    {isOn && (
                      <motion.circle cx={0} cy={0} r={R + 7}
                        fill="none" stroke={c.ring} strokeWidth={2}
                        strokeDasharray="5 4" opacity={0.5}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.5 }}
                      />
                    )}

                    {/* Circle */}
                    <motion.circle cx={0} cy={0} r={R}
                      fill={isOn ? c.bg : (isHov ? c.bg : '#FFFFFF')}
                      stroke={isOn ? c.ring : (isHov ? c.ring : '#E2E8F0')}
                      strokeWidth={isOn ? 3 : (isHov ? 2.5 : 1.5)}
                      filter={isOn ? 'url(#node-glow)' : 'url(#node-shadow)'}
                      animate={{
                        fill: isOn ? c.bg : (isHov ? c.bg : '#FFFFFF'),
                        stroke: isOn ? c.ring : (isHov ? c.ring : '#E2E8F0'),
                      }}
                      transition={{ duration: 0.2 }}
                    />

                    {/* Icon */}
                    <foreignObject x={-18} y={-18} width={36} height={36} className="pointer-events-none overflow-visible">
                      <div xmlns="http://www.w3.org/1999/xhtml" style={{
                        width: '100%', height: '100%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: isOn ? c.text : '#94A3B8',
                        fontSize: '20px',
                        transition: 'color 0.3s',
                      }}>
                        <i className={`fa-solid ${icon}`}></i>
                      </div>
                    </foreignObject>

                    {/* Label below */}
                    {lines.map((line, li) => (
                      <text key={li}
                        x={0} y={R + 20 + li * 16}
                        textAnchor="middle" dominantBaseline="central"
                        fill={isOn ? '#1E293B' : '#64748B'}
                        fontSize="13" fontWeight={isOn ? '700' : '500'}
                        fontFamily="Inter, sans-serif"
                        className="pointer-events-none select-none"
                        style={{ transition: 'fill 0.3s' }}
                      >
                        {line}
                      </text>
                    ))}
                  </motion.g>
                );
              })}
            </AnimatePresence>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default InteractiveDiagram;
