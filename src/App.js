import './App.css';
import  { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import LogUser from './pages/User/LogUser';
// import LogHos from './pages/Hospital/LogHos';
import LogDoc from './pages/Doctor/LogDoc';
import OcrDoc from './pages/Doctor/OcrDoc';
import OcrUser from './pages/User/OcrUser';
import DashDoc from './pages/Doctor/DashDoc';
// import DashHosp from './pages/Hospital/DashHosp';
import DashUser from './pages/User/DashUser';
import DocSign from './pages/Doctor/DocSign';
import UserSign from "./pages/User/UserSign";
import Symptoms from './pages/User/Symptoms';
import Calender from './pages/User/Calender';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/loguser" element={<LogUser/>} />
          {/* <Route path="/loghos" element={<LogHos/>} /> */}
          <Route path="/logdoc" element={<LogDoc/>} />
          <Route path="/ocrdoc" element={<OcrDoc/>}/>
          <Route path="/ocruser" element={<OcrUser/>}/>
          <Route path="/dashdoc" element={<DashDoc/>}/>
          {/* <Route path="/dashhosp" element={<DashHosp/>}/> */}
          <Route path="/dashuser" element={<DashUser/>}/>
          <Route path="/docsign" element={<DocSign/>}/>
          <Route path="/usersign" element={<UserSign/>}/>
          <Route path="/symptoms" element={<Symptoms />} />
          <Route path='/calender' element={<Calender />} />
      </Routes>
      </Router>
      

      
    </div>
  );
}

export default App;
