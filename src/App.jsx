import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import FrontPage from './pages/FrontPage';
import About from './pages/About';
import TrainWithUsPage from './pages/TrainWithUsPage';
import FAQPage from './pages/FAQPage';

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/trainwithus" element={<TrainWithUsPage />} />
        <Route path="/faqs" element={<FAQPage />} />
      </Routes>
      <Footer />
    </>
  );
}
