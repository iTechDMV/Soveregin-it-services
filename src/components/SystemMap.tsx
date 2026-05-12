import systemMap from '../assets/system-map.svg';

export function SystemMap() {
  return (
    <section id="architecture" className="section">
      <h2>Reference Architecture</h2>
      <p>How tribal government, data center, cloud, and endpoints connect through Sovereign IT Services.</p>
      <div style={{ marginTop: 24 }}>
        <img src={systemMap} alt="System map" style={{ width: '100%', borderRadius: 16 }} />
      </div>
    </section>
  );
}
