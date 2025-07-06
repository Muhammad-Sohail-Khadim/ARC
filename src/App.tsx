import React from 'react';
import { useLoading } from './hooks/useLoading';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const isLoading = useLoading(2500); // Show loading for at least 2.5 seconds

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;