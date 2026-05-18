import React from 'react';

const styles = `
  * { box-sizing: border-box; }
  body { background: #07090a; font-family: 'Inter', sans-serif; color: #fff; margin: 0; }

  /* ── Nav tab ── */
  .nav-tab { flex:1;display:inline-flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;text-decoration:none;font-size:13px;font-weight:600;letter-spacing:.04em;color:#9ca3af;background:transparent;border-right:1px solid rgba(255,255,255,0.04);position:relative;transition:color .2s,background .2s; }
  .nav-tab:last-child { border-right:none; }
  .nav-tab:hover { color:#e5e7eb;background:rgba(255,255,255,0.02); }
  .nav-tab .tab-label { font-size:15px;font-weight:700; }
  .nav-tab .tab-sub { font-size:10px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;opacity:.5; }
  .nav-tab::after { content:'';position:absolute;bottom:0;left:20%;right:20%;height:2px;border-radius:2px 2px 0 0;background:transparent;transition:background .2s; }
  .nav-tab.active { color:#1de9b6;background:rgba(29,233,182,0.04); }
  .nav-tab.active::after { background:#1de9b6;box-shadow:0 0 12px rgba(29,233,182,0.6); }
  .nav-tab.active .tab-sub { opacity:.7; }

  /* ── Sidebar ── */
  .sidebar { width:220px;flex-shrink:0;background:#040608;border-right:1px solid rgba(255,255,255,0.05);display:flex;flex-direction:column;min-height:calc(100vh - 88px); }
  .sidebar-item { display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:9px;text-decoration:none;margin-bottom:4px;transition:background .15s; }
  .sidebar-item:hover { background:rgba(255,255,255,0.04); }
  .sidebar-item.active { background:rgba(29,233,182,0.1);border:1px solid rgba(29,233,182,0.15); }

  /* ── Transform card ── */
  .xform-card {
    background: linear-gradient(135deg, #0d1014 0%, #080b0f 100%);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 14px;
    overflow: hidden;
    padding: 20px 24px 20px 27px;
    transition: box-shadow .25s, border-color .25s;
    position: relative;
  }
  .xform-card::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 3px;
    border-radius: 14px 0 0 14px;
    background: rgba(29,233,182,0.5);
  }
  .card-dc::before { background: linear-gradient(to bottom, #1e88e5 0%, rgba(30,136,229,0.15) 100%); }
  .card-dc:hover { box-shadow: 0 6px 36px rgba(0,0,0,0.5), 0 0 28px rgba(30,136,229,0.08); border-color: rgba(30,136,229,0.18); }
  .card-hu::before { background: linear-gradient(to bottom, #34d399 0%, rgba(52,211,153,0.15) 100%); }
  .card-hu:hover { box-shadow: 0 6px 36px rgba(0,0,0,0.5), 0 0 28px rgba(52,211,153,0.08); border-color: rgba(52,211,153,0.18); }
  .card-au::before { background: linear-gradient(to bottom, #a78bfa 0%, rgba(167,139,250,0.15) 100%); }
  .card-au:hover { box-shadow: 0 6px 36px rgba(0,0,0,0.5), 0 0 28px rgba(167,139,250,0.12); border-color: rgba(167,139,250,0.2); }

  /* ── EXO image box ── */
  .exo-box {
    position: relative; border-radius: 10px; overflow: hidden;
    border: 2px solid rgba(30,136,229,0.5); height: 160px;
    box-shadow: 0 0 20px rgba(30,136,229,0.1), inset 0 0 24px rgba(30,136,229,0.05);
  }
  .exo-label { position:absolute;top:8px;left:8px;font-size:9px;font-weight:800;letter-spacing:.12em;color:#fff;background:#1e88e5;padding:3px 8px;border-radius:4px;box-shadow:0 2px 8px rgba(30,136,229,0.4); }

  /* ── EGO image box ── */
  .ego-box {
    position: relative; border-radius: 8px; overflow: hidden;
    border: 2px solid rgba(245,158,11,0.65); height: 160px;
    box-shadow: 0 0 14px rgba(245,158,11,0.1), inset 0 0 16px rgba(245,158,11,0.04);
  }
  .ego-label { position:absolute;top:6px;left:6px;font-size:8px;font-weight:800;letter-spacing:.08em;color:#040608;background:#1de9b6;padding:2px 6px;border-radius:3px;box-shadow:0 1px 6px rgba(29,233,182,0.4); }

  /* ── 2×2 EGO grid ── */
  .ego-grid { display:grid;grid-template-columns:1fr 1fr;gap:8px; }

  /* ── Arrow pipe ── */
  .pipe { display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;padding:0 16px;flex-shrink:0; }
  .pipe-line { width:2px;height:24px;background:linear-gradient(to bottom,rgba(29,233,182,0.05),rgba(29,233,182,0.55),rgba(29,233,182,0.05)); }
  .pipe-badge {
    background: linear-gradient(135deg, rgba(29,233,182,0.15), rgba(29,233,182,0.04));
    border: 2px solid rgba(29,233,182,0.5);
    border-radius: 16px; padding: 16px 14px; text-align: center; white-space: nowrap;
    box-shadow: 0 0 32px rgba(29,233,182,0.18), 0 0 60px rgba(29,233,182,0.06), inset 0 1px 0 rgba(29,233,182,0.15);
  }

  /* ── Step badge ── */
  .step-num { width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;flex-shrink:0; }

  /* ── Tags ── */
  .tag { display:inline-block;font-size:9px;font-weight:600;padding:2px 7px;border-radius:3px; }
  .tag-teal { background:rgba(29,233,182,0.1);color:#1de9b6;border:1px solid rgba(29,233,182,0.2); }
  .tag-blue { background:rgba(30,136,229,0.1);color:#60a5fa;border:1px solid rgba(30,136,229,0.2); }
  .tag-orange { background:rgba(251,146,60,0.1);color:#fb923c;border:1px solid rgba(251,146,60,0.2); }
  .tag-purple { background:rgba(167,139,250,0.1);color:#a78bfa;border:1px solid rgba(167,139,250,0.2); }

  /* ── Availability ── */
  .avail-lib { font-size:10px;font-weight:700;color:#22c55e;background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.25);padding:3px 10px;border-radius:10px;white-space:nowrap; }
  .avail-od  { font-size:10px;font-weight:700;color:#f59e0b;background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.25);padding:3px 10px;border-radius:10px;white-space:nowrap; }

  /* ── Section heading ── */
  .section-head { display:flex;align-items:center;gap:10px;margin-bottom:20px; }
  .section-pill {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 6px 14px; border-radius: 8px; flex-shrink: 0;
  }
  .section-pill-dc  { background:rgba(30,136,229,0.08);border:1px solid rgba(30,136,229,0.2); }
  .section-pill-hu  { background:rgba(52,211,153,0.08);border:1px solid rgba(52,211,153,0.2); }
  .section-pill-au  { background:rgba(167,139,250,0.08);border:1px solid rgba(167,139,250,0.2); }

  /* ── Stats strip ── */
  .stat-strip { display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:28px; }
  .stat-tile { background:#0d1014;border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:16px 20px;text-align:center;transition:border-color .2s; }
  .stat-tile:hover { border-color:rgba(29,233,182,0.15); }
  .stat-num { font-size:26px;font-weight:900;color:#1de9b6;letter-spacing:-1px;margin:0; }
  .stat-lbl { font-size:10px;font-weight:600;color:#4b5563;margin:3px 0 0;letter-spacing:.1em;text-transform:uppercase; }

  /* scrollbar */
  ::-webkit-scrollbar { width:5px;height:5px; }
  ::-webkit-scrollbar-track { background:transparent; }
  ::-webkit-scrollbar-thumb { background:#1f2d24;border-radius:4px; }
`;

