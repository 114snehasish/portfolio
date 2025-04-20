import './App.css';
import Header from '@components/header/Header';
import Main from '@components/main/Main';
import About from '@components/about/About';
import Skills from '@components/skills/Skills';

function App() {
  return (
    <div className="bg-primary text-white min-h-screen pt-24">
      <Header />
      <Main />
      <About />
      <Skills />
    </div>
  );
}

export default App;
