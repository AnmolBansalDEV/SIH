import './App.css';
import './login-page.css'
import HomePage from './components/HomePage'
import About from './components/About';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <HomePage />
      <About />
      <Login />
    </div>
  );
}

export default App;
