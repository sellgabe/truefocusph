import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

const FrontPage = lazy(() => import('./pages/FrontPage'));
// const Coaches = lazy(() => import('./pages/Coaches'));
const About = lazy(() => import('./pages/About'));
const TrainWithUsPage = lazy(() => import('./pages/TrainWithUsPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));

const LoadingFallback = () => <div className="w-full h-full bg-black"></div>;

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <FrontPage />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <About />
            </Suspense>
          }
        />
        {/* <Route
          path="/coaches"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Coaches />
            </Suspense>
          }
        /> */}
        <Route
          path="/trainwithus"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <TrainWithUsPage />
            </Suspense>
          }
        />
        <Route
          path="/faqs"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <FAQPage />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}
