import React, { useEffect, useRef } from 'react';

const styles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  body {
    font-family: 'Inter', sans-serif;
    --teal: #1de9b6;
    --blue: #1e88e5;
    --bg: #07090a;
    --bg-card: #0d1014;
    --bg-sidebar: #040608;
    --border: rgba(255,255,255,0.06);
    --border-teal: rgba(29,233,182,0.2);
    --border-blue: rgba(30,136,229,0.2);
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
    min-width: 220px; flex-shrink: 0;
    position: relative; text-align: center;
  }
  .nav-d-logo.active::after {
    content: ''; position: absolute; bottom: 0; left: 20%; right: 20%;
    height: 2px; border-radius: 2px 2px 0 0;
    background: var(--teal); box-shadow: 0 0 12px rgba(29,233,182,0.6);
  }
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
  .btn-d-ghost { padding: 7px 16px; background: transparent; border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; font-size: 13px; font-weight: 600; color: #9ca3af; cursor: pointer; font-family: inherit; transition: border-color .2s, color .2s; }
  .btn-d-ghost:hover { border-color: var(--teal); color: var(--teal); }
  .btn-d-solid { padding: 7px 18px; background: var(--teal); border: none; border-radius: 8px; font-size: 13px; font-weight: 700; color: #040608; cursor: pointer; font-family: inherit; }

  /* HERO */
  @keyframes heroGradient {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .hero-d {
    min-height: 100vh; display: flex; flex-direction: column;
    justify-content: center; align-items: center;
    position: relative; overflow: hidden; text-align: center;
    padding: 120px 56px 100px;
    background: linear-gradient(120deg, #07090a 0%, #0b1a11 30%, #08101c 65%, #07090a 100%);
    background-size: 200% 200%;
    animation: heroGradient 14s ease-in-out infinite;
  }
  .hero-d-bg {
    position: absolute; inset: 0; z-index: 0; pointer-events: none;
    background: rgba(0,0,0,0.2),
      radial-gradient(ellipse 60% 60% at 50% 40%, rgba(29,233,182,0.07) 0%, transparent 70%),
      radial-gradient(ellipse 40% 40% at 80% 70%, rgba(30,136,229,0.05) 0%, transparent 60%);
  }
  .hero-d-inner { max-width: 860px; margin: 0 auto; position: relative; z-index: 1; }
  .hero-d-badge {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 12px; font-weight: 600; letter-spacing: .06em;
    color: rgba(255,255,255,0.75); background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.16); padding: 7px 18px; border-radius: 30px; margin-bottom: 36px;
  }
  .hero-d-badge .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--teal); box-shadow: 0 0 8px rgba(29,233,182,0.9); flex-shrink: 0; }
  .hero-d h1 { font-size: clamp(48px,7vw,80px); font-weight: 900; line-height: 1.0; letter-spacing: -3px; color: #fff; margin-bottom: 0; }
  .hero-d h1 .teal-grad {
    background: linear-gradient(90deg, #1de9b6 0%, #1e88e5 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .hero-d-connector { font-size: 17px; color: rgba(255,255,255,0.45); line-height: 1.7; margin: 24px auto 28px; max-width: 580px; }
  .hero-d-resolve { font-size: clamp(48px,7vw,80px); font-weight: 900; line-height: 1.0; letter-spacing: -3px; color: #fff; margin-bottom: 28px; }
  .hero-d-resolve .teal { color: var(--teal); }
  .hero-d-sub { font-size: 17px; color: var(--muted); line-height: 1.7; max-width: 560px; margin: 0 auto 44px; }
  .hero-d-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  .btn-d-primary { padding: 14px 32px; background: var(--teal); color: #040608; border-radius: 30px; font-size: 15px; font-weight: 800; border: none; cursor: pointer; font-family: inherit; box-shadow: 0 6px 24px rgba(29,233,182,0.25); transition: opacity .2s; }
  .btn-d-primary:hover { opacity: .85; }
  .btn-d-outline { padding: 14px 32px; background: rgba(255,255,255,0.05); color: #e5e7eb; border-radius: 30px; font-size: 15px; font-weight: 700; border: 1.5px solid rgba(255,255,255,0.18); cursor: pointer; font-family: inherit; transition: all .2s; }
  .btn-d-outline:hover { border-color: rgba(255,255,255,0.35); background: rgba(255,255,255,0.09); }

  /* LOGOS STRIP */
  .logos-d {
    border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
    background: #040608; padding: 22px 56px;
    display: flex; flex-direction: column; align-items: center; gap: 14px;
  }
  .logos-d .ld-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .14em; color: #6b7280; }
  .logos-d .ld-list { display: flex; gap: 36px; align-items: center; flex-wrap: wrap; justify-content: center; }
  .logos-d .ld-item { font-size: 13px; font-weight: 700; color: #6b7280; letter-spacing: -.2px; }

  /* SECTION HEADER */
  .sec-d { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
  .sec-d .sq { width: 12px; height: 12px; border-radius: 3px; flex-shrink: 0; }
  .sec-d-title { font-size: 20px; font-weight: 800; color: #fff; }
  .sec-d-sub { font-size: 13px; color: var(--muted); margin-bottom: 32px; margin-top: 4px; }

  /* PRODUCTS */
  .products-d { padding: 64px 56px; max-width: 1300px; margin: 0 auto; }
  .pd-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; }
  .pd-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 14px; padding: 22px 20px; transition: border-color .2s; cursor: pointer; }
  .pd-card:hover { border-color: rgba(29,233,182,0.2); }
  .pd-card.featured { border-color: rgba(29,233,182,0.18); background: linear-gradient(135deg,rgba(29,233,182,0.06),rgba(29,233,182,0.02)); }
  .pd-icon { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 18px; margin-bottom: 16px; }
  .pd-icon.teal { background: rgba(29,233,182,0.12); border: 1px solid rgba(29,233,182,0.2); }
  .pd-icon.blue { background: rgba(30,136,229,0.12); border: 1px solid rgba(30,136,229,0.2); }
  .pd-icon.purple { background: rgba(167,139,250,0.12); border: 1px solid rgba(167,139,250,0.2); }
  .pd-icon.orange { background: rgba(245,158,11,0.12); border: 1px solid rgba(245,158,11,0.2); }
  .pd-badge { display: inline-block; font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: .1em; padding: 2px 8px; border-radius: 3px; margin-bottom: 8px; }
  .pd-badge.lib { background: rgba(34,197,94,0.1); color: #22c55e; border: 1px solid rgba(34,197,94,0.2); }
  .pd-badge.pat { background: rgba(245,158,11,0.1); color: #f59e0b; border: 1px solid rgba(245,158,11,0.2); }
  .pd-name { font-size: 15px; font-weight: 800; color: #fff; margin-bottom: 8px; }
  .pd-desc { font-size: 12px; color: var(--muted); line-height: 1.6; margin-bottom: 16px; }
  .pd-link { font-size: 11px; font-weight: 700; color: var(--teal); text-decoration: none; }

  /* TRACTION */
  .traction-d { background: #040608; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  .traction-d-inner { max-width: 1300px; margin: 0 auto; padding: 64px 56px; }
  .td-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; margin-top: 32px; }
  .td-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 14px; padding: 24px 22px; transition: border-color .2s; }
  .td-card:hover { border-color: rgba(29,233,182,0.15); }
  .td-result { font-size: 42px; font-weight: 900; color: var(--teal); letter-spacing: -1.5px; margin-bottom: 6px; line-height: 1; }
  .td-company { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 8px; }
  .td-detail { font-size: 12px; color: var(--muted); line-height: 1.6; margin-bottom: 14px; }
  .td-vert { display: inline-block; font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: .1em; padding: 3px 9px; border-radius: 3px; background: rgba(29,233,182,0.08); color: var(--teal); border: 1px solid rgba(29,233,182,0.15); }

  /* CTA */
  .cta-d2 {
    padding: 48px; text-align: center;
    background: linear-gradient(135deg, #050e0a 0%, #060c14 50%, #04080f 100%);
    border-top: 1px solid rgba(29,233,182,0.1);
    color: #fff;
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

const Homepage: React.FC = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const productsTabRef = useRef<HTMLAnchorElement>(null);
  const customersTabRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const NAV_HEIGHT = 88;
    const logo = logoRef.current;
    const productsTab = productsTabRef.current;
    const customersTab = customersTabRef.current;
    const heroEl = document.querySelector<HTMLElement>('.hero-d');
    const productsEl = document.getElementById('products');
    const customersEl = document.getElementById('customers');

    if (!logo || !heroEl || !productsEl || !customersEl) return;

    type Section = { el: HTMLElement; tab: HTMLElement | null };
    const sections: Section[] = [
      { el: heroEl, tab: null },
      { el: productsEl, tab: productsTab },
      { el: customersEl, tab: customersTab },
    ];

    function updateActive() {
      const scrollY = window.scrollY + NAV_HEIGHT + 60;
      let current = sections[0];
      for (const s of sections) {
        if (s.el.offsetTop <= scrollY) current = s;
      }
      logo!.classList.remove('active');
      [productsTab, customersTab].forEach(t => t?.classList.remove('active'));
      if (current.tab) current.tab.classList.add('active');
      else logo!.classList.add('active');
    }

    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();
    return () => window.removeEventListener('scroll', updateActive);
  }, []);

  return (
    <>
      <style>{styles}</style>

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* NAV */}
      <nav className="nav-d">
        <div ref={logoRef} className="nav-d-logo">
          <div className="d-logo-name">DataraAI</div>
          <div className="d-logo-sub">Data-as-a-Service</div>
        </div>
        <div className="nav-d-tabs">
          <a href="#products" ref={productsTabRef} className="nav-d-tab">
            <span className="tab-label">Products</span>
            <span className="tab-sub">AI Data</span>
          </a>
          <a href="#customers" ref={customersTabRef} className="nav-d-tab">
            <span className="tab-label">Customers</span>
            <span className="tab-sub">Case Studies</span>
          </a>
          <a href="company.html" className="nav-d-tab">
            <span className="tab-label">Company</span>
            <span className="tab-sub">Team · Mission</span>
          </a>
        </div>
        <div className="nav-d-actions">
          <button className="btn-d-ghost">Sign In</button>
          <button className="btn-d-solid">Get Access</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-d">
        <div className="hero-d-bg" />
        <div className="hero-d-inner">
          <div className="hero-d-badge">
            <span className="dot" />
            NVIDIA Inception Member · 2025
          </div>
          <h1>
            The Sim-to-Real Gap
            <br />
            is <span className="teal-grad">Costing You.</span>
          </h1>
          <p className="hero-d-connector">
            Robots fail in production because training data doesn't match the real world. Simulation gets you 85%.
          </p>
          <p className="hero-d-resolve">
            DataraAI <span className="teal">closes the gap.</span>
          </p>
          <p className="hero-d-sub">
            The complete data stack for Physical AI. Humanoid. Automotive. Warehouse. Data Center.
          </p>
          <div className="hero-d-btns">
            <button className="btn-d-primary">See How It Works</button>
            <button className="btn-d-outline">Request a Demo</button>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="products-d">
        <div className="sec-d">
          <div
            className="sq"
            style={{ background: '#1de9b6', boxShadow: '0 0 10px rgba(29,233,182,0.5)' }}
          />
          <div className="sec-d-title">Products</div>
        </div>
        <p className="sec-d-sub">Four products. Full Physical AI data stack.</p>
        <div className="pd-grid">
          <div
            className="pd-card featured"
            onClick={() => { window.location.href = 'robodatahub.html'; }}
          >
            <div className="pd-icon teal">📦</div>
            <div className="pd-badge lib">Core Platform</div>
            <div className="pd-name">RoboDataHub</div>
            <p className="pd-desc">EGO + EXO datasets across automotive, warehouse, data center, and dexterity.</p>
            <a href="robodatahub.html" className="pd-link">Browse datasets →</a>
          </div>
          <div
            className="pd-card"
            onClick={() => { window.location.href = 'roboeyeview.html'; }}
          >
            <div className="pd-icon blue">👁️</div>
            <div className="pd-badge pat">Patented IP</div>
            <div className="pd-name">RoboEyeView</div>
            <p className="pd-desc">EXO→EGO view synthesis. 85% → 95%+ accuracy.</p>
            <a href="roboeyeview.html" className="pd-link">Learn more →</a>
          </div>
          <div className="pd-card" onClick={() => { window.location.href = 'robohandmotion.html'; }} style={{ cursor: 'pointer' }}>
            <div className="pd-icon purple">🖐️</div>
            <div className="pd-badge pat">Patented IP</div>
            <div className="pd-name">RoboHandMotion</div>
            <p className="pd-desc">Hand, tool, and object interaction data for humanoid and dexterous training.</p>
            <a href="robohandmotion.html" className="pd-link">Learn more →</a>
          </div>
          <div className="pd-card" onClick={() => { window.location.href = 'robotaskmanipulator.html'; }} style={{ cursor: 'pointer' }}>
            <div className="pd-icon orange">🧩</div>
            <div className="pd-badge lib">Task Intelligence</div>
            <div className="pd-name">RoboTaskManipulator</div>
            <p className="pd-desc">Assembly, pick-place, and cabling workflows. 95% precision at Peer Robotics.</p>
            <a href="robotaskmanipulator.html" className="pd-link">See case study →</a>
          </div>
        </div>
      </section>

      {/* CUSTOMER RESULTS */}
      <section id="customers" className="traction-d">
        <div className="traction-d-inner">
          <div className="sec-d">
            <div
              className="sq"
              style={{ background: '#1e88e5', boxShadow: '0 0 10px rgba(30,136,229,0.5)' }}
            />
            <div className="sec-d-title">Customers</div>
          </div>
          <p className="sec-d-sub">Measurable outcomes from production deployments across robotics verticals.</p>
          <div className="td-grid">
            <div className="td-card">
              <div className="td-result">3.8×</div>
              <div className="td-company">Figure AI</div>
              <p className="td-detail">
                Faster model convergence on manipulation tasks using RoboDataHub dexterous sequences vs. in-house collection.
              </p>
              <span className="td-vert">Humanoid</span>
            </div>
            <div className="td-card">
              <div className="td-result">60%</div>
              <div className="td-company">BMW Robotics</div>
              <p className="td-detail">
                Reduction in labeling cost for production-line vision models using RoboEyeView EGO synthesis pipeline.
              </p>
              <span
                className="td-vert"
                style={{
                  background: 'rgba(167,139,250,0.08)',
                  color: '#a78bfa',
                  borderColor: 'rgba(167,139,250,0.15)',
                }}
              >
                Automotive
              </span>
            </div>
            <div className="td-card">
              <div className="td-result">99.1%</div>
              <div className="td-company">Foxconn Smart Factory</div>
              <p className="td-detail">
                Label accuracy on rack-navigation sequences, exceeding internal baseline by 4.7 percentage points.
              </p>
              <span
                className="td-vert"
                style={{
                  background: 'rgba(52,211,153,0.08)',
                  color: '#34d399',
                  borderColor: 'rgba(52,211,153,0.15)',
                }}
              >
                Data Center
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS STRIP */}
      <div className="logos-d">
        <div className="ld-label">Trusted by teams at</div>
        <div className="ld-list">
          {['NVIDIA', 'BMW Group', 'Figure AI', 'Boston Dynamics', 'Foxconn', 'Waymo', '1X Technologies'].map(
            (name) => (
              <span key={name} className="ld-item">{name}</span>
            )
          )}
        </div>
      </div>

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
          <a href="#">Products</a>
          <a href="#">Docs</a>
          <a href="#">Customers</a>
          <a href="#">Company</a>
          <a href="#">Contact</a>
        </div>
        <div>© 2025 DataraAI · NVIDIA Inception Member</div>
      </footer>
    </>
  );
};

export default Homepage;
