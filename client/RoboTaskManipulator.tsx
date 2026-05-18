const styles = `
  * { box-sizing: border-box; }
  body { background: #07090a; font-family: 'Inter', sans-serif; color: #fff; margin: 0; }

  .nav-tab { flex:1;display:inline-flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;text-decoration:none;font-size:13px;font-weight:600;letter-spacing:.04em;color:#9ca3af;background:transparent;border-right:1px solid rgba(255,255,255,0.04);position:relative;transition:color .2s,background .2s; }
  .nav-tab:last-child { border-right:none; }
  .nav-tab:hover { color:#e5e7eb;background:rgba(255,255,255,0.02); }
  .nav-tab .tab-label { font-size:15px;font-weight:700; }
  .nav-tab .tab-sub { font-size:10px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;opacity:.5; }
  .nav-tab::after { content:'';position:absolute;bottom:0;left:20%;right:20%;height:2px;border-radius:2px 2px 0 0;background:transparent;transition:background .2s; }
  .nav-tab.active { color:#1de9b6;background:rgba(29,233,182,0.04); }
  .nav-tab.active::after { background:#1de9b6;box-shadow:0 0 12px rgba(29,233,182,0.6); }
  .nav-tab.active .tab-sub { opacity:.7; }

  .nav-home { display:flex;flex-direction:column;align-items:center;justify-content:center;text-decoration:none;min-width:220px;flex-shrink:0;border-right:1px solid rgba(255,255,255,0.04);padding:0 32px;transition:background .2s;background:transparent; }
  .nav-home:hover { background:rgba(29,233,182,0.04); }

  .sidebar { width:220px;flex-shrink:0;background:#040608;border-right:1px solid rgba(255,255,255,0.05);display:flex;flex-direction:column;min-height:calc(100vh - 88px); }
  .sidebar-item { display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:9px;text-decoration:none;margin-bottom:4px;transition:background .15s; }
  .sidebar-item:hover { background:rgba(255,255,255,0.04); }
  .sidebar-item.active { background:rgba(249,115,22,0.1);border:1px solid rgba(249,115,22,0.15); }

  .xform-card { background:linear-gradient(135deg,#0d1014 0%,#080b0f 100%);border:1px solid rgba(255,255,255,0.07);border-radius:14px;overflow:hidden;padding:20px 24px 20px 27px;transition:box-shadow .25s,border-color .25s;position:relative; }
  .xform-card::before { content:'';position:absolute;left:0;top:0;bottom:0;width:3px;border-radius:14px 0 0 14px; }
  .card-wh::before { background:linear-gradient(to bottom,#1de9b6 0%,rgba(29,233,182,0.15) 100%); }
  .card-wh:hover { box-shadow:0 6px 36px rgba(0,0,0,0.5),0 0 28px rgba(29,233,182,0.08);border-color:rgba(29,233,182,0.18); }
  .card-au::before { background:linear-gradient(to bottom,#a78bfa 0%,rgba(167,139,250,0.15) 100%); }
  .card-au:hover { box-shadow:0 6px 36px rgba(0,0,0,0.5),0 0 28px rgba(167,139,250,0.08);border-color:rgba(167,139,250,0.18); }
  .card-dc::before { background:linear-gradient(to bottom,#1e88e5 0%,rgba(30,136,229,0.15) 100%); }
  .card-dc:hover { box-shadow:0 6px 36px rgba(0,0,0,0.5),0 0 28px rgba(30,136,229,0.08);border-color:rgba(30,136,229,0.18); }

  .exo-box { position:relative;border-radius:10px;overflow:hidden;border:2px solid rgba(30,136,229,0.5);height:160px;box-shadow:0 0 20px rgba(30,136,229,0.1),inset 0 0 24px rgba(30,136,229,0.05); }
  .exo-label { position:absolute;top:8px;left:8px;font-size:9px;font-weight:800;letter-spacing:.12em;color:#fff;background:#1e88e5;padding:3px 8px;border-radius:4px;box-shadow:0 2px 8px rgba(30,136,229,0.4); }

  .task-box { position:relative;border-radius:8px;overflow:hidden;border:2px solid rgba(249,115,22,0.55);height:160px;box-shadow:0 0 14px rgba(249,115,22,0.1),inset 0 0 16px rgba(249,115,22,0.04); }
  .task-label { position:absolute;top:6px;left:6px;font-size:8px;font-weight:800;letter-spacing:.08em;color:#040608;background:#f97316;padding:2px 6px;border-radius:3px;box-shadow:0 1px 6px rgba(249,115,22,0.4); }

  .output-grid { display:grid;grid-template-columns:1fr 1fr;gap:8px; }

  .pipe { display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;padding:0 16px;flex-shrink:0; }
  .pipe-line { width:2px;height:24px;background:linear-gradient(to bottom,rgba(249,115,22,0.05),rgba(249,115,22,0.55),rgba(249,115,22,0.05)); }
  .pipe-badge { background:linear-gradient(135deg,rgba(249,115,22,0.15),rgba(249,115,22,0.04));border:2px solid rgba(249,115,22,0.5);border-radius:16px;padding:16px 14px;text-align:center;white-space:nowrap;box-shadow:0 0 32px rgba(249,115,22,0.18),0 0 60px rgba(249,115,22,0.06),inset 0 1px 0 rgba(249,115,22,0.15); }

  .tag { display:inline-block;font-size:9px;font-weight:600;padding:2px 7px;border-radius:3px; }
  .tag-teal  { background:rgba(29,233,182,0.1);color:#1de9b6;border:1px solid rgba(29,233,182,0.2); }
  .tag-blue  { background:rgba(30,136,229,0.1);color:#60a5fa;border:1px solid rgba(30,136,229,0.2); }
  .tag-orange{ background:rgba(251,146,60,0.1);color:#fb923c;border:1px solid rgba(251,146,60,0.2); }
  .tag-purple{ background:rgba(167,139,250,0.1);color:#a78bfa;border:1px solid rgba(167,139,250,0.2); }

  .avail-lib { font-size:10px;font-weight:700;color:#22c55e;background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.25);padding:3px 10px;border-radius:10px;white-space:nowrap; }
  .avail-od  { font-size:10px;font-weight:700;color:#f59e0b;background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.25);padding:3px 10px;border-radius:10px;white-space:nowrap; }

  .section-head { display:flex;align-items:center;gap:10px;margin-bottom:20px; }
  .section-pill { display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:8px;flex-shrink:0; }
  .section-pill-wh { background:rgba(29,233,182,0.08);border:1px solid rgba(29,233,182,0.2); }
  .section-pill-au { background:rgba(167,139,250,0.08);border:1px solid rgba(167,139,250,0.2); }
  .section-pill-dc { background:rgba(30,136,229,0.08);border:1px solid rgba(30,136,229,0.2); }

  .stat-strip { display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:28px; }
  .stat-tile { background:#0d1014;border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:16px 20px;text-align:center;transition:border-color .2s; }
  .stat-tile:hover { border-color:rgba(249,115,22,0.15); }
  .stat-num { font-size:26px;font-weight:900;color:#f97316;letter-spacing:-1px;margin:0; }
  .stat-lbl { font-size:10px;font-weight:600;color:#4b5563;margin:3px 0 0;letter-spacing:.1em;text-transform:uppercase; }

  .ds-gallery-2 { display:grid;grid-template-columns:repeat(2,1fr);gap:14px; }
  .ds-gallery-4 { display:grid;grid-template-columns:repeat(4,1fr);gap:12px; }
  .ds-card { background:#0d1014;border:1px solid rgba(255,255,255,0.07);border-radius:12px;overflow:hidden;transition:border-color .2s; }
  .ds-card:hover { border-color:rgba(249,115,22,0.2); }
  .ds-img { width:100%;height:150px;object-fit:cover;display:block; }
  .ds-img-sm { width:100%;height:120px;object-fit:cover;display:block; }
  .ds-body { padding:14px 16px; }
  .ds-name { font-size:13px;font-weight:700;color:#fff;margin:0 0 4px; }
  .ds-meta { font-size:11px;color:#4b5563;margin:0 0 10px; }
  .ds-tags { display:flex;gap:5px;flex-wrap:wrap;align-items:center; }

  .btn-opacity:hover { opacity:.88; }

  ::-webkit-scrollbar { width:5px;height:5px; }
  ::-webkit-scrollbar-track { background:transparent; }
  ::-webkit-scrollbar-thumb { background:#1f2d24;border-radius:4px; }
`;

