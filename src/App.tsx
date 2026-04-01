import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Differentials from './components/Differentials';
import Mascot from './components/Mascot';
import Company from './components/Company';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full font-sans selection:bg-primary-blue/30 selection:text-primary-blue">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <Differentials />
        <Mascot />
        <Company />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
