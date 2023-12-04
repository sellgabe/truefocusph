import Aos from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import Coaches from './pages/Coaches';
import Nav from './components/Nav';
import About from './pages/About';
import TrainWithUsPage from './pages/TrainWithUsPage';
import FAQPage from './pages/FAQPage';
import Footer from './components/Footer';

export default function App() {
  Aos.init({
    duration: 2500,
    delay: 200,
  });

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/trainwithus" element={<TrainWithUsPage />} />
        <Route path="/faqs" element={<FAQPage />} />
      </Routes>
      <Footer />
    </>
  );
}
