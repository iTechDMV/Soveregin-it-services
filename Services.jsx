export default function Services() {
  const items = [
    { icon: "/assets/icons/shield.svg", title: "Cybersecurity", text: "Zero‑trust architecture, SIEM, SOC monitoring, and threat intelligence." },
    { icon: "/assets/icons/cloud.svg", title: "Cloud Infrastructure", text: "Azure, AWS, hybrid cloud, identity management, and secure deployments." },
    { icon: "/assets/icons/camera.svg", title: "Physical Security", text: "Access control, surveillance, intrusion detection, and integrated systems." },
    { icon: "/assets/icons/network.svg", title: "Networking", text: "Enterprise Wi‑Fi, SD‑WAN, fiber, and secure network architecture." }
  ];

  return (
    <section className="services">
      {items.map((s) => (
        <div className="service-card" key={s.title}>
          <img src={s.icon} />
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </div>
      ))}
    </section>
  );
}
