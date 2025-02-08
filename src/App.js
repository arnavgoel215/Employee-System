import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <h1>Employee Management System</h1>
        </header>

        <Navbar />

        <h2>Welcome</h2>

      </BrowserRouter>
    </>
  );
}

export default App;
