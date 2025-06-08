
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './index.css'; 

import Home from './pages/Home.jsx'
import Ourservices from './pages/Ourservices.jsx'
import Media from './pages/Media.jsx'
import FAQs from './pages/FAQs.jsx'
import Contact from './pages/Contact.jsx'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ourservices" element={<Ourservices />} />
      <Route path="/media" element={<Media />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer></Footer>
    </>
  )
}
export default App