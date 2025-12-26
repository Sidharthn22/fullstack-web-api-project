import { Routes, Route } from "react-router-dom";
import { Loginpage } from "./Loginpage";
import Userportal from "./components/user/Userportal";
import Adminportal from "./components/admin/Adminportal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Loginpage />} />
      <Route path="/userportal/*" element={<Userportal />} />
      <Route path="/adminportal/*" element={<Adminportal />} />
    </Routes>
  );
}

export default App;
