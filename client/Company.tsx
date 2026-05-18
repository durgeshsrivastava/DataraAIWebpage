import React from 'react';

const styles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  body {
    font-family: 'Inter', sans-serif;
    --teal: #1de9b6;
    --blue: #1e88e5;
    --bg: #07090a;
    --bg-card: #0d1014;
    --border: rgba(255,255,255,0.06);
    --muted: #9ca3af;
    --text: #f9fafb;
    background: var(--bg);
    color: var(--text);
  }

  /* NAV */
  .nav-d {
    position: sticky; top: 0; z-index: 100;
    background: rgba(5,9,7,0.99); backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(29,233,182,0.08);
    display: flex; align-items: stretch; height: 88px;
  }
  .nav-d-logo {
    display: flex; flex-direction: column; justify-content: center; align-items: center;
    padding: 0 32px; border-right: 1px solid rgba(255,255,255,0.04);
    min-width: 220px; flex-shrink: 0; text-align: center;
    text-decoration: none; transition: background .2s;
  }
  .nav-d-logo:hover { background: rgba(29,233,182,0.04); }
  .nav-d-logo .d-logo-name { font-size: 18px; font-weight: 800; letter-spacing: .04em; color: var(--teal); }
  .nav-d-logo .d-logo-sub { font-size: 11px; font-weight: 500; color: var(--muted); margin-top: 2px; }
  .nav-d-tabs { display: flex; align-items: stretch; flex: 1; }
  .nav-d-tab {
    flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 4px; text-decoration: none; color: #9ca3af;
    border-right: 1px solid rgba(255,255,255,0.04);
    position: relative; transition: color .2s, background .2s;
  }
  .nav-d-tab:hover { color: #e5e7eb; background: rgba(255,255,255,0.02); }
  .nav-d-tab .tab-label { font-size: 15px; font-weight: 700; }
  .nav-d-tab .tab-sub { font-size: 10px; font-weight: 500; letter-spacing: .12em; text-transform: uppercase; opacity: .5; }
  .nav-d-tab::after { content:''; position:absolute; bottom:0; left:20%; right:20%; height:2px; border-radius:2px 2px 0 0; background:transparent; transition:background .2s; }
  .nav-d-tab.active { color: var(--teal); background: rgba(29,233,182,0.04); }
  .nav-d-tab.active::after { background: var(--teal); box-shadow: 0 0 12px rgba(29,233,182,0.6); }
  .nav-d-actions { display: flex; align-items: center; padding: 0 28px; gap: 10px; border-left: 1px solid rgba(255,255,255,0.04); flex-shrink: 0; }
  .btn-d-ghost { padding: 7px 16px; background: transparent; border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; font-size: 13px; font-weight: 600; color: #9ca3af; cursor: pointer; font-family: inherit; }
  .btn-d-solid { padding: 7px 18px; background: var(--teal); border: none; border-radius: 8px; font-size: 13px; font-weight: 700; color: #040608; cursor: pointer; font-family: inherit; }

  /* PAGE HEADER */
  .page-header { padding: 64px 56px 48px; max-width: 1300px; margin: 0 auto; border-bottom: 1px solid var(--border); }
  .page-header-label { font-size: 10px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: var(--teal); margin-bottom: 12px; }
  .page-header h1 { font-size: clamp(36px,4vw,52px); font-weight: 900; line-height: 1.08; letter-spacing: -1.5px; color: #fff; margin-bottom: 14px; }
  .page-header p { font-size: 17px; color: var(--muted); line-height: 1.7; max-width: 580px; }

  /* SECTION HEADER */
  .sec-d { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
  .sec-d .sq { width: 12px; height: 12px; border-radius: 3px; flex-shrink: 0; }
  .sec-d-title { font-size: 20px; font-weight: 800; color: #fff; }
  .sec-d-sub { font-size: 13px; color: var(--muted); margin-bottom: 32px; margin-top: 4px; }

  /* TEAM */
  .team-d { padding: 64px 56px; max-width: 1300px; margin: 0 auto; }
  .team-d-founders { display: grid; grid-template-columns: repeat(2,1fr); gap: 14px; margin-bottom: 28px; }
  .tdf-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 14px; padding: 24px; display: flex; gap: 18px; align-items: flex-start; transition: border-color .2s; }
  .tdf-card:hover { border-color: rgba(29,233,182,0.15); }
  .tdf-avatar { width: 56px; height: 56px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 800; flex-shrink: 0; }
  .tdf-av-teal { background: linear-gradient(135deg,rgba(29,233,182,0.3),rgba(29,233,182,0.1)); border: 1px solid rgba(29,233,182,0.3); color: var(--teal); }
  .tdf-av-blue { background: linear-gradient(135deg,rgba(30,136,229,0.3),rgba(30,136,229,0.1)); border: 1px solid rgba(30,136,229,0.3); color: #60a5fa; }
  .tdf-name { font-size: 15px; font-weight: 800; color: #fff; margin-bottom: 2px; }
  .tdf-role { font-size: 11px; font-weight: 600; color: var(--teal); margin-bottom: 8px; letter-spacing: .04em; }
  .tdf-bio { font-size: 12px; color: var(--muted); line-height: 1.6; }
  .team-d-advisors { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; }
  .tda-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 18px; transition: border-color .2s; }
  .tda-card:hover { border-color: rgba(29,233,182,0.15); }
  .tda-init { width: 36px; height: 36px; border-radius: 8px; background: rgba(29,233,182,0.08); border: 1px solid rgba(29,233,182,0.15); display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800; color: var(--teal); margin-bottom: 10px; }
  .tda-name { font-size: 12px; font-weight: 700; color: #fff; margin-bottom: 3px; }
  .tda-role { font-size: 10px; color: var(--muted); line-height: 1.4; }

  /* CTA */
  .cta-d2 {
    padding: 48px; text-align: center;
    background: linear-gradient(135deg, #050e0a 0%, #060c14 50%, #04080f 100%);
    border-top: 1px solid rgba(29,233,182,0.1); color: #fff;
  }
  .cta-d2 h2 { font-size: clamp(22px,2.5vw,32px); font-weight: 800; letter-spacing: -.5px; margin-bottom: 12px; }
  .cta-d2 p { font-size: 15px; color: #6b7280; margin-bottom: 28px; }
  .cta-d2-btns { display: flex; gap: 12px; justify-content: center; }
  .cta-d2 .btn-w { padding: 11px 26px; background: var(--teal); color: #040608; border-radius: 9px; font-weight: 700; font-size: 14px; border: none; cursor: pointer; font-family: inherit; }
  .cta-d2 .btn-t { padding: 11px 26px; background: transparent; color: #9ca3af; border-radius: 9px; font-weight: 600; font-size: 14px; border: 1px solid rgba(255,255,255,0.12); cursor: pointer; font-family: inherit; }

  /* FOOTER */
  .footer-d { background: #040608; border-top: 1px solid var(--border); padding: 36px 56px; display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: #6b7280; }
  .footer-d .fd-logo { font-size: 16px; font-weight: 800; color: var(--teal); letter-spacing: .04em; }
  .footer-d .fd-links { display: flex; gap: 24px; }
  .footer-d .fd-links a { color: #6b7280; text-decoration: none; transition: color .2s; }
  .footer-d .fd-links a:hover { color: #9ca3af; }
`;

export default function Company() {
  return (
    <>
      <style>{styles}</style>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* NAV */}
      <nav className="nav-d">
        <a href="homepage.html" className="nav-d-logo">
          <div className="d-logo-name">DataraAI</div>
          <div className="d-logo-sub">← Back to Home</div>
        </a>
        <div className="nav-d-tabs">
          <a href="homepage.html#products" className="nav-d-tab">
            <span className="tab-label">Products</span>
            <span className="tab-sub">AI Data</span>
          </a>
          <a href="homepage.html#customers" className="nav-d-tab">
            <span className="tab-label">Customers</span>
            <span className="tab-sub">Case Studies</span>
          </a>
          <a href="company.html" className="nav-d-tab active">
            <span className="tab-label">Company</span>
            <span className="tab-sub">Team · Mission</span>
          </a>
        </div>
        <div className="nav-d-actions">
          <button className="btn-d-ghost">Sign In</button>
          <button className="btn-d-solid">Get Access</button>
        </div>
      </nav>

      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="page-header-label">Company</div>
        <h1>Built by PhysicalAI Veterans.</h1>
        <p>40+ years of combined expertise from NVIDIA, IIT, and deep robotics — building the data infrastructure Physical AI demands.</p>
      </div>

      {/* TEAM */}
      <section className="team-d">
        <div className="sec-d">
          <div className="sq" style={{ background: '#a78bfa', boxShadow: '0 0 10px rgba(167,139,250,0.5)' }}></div>
          <div className="sec-d-title">Founders</div>
        </div>
        <p className="sec-d-sub">Serial entrepreneurs with deep roots in NVIDIA, AI, and robotics infrastructure.</p>
        <div className="team-d-founders">
          <div className="tdf-card">
            <div className="tdf-avatar tdf-av-blue">DS</div>
            <div>
              <div className="tdf-name">Durgesh Srivastava</div>
              <div className="tdf-role">Co-Founder &amp; CEO</div>
              <p className="tdf-bio">Serial entrepreneur (exited MIPS). Ex-NVIDIA Sr. Director AI &amp; Robotics. Omniverse, Systems, LLM expert. IIT Kanpur.</p>
            </div>
          </div>
          <div className="tdf-card">
            <div className="tdf-avatar tdf-av-teal">NR</div>
            <div>
              <div className="tdf-name">Niraj Rai</div>
              <div className="tdf-role">Co-Founder &amp; CTO</div>
              <p className="tdf-bio">Serial entrepreneur. Founder SproutsAi. Ex-CTO Vimaan (AI/Robotics). Software &amp; AI expert. IIT Kharagpur.</p>
            </div>
          </div>
        </div>

        <div className="sec-d" style={{ marginTop: '8px' }}>
          <div className="sq" style={{ background: '#60a5fa', boxShadow: '0 0 10px rgba(96,165,250,0.5)' }}></div>
          <div className="sec-d-title">Advisors</div>
        </div>
        <p className="sec-d-sub">Senior leaders from NVIDIA, Intel, and leading robotics institutions.</p>
        <div className="team-d-advisors">
          <div className="tda-card">
            <div className="tda-init">BK</div>
            <div className="tda-name">Brian Kelleher</div>
            <div className="tda-role">Sr. VP NVIDIA · Angel Investor</div>
          </div>
          <div className="tda-card">
            <div className="tda-init">TG</div>
            <div className="tda-name">Dr. Teck Joo Goh</div>
            <div className="tda-role">Angel Investor · Corporate VP SkyeChip · ex-GM Intel</div>
          </div>
          <div className="tda-card">
            <div className="tda-init">AR</div>
            <div className="tda-name">Dr. Amit Roy-Chowdhury</div>
            <div className="tda-role">Professor &amp; UC Presidential Chair · Chair Robotics, UC Riverside</div>
          </div>
          <div className="tda-card">
            <div className="tda-init">LA</div>
            <div className="tda-name">Lomesh Agarwal</div>
            <div className="tda-role">VP Software Apptronik · Ex-MagicLeap</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-d2">
        <h2>Ready to close the Sim-to-Real gap?</h2>
        <p>Join leading robotics companies using DataraAI's real-world data to achieve 95%+ precision.</p>
        <div className="cta-d2-btns">
          <button className="btn-w">Request a Demo</button>
          <button className="btn-t">Explore RoboDataHub</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-d">
        <div className="fd-logo">DataraAI</div>
        <div className="fd-links">
          <a href="homepage.html">Home</a>
          <a href="homepage.html#products">Products</a>
          <a href="homepage.html#customers">Customers</a>
          <a href="company.html">Company</a>
          <a href="#">Contact</a>
        </div>
        <div>© 2026 DataraAI · NVIDIA Inception Member</div>
      </footer>
    </>
  );
}
