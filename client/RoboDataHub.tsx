import React, { useState } from 'react';

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

  /* ── Dataset card ── */
  .ds-card { background:#0d1014;border:1px solid rgba(255,255,255,0.06);border-radius:12px;overflow:hidden;transition:border-color .2s,transform .2s;display:flex;flex-direction:column; }
  .ds-card:hover { border-color:rgba(29,233,182,0.25);transform:translateY(-2px); }
  .card-body { flex:1;display:flex;flex-direction:column;padding:12px; }
  .card-footer { margin-top:auto;display:flex;justify-content:space-between;align-items:center; }

  /* ── Tags ── */
  .tag { display:inline-block;font-size:9px;font-weight:600;padding:2px 7px;border-radius:3px; }
  .tag-teal { background:rgba(29,233,182,0.1);color:#1de9b6;border:1px solid rgba(29,233,182,0.2); }
  .tag-blue { background:rgba(30,136,229,0.1);color:#60a5fa;border:1px solid rgba(30,136,229,0.2); }
  .tag-orange { background:rgba(251,146,60,0.1);color:#fb923c;border:1px solid rgba(251,146,60,0.2); }
  .tag-purple { background:rgba(167,139,250,0.1);color:#a78bfa;border:1px solid rgba(167,139,250,0.2); }

  /* ── EXO / EGO badges ── */
  .badge-exo { font-size:9px;font-weight:800;letter-spacing:.08em;color:#1e88e5;background:rgba(0,0,0,0.7);border:1px solid rgba(30,136,229,0.4);padding:2px 6px;border-radius:3px; }
  .badge-ego { font-size:9px;font-weight:800;letter-spacing:.08em;color:#1de9b6;background:rgba(0,0,0,0.7);border:1px solid rgba(29,233,182,0.4);padding:2px 6px;border-radius:3px; }

  /* ── Availability badges ── */
  .avail-lib { font-size:10px;font-weight:600;color:#22c55e;background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.2);padding:2px 8px;border-radius:10px; }
  .avail-od { font-size:10px;font-weight:600;color:#f59e0b;background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.2);padding:2px 8px;border-radius:10px; }

  /* ── Search input ── */
  .search-wrap { position:relative; }
  .search-wrap svg.icon { position:absolute;left:12px;top:50%;transform:translateY(-50%);pointer-events:none; }
  .search-input { background:#0d1014;border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:8px 12px 8px 34px;font-size:13px;color:#fff;outline:none;font-family:Inter,sans-serif;width:260px; }
  .search-input::placeholder { color:#4b5563; }
  .search-input:focus { border-color:rgba(29,233,182,0.3); }

  /* ── Section heading ── */
  .section-head { display:flex;align-items:center;gap:10px;margin-bottom:14px; }

  /* ── Card grid ── */
  .card-grid { grid-template-columns: repeat(4,1fr); }
  .card-grid.two-panel { grid-template-columns: repeat(2,1fr); }

  /* scrollbar */
  ::-webkit-scrollbar { width:5px;height:5px; }
  ::-webkit-scrollbar-track { background:transparent; }
  ::-webkit-scrollbar-thumb { background:#1f2d24;border-radius:4px; }
`;

const RoboDataHub: React.FC = () => {
  const [layout, setLayout] = useState<4 | 2>(4);

  const gridClassName = layout === 2 ? 'card-grid two-panel' : 'card-grid';

  return (
    <>
      <style>{styles}</style>

      {/* ── Top nav bar — unchanged ── */}
      <div style={{ background: 'rgba(5,9,7,0.99)', borderBottom: '1px solid rgba(29,233,182,0.08)', display: 'flex', alignItems: 'stretch', height: '88px', backdropFilter: 'blur(12px)' }}>
        <a
          href="homepage.html"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', minWidth: '220px', flexShrink: 0, borderRight: '1px solid rgba(255,255,255,0.04)', padding: '0 32px', transition: 'background .2s', background: 'transparent' }}
          onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(29,233,182,0.04)'; }}
          onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
        >
          <span style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '.04em', color: '#1de9b6' }}>DataraAI</span>
          <span style={{ fontSize: '11px', fontWeight: 500, color: '#6b7280', marginTop: '2px' }}>← Back to Home</span>
        </a>
        <a href="#" className="nav-tab active">
          <span className="tab-label">RoboDataHub</span>
          <span className="tab-sub">Dataset Catalog</span>
        </a>
        <a href="roboeyeview.html" className="nav-tab">
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
            <p style={{ fontSize: '16px', fontWeight: 700, color: '#fff', margin: 0 }}>Physical AI Data</p>
          </div>
          <div style={{ padding: '16px 12px', flex: 1 }}>
            <p style={{ fontSize: '16px', fontWeight: 800, color: '#fff', padding: '0 8px', margin: '0 0 12px' }}>Verticals</p>
            <a href="#dc" className="sidebar-item active">
              <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#1e88e5', flexShrink: 0, boxShadow: '0 0 8px rgba(30,136,229,0.5)' }}></span>
              <span style={{ fontSize: '16px', fontWeight: 800, color: '#fff' }}>Data Center</span>
            </a>
            <a href="#wh" className="sidebar-item">
              <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#fb923c', flexShrink: 0 }}></span>
              <span style={{ fontSize: '16px', fontWeight: 800, color: '#d1d5db' }}>Warehouse</span>
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
            <button style={{ width: '100%', background: '#1de9b6', color: '#040608', border: 'none', padding: '9px', borderRadius: '8px', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}>Get Access</button>
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, padding: '32px 40px', overflow: 'auto' }}>

          {/* Header row: title + search + layout toggle */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', gap: '16px', flexWrap: 'wrap' }}>
            <div>
              <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#fff', margin: '0 0 4px' }}>RoboDataHub</h1>
              <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>100+ datasets · Physical AI training data</p>
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <div className="search-wrap">
                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                <input className="search-input" type="text" placeholder="Search datasets…" />
              </div>
              <button style={{ background: '#1de9b6', color: '#040608', border: 'none', padding: '8px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}>Search</button>
              {/* layout toggle */}
              <div style={{ display: 'flex', gap: '3px', background: '#0d1014', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '7px', padding: '3px' }}>
                <button
                  id="btn-4"
                  onClick={() => setLayout(4)}
                  style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', fontWeight: 600, padding: '4px 10px', borderRadius: '4px', border: 'none', cursor: 'pointer', background: layout === 4 ? '#1de9b6' : 'transparent', color: layout === 4 ? '#040608' : '#6b7280', transition: 'all .15s' }}
                >
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor"><rect x="0" y="0" width="6" height="6" rx="1" /><rect x="9" y="0" width="6" height="6" rx="1" /><rect x="0" y="9" width="6" height="6" rx="1" /><rect x="9" y="9" width="6" height="6" rx="1" /></svg>
                  4
                </button>
                <button
                  id="btn-2"
                  onClick={() => setLayout(2)}
                  style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', fontWeight: 600, padding: '4px 10px', borderRadius: '4px', border: 'none', cursor: 'pointer', background: layout === 2 ? '#1de9b6' : 'transparent', color: layout === 2 ? '#040608' : '#6b7280', transition: 'all .15s' }}
                >
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor"><rect x="0" y="0" width="6" height="16" rx="1" /><rect x="9" y="0" width="6" height="16" rx="1" /></svg>
                  2
                </button>
              </div>
            </div>
          </div>

          {/* Dataset sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

            {/* ── Data Center ── */}
            <div id="dc" onClick={() => window.location.href = 'robodatahubadc.html'} style={{ cursor: 'pointer' }}>
              <div className="section-head">
                <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#1e88e5', flexShrink: 0 }}></span>
                <span style={{ fontSize: '16px', fontWeight: 800, color: '#fff' }}>Data Center</span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(30,136,229,0.1)' }}></div>
              </div>
              <div className={gridClassName} style={{ display: 'grid', gap: '12px' }}>

                <div className="ds-card">
                  <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
                    <img src="images/dc_Screenshot_2026-01-13_at_2.06.33_PM.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,#0d1014 0%,transparent 55%)' }}></div>
                    <span style={{ position: 'absolute', top: '8px', right: '8px' }} className="badge-exo">EXO</span>
                  </div>
                  <div className="card-body">
                    <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>Rack Cabling &amp; Patch Panel</h3>
                    <p style={{ fontSize: '11px', color: '#4b5563', margin: '0 0 10px', lineHeight: 1.5 }}>Full patch panel workflow — cable insertion, loop management, labeling on live data center floor.</p>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '10px' }}>
                      <span className="tag tag-blue">EXO-Centric</span>
                      <span className="tag tag-teal">Task Labels</span>
                      <span className="tag tag-teal">Bbox</span>
                    </div>
                    <div className="card-footer">
                      <p style={{ fontSize: '13px', fontWeight: 700, color: '#1de9b6', margin: 0 }}>1,200 hrs</p>
                      <span className="avail-lib">In Library</span>
                    </div>
                  </div>
                </div>

                <div className="ds-card">
                  <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
                    <img src="images/dc_Screenshot_2026-01-13_at_4.38.50_PM.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,#0d1014 0%,transparent 55%)' }}></div>
                    <span style={{ position: 'absolute', top: '8px', right: '8px' }} className="badge-exo">EXO</span>
                  </div>
                  <div className="card-body">
                    <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>Loop Cable Installation</h3>
                    <p style={{ fontSize: '11px', color: '#4b5563', margin: '0 0 10px', lineHeight: 1.5 }}>Hands-on cable loop management — routing, fastening, and dress-out in live server room environment.</p>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '10px' }}>
                      <span className="tag tag-blue">EXO-Centric</span>
                      <span className="tag tag-teal">Task Labels</span>
                    </div>
                    <div className="card-footer">
                      <p style={{ fontSize: '13px', fontWeight: 700, color: '#1de9b6', margin: 0 }}>600 hrs</p>
                      <span className="avail-od">On-demand</span>
                    </div>
                  </div>
                </div>

                <div className="ds-card">
                  <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
                    <img src="images/dc_Screenshot_2026-01-13_at_4.38.12_PM.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,#0d1014 0%,transparent 55%)' }}></div>
                    <span style={{ position: 'absolute', top: '8px', right: '8px' }} className="badge-ego">EGO</span>
                  </div>
                  <div className="card-body">
                    <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>Server Rack Inspection</h3>
                    <p style={{ fontSize: '11px', color: '#4b5563', margin: '0 0 10px', lineHeight: 1.5 }}>EGO-centric inspection — slot identification, LED status reading, and hardware swap sequences.</p>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '10px' }}>
                      <span className="tag tag-teal">EGO-Centric</span>
                      <span className="tag tag-teal">Task Labels</span>
                      <span className="tag tag-blue">Bbox</span>
                    </div>
                    <div className="card-footer">
                      <p style={{ fontSize: '13px', fontWeight: 700, color: '#1de9b6', margin: 0 }}>840 hrs</p>
                      <span className="avail-lib">In Library</span>
                    </div>
                  </div>
                </div>

                <div className="ds-card">
                  <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
                    <img src="images/dc_Screenshot_2026-01-13_at_4.38.43_PM.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,#0d1014 0%,transparent 55%)' }}></div>
                    <span style={{ position: 'absolute', top: '8px', right: '8px' }} className="badge-exo">EXO</span>
                  </div>
                  <div className="card-body">
                    <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>Hardware Swap &amp; Replacement</h3>
                    <p style={{ fontSize: '11px', color: '#4b5563', margin: '0 0 10px', lineHeight: 1.5 }}>Drive, NIC, and PSU replacement workflows across multiple server generations.</p>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '10px' }}>
                      <span className="tag tag-blue">EXO-Centric</span>
                      <span className="tag tag-teal">Task Labels</span>
                      <span className="tag tag-purple">Seg</span>
                    </div>
                    <div className="card-footer">
                      <p style={{ fontSize: '13px', fontWeight: 700, color: '#1de9b6', margin: 0 }}>720 hrs</p>
                      <span className="avail-od">On-demand</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ── Warehouse ── */}
            <div id="wh" onClick={() => window.location.href = 'robodatahubawarehouse.html'} style={{ cursor: 'pointer' }}>
              <div className="section-head">
                <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#fb923c', flexShrink: 0 }}></span>
                <span style={{ fontSize: '16px', fontWeight: 800, color: '#fff' }}>Warehouse</span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(251,146,60,0.1)' }}></div>
              </div>
              <div className={gridClassName} style={{ display: 'grid', gap: '12px' }}>

                <div className="ds-card">
                  <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
                    <img src="images/wh_pexels-goldcircuits-8377802.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,#0d1014 0%,transparent 55%)' }}></div>
                    <span style={{ position: 'absolute', top: '8px', right: '8px' }} className="badge-ego">EGO</span>
                  </div>
                  <div className="card-body">
                    <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>Pick &amp; Place — Shelf Interaction</h3>
                    <p style={{ fontSize: '11px', color: '#4b5563', margin: '0 0 10px', lineHeight: 1.5 }}>Robot-eye-view of shelf pick operations. Mixed SKUs, glare conditions, and dynamic obstacles.</p>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '10px' }}>
                      <span className="tag tag-teal">EGO-Centric</span>
                      <span className="tag tag-teal">Task Labels</span>
                      <span className="tag tag-orange">Edge Cases</span>
                    </div>
                    <div className="card-footer">
                      <p style={{ fontSize: '13px', fontWeight: 700, color: '#1de9b6', margin: 0 }}>1,200 hrs</p>
                      <span className="avail-lib">In Library</span>
                    </div>
                  </div>
                </div>

                <div className="ds-card">
                  <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
                    <img src="images/wh_pexels-endura-tiles-370085044-14554082.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,#0d1014 0%,transparent 55%)' }}></div>
                    <span style={{ position: 'absolute', top: '8px', right: '8px' }} className="badge-exo">EXO</span>
                  </div>
                  <div className="card-body">
                    <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>Pallet Stacking &amp; Transport</h3>
                    <p style={{ fontSize: '11px', color: '#4b5563', margin: '0 0 10px', lineHeight: 1.5 }}>Overhead EXO capture of pallet build, wrap, and forklift handoff. Mixed-weight loads and aisle navigation.</p>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '10px' }}>
                      <span className="tag tag-blue">EXO-Centric</span>
                      <span className="tag tag-teal">Task Labels</span>
                      <span className="tag tag-teal">Bbox</span>
                    </div>
                    <div className="card-footer">
                      <p style={{ fontSize: '13px', fontWeight: 700, color: '#1de9b6', margin: 0 }}>980 hrs</p>
                      <span className="avail-lib">In Library</span>
                    </div>
                  </div>
                </div>

                <div className="ds-card">
                  <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
                    <img src="images/wh_pexels-ihsanaditya-10834810.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,#0d1014 0%,transparent 55%)' }}></div>
                    <span style={{ position: 'absolute', top: '8px', right: '8px' }} className="badge-ego">EGO</span>
                  </div>
                  <div className="card-body">
                    <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>Inventory Scanning &amp; Audit</h3>
                    <p style={{ fontSize: '11px', color: '#4b5563', margin: '0 0 10px', lineHeight: 1.5 }}>Mobile robot scanning of barcodes and QR codes. Low-light and motion-blur edge cases included.</p>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '10px' }}>
                      <span className="tag tag-teal">EGO-Centric</span>
                      <span className="tag tag-teal">Task Labels</span>
                      <span className="tag tag-orange">Edge Cases</span>
                    </div>
                    <div className="card-footer">
                      <p style={{ fontSize: '13px', fontWeight: 700, color: '#1de9b6', margin: 0 }}>650 hrs</p>
                      <span className="avail-lib">In Library</span>
                    </div>
                  </div>
                </div>

                <div className="ds-card">
                  <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
                    <img src="images/wh_pexels-tiger-lily-4483772.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,#0d1014 0%,transparent 55%)' }}></div>
                    <span style={{ position: 'absolute', top: '8px', right: '8px' }} className="badge-exo">EXO</span>
                  </div>
                  <div className="card-body">
                    <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>Conveyor Loading &amp; Sortation</h3>
                    <p style={{ fontSize: '11px', color: '#4b5563', margin: '0 0 10px', lineHeight: 1.5 }}>Package induction, divert, and sortation across high-speed conveyor lines. Multi-SKU parcels included.</p>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '10px' }}>
                      <span className="tag tag-blue">EXO-Centric</span>
                      <span className="tag tag-teal">Task Labels</span>
                      <span className="tag tag-purple">Seg</span>
                    </div>
                    <div className="card-footer">
                      <p style={{ fontSize: '13px', fontWeight: 700, color: '#1de9b6', margin: 0 }}>780 hrs</p>
                      <span className="avail-od">On-demand</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ── Humanoid ── */}
            <div id="hu" onClick={() => window.location.href = 'robodatahubahumanoid.html'} style={{ cursor: 'pointer' }}>
              <div className="section-head">
                <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#34d399', flexShrink: 0 }}></span>
                <span style={{ fontSize: '16px', fontWeight: 800, color: '#fff' }}>Humanoid</span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(52,211,153,0.1)' }}></div>
              </div>
              <div className={gridClassName} style={{ display: 'grid', gap: '12px' }}>

                <div className="ds-card">
                  <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
                    <img src="images/WebDishWashing.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,#0d1014 0%,transparent 55%)' }}></div>
                    <span style={{ position: 'absolute', top: '8px', right: '8px' }} className="badge-exo">EXO</span>
                  </div>
                  <div className="card-body">
                    <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>Dishwashing — Hand Manipulation</h3>
                    <p style={{ fontSize: '11px', color: '#4b5563', margin: '0 0 10px', lineHeight: 1.5 }}>Fine-grained hand and object manipulation in wet, soapy conditions. Ideal for humanoid dexterity training.</p>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '10px' }}>
                      <span className="tag tag-blue">EXO-Centric</span>
                      <span className="tag tag-teal">Hand Pose</span>
                      <span className="tag tag-orange">Wet Conditions</span>
                    </div>
                    <div className="card-footer">
                      <p style={{ fontSize: '13px', fontWeight: 700, color: '#1de9b6', margin: 0 }}>600 hrs</p>
                      <span className="avail-od">On-demand</span>
                    </div>
                  </div>
                </div>

                <div className="ds-card">
                  <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
                    <img src="images/WebCleaning.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,#0d1014 0%,transparent 55%)' }}></div>
                    <span style={{ position: 'absolute', top: '8px', right: '8px' }} className="badge-exo">EXO</span>
                  </div>
                  <div className="card-body">
                    <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>Surface Cleaning &amp; Wiping</h3>
                    <p style={{ fontSize: '11px', color: '#4b5563', margin: '0 0 10px', lineHeight: 1.5 }}>Humanoid arm trajectories for table, counter, and floor cleaning. Circular, linear, and avoidance wipe patterns.</p>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '10px' }}>
                      <span className="tag tag-blue">EXO-Centric</span>
                      <span className="tag tag-teal">Hand Pose</span>
                      <span className="tag tag-teal">Task Labels</span>
                    </div>
                    <div className="card-footer">
                      <p style={{ fontSize: '13px', fontWeight: 700, color: '#1de9b6', margin: 0 }}>450 hrs</p>
                      <span className="avail-lib">In Library</span>
                    </div>
                  </div>
                </div>

                <div className="ds-card">
                  <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
                    <img src="images/WebTrashCollection.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,#0d1014 0%,transparent 55%)' }}></div>
                    <span style={{ position: 'absolute', top: '8px', right: '8px' }} className="badge-ego">EGO</span>
                  </div>
                  <div className="card-body">
                    <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>Trash Collection &amp; Sorting</h3>
                    <p style={{ fontSize: '11px', color: '#4b5563', margin: '0 0 10px', lineHeight: 1.5 }}>Grasp-and-bin sequences for mixed waste streams. Recyclable detection, lid manipulation, and bag tying.</p>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '10px' }}>
                      <span className="tag tag-teal">EGO-Centric</span>
                      <span className="tag tag-teal">Hand Pose</span>
                      <span className="tag tag-orange">Edge Cases</span>
                    </div>
                    <div className="card-footer">
                      <p style={{ fontSize: '13px', fontWeight: 700, color: '#1de9b6', margin: 0 }}>380 hrs</p>
                      <span className="avail-od">On-demand</span>
                    </div>
                  </div>
                </div>

                <div className="ds-card">
                  <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
                    <img src="images/WebWasher.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,#0d1014 0%,transparent 55%)' }}></div>
                    <span style={{ position: 'absolute', top: '8px', right: '8px' }} className="badge-exo">EXO</span>
                  </div>
                  <div className="card-body">
                    <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>Laundry — Load &amp; Fold</h3>
                    <p style={{ fontSize: '11px', color: '#4b5563', margin: '0 0 10px', lineHeight: 1.5 }}>Cloth manipulation — sorting, loading washer/dryer, and folding garments. High deformable-object variety.</p>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '10px' }}>
                      <span className="tag tag-blue">EXO-Centric</span>
                      <span className="tag tag-teal">Hand Pose</span>
                      <span className="tag tag-purple">Seg</span>
                    </div>
                    <div className="card-footer">
                      <p style={{ fontSize: '13px', fontWeight: 700, color: '#1de9b6', margin: 0 }}>520 hrs</p>
                      <span className="avail-lib">In Library</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ── Automotive ── */}
            <div id="au" onClick={() => window.location.href = 'robodatahubauto.html'} style={{ cursor: 'pointer' }}>
              <div className="section-head">
                <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#a78bfa', flexShrink: 0 }}></span>
                <span style={{ fontSize: '16px', fontWeight: 800, color: '#fff' }}>Automotive</span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(167,139,250,0.1)' }}></div>
              </div>
              <div className={gridClassName} style={{ display: 'grid', gap: '12px' }}>

                <div className="ds-card">
                  <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
                    <img src="images/frontGrille_012.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,#0d1014 0%,transparent 55%)' }}></div>
                    <span style={{ position: 'absolute', top: '8px', right: '8px' }} className="badge-exo">EXO</span>
                  </div>
                  <div className="card-body">
                    <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>BMW Front Grille Assembly</h3>
                    <p style={{ fontSize: '11px', color: '#4b5563', margin: '0 0 10px', lineHeight: 1.5 }}>Production-line assembly from BMW facility. Multi-step grille fitting, fastening and QC inspection.</p>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '10px' }}>
                      <span className="tag tag-blue">EXO-Centric</span>
                      <span className="tag tag-teal">Task Labels</span>
                      <span className="tag tag-purple">Seg</span>
                    </div>
                    <div className="card-footer">
                      <p style={{ fontSize: '13px', fontWeight: 700, color: '#1de9b6', margin: 0 }}>2,100 hrs</p>
                      <span className="avail-lib">In Library</span>
                    </div>
                  </div>
                </div>

                <div className="ds-card">
                  <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
                    <img src="images/frontSeat_007.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,#0d1014 0%,transparent 55%)' }}></div>
                    <span style={{ position: 'absolute', top: '8px', right: '8px' }} className="badge-exo">EXO</span>
                  </div>
                  <div className="card-body">
                    <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>Front Seat Installation</h3>
                    <p style={{ fontSize: '11px', color: '#4b5563', margin: '0 0 10px', lineHeight: 1.5 }}>Seat alignment, bolt-down, and connector-clip sequences across multiple vehicle platforms.</p>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '10px' }}>
                      <span className="tag tag-blue">EXO-Centric</span>
                      <span className="tag tag-teal">Task Labels</span>
                      <span className="tag tag-teal">Bbox</span>
                    </div>
                    <div className="card-footer">
                      <p style={{ fontSize: '13px', fontWeight: 700, color: '#1de9b6', margin: 0 }}>1,400 hrs</p>
                      <span className="avail-lib">In Library</span>
                    </div>
                  </div>
                </div>

                <div className="ds-card">
                  <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
                    <img src="images/passengerSeat_0100_Rotate_left_45_degrees.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,#0d1014 0%,transparent 55%)' }}></div>
                    <span style={{ position: 'absolute', top: '8px', right: '8px' }} className="badge-ego">EGO</span>
                  </div>
                  <div className="card-body">
                    <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>Passenger Seat QC Inspection</h3>
                    <p style={{ fontSize: '11px', color: '#4b5563', margin: '0 0 10px', lineHeight: 1.5 }}>EGO-centric quality inspection of seat fitment, trim alignment, and seatbelt anchor verification.</p>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '10px' }}>
                      <span className="tag tag-teal">EGO-Centric</span>
                      <span className="tag tag-teal">Task Labels</span>
                      <span className="tag tag-purple">Seg</span>
                    </div>
                    <div className="card-footer">
                      <p style={{ fontSize: '13px', fontWeight: 700, color: '#1de9b6', margin: 0 }}>900 hrs</p>
                      <span className="avail-od">On-demand</span>
                    </div>
                  </div>
                </div>

                <div className="ds-card">
                  <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
                    <img src="images/rearBumper_021.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,#0d1014 0%,transparent 55%)' }}></div>
                    <span style={{ position: 'absolute', top: '8px', right: '8px' }} className="badge-exo">EXO</span>
                  </div>
                  <div className="card-body">
                    <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>Rear Bumper Assembly</h3>
                    <p style={{ fontSize: '11px', color: '#4b5563', margin: '0 0 10px', lineHeight: 1.5 }}>Bumper alignment, clip insertion, and sensor harness routing across multiple trim levels.</p>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '10px' }}>
                      <span className="tag tag-blue">EXO-Centric</span>
                      <span className="tag tag-teal">Task Labels</span>
                      <span className="tag tag-orange">Edge Cases</span>
                    </div>
                    <div className="card-footer">
                      <p style={{ fontSize: '13px', fontWeight: 700, color: '#1de9b6', margin: 0 }}>1,100 hrs</p>
                      <span className="avail-lib">In Library</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ── Unified Add Section ── */}
            <div style={{ marginTop: '8px', padding: '28px 32px', background: 'linear-gradient(135deg,rgba(29,233,182,0.04) 0%,rgba(255,255,255,0.02) 100%)', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(29,233,182,0.08)', border: '1px solid rgba(29,233,182,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1de9b6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                </div>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: '#fff', margin: '0 0 3px' }}>Request a Custom Dataset</p>
                  <p style={{ fontSize: '12px', color: '#6b7280', margin: 0, lineHeight: 1.5 }}>Don't see what you need? Our 100+ person team captures any task, environment, or robot workflow on demand.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexShrink: 0, alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '5px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#1e88e5', background: 'rgba(30,136,229,0.1)', border: '1px solid rgba(30,136,229,0.2)', padding: '3px 8px', borderRadius: '4px' }}>Data Center</span>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#fb923c', background: 'rgba(251,146,60,0.1)', border: '1px solid rgba(251,146,60,0.2)', padding: '3px 8px', borderRadius: '4px' }}>Warehouse</span>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#34d399', background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)', padding: '3px 8px', borderRadius: '4px' }}>Humanoid</span>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#a78bfa', background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)', padding: '3px 8px', borderRadius: '4px' }}>Automotive</span>
                </div>
                <button style={{ fontSize: '12px', fontWeight: 700, color: '#040608', background: '#1de9b6', border: 'none', padding: '8px 20px', borderRadius: '8px', cursor: 'pointer', whiteSpace: 'nowrap' }}>Submit Request</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default RoboDataHub;
