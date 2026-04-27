import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import BeforeAfter from './components/BeforeAfter';
import Footer from './components/Footer';
import QuoteDivider from './components/QuoteDivider';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <QuoteDivider />
        <Team />
        <BeforeAfter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
