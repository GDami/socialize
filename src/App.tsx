import { useState } from "react";
import SideBar from "./components/layout/sidebar/SideBar";
import HomePage from "./components/layout/homepage/HomePage";

export default function App() {
    const [ currentTab, setCurrentTab ] = useState("home")

    return (
        <div className="app">
            <SideBar onTabClick={setCurrentTab} />
            { currentTab == "home" && <HomePage /> }
        </div>
    )
}