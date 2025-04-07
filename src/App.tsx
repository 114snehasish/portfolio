import './App.css';
import { useRef } from 'react';
import Header from './components/header/Header.tsx';
import Main from './components/main/Main.tsx';
import About from './components/about/About.tsx';

function App() {
  const aboutRef = useRef<HTMLElement>(null);
  
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header scrollToAbout={scrollToAbout} />
      <Main scrollToAbout={scrollToAbout} />
      <About ref={aboutRef} />
    </>
  );
}

export default App;
