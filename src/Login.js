import NavBar from "./NavBar";


const Login = () => {
    return (
        <div>
            <NavBar />
            <form className=" rounded-lg border   m-10">

                <div className=" bg-gray-200   p-2 pl-4 border-2 border-gray-400">  Voter Sign Up</div>
                <div className="m-3 ">Voter Id Number</div>
                <input className=" border  ml-5 p-2 " type=" text" size="78 " />
                <div className="m-3 ">Password</div>
                <input className=" border  ml-5 p-2 " type=" password" size="78 " /><br />
                <button className=" text-white m-4 rounded-md  p-2 text-sm border bg-blue-700 " >Log in</button>
            </form >
        </div >
    )
}
export default Login;