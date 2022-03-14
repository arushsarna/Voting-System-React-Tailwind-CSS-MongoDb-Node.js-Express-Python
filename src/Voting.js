import NavBar from "./NavBar";

const Voting = () => {
    return (
        <div>
            <NavBar />
            <h1 className=" text-center text-5xl">Vote</h1>
            <div className=" grid grid-cols-2">
                <div className=" m-10 p-10 border-2"> Party A
                    <button className=" text-white m-3 rounded-sm p-1 border bg-blue-700 text-xl" >Vote</button>
                </div>
                <div className=" m-10  p-10 border-2"> Party B
                    <button className=" text-white m-3 rounded-sm p-1 border bg-blue-700 text-xl" >Vote</button></div>
                <div className=" m-10 p-10 border-2"> Party C
                    <button className=" text-white m-3 rounded-sm p-1 border bg-blue-700 text-xl" >Vote</button></div>
                <div className=" m-10 p-10  border-2"> Party D
                    <button className=" text-white m-3 rounded-sm p-1 border bg-blue-700 text-xl" >Vote</button></div>
                <div className=" m-10 p-10 border-2"> Party E
                    <button className=" text-white m-3 rounded-sm p-1 border bg-blue-700 text-xl" >Vote</button></div>
                <div className=" m-10  p-10 border-2"> Party F
                    <button className=" text-white m-3 rounded-sm p-1 border bg-blue-700 text-xl" >Vote</button></div>
            </div>
        </div>
    )
}
export default Voting;