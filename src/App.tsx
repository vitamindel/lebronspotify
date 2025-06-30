import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { MusicProvider } from './contexts/MusicContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MusicPage from './pages/MusicPage';
import LegacyPage from './pages/LegacyPage';
import StatsPage from './pages/StatsPage';
import SonsPage from './pages/SonsPage';
import ImpactPage from './pages/ImpactPage';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  return (
    <AuthProvider>
      <MusicProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-lebron-navy via-slate-900 to-lebron-wine text-white">
            <LoadingScreen />
            <Navbar />
            <main className="pb-24">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/music" element={<MusicPage />} />
                <Route path="/legacy" element={<LegacyPage />} />
                <Route path="/stats" element={<StatsPage />} />
                <Route path="/sons" element={<SonsPage />} />
                <Route path="/impact" element={<ImpactPage />} />
              </Routes>
            </main>
            <MusicPlayer />
            <Footer />
          </div>
        </Router>
      </MusicProvider>
    </AuthProvider>
  );
}

export default App;