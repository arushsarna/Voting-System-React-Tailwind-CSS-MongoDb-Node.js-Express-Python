import NavBar from "./NavBar";
import { Link } from "react-router-dom";


const Register = () => {





    return (
        <div>
            <NavBar />

            <form className=" rounded-lg border   m-10">

                <div className=" bg-gray-200   p-2 pl-4 border-2 border-gray-400">  Voter Sign Up</div>

                <div className="m-3 ">Voter Id Number</div>
                <input className=" border  ml-5 p-2 " type=" text" size="78 " />
                <div className="m-3 ">Name</div>
                <input className=" border  ml-5 p-2 " type=" text" size="78 " />
                <div className="m-3 ">Surname</div>
                <input className=" border  ml-5 p-2 " type=" text" size="78 " />
                <div className="m-3 ">Middle Name</div>
                <input className=" border  ml-5 p-2 " type=" text" size="78 " />
                <div className="m-3 ">Gender</div>
                <div className=" m-3">
                    <input type="radio" name="gender" />
                    <label for="html">Male</label><br />
                    <input type="radio" name="gender" />
                    <label for="css">Female</label><br />
                </div>
                <div className="m-3 ">Birthday</div>
                <input className="m-3 " type="date" />
                <div className="m-3 ">Address</div>
                <input className=" border ml-5 mb-4 p-2 " type=" text" size="78 " /><br />
                <Link to="/verify" className=" text-white ml-5 mb-10 rounded-sm p-1 border bg-blue-700 text-xl"  >Register</Link >

            </form >
        </div >
    )
}
export default Register;