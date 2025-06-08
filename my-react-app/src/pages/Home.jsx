
// src/pages/Home.jsx
import Hero from '../components/Hero';
import Services from '../components/Services';
import Whyus from '../components/Whyus';

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