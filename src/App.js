import Body from "./Body";
import FingerPrint from "./FingerPrint";
import Login from "./Login";
import NavBar from "./NavBar";
import Register from "./Register";
import Voting from "./Voting";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className=" App">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="login" element={<Login />} />
        <Route path="verify" element={<FingerPrint />} />
        <Route path="register" element={<Register />} />
        <Route path="voting" element={<Voting />} />


      </Routes>

    </div>
  );
}

export default App;
