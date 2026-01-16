import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NoiseOverlay from './components/ui/NoiseOverlay';
import SmoothScroll from './components/ui/SmoothScroll';
import Loader from './components/ui/Loader';

// Pages
import Home from './pages/Home';
import ImpactPage from './pages/ImpactPage';
import Collection2025 from './pages/Collection2025';

// App Content (inside Router for useLocation)
const AppContent = ({ isLoading }) => {
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (isLoading) return null;

  return (
    <SmoothScroll>
      <div className="bg-white min-h-screen font-sans selection:bg-secondary selection:text-white relative">
        <NoiseOverlay />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/collection-2025" element={<Collection2025 />} />
          </Routes>
        </AnimatePresence>
      </div>
    </SmoothScroll>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <Loader onComplete={() => setIsLoading(false)} />
      <AppContent isLoading={isLoading} />
    </Router>
  );
}

export default App;
