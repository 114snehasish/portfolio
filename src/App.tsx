import './App.css';
import { useRef } from 'react';
import Header from './components/header/Header.tsx';
import Main from './components/main/Main.tsx';
import About from './components/about/About.tsx';

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-primary text-white min-h-screen pt-24">
      <Header scrollToAbout={scrollToAbout} />
      <Main aboutRef={aboutRef} />
      <About ref={aboutRef} />
    </div>
  );
}

export default App;
