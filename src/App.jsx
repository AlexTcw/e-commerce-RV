import Sidebar from "./components/shared/Sidebar.jsx";
import {RiAddLine, RiCloseLine, RiLightbulbLine, RiMenu3Fill, RiUser3Line} from "react-icons/ri";
import {useState} from "react";


export default function App() {
    const [showMenu, setShowMenu] = useState(false);
    //const [ShowOrder, setShowOrder] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className="bg-[#262837] w-full min-h-screen">
            <Sidebar showMenu={showMenu} />
            {/*Menu movil*/}
            <nav className={"bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 " +
                "left-0 text-3xl text-gray-300 p-4 flex items-center justify-between " +
                "py-2 px-8 rounded-tl-xl rounded-tr-xl"}>
                <button className={"p-2"}><RiUser3Line/></button>
                <button className={"p-2"}><RiAddLine/></button>
                <button className={"p-2"}><RiLightbulbLine/></button>
                <button onClick={toggleMenu} className={"text-white  p-2"}>
                    {showMenu ? <RiCloseLine/> : <RiMenu3Fill/>}
                </button>
            </nav>
            <main className={"lg:pl-28 grid grid-cols-1 lg:grid-cols-8"}>
                <div className={"lg:col-span-6"}>Hola</div>
                <div className={"lg:col-span-2"}>Hola2</div>
            </main>
        </div>
    )
}