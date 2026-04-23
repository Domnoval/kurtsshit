// Sections.jsx — everything below the hero

const { useRef: useRefS, useEffect: useEffectS, useState: useStateS } = React;

function useReveal() {
  const ref = useRefS(null);
  useEffectS(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { el.classList.add('in'); io.unobserve(el); }});
    }, { threshold: 0.18, rootMargin: '0px 0px -10% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useReveal();
  const delayClass = delay ? ` delay-${delay}` : '';
  return <Tag ref={ref} className={`reveal${delayClass} ${className}`} {...rest}>{children}</Tag>;
}

function SectionHeader({ kicker, title, amberWord, index }) {
  return (
    <Reveal className="section-header">
      <div>
        <div className="section-kicker">{kicker}</div>
        <h2 className="section-title">
          {title}{amberWord && <> <span className="amber">{amberWord}</span></>}
        </h2>
      </div>
      <div className="section-index">{index}</div>
    </Reveal>
  );
}

/* ============== WORK ============== */
const WORK_ITEMS = [
  { id: 'sigil-boulder',    title: 'Sigil Boulder',       sub: 'Private residence · Linden Hills',  num: '№ 001', span: 8, placeholder: '01' },
  { id: 'fracture-wall',    title: 'Fracture Wall',       sub: 'Hospitality · Northeast Mpls',       num: '№ 002', span: 4, placeholder: '02' },
  { id: 'polished-slab',    title: 'Polished Slab',       sub: 'Civic plaza · Saint Paul',           num: '№ 003', span: 4, placeholder: '03' },
  { id: 'moss-monolith',    title: 'Moss Monolith',       sub: 'Private garden · Edina',             num: '№ 004', span: 4, placeholder: '04' },
  { id: 'path-cairn',       title: 'Path & Cairn',        sub: 'Residential · Kenwood',              num: '№ 005', span: 4, placeholder: '05' },
  { id: 'river-rock-1371',  title: 'River Rock 1371',     sub: 'Commission · Mississippi bluff',     num: '№ 006', span: 6, placeholder: '06' },
  { id: 'glow-planter',     title: 'Glow Planter Set',    sub: 'Commercial · Loring Park',           num: '№ 007', span: 6, placeholder: '07' },
];

function WorkCard({ item, idx }) {
  return (
    <Reveal className={`work-card span-${item.span}`} delay={(idx % 3) + 1}>
      <div className="work-card-noise" />
      <div className="work-card-placeholder">{item.placeholder}</div>
      <div className="work-card-meta">
        <div>
          <div className="work-card-title">{item.title}</div>
          <div className="work-card-sub">{item.sub}</div>
        </div>
        <div className="work-card-num">{item.num}</div>
      </div>
    </Reveal>
  );
}

function SectionWork() {
  return (
    <section id="work" className="section">
      <SectionHeader
        kicker="Portfolio"
        title="Selected"
        amberWord="Work"
        index="01 / Work"
      />
      <div className="work-grid">
        {WORK_ITEMS.map((it, i) => <WorkCard key={it.id} item={it} idx={i} />)}
      </div>
    </section>
  );
}

/* ============== PROCESS ============== */
const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Site & Mold',
    body: 'Every commission begins on location. We walk the site at dusk, measure sun and sightlines, then hand-build a custom mold — steel armature, foam negative, latex-lined cavity — sized to the moment.',
    specs: [
      { k: 'Duration', v: '2–4 weeks' },
      { k: 'Output', v: 'Mold + site report' },
    ],
  },
  {
    num: '02',
    title: 'Pour & Cure',
    body: 'High-density concrete is hand-packed in layers with integrated channels for light and drainage. Cured slow in a controlled room over 14 days, then demolded and wet-polished until the surface reads.',
    specs: [
      { k: 'Mix', v: 'GFRC + aggregate' },
      { k: 'Cure', v: '14 days · 72°F' },
    ],
  },
  {
    num: '03',
    title: 'Light Integration',
    body: 'Amber LED channels are seated into the cast fissures, tuned to 2200K dusk temperature, sealed and wired to a discrete driver. We photometer the install and dial each piece until it breathes at the right brightness.',
    specs: [
      { k: 'Temp', v: '2200K amber' },
      { k: 'Drivers', v: '24V low-volt' },
    ],
  },
  {
    num: '04',
    title: 'Plant & Install',
    body: 'A horticulturalist selects moss, sedum, and native Minnesota ground cover sized to the piece. The monolith ships on a dedicated flatbed, is set with a crane or skid, and the garden is planted the same day.',
    specs: [
      { k: 'Flora', v: 'Native · moss-first' },
      { k: 'Install', v: '1 day · crane-set' },
    ],
  },
];

function ProcessStep({ step, idx }) {
  const ref = useRefS(null);
  useEffectS(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('in'); io.unobserve(el); }
    }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="process-step reveal">
      <div className="process-shadow-num" aria-hidden="true">{step.num}</div>
      <div className="process-num">STEP {step.num} / 04</div>
      <h3 className="process-title">{step.title}</h3>
      <p className="process-body">{step.body}</p>
      <div className="process-spec">
        {step.specs.map((s, i) => (
          <span key={i} className="process-spec-item">{s.k}<strong>{s.v}</strong></span>
        ))}
      </div>
    </div>
  );
}

