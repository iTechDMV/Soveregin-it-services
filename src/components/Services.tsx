import shield from '../assets/icons/shield.svg';
import cloud from '../assets/icons/cloud.svg';
import camera from '../assets/icons/camera.svg';
import network from '../assets/icons/network.svg';

const services = [
  { icon: shield, title: 'Cybersecurity', body: 'Threat detection, SOC visibility, and incident response.' },
  { icon: cloud, title: 'Cloud Infrastructure', body: 'Secure AWS/Azure landing zones and identity.' },
  { icon: camera, title: 'Physical Security', body: 'Surveillance and access control integrated with IT.' },
  { icon: network, title: 'Networking', body: 'Fiber, wireless, and SD‑WAN for distributed sites.' },
];

export function Services() {
  return (
    <section id="services" className="section">
      <h2>Core Services</h2>
      <div className="section-grid">
        {services.map((s) => (
          <article className="card" key={s.title}>
            <img src={s.icon} className="section-icon" alt={s.title} />
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
