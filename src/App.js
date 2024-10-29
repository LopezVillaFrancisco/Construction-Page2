import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/About';
import ContactPage from './components/ContactPage';
import PortfolioPage from './components/PortfolioPage';
import ConstructionDetail from './components/ConstructionDetail';

const App = () => (
  <Router>
    <div className="flex flex-col min-h-screen text-gray-800">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<PortfolioPage/>} />
          <Route path="/portfolio/:id" element={<ConstructionDetail/>} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
