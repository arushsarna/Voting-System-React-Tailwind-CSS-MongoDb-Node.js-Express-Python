import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className=" bg-cyan-500 odd:flex flex-row">
            <div className=" w-full  ">
                <Link to="/" className=" text-xl p-7 relative top-5 ml-5 ">Election</Link>
            </div>
            <div className=" flex flex-row  p-5">
                <Link to="/" className=" m-2 ">
                    Vote

                </Link>
                <Link to="/login" className=" m-2">
                    Login
                </Link>
                <Link to="/register" className=" m-2" >
                    Register
                </Link>
            </div>
        </div>
    )
}
export default NavBar;