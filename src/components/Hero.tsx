import tribalHero from '../assets/hero/tribal-cyber-landscape.svg';
import logo from '../assets/branding/logo.svg';

export function Hero() {
  return (
    <section className="hero">
      <div>
        <img src={logo} alt="Sovereign IT Services" style={{ height: 40, marginBottom: 16 }} />
        <h1>Tribal‑First Cyber Resilience for Sovereign Nations</h1>
        <p>
          Cloud, cybersecurity, physical security, and networking designed for tribal governments and
          high‑impact enterprises.
        </p>
        <div className="hero-actions">
          <button className="btn-primary">Schedule a discovery call</button>
          <button className="btn-outline">View architecture</button>
        </div>
      </div>
      <div className="hero-visual">
        <img src={tribalHero} alt="Tribal cyber landscape" />
      </div>
    </section>
  );
}
