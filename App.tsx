
import React from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programs from './pages/Programs';
import About from './pages/About';
import Transformations from './pages/Transformations';
import Contact from './pages/Contact';
import { ThemeProvider } from './contexts/ThemeContext';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

function App() {
    return (
        <ThemeProvider>
            <HashRouter>
                <ScrollToTop />
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/programs" element={<Programs />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/transformations" element={<Transformations />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </HashRouter>
        </ThemeProvider>
    );
}

export default App;
