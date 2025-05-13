import './App.css';
import Header from '@components/header/Header';
import Main from '@components/main/Main';
import About from '@components/about/About';
import Skills from '@components/skills/Skills';
import Experiences from '@components/experiences/Experiences';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <About />
      <Skills />
      <Experiences />
    </div>
  );
}

export default App;
