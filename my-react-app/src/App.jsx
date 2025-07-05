
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminDashboard from './admin/AdminDashboard';

import Home from './pages/Home.jsx';
import Ourservices from './pages/Ourservices.jsx';
import Media from './pages/Media.jsx';
import FAQs from './pages/FAQs.jsx';
import Contact from './pages/Contact.jsx';
import BookingPage from './pages/BookingPage.jsx';

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname === '/AdminDashboard';

  return (
    <>
      {!isAdminPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourservices" element={<Ourservices />} />
        <Route path="/media" element={<Media />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookingPage" element={<BookingPage />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      {!isAdminPage && <Footer />}
    </>
  );
}

export default App;
