import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import LoginTerminal from './components/LoginTerminal';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-cyan-500/30 selection:text-white antialiased overflow-x-hidden">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Features />
        <About />
        <LoginTerminal />
      </main>
      <Footer />
    </div>
  );
}
