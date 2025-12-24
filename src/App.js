import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loginpage } from "./Loginpage";
import Userportal from "./components/user/Userportal";
import Adminportal from "./components/admin/Adminportal";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage/>}/>
        <Route path="/userportal/*" element={<Userportal/>} />
        <Route path="/adminportal/*" element={<Adminportal/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
