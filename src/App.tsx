import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Suspense, lazy } from 'react';
import { Navigation } from './components/Navigation';
import { LoadingSpinner } from './components/LoadingSpinner';
import { useTheme } from './hooks/useTheme';
import { useRoutePersistence } from './hooks/useRoutePersistence';

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.default })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.default })));
const Projects = lazy(() => import('./pages/Projects').then(module => ({ default: module.default })));
const Experience = lazy(() => import('./pages/Experience').then(module => ({ default: module.default })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.default })));

function AppRoutes() {
  useRoutePersistence();
  
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default function App() {
  const { theme, setTheme } = useTheme();

  return (
    <Router>
      <div className={theme}>
        <Navigation theme={theme} setTheme={setTheme} />
        <AppRoutes />
      </div>
    </Router>
  );
}