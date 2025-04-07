import './App.css';
import Header from './components/header/Header.tsx';
import Main from './components/main/Main.tsx';
import About from './components/about/About.tsx';

function App() {
  return (
    <div className="bg-primary text-white min-h-screen pt-24">
      <Header />
      <Main />
      <About />
    </div>
  );
}

export default App;
