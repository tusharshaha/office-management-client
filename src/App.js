import { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { SyncLoader } from 'react-spinners'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { css } from "@emotion/react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Components/Dashboard/DashboardHome/DashboardHome';
import ManageEmployee from './Components/Dashboard/ManageEmployee/ManageEmployee';
import AddEmployee from './Components/Dashboard/AddEmployee/AddEmployee';
function App() {
  const [loading, setLoading] = useState(false)
  const override = css``;
  useEffect(() => {
    AOS.init({ offset: 160, duration: 900, delay: 100 });
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [])

  return (
    <>
      {loading ?
        // this is preloader
        <div className='preLoader'>
          <SyncLoader
            loading={loading}
            size={25}
            margin={2}
            color="#ff4a57"
            css={override}
          />
        </div>
        : <div className="App">
          <BrowserRouter>
            <Routes>
            {/* this is Home Route  */}
              <Route path="/" element={<Home />} />
              <Route path="home" element={<Home />} />
            {/* this is Dashboard  */}
              <Route path="dashboard" element={<Dashboard />}>
            {/* this is dashboard home */}
                <Route path='' element={<DashboardHome />} />
            {/* this is add employee route  */}
                <Route path='addEmployee' element={<AddEmployee />} />
            {/* this is manage employee route  */}
                <Route path='manageEmployee' element={<ManageEmployee />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>}
    </>
  );
}

export default App;
