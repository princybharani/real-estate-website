
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Architecture } from './components/Architecture';
import { Interiors } from './components/Interiors';
import { Amenities } from './components/Amenities';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-50 selection:bg-zinc-800 selection:text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Architecture />
        <Interiors />
        <Amenities />
      </main>
      <Footer />
    </div>
  );
}

export default App;
