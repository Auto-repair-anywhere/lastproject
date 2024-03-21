import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './AdminPart/Login.jsx';
import Signin from './AdminPart/Signin.jsx';
import CheckAllusers from './AdminPart/CheckAllusers.jsx';
import StatisticsAdmin from "./AdminPart/StatisticsAdmin.jsx";
import ProfileAdmin from "./AdminPart/ProfileAdmin.jsx";
import UpdateList from "./AdminPart/UpdateList.jsx";
import IncomeStatistics from "./AdminPart/IncomeStatistics.jsx";
import HomepageAdmin from "./AdminPart/HomepageAdmin.jsx";
import UpdateProfessional from "./AdminPart/UpdateProfessional.jsx";


function App() {
  return (<div>
    <BrowserRouter> 
      <Routes>
        
        <Route path="/" element={<UpdateList />} /> 
        <Route path="/CheckAllusers" element={<CheckAllusers />} />
        {/* <Route path="/Login" element={<Login/>}/> */}
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/UpdateUseradmin" element={<UpdateList/>}/>
        <Route path="/StatisticsAdmin" element={<StatisticsAdmin />} />
        <Route path="/ProfileAdmin" element={<ProfileAdmin />} />
        <Route path="/IncomeStatistics" element={<IncomeStatistics />} />
        <Route path="/HomepageAdmin" element={<HomepageAdmin />} />
        <Route path="/UpdateList" element={<UpdateList />} />
        <Route path="/UpdateProfessional" element={<UpdateProfessional />} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

