import { Link } from "react-router-dom";
import NavBar from "./NavBar";


const Login = () => {
    return (
        <div>
            <NavBar />
            <form className=" rounded-lg border pb-5  m-10">

                <div className=" bg-gray-200   p-2 pl-4 border-2 border-gray-400">  Voter Sign Up</div>
                <div className="m-3 ">Voter Id Number</div>
                <input className=" border  ml-5 p-2 " type=" text" size="78 " />
                <div className="m-3 ">Password</div>
                <input className=" border mb-5 ml-5 p-2 " type="password" size="78 " /><br />
                <Link to="/verify" className=" text-white  ml-5 mb-10 rounded-sm p-1 border bg-blue-700 text-xl"  >Login</ Link>
            </form >
        </div >
    )
}
export default Login;