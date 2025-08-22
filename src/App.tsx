import './App.css';
import Header from '@components/header/Header';
import Main from '@components/main/Main';
import About from '@components/about/About';
import Skills from '@components/skills/Skills';
import Experiences from '@components/experiences/Experiences';
import Articles from '@components/articles/Articles';
import Contact from '@components/contact/Contact';
import Footer from '@components/footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <About />
      <Skills />
      <Experiences />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
