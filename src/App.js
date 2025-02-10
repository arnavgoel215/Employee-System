import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EmployeeList from './pages/EmployeeList';
import Schedule from './pages/Schedule';
import PayOverview from './pages/PayOverview';
import NewEmployee from './pages/NewEmployee';
import ManualPay from './pages/ManualPay';

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
              <Route path="/list" element={<EmployeeList />}></Route>
              <Route path="/schedule" element={<Schedule />}></Route>
              <Route path="/pay" element={<PayOverview />}></Route>
              <Route path="newEmployee" element={<NewEmployee />}></Route>
              <Route path="/manualPay" element={<ManualPay />}></Route>
            </Routes>
          </section>
        </main>

      </BrowserRouter>
    </>
  );
}

export default App;
