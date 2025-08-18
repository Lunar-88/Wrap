
import Hero from '../components/Hero';
import HomePageServices from '../components/HomePageServices';
import Whyus from '../components/Whyus';

function Home() {
  return (
    <div className="pt-10"> {/* pushes content below navbar */}
      <Hero />
      <HomePageServices />
      <Whyus />
    </div>
  );
}

export default Home;
