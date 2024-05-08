import Sidebar from "./components/shared/Sidebar.jsx";
import {RiMenu3Fill} from "react-icons/ri";


export default function App() {
    return (
        <h1 className="bg-[#262837] w-full min-h-screen">
            <Sidebar/>
            {/*Menu movil*/}
            <nav className={"bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0"}>
                <button><RiMenu3Fill/></button>
            </nav>
        </h1>
    )
}