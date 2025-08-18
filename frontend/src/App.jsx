
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import AdminDashboard from './admin/AdminDashboard.jsx';

import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Media from './pages/Media.jsx';
import FAQs from './pages/FAQs.jsx';
import Contact from './pages/Contact.jsx';
import BookingPage from './pages/BookingPage.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname === '/AdminDashboard';

  return (
    <>
      {!isAdminPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/media" element={<Media />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookingPage" element={<BookingPage />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>

      {/* Floating WhatsApp button outside Routes */}
      {!isAdminPage && <WhatsAppButton />}

      {!isAdminPage && <Footer />}
    </>
  );
}

export default App;
