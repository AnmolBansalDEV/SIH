import './App.css';
import HomePage from './components/HomePage'
import About from './components/About';
import LoginNav from './components/LoginNav';

function App() {
  return (
    <div className="App">
      <HomePage />
      <About />
      <LoginNav />
    </div>
  );
}

export default App;
