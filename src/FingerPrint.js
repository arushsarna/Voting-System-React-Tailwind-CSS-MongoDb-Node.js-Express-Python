import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const FingerPrint = () => {
    return (
        <div>
            <NavBar />
            <form className=" rounded-lg border p-5  m-10">

                <div className=" bg-gray-200 mb-5  p-2 pl-4 border-2 border-gray-400">  Verify FingerPrint Detection</div>
                <label className=" m-3" for="myfile">Select a file:</label><br />
                <input className=" m-3 mb-5" type="file" id="myfile" name="myfile" /><br />
                <Link to="/voting" className=" text-white m-3  rounded-sm p-1 border bg-blue-700 text-xl" >Verify</Link>
            </form>
        </div >
    )
}
export default FingerPrint;