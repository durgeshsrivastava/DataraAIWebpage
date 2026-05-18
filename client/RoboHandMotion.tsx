import { useState } from 'react';

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
  .sidebar-item.active { background:rgba(167,139,250,0.1);border:1px solid rgba(167,139,250,0.15); }

  .xform-card { background:linear-gradient(135deg,#0d1014 0%,#080b0f 100%);border:1px solid rgba(255,255,255,0.07);border-radius:14px;overflow:hidden;padding:20px 24px 20px 27px;transition:box-shadow .25s,border-color .25s;position:relative; }
  .xform-card::before { content:'';position:absolute;left:0;top:0;bottom:0;width:3px;border-radius:14px 0 0 14px; }
  .card-dk::before { background:linear-gradient(to bottom,#a78bfa 0%,rgba(167,139,250,0.15) 100%); }
  .card-dk:hover { box-shadow:0 6px 36px rgba(0,0,0,0.5),0 0 28px rgba(167,139,250,0.08);border-color:rgba(167,139,250,0.18); }
  .card-ht::before { background:linear-gradient(to bottom,#f97316 0%,rgba(249,115,22,0.15) 100%); }
  .card-ht:hover { box-shadow:0 6px 36px rgba(0,0,0,0.5),0 0 28px rgba(249,115,22,0.08);border-color:rgba(249,115,22,0.18); }

  .exo-box { position:relative;border-radius:10px;overflow:hidden;border:2px solid rgba(30,136,229,0.5);height:160px;box-shadow:0 0 20px rgba(30,136,229,0.1),inset 0 0 24px rgba(30,136,229,0.05); }
  .exo-label { position:absolute;top:8px;left:8px;font-size:9px;font-weight:800;letter-spacing:.12em;color:#fff;background:#1e88e5;padding:3px 8px;border-radius:4px;box-shadow:0 2px 8px rgba(30,136,229,0.4); }

  .motion-box { position:relative;border-radius:8px;overflow:hidden;border:2px solid rgba(167,139,250,0.55);height:160px;box-shadow:0 0 14px rgba(167,139,250,0.1),inset 0 0 16px rgba(167,139,250,0.04); }
  .motion-label { position:absolute;top:6px;left:6px;font-size:8px;font-weight:800;letter-spacing:.08em;color:#040608;background:#a78bfa;padding:2px 6px;border-radius:3px;box-shadow:0 1px 6px rgba(167,139,250,0.4); }

  .output-grid { display:grid;grid-template-columns:1fr 1fr;gap:8px; }

  .pipe { display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;padding:0 16px;flex-shrink:0; }
  .pipe-line { width:2px;height:24px;background:linear-gradient(to bottom,rgba(167,139,250,0.05),rgba(167,139,250,0.55),rgba(167,139,250,0.05)); }
  .pipe-badge { background:linear-gradient(135deg,rgba(167,139,250,0.15),rgba(167,139,250,0.04));border:2px solid rgba(167,139,250,0.5);border-radius:16px;padding:16px 14px;text-align:center;white-space:nowrap;box-shadow:0 0 32px rgba(167,139,250,0.18),0 0 60px rgba(167,139,250,0.06),inset 0 1px 0 rgba(167,139,250,0.15); }

  .tag { display:inline-block;font-size:9px;font-weight:600;padding:2px 7px;border-radius:3px; }
  .tag-teal { background:rgba(29,233,182,0.1);color:#1de9b6;border:1px solid rgba(29,233,182,0.2); }
  .tag-blue { background:rgba(30,136,229,0.1);color:#60a5fa;border:1px solid rgba(30,136,229,0.2); }
  .tag-orange { background:rgba(251,146,60,0.1);color:#fb923c;border:1px solid rgba(251,146,60,0.2); }
  .tag-purple { background:rgba(167,139,250,0.1);color:#a78bfa;border:1px solid rgba(167,139,250,0.2); }

  .avail-lib { font-size:10px;font-weight:700;color:#22c55e;background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.25);padding:3px 10px;border-radius:10px;white-space:nowrap; }
  .avail-od  { font-size:10px;font-weight:700;color:#f59e0b;background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.25);padding:3px 10px;border-radius:10px;white-space:nowrap; }

  .section-head { display:flex;align-items:center;gap:10px;margin-bottom:20px; }
  .section-pill { display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:8px;flex-shrink:0; }
  .section-pill-dk { background:rgba(167,139,250,0.08);border:1px solid rgba(167,139,250,0.2); }
  .section-pill-ht { background:rgba(249,115,22,0.08);border:1px solid rgba(249,115,22,0.2); }

  .stat-strip { display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:28px; }
  .stat-tile { background:#0d1014;border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:16px 20px;text-align:center;transition:border-color .2s; }
  .stat-tile:hover { border-color:rgba(167,139,250,0.15); }
  .stat-num { font-size:26px;font-weight:900;color:#a78bfa;letter-spacing:-1px;margin:0; }
  .stat-lbl { font-size:10px;font-weight:600;color:#4b5563;margin:3px 0 0;letter-spacing:.1em;text-transform:uppercase; }

  .ds-gallery { display:grid;grid-template-columns:repeat(3,1fr);gap:14px; }
  .ds-card { background:#0d1014;border:1px solid rgba(255,255,255,0.07);border-radius:12px;overflow:hidden;transition:border-color .2s; }
  .ds-card:hover { border-color:rgba(167,139,250,0.2); }
  .ds-img { width:100%;height:150px;object-fit:cover;display:block; }
  .ds-body { padding:14px 16px; }
  .ds-name { font-size:13px;font-weight:700;color:#fff;margin:0 0 4px; }
  .ds-meta { font-size:11px;color:#4b5563;margin:0 0 10px; }
  .ds-tags { display:flex;gap:5px;flex-wrap:wrap;align-items:center; }

  .btn-opacity:hover { opacity:.88; }

  ::-webkit-scrollbar { width:5px;height:5px; }
  ::-webkit-scrollbar-track { background:transparent; }
  ::-webkit-scrollbar-thumb { background:#1f2d24;border-radius:4px; }
`;

export default function RoboHandMotion() {
  const [_hover, _setHover] = useState(false);

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
        <a href="robohandmotion.html" className="nav-tab active">
          <span className="tab-label">RoboHandMotion</span>
          <span className="tab-sub">Humanoid Data</span>
        </a>
        <a href="robotaskmanipulator.html" className="nav-tab">
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
            <p style={{fontSize:'16px',fontWeight:700,color:'#fff',margin:0}}>Hand Motion</p>
          </div>
          <div style={{padding:'16px 12px',flex:1}}>
            <p style={{fontSize:'16px',fontWeight:800,color:'#fff',padding:'0 8px',margin:'0 0 12px'}}>Verticals</p>
            <a href="#dk" className="sidebar-item active">
              <span style={{width:'12px',height:'12px',borderRadius:'3px',background:'#a78bfa',flexShrink:0,boxShadow:'0 0 8px rgba(167,139,250,0.5)'}}></span>
              <span style={{fontSize:'16px',fontWeight:800,color:'#fff'}}>Dexterous</span>
            </a>
            <a href="#ht" className="sidebar-item">
              <span style={{width:'12px',height:'12px',borderRadius:'3px',background:'#f97316',flexShrink:0}}></span>
              <span style={{fontSize:'16px',fontWeight:800,color:'#d1d5db'}}>Household</span>
            </a>
          </div>
          <div style={{padding:'16px 20px',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
            <button className="btn-opacity" style={{width:'100%',background:'#1de9b6',color:'#040608',border:'none',padding:'9px',borderRadius:'8px',fontSize:'12px',fontWeight:700,cursor:'pointer',transition:'opacity .2s',fontFamily:'inherit'}}>Get Access</button>
          </div>
        </div>

        {/* Main */}
        <div style={{flex:1,padding:'36px 44px',overflow:'auto',background:'linear-gradient(180deg,rgba(167,139,250,0.012) 0%,transparent 220px)'}}>

          {/* Page header */}
          <div style={{marginBottom:'24px'}}>
            <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'8px'}}>
              <div style={{width:'36px',height:'36px',borderRadius:'9px',background:'rgba(167,139,250,0.12)',border:'1px solid rgba(167,139,250,0.35)',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 0 16px rgba(167,139,250,0.2)'}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 11V6a2 2 0 0 0-4 0v1M14 10V4a2 2 0 0 0-4 0v2M10 10.5V6a2 2 0 0 0-4 0v8M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
                </svg>
              </div>
              <h1 style={{fontSize:'30px',fontWeight:900,color:'#fff',margin:0,lineHeight:1,letterSpacing:'-.5px'}}>RoboHandMotion</h1>
              <span style={{fontSize:'10px',fontWeight:700,color:'#a78bfa',background:'rgba(167,139,250,0.1)',border:'1px solid rgba(167,139,250,0.25)',padding:'3px 9px',borderRadius:'20px',letterSpacing:'.08em'}}>PATENTED</span>
            </div>
            <p style={{fontSize:'15px',color:'#6b7280',margin:'0 0 14px',lineHeight:1.8,maxWidth:'640px'}}>
              Patented pipeline capturing <span style={{color:'#a78bfa',fontWeight:600}}>hand pose</span>, <span style={{color:'#60a5fa',fontWeight:600}}>tool interactions</span>, and <span style={{color:'#f97316',fontWeight:600}}>object states</span> — labeled and ready for dexterous robot model training.
            </p>
            <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
              <span style={{fontSize:'12px',fontWeight:600,color:'#a78bfa',background:'rgba(167,139,250,0.08)',border:'1px solid rgba(167,139,250,0.2)',padding:'5px 13px',borderRadius:'6px'}}><strong>Hand Pose</strong> — Per-frame keypoint skeleton, joint angles &amp; finger trajectories</span>
              <span style={{fontSize:'12px',fontWeight:600,color:'#60a5fa',background:'rgba(30,136,229,0.08)',border:'1px solid rgba(30,136,229,0.2)',padding:'5px 13px',borderRadius:'6px'}}><strong>Object State</strong> — Grasped object identity, orientation &amp; contact classification</span>
            </div>
          </div>

          {/* Stats */}
          <div className="stat-strip">
            <div className="stat-tile"><p className="stat-num">8</p><p className="stat-lbl">Datasets</p></div>
            <div className="stat-tile"><p className="stat-num">2,850+</p><p className="stat-lbl">Hours Labeled</p></div>
            <div className="stat-tile"><p className="stat-num">2</p><p className="stat-lbl">Verticals</p></div>
            <div className="stat-tile" style={{borderColor:'rgba(167,139,250,0.12)',background:'linear-gradient(135deg,rgba(167,139,250,0.05),#0d1014)'}}>
              <p className="stat-num" style={{fontSize:'18px',letterSpacing:0}}>Patented</p>
              <p className="stat-lbl">Hand Motion Pipeline</p>
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
                <p style={{fontSize:'16px',fontWeight:800,color:'#fff',margin:'0 0 6px'}}>Raw Video Footage</p>
                <p style={{fontSize:'11px',color:'#6b7280',margin:0,lineHeight:1.6}}>Third-person footage of hand tasks: household, kitchen, or manipulation — any fixed or mobile camera.</p>
              </div>

              <div style={{padding:'0 20px',display:'flex',alignItems:'center',flexShrink:0}}>
                <div style={{width:'56px',height:'2px',background:'linear-gradient(to right,#1e88e5,#a78bfa)',borderRadius:'2px',boxShadow:'0 0 8px rgba(167,139,250,0.4)'}}></div>
                <div style={{width:0,height:0,borderTop:'7px solid transparent',borderBottom:'7px solid transparent',borderLeft:'11px solid #a78bfa',filter:'drop-shadow(0 0 4px rgba(167,139,250,0.7))'}}></div>
              </div>

              <div style={{flex:1,background:'rgba(167,139,250,0.1)',border:'2px solid rgba(167,139,250,0.5)',borderRadius:'12px',padding:'20px 22px',boxShadow:'0 0 28px rgba(167,139,250,0.14),inset 0 1px 0 rgba(167,139,250,0.15)'}}>
                <div style={{width:'36px',height:'36px',borderRadius:'8px',background:'rgba(167,139,250,0.2)',border:'1px solid rgba(167,139,250,0.5)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'12px',boxShadow:'0 0 14px rgba(167,139,250,0.35)'}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 11V6a2 2 0 0 0-4 0v1M14 10V4a2 2 0 0 0-4 0v2M10 10.5V6a2 2 0 0 0-4 0v8M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
                  </svg>
                </div>
                <p style={{fontSize:'10px',fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'#a78bfa',margin:'0 0 4px',textShadow:'0 0 8px rgba(167,139,250,0.5)'}}>Step 02</p>
                <p style={{fontSize:'16px',fontWeight:800,color:'#fff',margin:'0 0 8px'}}>RoboHandMotion Engine</p>
                <p style={{fontSize:'11px',color:'#6b7280',margin:0,lineHeight:1.5}}>Pose estimation, keypoint tracking &amp; interaction labeling.</p>
              </div>

              <div style={{padding:'0 20px',display:'flex',alignItems:'center',flexShrink:0}}>
                <div style={{width:'56px',height:'2px',background:'linear-gradient(to right,#a78bfa,#f97316)',borderRadius:'2px',boxShadow:'0 0 8px rgba(249,115,22,0.4)'}}></div>
                <div style={{width:0,height:0,borderTop:'7px solid transparent',borderBottom:'7px solid transparent',borderLeft:'11px solid #f97316',filter:'drop-shadow(0 0 4px rgba(249,115,22,0.7))'}}></div>
              </div>

              <div style={{flex:1,background:'rgba(249,115,22,0.06)',border:'1px solid rgba(249,115,22,0.22)',borderRadius:'12px',padding:'20px 22px'}}>
                <div style={{width:'36px',height:'36px',borderRadius:'8px',background:'rgba(249,115,22,0.12)',border:'1px solid rgba(249,115,22,0.3)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'12px'}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </div>
                <p style={{fontSize:'10px',fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'#f97316',margin:'0 0 4px'}}>Step 03 · Training Data</p>
                <p style={{fontSize:'16px',fontWeight:800,color:'#fff',margin:'0 0 6px'}}>Labeled Motion Datasets</p>
                <p style={{fontSize:'11px',color:'#6b7280',margin:0,lineHeight:1.6}}>Pose sequences, grasp annotations &amp; tool trajectories — ready for dexterous robot model training.</p>
              </div>

            </div>
          </div>

          {/* Datasets */}
          <div style={{display:'flex',flexDirection:'column',gap:'40px'}}>

            {/* Dexterous Kitchen */}
            <div id="dk">
              <div className="section-head">
                <div className="section-pill section-pill-dk">
                  <span style={{width:'8px',height:'8px',borderRadius:'2px',background:'#a78bfa',flexShrink:0,boxShadow:'0 0 8px rgba(167,139,250,0.7)'}}></span>
                  <span style={{fontSize:'14px',fontWeight:800,color:'#fff'}}>Dexterous Kitchen</span>
                  <span style={{fontSize:'11px',fontWeight:600,color:'#4b5563'}}>3 datasets · 1,430 hrs</span>
                </div>
                <div style={{flex:1,height:'1px',background:'linear-gradient(to right,rgba(167,139,250,0.25),transparent)',marginLeft:'4px'}}></div>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>

                {/* Card 1: Drawer */}
                <div className="xform-card card-dk">
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'14px'}}>
                    <div>
                      <p style={{fontSize:'14px',fontWeight:700,color:'#fff',margin:'0 0 2px'}}>Kitchen Drawer Manipulation</p>
                      <p style={{fontSize:'11px',color:'#4b5563',margin:0}}>Full-body EXO of trash bag handling → hand-level pose &amp; grasp annotations</p>
                    </div>
                    <span className="avail-od">On-demand</span>
                  </div>
                  <div style={{display:'flex',alignItems:'center'}}>
                    <div style={{width:'200px',flexShrink:0}}>
                      <p style={{fontSize:'10px',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'#60a5fa',margin:'0 0 6px'}}>EXO Source</p>
                      <div className="exo-box">
                        <img src="images/rev/human1_exo.png" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} alt="Kitchen Drawer EXO"/>
                        <span className="exo-label">EXO</span>
                      </div>
                    </div>
                    <div className="pipe">
                      <div className="pipe-line"></div>
                      <div className="pipe-badge">
                        <div style={{width:'40px',height:'40px',borderRadius:'10px',background:'rgba(167,139,250,0.18)',border:'1px solid rgba(167,139,250,0.45)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 10px',boxShadow:'0 0 18px rgba(167,139,250,0.4)'}}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 11V6a2 2 0 0 0-4 0v1M14 10V4a2 2 0 0 0-4 0v2M10 10.5V6a2 2 0 0 0-4 0v8M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
                          </svg>
                        </div>
                        <p style={{fontSize:'8px',fontWeight:800,letterSpacing:'.14em',textTransform:'uppercase',color:'#a78bfa',margin:'0 0 2px',textShadow:'0 0 10px rgba(167,139,250,0.6)'}}>RoboHandMotion</p>
                        <p style={{fontSize:'12px',fontWeight:800,color:'#fff',margin:'0 0 6px'}}>Engine</p>
                        <p style={{fontSize:'8px',color:'#4b5563',margin:'2px 0 0'}}>Hand Tracking</p>
                      </div>
                      <div className="pipe-line"></div>
                      <svg width="10" height="14" viewBox="0 0 10 14" fill="none"><path d="M1 1l8 6-8 6" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div style={{flex:1}}>
                      <p style={{fontSize:'10px',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'#f97316',margin:'0 0 6px'}}>Labeled Motion Output</p>
                      <div className="output-grid">
                        <div className="motion-box"><img src="images/rev/human1_ego1.png" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} alt="Wrist Pose"/><span className="motion-label">Wrist Pose</span></div>
                        <div className="motion-box"><img src="images/rev/human1_ego1.png" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} alt="Finger Joints"/><span className="motion-label">Finger Joints</span></div>
                        <div className="motion-box"><img src="images/rev/human1_ego1.png" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} alt="Grasp Point"/><span className="motion-label">Grasp Point</span></div>
                        <div className="motion-box"><img src="images/rev/human1_ego1.png" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} alt="Motion Path"/><span className="motion-label">Motion Path</span></div>
                      </div>
                    </div>
                  </div>
                  <div style={{display:'flex',gap:'6px',flexWrap:'wrap',marginTop:'14px',paddingTop:'12px',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
                    <span className="tag tag-purple">Hand Pose Tracking</span>
                    <span className="tag tag-purple">Wrist-level Annotations</span>
                    <span className="tag tag-orange">Grasp Points</span>
                    <span style={{marginLeft:'auto',fontSize:'12px',fontWeight:700,color:'#a78bfa'}}>380 hrs labeled</span>
                  </div>
                </div>

                {/* Card 2: Stovetop */}
                <div className="xform-card card-dk">
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'14px'}}>
                    <div>
                      <p style={{fontSize:'14px',fontWeight:700,color:'#fff',margin:'0 0 2px'}}>Surface Cleaning — Stovetop</p>
                      <p style={{fontSize:'11px',color:'#4b5563',margin:0}}>Full-body cleaning EXO → hand skeleton &amp; contact zone annotations at varied proximities</p>
                    </div>
                    <span className="avail-lib">In Library</span>
                  </div>
                  <div style={{display:'flex',alignItems:'center'}}>
                    <div style={{width:'200px',flexShrink:0}}>
                      <p style={{fontSize:'10px',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'#60a5fa',margin:'0 0 6px'}}>EXO Source</p>
                      <div className="exo-box">
                        <img src="images/rev/human2_exo.png" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} alt="Stovetop EXO"/>
                        <span className="exo-label">EXO</span>
                      </div>
                    </div>
                    <div className="pipe">
                      <div className="pipe-line"></div>
                      <div className="pipe-badge">
                        <div style={{width:'40px',height:'40px',borderRadius:'10px',background:'rgba(167,139,250,0.18)',border:'1px solid rgba(167,139,250,0.45)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 10px',boxShadow:'0 0 18px rgba(167,139,250,0.4)'}}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 11V6a2 2 0 0 0-4 0v1M14 10V4a2 2 0 0 0-4 0v2M10 10.5V6a2 2 0 0 0-4 0v8M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
                          </svg>
                        </div>
                        <p style={{fontSize:'8px',fontWeight:800,letterSpacing:'.14em',textTransform:'uppercase',color:'#a78bfa',margin:'0 0 2px',textShadow:'0 0 10px rgba(167,139,250,0.6)'}}>RoboHandMotion</p>
                        <p style={{fontSize:'12px',fontWeight:800,color:'#fff',margin:'0 0 6px'}}>Engine</p>
                        <p style={{fontSize:'8px',color:'#4b5563',margin:'2px 0 0'}}>Motion Synthesis</p>
                      </div>
                      <div className="pipe-line"></div>
                      <svg width="10" height="14" viewBox="0 0 10 14" fill="none"><path d="M1 1l8 6-8 6" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div style={{flex:1}}>
                      <p style={{fontSize:'10px',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'#f97316',margin:'0 0 6px'}}>Labeled Motion Output</p>
                      <div className="output-grid">
                        <div className="motion-box"><img src="images/rev/human2_ego1.png" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} alt="Hand Path"/><span className="motion-label">Hand Path</span></div>
                        <div className="motion-box"><img src="images/rev/human2_ego2.png" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} alt="Contact Points"/><span className="motion-label">Contact Points</span></div>
                        <div className="motion-box"><img src="images/rev/human2_ego1.png" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} alt="Pose Sequence"/><span className="motion-label">Pose Sequence</span></div>
                        <div className="motion-box"><img src="images/rev/human2_ego2.png" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} alt="Close-up"/><span className="motion-label">Close-up</span></div>
                      </div>
                    </div>
                  </div>
                  <div style={{display:'flex',gap:'6px',flexWrap:'wrap',marginTop:'14px',paddingTop:'12px',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
                    <span className="tag tag-purple">Hand Pose Tracking</span>
                    <span className="tag tag-teal">Surface Segmentation</span>
                    <span className="tag tag-blue">Multi-distance Views</span>
                    <span style={{marginLeft:'auto',fontSize:'12px',fontWeight:700,color:'#a78bfa'}}>450 hrs labeled</span>
                  </div>
                </div>

                {/* Card 3: Dishwashing */}
                <div className="xform-card card-dk">
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'14px'}}>
                    <div>
                      <p style={{fontSize:'14px',fontWeight:700,color:'#fff',margin:'0 0 2px'}}>Dishwashing — Sink Manipulation</p>
                      <p style={{fontSize:'11px',color:'#4b5563',margin:0}}>Wide kitchen scene EXO → grasp classification &amp; wet object handling annotations</p>
                    </div>
                    <span className="avail-od">On-demand</span>
                  </div>
                  <div style={{display:'flex',alignItems:'center'}}>
                    <div style={{width:'200px',flexShrink:0}}>
                      <p style={{fontSize:'10px',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'#60a5fa',margin:'0 0 6px'}}>EXO Source</p>
                      <div className="exo-box">
                        <img src="images/rev/human3_exo.png" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} alt="Dishwashing EXO"/>
                        <span className="exo-label">EXO</span>
                      </div>
                    </div>
                    <div className="pipe">
                      <div className="pipe-line"></div>
                      <div className="pipe-badge">
                        <div style={{width:'40px',height:'40px',borderRadius:'10px',background:'rgba(167,139,250,0.18)',border:'1px solid rgba(167,139,250,0.45)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 10px',boxShadow:'0 0 18px rgba(167,139,250,0.4)'}}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 11V6a2 2 0 0 0-4 0v1M14 10V4a2 2 0 0 0-4 0v2M10 10.5V6a2 2 0 0 0-4 0v8M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
                          </svg>
                        </div>
                        <p style={{fontSize:'8px',fontWeight:800,letterSpacing:'.14em',textTransform:'uppercase',color:'#a78bfa',margin:'0 0 2px',textShadow:'0 0 10px rgba(167,139,250,0.6)'}}>RoboHandMotion</p>
                        <p style={{fontSize:'12px',fontWeight:800,color:'#fff',margin:'0 0 6px'}}>Engine</p>
                        <p style={{fontSize:'8px',color:'#4b5563',margin:'2px 0 0'}}>Grasp Synthesis</p>
                      </div>
                      <div className="pipe-line"></div>
                      <svg width="10" height="14" viewBox="0 0 10 14" fill="none"><path d="M1 1l8 6-8 6" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div style={{flex:1}}>
                      <p style={{fontSize:'10px',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'#f97316',margin:'0 0 6px'}}>Labeled Motion Output</p>
                      <div className="output-grid">
                        <div className="motion-box"><img src="images/rev/human3_ego1.png" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} alt="Grasp Type"/><span className="motion-label">Grasp Type</span></div>
                        <div className="motion-box"><img src="images/rev/human3_ego1.png" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} alt="Object State"/><span className="motion-label">Object State</span></div>
                        <div className="motion-box"><img src="images/rev/human3_ego1.png" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} alt="Joint Angles"/><span className="motion-label">Joint Angles</span></div>
                        <div className="motion-box"><img src="images/rev/human3_ego1.png" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} alt="Motion Arc"/><span className="motion-label">Motion Arc</span></div>
                      </div>
                    </div>
                  </div>
                  <div style={{display:'flex',gap:'6px',flexWrap:'wrap',marginTop:'14px',paddingTop:'12px',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
                    <span className="tag tag-purple">Grasp Keypoints</span>
                    <span className="tag tag-teal">Wet Object Handling</span>
                    <span className="tag tag-orange">Edge Conditions</span>
                    <span style={{marginLeft:'auto',fontSize:'12px',fontWeight:700,color:'#a78bfa'}}>600 hrs labeled</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Household Tasks Gallery */}
            <div id="ht">
              <div className="section-head">
                <div className="section-pill section-pill-ht">
                  <span style={{width:'8px',height:'8px',borderRadius:'2px',background:'#f97316',flexShrink:0,boxShadow:'0 0 8px rgba(249,115,22,0.7)'}}></span>
                  <span style={{fontSize:'14px',fontWeight:800,color:'#fff'}}>Household Tasks</span>
                  <span style={{fontSize:'11px',fontWeight:600,color:'#4b5563'}}>5 datasets · 1,420 hrs</span>
                </div>
                <div style={{flex:1,height:'1px',background:'linear-gradient(to right,rgba(249,115,22,0.25),transparent)',marginLeft:'4px'}}></div>
              </div>
              <div className="ds-gallery">

                <div className="ds-card">
                  <img src="images/WebCleaning.png" className="ds-img" alt="Surface Cleaning"/>
                  <div className="ds-body">
                    <p className="ds-name">Surface &amp; Floor Cleaning</p>
                    <p className="ds-meta">Sweeping, scrubbing motions — 3 tool types</p>
                    <div className="ds-tags">
                      <span className="tag tag-purple">Arm Trajectory</span>
                      <span className="tag tag-teal">Tool Grip</span>
                      <span style={{marginLeft:'auto',fontSize:'10px',fontWeight:700,color:'#a78bfa'}}>280 hrs</span>
                    </div>
                  </div>
                </div>

                <div className="ds-card">
                  <img src="images/WebDishWasher.png" className="ds-img" alt="Dishwasher Loading"/>
                  <div className="ds-body">
                    <p className="ds-name">Dishwasher Loading</p>
                    <p className="ds-meta">Object placement, rack navigation, door operation</p>
                    <div className="ds-tags">
                      <span className="tag tag-purple">Bimanual Grasp</span>
                      <span className="tag tag-orange">Object Place</span>
                      <span style={{marginLeft:'auto',fontSize:'10px',fontWeight:700,color:'#a78bfa'}}>310 hrs</span>
                    </div>
                  </div>
                </div>

                <div className="ds-card">
                  <img src="images/WebDishWashing.png" className="ds-img" alt="Hand Dish Washing"/>
                  <div className="ds-body">
                    <p className="ds-name">Hand Dish Washing</p>
                    <p className="ds-meta">Scrub, rinse, transfer — wet object sequences</p>
                    <div className="ds-tags">
                      <span className="tag tag-purple">Wet Grasp</span>
                      <span className="tag tag-teal">Force Est.</span>
                      <span style={{marginLeft:'auto',fontSize:'10px',fontWeight:700,color:'#a78bfa'}}>340 hrs</span>
                    </div>
                  </div>
                </div>

                <div className="ds-card">
                  <img src="images/WebTrashCollection.png" className="ds-img" alt="Trash Collection"/>
                  <div className="ds-body">
                    <p className="ds-name">Trash Collection &amp; Sorting</p>
                    <p className="ds-meta">Pick, bag, and bin — varied object sizes &amp; weights</p>
                    <div className="ds-tags">
                      <span className="tag tag-purple">Lift &amp; Place</span>
                      <span className="tag tag-blue">Sort Logic</span>
                      <span style={{marginLeft:'auto',fontSize:'10px',fontWeight:700,color:'#a78bfa'}}>240 hrs</span>
                    </div>
                  </div>
                </div>

                <div className="ds-card">
                  <img src="images/WebWasher.png" className="ds-img" alt="Laundry"/>
                  <div className="ds-body">
                    <p className="ds-name">Laundry — Washer Operation</p>
                    <p className="ds-meta">Load, sort, and transfer fabric items</p>
                    <div className="ds-tags">
                      <span className="tag tag-purple">Deformable Obj.</span>
                      <span className="tag tag-orange">Bimanual</span>
                      <span style={{marginLeft:'auto',fontSize:'10px',fontWeight:700,color:'#a78bfa'}}>250 hrs</span>
                    </div>
                  </div>
                </div>

                <div className="ds-card">
                  <img src="images/WebWasher.png" className="ds-img" alt="Laundry"/>
                  <div className="ds-body">
                    <p className="ds-name">Laundry — Washer Operation</p>
                    <p className="ds-meta">Load, sort, and transfer fabric items</p>
                    <div className="ds-tags">
                      <span className="tag tag-purple">Deformable Obj.</span>
                      <span className="tag tag-orange">Bimanual</span>
                      <span style={{marginLeft:'auto',fontSize:'10px',fontWeight:700,color:'#a78bfa'}}>250 hrs</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Request section */}
            <div style={{marginTop:'4px',padding:'28px 32px',background:'linear-gradient(135deg,rgba(167,139,250,0.05) 0%,rgba(255,255,255,0.02) 100%)',border:'1px solid rgba(167,139,250,0.12)',borderRadius:'14px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',boxShadow:'0 0 40px rgba(167,139,250,0.06)'}}>
              <div style={{display:'flex',alignItems:'center',gap:'16px'}}>
                <div style={{width:'44px',height:'44px',borderRadius:'11px',background:'rgba(167,139,250,0.1)',border:'1px solid rgba(167,139,250,0.25)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,boxShadow:'0 0 16px rgba(167,139,250,0.15)'}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </div>
                <div>
                  <p style={{fontSize:'15px',fontWeight:700,color:'#fff',margin:'0 0 4px'}}>Run RoboHandMotion on Your Footage</p>
                  <p style={{fontSize:'12px',color:'#6b7280',margin:0,lineHeight:1.5,maxWidth:'480px'}}>Already have footage of hand tasks? We'll generate labeled pose sequences, grasp annotations, and motion trajectories — across any task, environment, or robot form factor.</p>
                </div>
              </div>
              <div style={{display:'flex',gap:'8px',flexShrink:0,alignItems:'center',flexDirection:'column'}}>
                <div style={{display:'flex',gap:'5px'}}>
                  <span style={{fontSize:'10px',fontWeight:700,color:'#a78bfa',background:'rgba(167,139,250,0.1)',border:'1px solid rgba(167,139,250,0.2)',padding:'3px 8px',borderRadius:'4px'}}>Dexterous</span>
                  <span style={{fontSize:'10px',fontWeight:700,color:'#f97316',background:'rgba(249,115,22,0.1)',border:'1px solid rgba(249,115,22,0.2)',padding:'3px 8px',borderRadius:'4px'}}>Household</span>
                  <span style={{fontSize:'10px',fontWeight:700,color:'#34d399',background:'rgba(52,211,153,0.1)',border:'1px solid rgba(52,211,153,0.2)',padding:'3px 8px',borderRadius:'4px'}}>Industrial</span>
                </div>
                <button className="btn-opacity" style={{width:'100%',fontSize:'13px',fontWeight:700,color:'#040608',background:'#a78bfa',border:'none',padding:'10px 24px',borderRadius:'8px',cursor:'pointer',transition:'opacity .2s',whiteSpace:'nowrap',fontFamily:'inherit'}}>Submit Your Footage</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
