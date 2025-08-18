
// src/pages/Home.jsx
import Hero from '../components/Hero';
import Whyus from '../components/Whyus';
import Ourservices from './Services';

function Home() {
  return (
    <div className="pt-10"> {/* pushes content below navbar */}
    <>
      <Hero />
  
    <Services />

    <Whyus />
    </>
    </div>
  );
}

export default Home;