import './assets/branding/color-tokens.css';
import './assets/branding/typography.css';
import './assets/branding/buttons.css';
import './assets/branding/cards.css';
import './assets/branding/ui-tokens.css';
import './assets/patterns/animated-mesh.css';

import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { SystemMap } from './components/SystemMap';

export default function App() {
  return (
    <div className="page">
      <Hero />
      <Services />
      <SystemMap />
    </div>
  );
}
