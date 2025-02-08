import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <h1>Employee Management System</h1>
        </header>

        <Navbar />

        <main>
          <section>
            <Routes>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </section>
        </main>

      </BrowserRouter>
    </>
  );
}

export default App;
