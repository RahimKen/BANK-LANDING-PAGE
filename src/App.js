import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Features from './components/Features';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Features/>
      <Articles/>
      <Footer/>
    </div>
  );
}

export default App;
