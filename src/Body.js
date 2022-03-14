import bg from './assets/bg.png'
import NavBar from './NavBar';
import { useNavigate } from "react-router-dom";

const Body = () => {
    let navigate = useNavigate();
    const Login = () => {
        let path = `login`;
        navigate(path);
    }

    const SignUp = () => {
        let path = `register`;
        navigate(path);
    }

    return (
        <div>
            <NavBar />
            <img src={bg} />
            <div className=" m-1">
                <div className=" bg-gray-200 p-2 pl-4 border-2 border-gray-400">  Step 1</div>

                <div className="m-3 font-semibold"> Sign Up</div>
                <div className="m-3"> Go to Sign Up  , Enter your Information and Generate Password.</div>



                <button className=" text-white m-3 rounded-sm p-1 border bg-blue-700 text-xl" onClick={SignUp}>Sign up</button>

            </div>
            <div className=" m-1">
                <div className=" bg-gray-200 p-2 pl-4 border-2 border-gray-400">  Step 2</div>

                <div className="m-3 font-semibold"> Log In </div>
                <div className="m-3"> Click on Log in, Enter your Credentials and scan yo</div>



                <button className=" text-white m-3 rounded-sm p-1 border bg-blue-700 text-xl" onClick={Login} >Log in</button>

            </div>
            <div className=" m-1">
                <div className=" bg-gray-200 p-2 pl-4 border-2 border-gray-400">  Step 3</div>

                <div className="m-3 text-xl font-semibold"> Vote! </div>


            </div>
        </div>
    )
}
export default Body;