export default function RoboTaskManipulator() {
  return (
    <>
      <style>{styles}</style>

      {/* NAV */}
      <div style={{position:'sticky',top:0,zIndex:100,background:'rgba(5,9,7,0.99)',borderBottom:'1px solid rgba(29,233,182,0.08)',display:'flex',alignItems:'stretch',height:'88px',backdropFilter:'blur(12px)'}}>
        <a href="homepage.html" className="nav-home">
          <span style={{fontSize:'18px',fontWeight:800,letterSpacing:'.04em',color:'#1de9b6'}}>DataraAI</span>
          <span style={{fontSize:'11px',fontWeight:500,color:'#6b7280',marginTop:'2px'}}>← Back to Home</span>
        </a>
        <a href="robodatahub.html" className="nav-tab">
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
        <a href="robotaskmanipulator.html" className="nav-tab active">
          <span className="tab-label">RoboTaskManipulator</span>
          <span className="tab-sub">Task Execution</span>
        </a>
      </div>

      {/* SIDEBAR + MAIN */}
      <div style={{display:'flex',minHeight:'calc(100vh - 88px)'}}>

        {/* Sidebar */}
        <div className="sidebar">
          <div style={{padding:'24px 20px 20px',borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
            <p style={{fontSize:'18px',fontWeight:800,letterSpacing:'.04em',color:'#1de9b6',margin:'0 0 4px'}}>DataraAI</p>
            <p style={{fontSize:'16px',fontWeight:700,color:'#fff',margin:0}}>Task Manipulator</p>
          </div>
          <div style={{padding:'16px 12px',flex:1}}>
            <p style={{fontSize:'16px',fontWeight:800,color:'#fff',padding:'0 8px',margin:'0 0 12px'}}>Verticals</p>
            <a href="#wh" className="sidebar-item active">
              <span style={{width:'12px',height:'12px',borderRadius:'3px',background:'#1de9b6',flexShrink:0,boxShadow:'0 0 8px rgba(29,233,182,0.5)'}}></span>
              <span style={{fontSize:'16px',fontWeight:800,color:'#fff'}}>Warehouse</span>
            </a>
            <a href="#au" className="sidebar-item">
              <span style={{width:'12px',height:'12px',borderRadius:'3px',background:'#a78bfa',flexShrink:0}}></span>
              <span style={{fontSize:'16px',fontWeight:800,color:'#d1d5db'}}>Automotive</span>
            </a>
            <a href="#dc" className="sidebar-item">
              <span style={{width:'12px',height:'12px',borderRadius:'3px',background:'#1e88e5',flexShrink:0}}></span>
              <span style={{fontSize:'16px',fontWeight:800,color:'#d1d5db'}}>Data Center</span>
            </a>
          </div>
          <div style={{padding:'16px 20px',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
            <button className="btn-opacity" style={{width:'100%',background:'#1de9b6',color:'#040608',border:'none',padding:'9px',borderRadius:'8px',fontSize:'12px',fontWeight:700,cursor:'pointer',transition:'opacity .2s',fontFamily:'inherit'}}>Get Access</button>
          </div>
        </div>

        {/* Main */}
        <div style={{flex:1,padding:'36px 44px',overflow:'auto',background:'linear-gradient(180deg,rgba(249,115,22,0.012) 0%,transparent 220px)'}}>

          {/* Page header */}
          <div style={{marginBottom:'24px'}}>
            <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'8px'}}>
              <div style={{width:'36px',height:'36px',borderRadius:'9px',background:'rgba(249,115,22,0.12)',border:'1px solid rgba(249,115,22,0.35)',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 0 16px rgba(249,115,22,0.2)'}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h1 style={{fontSize:'30px',fontWeight:900,color:'#fff',margin:0,lineHeight:1,letterSpacing:'-.5px'}}>RoboTaskManipulator</h1>
              <span style={{fontSize:'10px',fontWeight:700,color:'#f97316',background:'rgba(249,115,22,0.1)',border:'1px solid rgba(249,115,22,0.25)',padding:'3px 9px',borderRadius:'20px',letterSpacing:'.08em'}}>TASK INTELLIGENCE</span>
            </div>
            <p style={{fontSize:'15px',color:'#6b7280',margin:'0 0 14px',lineHeight:1.8,maxWidth:'640px'}}>
              End-to-end <span style={{color:'#f97316',fontWeight:600}}>assembly</span>, <span style={{color:'#1de9b6',fontWeight:600}}>pick-place</span>, and <span style={{color:'#60a5fa',fontWeight:600}}>cabling</span> workflow datasets — step-segmented and ready for imitation learning and policy training.
            </p>
            <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
              <span style={{fontSize:'12px',fontWeight:600,color:'#f97316',background:'rgba(249,115,22,0.08)',border:'1px solid rgba(249,115,22,0.2)',padding:'5px 13px',borderRadius:'6px'}}><strong>Step Sequences</strong> — Per-task action graph with ordered manipulation primitives</span>
              <span style={{fontSize:'12px',fontWeight:600,color:'#1de9b6',background:'rgba(29,233,182,0.08)',border:'1px solid rgba(29,233,182,0.2)',padding:'5px 13px',borderRadius:'6px'}}><strong>95% Precision</strong> — Validated at Peer Robotics production deployment</span>
            </div>
          </div>

          {/* Stats */}
          <div className="stat-strip">
            <div className="stat-tile"><p className="stat-num">10</p><p className="stat-lbl">Datasets</p></div>
            <div className="stat-tile"><p className="stat-num">3,800+</p><p className="stat-lbl">Hours Labeled</p></div>
            <div className="stat-tile"><p className="stat-num">3</p><p className="stat-lbl">Verticals</p></div>
            <div className="stat-tile" style={{borderColor:'rgba(249,115,22,0.12)',background:'linear-gradient(135deg,rgba(249,115,22,0.05),#0d1014)'}}>
              <p className="stat-num" style={{fontSize:'22px',letterSpacing:0}}>95%</p>
              <p className="stat-lbl">Precision · Peer Robotics</p>
            </div>
          </div>

          {/* How It Works */}
          <div style={{background:'linear-gradient(135deg,#0d1014 0%,#080c10 100%)',border:'1px solid rgba(255,255,255,0.07)',borderRadius:'14px',padding:'28px 32px',marginBottom:'40px',boxShadow:'0 4px 24px rgba(0,0,0,0.3)'}}>
            <p style={{fontSize:'11px',fontWeight:800,color:'#4b5563',margin:'0 0 24px',letterSpacing:'.14em',textTransform:'uppercase'}}>HOW IT WORKS</p>
            <div style={{display:'flex',alignItems:'center'}}>

              <div style={{flex:1,background:'rgba(30,136,229,0.06)',border:'1px solid rgba(30,136,229,0.22)',borderRadius:'12px',padding:'20px 22px'}}>
                <div style={{width:'36px',height:'36px',borderRadius:'8px',background:'rgba(30,136,229,0.15)',border:'1px solid rgba(30,136,229,0.3)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'12px'}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round">
                    <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <p style={{fontSize:'10px',fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'#60a5fa',margin:'0 0 4px'}}>Step 01 · Capture</p>
                <p style={{fontSize:'16px',fontWeight:800,color:'#fff',margin:'0 0 6px'}}>Task Demonstration</p>
                <p style={{fontSize:'11px',color:'#6b7280',margin:0,lineHeight:1.6}}>Human or robot demonstration of pick-place, assembly, or cabling — any workspace or form factor.</p>
              </div>

              <div style={{padding:'0 20px',display:'flex',alignItems:'center',flexShrink:0}}>
                <div style={{width:'56px',height:'2px',background:'linear-gradient(to right,#1e88e5,#f97316)',borderRadius:'2px',boxShadow:'0 0 8px rgba(249,115,22,0.4)'}}></div>
                <div style={{width:0,height:0,borderTop:'7px solid transparent',borderBottom:'7px solid transparent',borderLeft:'11px solid #f97316',filter:'drop-shadow(0 0 4px rgba(249,115,22,0.7))'}}></div>
              </div>

              <div style={{flex:1,background:'rgba(249,115,22,0.1)',border:'2px solid rgba(249,115,22,0.5)',borderRadius:'12px',padding:'20px 22px',boxShadow:'0 0 28px rgba(249,115,22,0.14),inset 0 1px 0 rgba(249,115,22,0.15)'}}>
                <div style={{width:'36px',height:'36px',borderRadius:'8px',background:'rgba(249,115,22,0.2)',border:'1px solid rgba(249,115,22,0.5)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'12px',boxShadow:'0 0 14px rgba(249,115,22,0.35)'}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <p style={{fontSize:'10px',fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'#f97316',margin:'0 0 4px',textShadow:'0 0 8px rgba(249,115,22,0.5)'}}>Step 02</p>
                <p style={{fontSize:'16px',fontWeight:800,color:'#fff',margin:'0 0 8px'}}>RoboTaskManipulator Engine</p>
                <p style={{fontSize:'11px',color:'#6b7280',margin:0,lineHeight:1.5}}>Step segmentation, grasp classification &amp; trajectory extraction.</p>
              </div>

              <div style={{padding:'0 20px',display:'flex',alignItems:'center',flexShrink:0}}>
                <div style={{width:'56px',height:'2px',background:'linear-gradient(to right,#f97316,#1de9b6)',borderRadius:'2px',boxShadow:'0 0 8px rgba(29,233,182,0.4)'}}></div>
                <div style={{width:0,height:0,borderTop:'7px solid transparent',borderBottom:'7px solid transparent',borderLeft:'11px solid #1de9b6',filter:'drop-shadow(0 0 4px rgba(29,233,182,0.7))'}}></div>
              </div>

              <div style={{flex:1,background:'rgba(29,233,182,0.06)',border:'1px solid rgba(29,233,182,0.22)',borderRadius:'12px',padding:'20px 22px'}}>
                <div style={{width:'36px',height:'36px',borderRadius:'8px',background:'rgba(29,233,182,0.12)',border:'1px solid rgba(29,233,182,0.3)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'12px'}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1de9b6" strokeWidth="1.5" strokeLinecap="round">
                    <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                  </svg>
                </div>
                <p style={{fontSize:'10px',fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'#1de9b6',margin:'0 0 4px'}}>Step 03 · Policy Data</p>
                <p style={{fontSize:'16px',fontWeight:800,color:'#fff',margin:'0 0 6px'}}>Task Sequences</p>
                <p style={{fontSize:'11px',color:'#6b7280',margin:0,lineHeight:1.6}}>Labeled step sequences with grasp primitives &amp; waypoints — ready for imitation learning.</p>
              </div>

            </div>
          </div>

          {/* Datasets */}
          <div style={{display:'flex',flexDirection:'column',gap:'40px'}}>

            {/* Warehouse */}
            <div id="wh">
              <div className="section-head">
                <div className="section-pill section-pill-wh">
                  <span style={{width:'8px',height:'8px',borderRadius:'2px',background:'#1de9b6',flexShrink:0,boxShadow:'0 0 8px rgba(29,233,182,0.7)'}}></span>
                  <span style={{fontSize:'14px',fontWeight:800,color:'#fff'}}>Warehouse</span>
                  <span style={{fontSize:'11px',fontWeight:600,color:'#4b5563'}}>2 datasets · 1,200 hrs</span>
                </div>
                <div style={{flex:1,height:'1px',background:'linear-gradient(to right,rgba(29,233,182,0.25),transparent)',marginLeft:'4px'}}></div>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>

                {/* Card 1: Pick & Place */}
                <div className="xform-card card-wh">
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'14px'}}>
                    <div>
                      <p style={{fontSize:'14px',fontWeight:700,color:'#fff',margin:'0 0 2px'}}>Pick &amp; Place — Bin Sorting</p>
                      <p style={{fontSize:'11px',color:'#4b5563',margin:0}}>Wide-aisle EXO of pick cycle → step-segmented grasp &amp; place annotations with waypoints</p>
                    </div>
                    <span className="avail-lib">In Library</span>
                  </div>
                  <div style={{display:'flex',alignItems:'center'}}>
                    <div style={{width:'200px',flexShrink:0}}>
                      <p style={{fontSize:'10px',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'#60a5fa',margin:'0 0 6px'}}>Task Demo</p>
                      <div className="exo-box">
                        <img src="images/wh_pexels-tiger-lily-4483772.jpg" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} alt="Bin Sorting Demo"/>
                        <span className="exo-label">DEMO</span>
                      </div>
                    </div>
                    <div className="pipe">
                      <div className="pipe-line"></div>
                      <div className="pipe-badge">
                        <div style={{width:'40px',height:'40px',borderRadius:'10px',background:'rgba(249,115,22,0.18)',border:'1px solid rgba(249,115,22,0.45)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 10px',boxShadow:'0 0 18px rgba(249,115,22,0.4)'}}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                          </svg>
                        </div>
                        <p style={{fontSize:'8px',fontWeight:800,letterSpacing:'.14em',textTransform:'uppercase',color:'#f97316',margin:'0 0 2px',textShadow:'0 0 10px rgba(249,115,22,0.6)'}}>RoboTask</p>
                        <p style={{fontSize:'12px',fontWeight:800,color:'#fff',margin:'0 0 6px'}}>Engine</p>
                        <p style={{fontSize:'8px',color:'#4b5563',margin:'2px 0 0'}}>Step Segment</p>
                      </div>
                      <div className="pipe-line"></div>
                      <svg width="10" height="14" viewBox="0 0 10 14" fill="none"><path d="M1 1l8 6-8 6" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div style={{flex:1}}>
                      <p style={{fontSize:'10px',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'#1de9b6',margin:'0 0 6px'}}>Task Sequence Output</p>
                      <div className="output-grid">
                        <div className="task-box"><img src="images/wh_pexels-goldcircuits-8377802.jpg" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} alt="Approach"/><span className="task-label">Approach</span></div>
                        <div className="task-box"><img src="images/wh_pexels-goldcircuits-8377802.jpg" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} alt="Grasp"/><span className="task-label">Grasp</span></div>
                        <div className="task-box"><img src="images/wh_pexels-goldcircuits-8377802.jpg" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} alt="Transport"/><span className="task-label">Transport</span></div>
                        <div className="task-box"><img src="images/wh_pexels-goldcircuits-8377802.jpg" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} alt="Place"/><span className="task-label">Place</span></div>
                      </div>
                    </div>
                  </div>
                  <div style={{display:'flex',gap:'6px',flexWrap:'wrap',marginTop:'14px',paddingTop:'12px',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
                    <span className="tag tag-teal">Step Segmentation</span>
                    <span className="tag tag-teal">Grasp Primitives</span>
                    <span className="tag tag-orange">Waypoints</span>
                    <span style={{marginLeft:'auto',fontSize:'12px',fontWeight:700,color:'#f97316'}}>620 hrs labeled</span>
                  </div>
                </div>

                {/* Card 2: Pallet Build */}
                <div className="xform-card card-wh">
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'14px'}}>
                    <div>
                      <p style={{fontSize:'14px',fontWeight:700,color:'#fff',margin:'0 0 2px'}}>Pallet Build — Stack &amp; Wrap</p>
                      <p style={{fontSize:'11px',color:'#4b5563',margin:0}}>Floor-level EXO of pallet stacking → ordered stack sequence with wrap &amp; secure step labels</p>
                    </div>
                    <span className="avail-od">On-demand</span>
                  </div>
                  <div style={{display:'flex',alignItems:'center'}}>
                    <div style={{width:'200px',flexShrink:0}}>
                      <p style={{fontSize:'10px',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'#60a5fa',margin:'0 0 6px'}}>Task Demo</p>
                      <div className="exo-box">
                        <img src="images/wh_pexels-ihsanaditya-10834810.jpg" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} alt="Pallet Build Demo"/>
                        <span className="exo-label">DEMO</span>
                      </div>
                    </div>
                    <div className="pipe">
                      <div className="pipe-line"></div>
                      <div className="pipe-badge">
                        <div style={{width:'40px',height:'40px',borderRadius:'10px',background:'rgba(249,115,22,0.18)',border:'1px solid rgba(249,115,22,0.45)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 10px',boxShadow:'0 0 18px rgba(249,115,22,0.4)'}}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                          </svg>
                        </div>
                        <p style={{fontSize:'8px',fontWeight:800,letterSpacing:'.14em',textTransform:'uppercase',color:'#f97316',margin:'0 0 2px',textShadow:'0 0 10px rgba(249,115,22,0.6)'}}>RoboTask</p>
                        <p style={{fontSize:'12px',fontWeight:800,color:'#fff',margin:'0 0 6px'}}>Engine</p>
                        <p style={{fontSize:'8px',color:'#4b5563',margin:'2px 0 0'}}>Trajectory Map</p>
                      </div>
                      <div className="pipe-line"></div>
                      <svg width="10" height="14" viewBox="0 0 10 14" fill="none"><path d="M1 1l8 6-8 6" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div style={{flex:1}}>
                      <p style={{fontSize:'10px',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'#1de9b6',margin:'0 0 6px'}}>Task Sequence Output</p>
                      <div className="output-grid">
                        <div className="task-box"><img src="images/wh_pexels-endura-tiles-370085044-14554082.jpg" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} alt="Layer 1"/><span className="task-label">Layer 1</span></div>
                        <div className="task-box"><img src="images/wh_pexels-endura-tiles-370085044-14554082.jpg" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} alt="Stack Pt."/><span className="task-label">Stack Pt.</span></div>
                        <div className="task-box"><img src="images/wh_pexels-endura-tiles-370085044-14554082.jpg" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} alt="Wrap Path"/><span className="task-label">Wrap Path</span></div>
                        <div className="task-box"><img src="images/wh_pexels-endura-tiles-370085044-14554082.jpg" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} alt="Secure"/><span className="task-label">Secure</span></div>
                      </div>
                    </div>
                  </div>
                  <div style={{display:'flex',gap:'6px',flexWrap:'wrap',marginTop:'14px',paddingTop:'12px',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
                    <span className="tag tag-teal">Stack Sequence</span>
                    <span className="tag tag-orange">Height Estimation</span>
                    <span className="tag tag-blue">Wrap Trajectory</span>
                    <span style={{marginLeft:'auto',fontSize:'12px',fontWeight:700,color:'#f97316'}}>580 hrs labeled</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Automotive Assembly */}
            <div id="au">
              <div className="section-head">
                <div className="section-pill section-pill-au">
                  <span style={{width:'8px',height:'8px',borderRadius:'2px',background:'#a78bfa',flexShrink:0,boxShadow:'0 0 8px rgba(167,139,250,0.7)'}}></span>
                  <span style={{fontSize:'14px',fontWeight:800,color:'#fff'}}>Automotive Assembly</span>
                  <span style={{fontSize:'11px',fontWeight:600,color:'#4b5563'}}>4 datasets · 1,540 hrs</span>
                </div>
                <div style={{flex:1,height:'1px',background:'linear-gradient(to right,rgba(167,139,250,0.25),transparent)',marginLeft:'4px'}}></div>
              </div>
              <div className="ds-gallery-2">

                <div className="ds-card" style={{borderColor:'rgba(167,139,250,0.1)'}}>
                  <img src="images/frontGrille_012.png" className="ds-img" alt="Front Grille Assembly"/>
                  <div className="ds-body">
                    <p className="ds-name">Front Grille Assembly</p>
                    <p className="ds-meta">Clip-insert &amp; fastener sequence — 12 sub-steps</p>
                    <div className="ds-tags">
                      <span className="tag tag-purple">Precision Insert</span>
                      <span className="tag tag-orange">Force Feedback</span>
                      <span style={{marginLeft:'auto',fontSize:'10px',fontWeight:700,color:'#f97316'}}>420 hrs</span>
                    </div>
                  </div>
                </div>

                <div className="ds-card" style={{borderColor:'rgba(167,139,250,0.1)'}}>
                  <img src="images/rearBumper_021.png" className="ds-img" alt="Rear Bumper Installation"/>
                  <div className="ds-body">
                    <p className="ds-name">Rear Bumper Installation</p>
                    <p className="ds-meta">Two-arm alignment, clip-in &amp; torque verification</p>
                    <div className="ds-tags">
                      <span className="tag tag-purple">Bimanual</span>
                      <span className="tag tag-teal">Alignment</span>
                      <span style={{marginLeft:'auto',fontSize:'10px',fontWeight:700,color:'#f97316'}}>380 hrs</span>
                    </div>
                  </div>
                </div>

                <div className="ds-card" style={{borderColor:'rgba(167,139,250,0.1)'}}>
                  <img src="images/frontSeat_007.png" className="ds-img" alt="Front Seat Assembly"/>
                  <div className="ds-body">
                    <p className="ds-name">Front Seat Assembly</p>
                    <p className="ds-meta">Rail mount, bolt torque &amp; harness connection sequence</p>
                    <div className="ds-tags">
                      <span className="tag tag-purple">Multi-step</span>
                      <span className="tag tag-blue">Torque Seq.</span>
                      <span style={{marginLeft:'auto',fontSize:'10px',fontWeight:700,color:'#f97316'}}>360 hrs</span>
                    </div>
                  </div>
                </div>

                <div className="ds-card" style={{borderColor:'rgba(167,139,250,0.1)'}}>
                  <img src="images/passengerSeat_0100_Rotate_left_45_degrees.png" className="ds-img" alt="Passenger Seat Positioning"/>
                  <div className="ds-body">
                    <p className="ds-name">Passenger Seat Positioning</p>
                    <p className="ds-meta">Rotation &amp; slide-lock with 45° approach variant</p>
                    <div className="ds-tags">
                      <span className="tag tag-purple">Rotation</span>
                      <span className="tag tag-orange">Slide-lock</span>
                      <span style={{marginLeft:'auto',fontSize:'10px',fontWeight:700,color:'#f97316'}}>380 hrs</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Data Center */}
            <div id="dc">
              <div className="section-head">
                <div className="section-pill section-pill-dc">
                  <span style={{width:'8px',height:'8px',borderRadius:'2px',background:'#1e88e5',flexShrink:0,boxShadow:'0 0 8px rgba(30,136,229,0.7)'}}></span>
                  <span style={{fontSize:'14px',fontWeight:800,color:'#fff'}}>Data Center</span>
                  <span style={{fontSize:'11px',fontWeight:600,color:'#4b5563'}}>4 datasets · 1,060 hrs</span>
                </div>
                <div style={{flex:1,height:'1px',background:'linear-gradient(to right,rgba(30,136,229,0.25),transparent)',marginLeft:'4px'}}></div>
              </div>
              <div className="ds-gallery-4">

                <div className="ds-card" style={{borderColor:'rgba(30,136,229,0.1)'}}>
                  <img src="images/dc_Screenshot_2026-01-13_at_2.06.33_PM.png" className="ds-img-sm" alt="Server Rack Cabling"/>
                  <div className="ds-body">
                    <p className="ds-name">Server Rack Cabling</p>
                    <p className="ds-meta">Cable route, insert &amp; label sequence</p>
                    <div className="ds-tags">
                      <span className="tag tag-blue">Cable Route</span>
                      <span style={{marginLeft:'auto',fontSize:'10px',fontWeight:700,color:'#f97316'}}>280 hrs</span>
                    </div>
                  </div>
                </div>

                <div className="ds-card" style={{borderColor:'rgba(30,136,229,0.1)'}}>
                  <img src="images/dc_Screenshot_2026-01-13_at_4.38.12_PM.png" className="ds-img-sm" alt="Hardware Swap"/>
                  <div className="ds-body">
                    <p className="ds-name">Hardware Swap Protocol</p>
                    <p className="ds-meta">Drive, card &amp; module replacement</p>
                    <div className="ds-tags">
                      <span className="tag tag-blue">Hot-swap</span>
                      <span style={{marginLeft:'auto',fontSize:'10px',fontWeight:700,color:'#f97316'}}>260 hrs</span>
                    </div>
                  </div>
                </div>

                <div className="ds-card" style={{borderColor:'rgba(30,136,229,0.1)'}}>
                  <img src="images/dc_Screenshot_2026-01-13_at_4.38.43_PM.png" className="ds-img-sm" alt="Component Inspection"/>
                  <div className="ds-body">
                    <p className="ds-name">Component Inspection</p>
                    <p className="ds-meta">Visual scan &amp; probe verification steps</p>
                    <div className="ds-tags">
                      <span className="tag tag-blue">Visual QA</span>
                      <span style={{marginLeft:'auto',fontSize:'10px',fontWeight:700,color:'#f97316'}}>260 hrs</span>
                    </div>
                  </div>
                </div>

                <div className="ds-card" style={{borderColor:'rgba(30,136,229,0.1)'}}>
                  <img src="images/dc_Screenshot_2026-01-13_at_4.38.50_PM.png" className="ds-img-sm" alt="Cable Management"/>
                  <div className="ds-body">
                    <p className="ds-name">Cable Management</p>
                    <p className="ds-meta">Bundle, route &amp; secure with label scan</p>
                    <div className="ds-tags">
                      <span className="tag tag-blue">Bundling</span>
                      <span style={{marginLeft:'auto',fontSize:'10px',fontWeight:700,color:'#f97316'}}>260 hrs</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Request section */}
            <div style={{marginTop:'4px',padding:'28px 32px',background:'linear-gradient(135deg,rgba(249,115,22,0.05) 0%,rgba(255,255,255,0.02) 100%)',border:'1px solid rgba(249,115,22,0.12)',borderRadius:'14px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',boxShadow:'0 0 40px rgba(249,115,22,0.06)'}}>
              <div style={{display:'flex',alignItems:'center',gap:'16px'}}>
                <div style={{width:'44px',height:'44px',borderRadius:'11px',background:'rgba(249,115,22,0.1)',border:'1px solid rgba(249,115,22,0.25)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,boxShadow:'0 0 16px rgba(249,115,22,0.15)'}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </div>
                <div>
                  <p style={{fontSize:'15px',fontWeight:700,color:'#fff',margin:'0 0 4px'}}>Run RoboTaskManipulator on Your Workflow</p>
                  <p style={{fontSize:'12px',color:'#6b7280',margin:0,lineHeight:1.5,maxWidth:'480px'}}>Have assembly, pick-place, or cabling footage? We'll generate step-segmented task sequences with grasp primitives and waypoints — across any task, environment, or robot form factor.</p>
                </div>
              </div>
              <div style={{display:'flex',gap:'8px',flexShrink:0,alignItems:'center',flexDirection:'column'}}>
                <div style={{display:'flex',gap:'5px'}}>
                  <span style={{fontSize:'10px',fontWeight:700,color:'#1de9b6',background:'rgba(29,233,182,0.1)',border:'1px solid rgba(29,233,182,0.2)',padding:'3px 8px',borderRadius:'4px'}}>Warehouse</span>
                  <span style={{fontSize:'10px',fontWeight:700,color:'#a78bfa',background:'rgba(167,139,250,0.1)',border:'1px solid rgba(167,139,250,0.2)',padding:'3px 8px',borderRadius:'4px'}}>Automotive</span>
                  <span style={{fontSize:'10px',fontWeight:700,color:'#60a5fa',background:'rgba(30,136,229,0.1)',border:'1px solid rgba(30,136,229,0.2)',padding:'3px 8px',borderRadius:'4px'}}>Data Center</span>
                </div>
                <button className="btn-opacity" style={{width:'100%',fontSize:'13px',fontWeight:700,color:'#040608',background:'#f97316',border:'none',padding:'10px 24px',borderRadius:'8px',cursor:'pointer',transition:'opacity .2s',whiteSpace:'nowrap',fontFamily:'inherit'}}>Submit Your Workflow</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
