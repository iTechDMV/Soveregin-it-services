export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-overlay" />
      <img src="/assets/hero/tribal-cyber-hero.jpg" className="hero-bg" />

      <div className="hero-content">
        <h1>Sovereign IT Services</h1>
        <p>Enterprise‑grade cybersecurity, cloud, and physical security systems designed for tribal governments.</p>

        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-outline">View Services</button>
        </div>
      </div>
    </header>
  );
}
