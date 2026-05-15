import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import Header from './components/Header';
import Footer from './components/Footer';
import StaticPage from './pages/StaticPage';
import { useState, useEffect } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark', 'bg-[#121212]', 'text-white');
      document.body.classList.remove('bg-brand-offwhite', 'text-brand-black');
    } else {
      document.body.classList.remove('dark', 'bg-[#121212]', 'text-white');
      document.body.classList.add('bg-brand-offwhite', 'text-brand-black');
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className={`min-h-screen flex flex-col transition-colors duration-300`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:slug" element={<BlogPost />} />
            <Route path="/category/:category" element={<Home />} />
            <Route path="/about" element={<StaticPage title="About Us" />} />
            <Route path="/contact" element={<StaticPage title="Contact Us" />} />
            <Route path="/privacy-policy" element={<StaticPage title="Privacy Policy" />} />
            <Route path="/terms" element={<StaticPage title="Terms & Conditions" />} />
            <Route path="/disclaimer" element={<StaticPage title="Disclaimer" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
