import React from 'react';
import routes from "./routes";
import {useRoutes} from "react-router-dom";
import TopBar from "./components/topBar/TopBar";
import SideBar from "./components/sideBar/SideBar";
import "./index.css";

function App() {
    // Router
    let router = useRoutes(routes);

    // JSX
    return (
        <>
            <div className="font-Roboto">
                <TopBar/>
                <div className="flex mt-3">
                    <SideBar/>
                    {router}
                </div>
            </div>
        </>
    );
}

export default App;
