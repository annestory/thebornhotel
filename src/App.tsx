import BrandsShowcase from './components/BrandsShowcase';
import ContactFormSection from './components/ContactFormSection';
import FooterSection from './components/FooterSection';
import HeaderNav from './components/HeaderNav';
import HeroBanner from './components/HeroBanner';
import PhilosophySection from './components/PhilosophySection';
import SpacesSection from './components/SpacesSection';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900">
      <HeaderNav />
      <main className="flex-1">
        <HeroBanner />
        <PhilosophySection />
        <BrandsShowcase />
        <SpacesSection />
        <ContactFormSection />
      </main>
      <FooterSection />
    </div>
  );
}