function SectionProcess() {
  return (
    <section id="process" className="section section--alt section--full">
      <div className="inner">
        <SectionHeader
          kicker="From mold to monolith"
          title="The"
          amberWord="Process"
          index="02 / Process"
        />
        <div className="process-timeline">
          <div className="process-rail" />
          <div style={{ gridColumn: '2' }}>
            {PROCESS_STEPS.map((s, i) => <ProcessStep key={s.num} step={s} idx={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== MATERIALS ============== */
const MATERIALS = [
  {
    visual: 'v-concrete',
    label: 'Substrate',
    title: 'Concrete',
    body: 'Glass-fiber-reinforced concrete, locally mixed, cast by hand in custom molds. Heavy, monolithic, built to survive a Minnesota winter and a hundred of them after it.',
    specs: [['Mix', 'GFRC type 1'], ['Color', '4 quarry greys'], ['Lifespan', '75+ years']],
  },
  {
    visual: 'v-led',
    label: 'Illumination',
    title: 'LED',
    body: 'Low-voltage amber channel embedded in the cast fissure. 2200K warm, dimmable, photon-tuned to read at civil dusk — the moment streetlights come on.',
    specs: [['Color temp', '2200K amber'], ['Voltage', '24V DC'], ['IP rating', 'IP67 sealed']],
  },
  {
    visual: 'v-plants',
    label: 'Living',
    title: 'Plants',
    body: 'Native Minnesota ground cover selected by a horticulturalist for the specific site and light profile. Moss-first, sedum-forward, built to colonize the stone over seasons.',
    specs: [['Palette', '12 natives'], ['Maintenance', 'Seasonal'], ['Warranty', '1 year plants']],
  },
];

function SectionMaterials() {
  return (
    <section id="materials" className="section">
      <SectionHeader
        kicker="Three elements"
        title="Materials &"
        amberWord="Light"
        index="03 / Materials"
      />
      <div className="materials-grid">
        {MATERIALS.map((m, i) => (
          <Reveal key={m.title} className="material-card" delay={i + 1}>
            <div className={`material-visual ${m.visual}`} />
            <div className="material-label">{m.label}</div>
            <h3 className="material-title">{m.title}</h3>
            <p className="material-body">{m.body}</p>
            <ul className="material-specs">
              {m.specs.map(([k, v], j) => (
                <li key={j}><span>{k}</span><strong>{v}</strong></li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============== COMMISSION ============== */
function SectionCommission() {
  const [sent, setSent] = useStateS(false);
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <section id="contact" className="section section--alt section--full">
      <div className="inner">
        <SectionHeader
          kicker="Commission"
          title="Start a"
          amberWord="Project"
          index="04 / Contact"
        />
        <div className="commission">
          <Reveal className="commission-intro">
            <p>We take a small number of commissions each season. Tell us about your site — we'll come walk it at dusk, talk through scope, and send a proposal within two weeks.</p>
            <div className="commission-details">
              <div className="commission-detail-row"><span>Studio</span><strong>Northeast Minneapolis</strong></div>
              <div className="commission-detail-row"><span>Hours</span><strong>By appointment</strong></div>
              <div className="commission-detail-row"><span>Email</span><strong>studio@tccyg.com</strong></div>
              <div className="commission-detail-row"><span>Phone</span><strong>612 · 555 · 1371</strong></div>
              <div className="commission-detail-row"><span>Booking</span><strong>Spring 2026 open</strong></div>
            </div>
          </Reveal>
          <Reveal className="commission-form-wrap" delay={2}>
            {sent ? (
              <div className="form-success">
                <div style={{ marginBottom: '1rem' }}>
                  <span className="form-success-dot" />
                  <span className="caps-tag" style={{ color: 'var(--color-sage-light)' }}>Received</span>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Thank you.
                </div>
                <p style={{ color: 'var(--fg-muted)', margin: 0 }}>
                  We'll be in touch within two weeks. Meanwhile, watch your inbox for a scheduling link.
                </p>
              </div>
            ) : (
              <form className="commission-form" onSubmit={submit}>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="f-name">Name</label>
                    <input id="f-name" type="text" placeholder="Full name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="f-email">Email</label>
                    <input id="f-email" type="email" placeholder="you@domain.com" required />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="f-location">Site Location</label>
                  <input id="f-location" type="text" placeholder="Neighborhood, city" />
                </div>
                <div className="field">
                  <label htmlFor="f-scope">Project Type</label>
                  <select id="f-scope" defaultValue="">
                    <option value="" disabled>Select a scope</option>
                    <option>Single monolith / sculpture</option>
                    <option>Garden installation (multiple pieces)</option>
                    <option>Retaining wall or path system</option>
                    <option>Commercial / civic commission</option>
                    <option>Not sure yet — let's talk</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="f-notes">Tell us about the site</label>
                  <textarea id="f-notes" placeholder="Light conditions, scale you're imagining, timeline, inspiration images if any." />
                </div>
                <button className="btn btn-primary" type="submit">
                  Send inquiry <span className="arrow">→</span>
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============== FOOTER ============== */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <div className="footer-wordmark">TCCYG</div>
          <div className="footer-tagline">Twin Cities Concrete Yard & Garden. Hand-cast monoliths, LED fissures, living gardens. Minneapolis · Saint Paul.</div>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Explore</div>
          <ul>
            <li><a href="#work">Work</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#materials">Materials</a></li>
            <li><a href="#contact">Commission</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Studio</div>
          <ul>
            <li><a href="#">Northeast Minneapolis</a></li>
            <li><a href="#">By appointment</a></li>
            <li><a href="mailto:studio@tccyg.com">studio@tccyg.com</a></li>
            <li><a href="tel:+16125551371">612 · 555 · 1371</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Press</div>
          <ul>
            <li><a href="#">Downloads</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Dribbble</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 Twin Cities Concrete Yard & Garden</div>
        <div>Raw Stone · Refined Light</div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  SectionWork, SectionProcess, SectionMaterials, SectionCommission, Footer,
});