const RoboEyeView: React.FC = () => {
  return (
    <>
      <style>{styles}</style>

      {/* ── Top nav bar ── */}
      <div style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(5,9,7,0.99)', borderBottom: '1px solid rgba(29,233,182,0.08)', display: 'flex', alignItems: 'stretch', height: '88px', backdropFilter: 'blur(12px)' }}>
        <a
          href="homepage.html"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', minWidth: '220px', flexShrink: 0, borderRight: '1px solid rgba(255,255,255,0.04)', padding: '0 32px', transition: 'background .2s', background: 'transparent' }}
          onMouseOver={e => (e.currentTarget.style.background = 'rgba(29,233,182,0.04)')}
          onMouseOut={e => (e.currentTarget.style.background = 'transparent')}
        >
          <span style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '.04em', color: '#1de9b6' }}>DataraAI</span>
          <span style={{ fontSize: '11px', fontWeight: 500, color: '#6b7280', marginTop: '2px' }}>← Back to Home</span>
        </a>
        <a href="robodatahub.html" className="nav-tab">
          <span className="tab-label">RoboDataHub</span>
          <span className="tab-sub">Dataset Catalog</span>
        </a>
        <a href="roboeyeview.html" className="nav-tab active">
          <span className="tab-label">RoboEyeView</span>
          <span className="tab-sub">Visual Intelligence</span>
        </a>
        <a href="robohandmotion.html" className="nav-tab">
          <span className="tab-label">RoboHandMotion</span>
          <span className="tab-sub">Humanoid Data</span>
        </a>
        <a href="robotaskmanipulator.html" className="nav-tab">
          <span className="tab-label">RoboTaskManipulator</span>
          <span className="tab-sub">Task Execution</span>
        </a>
      </div>

      {/* ── Sidebar + Main ── */}
      <div style={{ display: 'flex', minHeight: 'calc(100vh - 88px)' }}>

        {/* Sidebar */}
        <div className="sidebar">
          <div style={{ padding: '24px 20px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <p style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '.04em', color: '#1de9b6', margin: '0 0 4px' }}>DataraAI</p>
            <p style={{ fontSize: '16px', fontWeight: 700, color: '#fff', margin: 0 }}>Visual Intelligence</p>
          </div>
          <div style={{ padding: '16px 12px', flex: 1 }}>
            <p style={{ fontSize: '16px', fontWeight: 800, color: '#fff', padding: '0 8px', margin: '0 0 12px' }}>Verticals</p>
            <a href="#dc" className="sidebar-item active">
              <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#1e88e5', flexShrink: 0, boxShadow: '0 0 8px rgba(30,136,229,0.5)' }}></span>
              <span style={{ fontSize: '16px', fontWeight: 800, color: '#fff' }}>Data Center</span>
            </a>
            <a href="#hu" className="sidebar-item">
              <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#34d399', flexShrink: 0 }}></span>
              <span style={{ fontSize: '16px', fontWeight: 800, color: '#d1d5db' }}>Humanoid</span>
            </a>
            <a href="#au" className="sidebar-item">
              <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#a78bfa', flexShrink: 0 }}></span>
              <span style={{ fontSize: '16px', fontWeight: 800, color: '#d1d5db' }}>Automotive</span>
            </a>
          </div>
          <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <button
              style={{ width: '100%', background: '#1de9b6', color: '#040608', border: 'none', padding: '9px', borderRadius: '8px', fontSize: '12px', fontWeight: 700, cursor: 'pointer', transition: 'opacity .2s', opacity: 1 }}
              onMouseOver={e => (e.currentTarget.style.opacity = '.88')}
              onMouseOut={e => (e.currentTarget.style.opacity = '1')}
            >Get Access</button>
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, padding: '36px 44px', overflow: 'auto', background: 'linear-gradient(180deg,rgba(29,233,182,0.015) 0%,transparent 220px)' }}>

          {/* Page header */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '9px', background: 'rgba(29,233,182,0.12)', border: '1px solid rgba(29,233,182,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 16px rgba(29,233,182,0.2)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1de9b6" strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                </svg>
              </div>
              <h1 style={{ fontSize: '30px', fontWeight: 900, color: '#fff', margin: 0, lineHeight: 1, letterSpacing: '-.5px' }}>RoboEyeView</h1>
              <span style={{ fontSize: '10px', fontWeight: 700, color: '#1de9b6', background: 'rgba(29,233,182,0.1)', border: '1px solid rgba(29,233,182,0.25)', padding: '3px 9px', borderRadius: '20px', letterSpacing: '.08em' }}>PATENTED</span>
            </div>
            <p style={{ fontSize: '15px', color: '#6b7280', margin: '0 0 14px', lineHeight: 1.8, maxWidth: '640px' }}>
              Patented pipeline that converts <span style={{ color: '#60a5fa', fontWeight: 600 }}>EXO</span> footage into <span style={{ color: '#1de9b6', fontWeight: 600 }}>EGO</span> datasets — labeled and ready for robot model training.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#60a5fa', background: 'rgba(30,136,229,0.08)', border: '1px solid rgba(30,136,229,0.2)', padding: '5px 13px', borderRadius: '6px' }}><strong>EXO</strong> — Exocentric: external fixed-camera view of the workspace</span>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#1de9b6', background: 'rgba(29,233,182,0.08)', border: '1px solid rgba(29,233,182,0.2)', padding: '5px 13px', borderRadius: '6px' }}><strong>EGO</strong> — Egocentric: synthesized robot's-eye perspective for training</span>
            </div>
          </div>

          {/* Stats strip */}
          <div className="stat-strip">
            <div className="stat-tile">
              <p className="stat-num">6</p>
              <p className="stat-lbl">Datasets</p>
            </div>
            <div className="stat-tile">
              <p className="stat-num">5,570+</p>
              <p className="stat-lbl">EGO Hours</p>
            </div>
            <div className="stat-tile">
              <p className="stat-num">3</p>
              <p className="stat-lbl">Verticals</p>
            </div>
            <div className="stat-tile" style={{ borderColor: 'rgba(29,233,182,0.12)', background: 'linear-gradient(135deg,rgba(29,233,182,0.05),#0d1014)' }}>
              <p className="stat-num" style={{ fontSize: '18px', letterSpacing: 0 }}>Patented</p>
              <p className="stat-lbl">EXO → EGO Pipeline</p>
            </div>
          </div>

          {/* How it works */}
          <div style={{ background: 'linear-gradient(135deg,#0d1014 0%,#080c10 100%)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '14px', padding: '28px 32px', marginBottom: '40px', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}>
            <p style={{ fontSize: '11px', fontWeight: 800, color: '#4b5563', margin: '0 0 24px', letterSpacing: '.14em', textTransform: 'uppercase' }}>HOW IT WORKS</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>

              {/* EXO block */}
              <div style={{ flex: 1, background: 'rgba(30,136,229,0.06)', border: '1px solid rgba(30,136,229,0.22)', borderRadius: '12px', padding: '20px 22px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(30,136,229,0.15)', border: '1px solid rgba(30,136,229,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#60a5fa', margin: '0 0 4px' }}>Step 01 · Capture</p>
                <p style={{ fontSize: '16px', fontWeight: 800, color: '#fff', margin: '0 0 6px' }}>Exocentric Footage</p>
                <p style={{ fontSize: '11px', color: '#6b7280', margin: 0, lineHeight: 1.6 }}>External, third-person footage from any fixed camera — overhead, wall-mounted, or stationary.</p>
              </div>

              {/* Arrow */}
              <div style={{ padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '56px', height: '2px', background: 'linear-gradient(to right,#1e88e5,#1de9b6)', borderRadius: '2px', boxShadow: '0 0 8px rgba(29,233,182,0.4)' }}></div>
                  <div style={{ width: 0, height: 0, borderTop: '7px solid transparent', borderBottom: '7px solid transparent', borderLeft: '11px solid #1de9b6', filter: 'drop-shadow(0 0 4px rgba(29,233,182,0.7))' }}></div>
                </div>
              </div>

              {/* Engine block */}
              <div style={{ flex: 1, background: 'rgba(29,233,182,0.1)', border: '2px solid rgba(29,233,182,0.5)', borderRadius: '12px', padding: '20px 22px', boxShadow: '0 0 28px rgba(29,233,182,0.14),inset 0 1px 0 rgba(29,233,182,0.15)' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(29,233,182,0.2)', border: '1px solid rgba(29,233,182,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', boxShadow: '0 0 14px rgba(29,233,182,0.35)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1de9b6" strokeWidth="1.8" strokeLinecap="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#1de9b6', margin: '0 0 4px', textShadow: '0 0 8px rgba(29,233,182,0.5)' }}>Step 02</p>
                <p style={{ fontSize: '16px', fontWeight: 800, color: '#fff', margin: '0 0 8px' }}>RoboEyeView Engine</p>
                <p style={{ fontSize: '11px', color: '#6b7280', margin: 0, lineHeight: 1.5 }}>Scene reconstruction &amp; view synthesis.</p>
              </div>

              {/* Arrow */}
              <div style={{ padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '56px', height: '2px', background: 'linear-gradient(to right,#1de9b6,#f59e0b)', borderRadius: '2px', boxShadow: '0 0 8px rgba(245,158,11,0.4)' }}></div>
                  <div style={{ width: 0, height: 0, borderTop: '7px solid transparent', borderBottom: '7px solid transparent', borderLeft: '11px solid #f59e0b', filter: 'drop-shadow(0 0 4px rgba(245,158,11,0.7))' }}></div>
                </div>
              </div>

              {/* EGO block */}
              <div style={{ flex: 1, background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.22)', borderRadius: '12px', padding: '20px 22px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                  </svg>
                </div>
                <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#f59e0b', margin: '0 0 4px' }}>Step 03 · Training Data</p>
                <p style={{ fontSize: '16px', fontWeight: 800, color: '#fff', margin: '0 0 6px' }}>Egocentric Datasets</p>
                <p style={{ fontSize: '11px', color: '#6b7280', margin: 0, lineHeight: 1.6 }}>Robot's-eye perspective — labeled, multi-angle, ready for model training.</p>
              </div>

            </div>
          </div>

          {/* Transformation Showcase */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

            {/* ── Data Center ── */}
            <div id="dc">
              <div className="section-head">
                <div className="section-pill section-pill-dc">
                  <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#1e88e5', flexShrink: 0, boxShadow: '0 0 8px rgba(30,136,229,0.7)' }}></span>
                  <span style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>Data Center</span>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: '#4b5563' }}>2 datasets · 2,040 hrs</span>
                </div>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right,rgba(30,136,229,0.25),transparent)', marginLeft: '4px' }}></div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                {/* Data 1 */}
                <div className="xform-card card-dc">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: 700, color: '#fff', margin: '0 0 2px' }}>Server Rack Hardware Swap</p>
                      <p style={{ fontSize: '11px', color: '#4b5563', margin: 0 }}>Two-technician swap — external surveillance capture → 3 synthesized EGO views</p>
                    </div>
                    <span className="avail-lib">In Library</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                    <div style={{ width: '200px', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#60a5fa', margin: '0 0 6px' }}>EXO Source</p>
                      <div className="exo-box">
                        <img src="images/rev/data1_exo.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Data 1 EXO" />
                        <span className="exo-label">EXO</span>
                      </div>
                    </div>
                    <div className="pipe">
                      <div className="pipe-line"></div>
                      <div className="pipe-badge">
                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(29,233,182,0.18)', border: '1px solid rgba(29,233,182,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', boxShadow: '0 0 18px rgba(29,233,182,0.4)' }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1de9b6" strokeWidth="1.8" strokeLinecap="round">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                          </svg>
                        </div>
                        <p style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: '#1de9b6', margin: '0 0 2px', textShadow: '0 0 10px rgba(29,233,182,0.6)' }}>RoboEyeView</p>
                        <p style={{ fontSize: '12px', fontWeight: 800, color: '#fff', margin: '0 0 6px' }}>Engine</p>
                        <p style={{ fontSize: '8px', color: '#4b5563', margin: '2px 0 0' }}>View Synthesis</p>
                      </div>
                      <div className="pipe-line"></div>
                      <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                        <path d="M1 1l8 6-8 6" stroke="#1de9b6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#f59e0b', margin: '0 0 6px' }}>Generated EGO Views</p>
                      <div className="ego-grid">
                        <div className="ego-box">
                          <img src="images/rev/data1_ego1.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Data 1 EGO Front" />
                          <span className="ego-label">Front</span>
                        </div>
                        <div className="ego-box">
                          <img src="images/rev/data1_ego2.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Data 1 EGO Overhead" />
                          <span className="ego-label">Overhead</span>
                        </div>
                        <div className="ego-box">
                          <img src="images/rev/data1_ego3.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Data 1 EGO Side" />
                          <span className="ego-label">Side</span>
                        </div>
                        <div className="ego-box">
                          <img src="images/rev/data1_ego3.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Data 1 EGO Low Angle" />
                          <span className="ego-label">Low Angle</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '14px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <span className="tag tag-teal">Scene Reconstruction</span>
                    <span className="tag tag-teal">Depth Estimation</span>
                    <span className="tag tag-blue">Multi-angle Synthesis</span>
                    <span style={{ marginLeft: 'auto', fontSize: '12px', fontWeight: 700, color: '#1de9b6' }}>1,200 hrs EGO output</span>
                  </div>
                </div>

                {/* Data 2 */}
                <div className="xform-card card-dc">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: 700, color: '#fff', margin: '0 0 2px' }}>Server Rack Inspection</p>
                      <p style={{ fontSize: '11px', color: '#4b5563', margin: 0 }}>Single technician inspection — EXO Data → 3 synthesized robot viewpoints</p>
                    </div>
                    <span className="avail-lib">In Library</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                    <div style={{ width: '200px', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#60a5fa', margin: '0 0 6px' }}>EXO Source</p>
                      <div className="exo-box">
                        <img src="images/rev/data2_exo.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Data 2 EXO" />
                        <span className="exo-label">EXO</span>
                      </div>
                    </div>
                    <div className="pipe">
                      <div className="pipe-line"></div>
                      <div className="pipe-badge">
                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(29,233,182,0.18)', border: '1px solid rgba(29,233,182,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', boxShadow: '0 0 18px rgba(29,233,182,0.4)' }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1de9b6" strokeWidth="1.8" strokeLinecap="round">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                          </svg>
                        </div>
                        <p style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: '#1de9b6', margin: '0 0 2px', textShadow: '0 0 10px rgba(29,233,182,0.6)' }}>RoboEyeView</p>
                        <p style={{ fontSize: '12px', fontWeight: 800, color: '#fff', margin: '0 0 6px' }}>Engine</p>
                        <p style={{ fontSize: '8px', color: '#4b5563', margin: '2px 0 0' }}>View Synthesis</p>
                      </div>
                      <div className="pipe-line"></div>
                      <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                        <path d="M1 1l8 6-8 6" stroke="#1de9b6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#f59e0b', margin: '0 0 6px' }}>Generated EGO Views</p>
                      <div className="ego-grid">
                        <div className="ego-box">
                          <img src="images/rev/data2_ego1.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Data 2 EGO Front" />
                          <span className="ego-label">Front</span>
                        </div>
                        <div className="ego-box">
                          <img src="images/rev/data2_ego2.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Data 2 EGO Overhead" />
                          <span className="ego-label">Overhead</span>
                        </div>
                        <div className="ego-box">
                          <img src="images/rev/data2_ego3.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Data 2 EGO Side" />
                          <span className="ego-label">Side</span>
                        </div>
                        <div className="ego-box">
                          <img src="images/rev/data2_ego3.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Data 2 EGO Low Angle" />
                          <span className="ego-label">Low Angle</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '14px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <span className="tag tag-teal">Scene Reconstruction</span>
                    <span className="tag tag-teal">Depth Estimation</span>
                    <span className="tag tag-blue">Multi-angle Synthesis</span>
                    <span style={{ marginLeft: 'auto', fontSize: '12px', fontWeight: 700, color: '#1de9b6' }}>840 hrs EGO output</span>
                  </div>
                </div>

              </div>
            </div>

            {/* ── Humanoid ── */}
            <div id="hu">
              <div className="section-head">
                <div className="section-pill section-pill-hu">
                  <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#34d399', flexShrink: 0, boxShadow: '0 0 8px rgba(52,211,153,0.7)' }}></span>
                  <span style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>Humanoid</span>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: '#4b5563' }}>3 datasets · 1,430 hrs</span>
                </div>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right,rgba(52,211,153,0.25),transparent)', marginLeft: '4px' }}></div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                {/* Human 1 */}
                <div className="xform-card card-hu">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: 700, color: '#fff', margin: '0 0 2px' }}>Kitchen Drawer Manipulation</p>
                      <p style={{ fontSize: '11px', color: '#4b5563', margin: 0 }}>Full-body EXO of trash bag handling → synthesized robot hand-level EGO view</p>
                    </div>
                    <span className="avail-od">On-demand</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                    <div style={{ width: '200px', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#60a5fa', margin: '0 0 6px' }}>EXO Source</p>
                      <div className="exo-box">
                        <img src="images/rev/human1_exo.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Human 1 EXO" />
                        <span className="exo-label">EXO</span>
                      </div>
                    </div>
                    <div className="pipe">
                      <div className="pipe-line"></div>
                      <div className="pipe-badge">
                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(29,233,182,0.18)', border: '1px solid rgba(29,233,182,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', boxShadow: '0 0 18px rgba(29,233,182,0.4)' }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1de9b6" strokeWidth="1.8" strokeLinecap="round">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                          </svg>
                        </div>
                        <p style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: '#1de9b6', margin: '0 0 2px', textShadow: '0 0 10px rgba(29,233,182,0.6)' }}>RoboEyeView</p>
                        <p style={{ fontSize: '12px', fontWeight: 800, color: '#fff', margin: '0 0 6px' }}>Engine</p>
                        <p style={{ fontSize: '8px', color: '#4b5563', margin: '2px 0 0' }}>Hand Tracking</p>
                      </div>
                      <div className="pipe-line"></div>
                      <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                        <path d="M1 1l8 6-8 6" stroke="#1de9b6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#f59e0b', margin: '0 0 6px' }}>Generated EGO Views</p>
                      <div className="ego-grid">
                        <div className="ego-box">
                          <img src="images/rev/human1_ego1.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Human 1 EGO Robot Hand-level" />
                          <span className="ego-label">Robot Hand-level</span>
                        </div>
                        <div className="ego-box">
                          <img src="images/rev/human1_ego1.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Human 1 EGO Side" />
                          <span className="ego-label">Side</span>
                        </div>
                        <div className="ego-box">
                          <img src="images/rev/human1_ego1.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Human 1 EGO Overhead" />
                          <span className="ego-label">Overhead</span>
                        </div>
                        <div className="ego-box">
                          <img src="images/rev/human1_ego1.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Human 1 EGO Low Angle" />
                          <span className="ego-label">Low Angle</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '14px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <span className="tag tag-teal">Hand Pose Tracking</span>
                    <span className="tag tag-teal">Wrist-level Synthesis</span>
                    <span className="tag tag-orange">Grasp Points</span>
                    <span style={{ marginLeft: 'auto', fontSize: '12px', fontWeight: 700, color: '#1de9b6' }}>380 hrs EGO output</span>
                  </div>
                </div>

                {/* Human 2 */}
                <div className="xform-card card-hu">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: 700, color: '#fff', margin: '0 0 2px' }}>Surface Cleaning — Stovetop</p>
                      <p style={{ fontSize: '11px', color: '#4b5563', margin: 0 }}>Full-body cleaning task EXO → 2 robot-perspective EGO views at different proximities</p>
                    </div>
                    <span className="avail-lib">In Library</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                    <div style={{ width: '200px', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#60a5fa', margin: '0 0 6px' }}>EXO Source</p>
                      <div className="exo-box">
                        <img src="images/rev/human2_exo.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Human 2 EXO" />
                        <span className="exo-label">EXO</span>
                      </div>
                    </div>
                    <div className="pipe">
                      <div className="pipe-line"></div>
                      <div className="pipe-badge">
                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(29,233,182,0.18)', border: '1px solid rgba(29,233,182,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', boxShadow: '0 0 18px rgba(29,233,182,0.4)' }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1de9b6" strokeWidth="1.8" strokeLinecap="round">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                          </svg>
                        </div>
                        <p style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: '#1de9b6', margin: '0 0 2px', textShadow: '0 0 10px rgba(29,233,182,0.6)' }}>RoboEyeView</p>
                        <p style={{ fontSize: '12px', fontWeight: 800, color: '#fff', margin: '0 0 6px' }}>Engine</p>
                        <p style={{ fontSize: '8px', color: '#4b5563', margin: '2px 0 0' }}>Motion Synthesis</p>
                      </div>
                      <div className="pipe-line"></div>
                      <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                        <path d="M1 1l8 6-8 6" stroke="#1de9b6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#f59e0b', margin: '0 0 6px' }}>Generated EGO Views</p>
                      <div className="ego-grid">
                        <div className="ego-box">
                          <img src="images/rev/human2_ego1.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Human 2 EGO Mid-range" />
                          <span className="ego-label">Mid-range</span>
                        </div>
                        <div className="ego-box">
                          <img src="images/rev/human2_ego2.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Human 2 EGO Close-up" />
                          <span className="ego-label">Close-up</span>
                        </div>
                        <div className="ego-box">
                          <img src="images/rev/human2_ego2.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Human 2 EGO Overhead" />
                          <span className="ego-label">Overhead</span>
                        </div>
                        <div className="ego-box">
                          <img src="images/rev/human2_ego2.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Human 2 EGO Low Angle" />
                          <span className="ego-label">Low Angle</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '14px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <span className="tag tag-teal">Hand Pose Tracking</span>
                    <span className="tag tag-teal">Surface Segmentation</span>
                    <span className="tag tag-blue">Multi-distance Views</span>
                    <span style={{ marginLeft: 'auto', fontSize: '12px', fontWeight: 700, color: '#1de9b6' }}>450 hrs EGO output</span>
                  </div>
                </div>

                {/* Human 3 */}
                <div className="xform-card card-hu">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: 700, color: '#fff', margin: '0 0 2px' }}>Dishwashing — Sink Manipulation</p>
                      <p style={{ fontSize: '11px', color: '#4b5563', margin: 0 }}>Wide kitchen scene EXO → synthesized close-up EGO at hand manipulation level</p>
                    </div>
                    <span className="avail-od">On-demand</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                    <div style={{ width: '200px', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#60a5fa', margin: '0 0 6px' }}>EXO Source</p>
                      <div className="exo-box">
                        <img src="images/rev/human3_exo.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Human 3 EXO" />
                        <span className="exo-label">EXO</span>
                      </div>
                    </div>
                    <div className="pipe">
                      <div className="pipe-line"></div>
                      <div className="pipe-badge">
                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(29,233,182,0.18)', border: '1px solid rgba(29,233,182,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', boxShadow: '0 0 18px rgba(29,233,182,0.4)' }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1de9b6" strokeWidth="1.8" strokeLinecap="round">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                          </svg>
                        </div>
                        <p style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: '#1de9b6', margin: '0 0 2px', textShadow: '0 0 10px rgba(29,233,182,0.6)' }}>RoboEyeView</p>
                        <p style={{ fontSize: '12px', fontWeight: 800, color: '#fff', margin: '0 0 6px' }}>Engine</p>
                        <p style={{ fontSize: '8px', color: '#4b5563', margin: '2px 0 0' }}>Grasp Synthesis</p>
                      </div>
                      <div className="pipe-line"></div>
                      <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                        <path d="M1 1l8 6-8 6" stroke="#1de9b6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#f59e0b', margin: '0 0 6px' }}>Generated EGO Views</p>
                      <div className="ego-grid">
                        <div className="ego-box">
                          <img src="images/rev/human3_ego1.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Human 3 EGO Hand-level Grasp" />
                          <span className="ego-label">Hand-level Grasp</span>
                        </div>
                        <div className="ego-box">
                          <img src="images/rev/human3_ego1.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Human 3 EGO Side" />
                          <span className="ego-label">Side</span>
                        </div>
                        <div className="ego-box">
                          <img src="images/rev/human3_ego1.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Human 3 EGO Overhead" />
                          <span className="ego-label">Overhead</span>
                        </div>
                        <div className="ego-box">
                          <img src="images/rev/human3_ego1.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Human 3 EGO Low Angle" />
                          <span className="ego-label">Low Angle</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '14px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <span className="tag tag-teal">Grasp Keypoints</span>
                    <span className="tag tag-teal">Wet Object Handling</span>
                    <span className="tag tag-orange">Edge Conditions</span>
                    <span style={{ marginLeft: 'auto', fontSize: '12px', fontWeight: 700, color: '#1de9b6' }}>600 hrs EGO output</span>
                  </div>
                </div>

              </div>
            </div>

            {/* ── Automotive ── */}
            <div id="au">
              <div className="section-head">
                <div className="section-pill section-pill-au">
                  <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#a78bfa', flexShrink: 0, boxShadow: '0 0 8px rgba(167,139,250,0.7)' }}></span>
                  <span style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>Automotive</span>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: '#4b5563' }}>1 dataset · 2,100 hrs</span>
                </div>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right,rgba(167,139,250,0.25),transparent)', marginLeft: '4px' }}></div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                {/* Auto 1 */}
                <div className="xform-card card-au">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: 700, color: '#fff', margin: '0 0 2px' }}>BMW Grille Assembly — Production Line</p>
                      <p style={{ fontSize: '11px', color: '#4b5563', margin: 0 }}>Side-view EXO of assembly worker → 4 synthesized robot viewpoints including rotation and low-angle</p>
                    </div>
                    <span className="avail-lib">In Library</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                    <div style={{ width: '200px', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#60a5fa', margin: '0 0 6px' }}>EXO Source</p>
                      <div className="exo-box">
                        <img src="images/rev/auto1_exo.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Auto 1 EXO" />
                        <span className="exo-label">EXO</span>
                      </div>
                    </div>
                    <div className="pipe">
                      <div className="pipe-line"></div>
                      <div className="pipe-badge">
                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(29,233,182,0.18)', border: '1px solid rgba(29,233,182,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', boxShadow: '0 0 18px rgba(29,233,182,0.4)' }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1de9b6" strokeWidth="1.8" strokeLinecap="round">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                          </svg>
                        </div>
                        <p style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: '#1de9b6', margin: '0 0 2px', textShadow: '0 0 10px rgba(29,233,182,0.6)' }}>RoboEyeView</p>
                        <p style={{ fontSize: '12px', fontWeight: 800, color: '#fff', margin: '0 0 6px' }}>Engine</p>
                        <p style={{ fontSize: '8px', color: '#4b5563', margin: '2px 0 0' }}>4 Viewpoints</p>
                      </div>
                      <div className="pipe-line"></div>
                      <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                        <path d="M1 1l8 6-8 6" stroke="#1de9b6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#f59e0b', margin: '0 0 6px' }}>Generated EGO Views</p>
                      <div className="ego-grid">
                        <div className="ego-box">
                          <img src="images/rev/auto1_ego1.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Auto 1 EGO Front" />
                          <span className="ego-label">Front</span>
                        </div>
                        <div className="ego-box">
                          <img src="images/rev/auto1_ego2.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Auto 1 EGO Rotate Left" />
                          <span className="ego-label">Rotate Left</span>
                        </div>
                        <div className="ego-box">
                          <img src="images/rev/auto1_ego3.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Auto 1 EGO Low Angle" />
                          <span className="ego-label">Low Angle</span>
                        </div>
                        <div className="ego-box">
                          <img src="images/rev/auto1_ego4.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Auto 1 EGO Studio" />
                          <span className="ego-label">Studio</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '14px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <span className="tag tag-teal">Scene Reconstruction</span>
                    <span className="tag tag-teal">Rotation Synthesis</span>
                    <span className="tag tag-purple">Low-angle Views</span>
                    <span className="tag tag-blue">4 Viewpoints</span>
                    <span style={{ marginLeft: 'auto', fontSize: '12px', fontWeight: 700, color: '#1de9b6' }}>2,100 hrs EGO output</span>
                  </div>
                </div>

              </div>
            </div>

            {/* ── Request section ── */}
            <div style={{ marginTop: '4px', padding: '28px 32px', background: 'linear-gradient(135deg,rgba(29,233,182,0.05) 0%,rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(29,233,182,0.12)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', boxShadow: '0 0 40px rgba(29,233,182,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '11px', background: 'rgba(29,233,182,0.1)', border: '1px solid rgba(29,233,182,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 0 16px rgba(29,233,182,0.15)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1de9b6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: '15px', fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>Run RoboEyeView on Your EXO Footage</p>
                  <p style={{ fontSize: '12px', color: '#6b7280', margin: 0, lineHeight: 1.5, maxWidth: '480px' }}>Already have EXO footage? We'll synthesize robot-ready EGO datasets — egocentric robot-perspective viewpoints — across any task, environment, or robot form factor.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexShrink: 0, alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '5px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#1e88e5', background: 'rgba(30,136,229,0.1)', border: '1px solid rgba(30,136,229,0.2)', padding: '3px 8px', borderRadius: '4px' }}>Data Center</span>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#34d399', background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)', padding: '3px 8px', borderRadius: '4px' }}>Humanoid</span>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#a78bfa', background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)', padding: '3px 8px', borderRadius: '4px' }}>Automotive</span>
                </div>
                <button
                  style={{ width: '100%', fontSize: '13px', fontWeight: 700, color: '#040608', background: '#1de9b6', border: 'none', padding: '10px 24px', borderRadius: '8px', cursor: 'pointer', transition: 'opacity .2s', whiteSpace: 'nowrap', opacity: 1 }}
                  onMouseOver={e => (e.currentTarget.style.opacity = '.88')}
                  onMouseOut={e => (e.currentTarget.style.opacity = '1')}
                >Submit Your Footage</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default RoboEyeView;
