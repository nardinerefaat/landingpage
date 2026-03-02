import logo from './logo.svg';
import './App.css';
import Hero from './components/hero';
import Features from './components/features'
import Calltoaction from './components/calltoaction';
import Pricing from './components/pricing';
import Testimonials from './components/testimonials';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Features/>
      <Calltoaction/>
      <Pricing/>
      <Testimonials/>
    </div>
  );
}

export default App;
