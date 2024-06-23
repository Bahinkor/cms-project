import React, {useState} from 'react';

import {LineStyle} from "@mui/icons-material";
import {Timeline} from "@mui/icons-material";
import {TrendingUp} from "@mui/icons-material";
import {PermIdentity} from "@mui/icons-material";
import {Storefront} from "@mui/icons-material";
import {AttachMoney} from "@mui/icons-material";
import {BarChart} from "@mui/icons-material";
import {MailOutline} from "@mui/icons-material";
import {DynamicFeed} from "@mui/icons-material";
import {MessageOutlined} from "@mui/icons-material";
import {WorkOutline} from '@mui/icons-material';

import {Link} from "react-router-dom";

function SideBar() {
    // State
    const [activeItem, setActiveItem] = useState(null);

    // Functions
    const clickHandler = (item) => {
        setActiveItem(item);
    }

    // JSX
    return (
        <div className="sticky top-[50px] flex-1 h-[calc(100vh - 50px)] bg-side-bar">
            {/* Side Bar Wrapper */}
            <div className="text-[#555] p-5">
                {/* Dashboard */}
                <div className="mb-[10px] [&>ul]:p-[5px]">
                    <h3 className="text-[13px] text-side-bar-title">Dashboard</h3>
                    <ul className="[&>li]:flex [&>li]:items-center [&>li]:p-[5px] [&>li]:rounded-[10px] [&>li]:cursor-pointer">
                        <li className={`side-bar-list-item hover:list-item-active ${activeItem === "home" ? "list-item-active" : ""}`}
                            onClick={() => clickHandler("home")}>
                            <Link to="/">
                                <LineStyle className="text-5 mr-[5px]"/>
                                Home
                            </Link>
                        </li>
                        <li className={`side-bar-list-item hover:list-item-active ${activeItem === "analytics" ? "list-item-active" : ""}`}
                            onClick={() => clickHandler("analytics")}>
                            <Link to="*">
                                <Timeline className="text-5 mr-[5px]"/>
                                Analytics
                            </Link>
                        </li>
                        <li className={`side-bar-list-item hover:list-item-active ${activeItem === "sales" ? "list-item-active" : ""}`}
                            onClick={() => clickHandler("sales")}>
                            <Link to="*">
                                <TrendingUp className="text-5 mr-[5px]"/>
                                Sales
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Quick Meni */}
                <div className="mb-[10px] [&>ul]:p-[5px]">
                    <h3 className="text-[13px] text-side-bar-title">Quick Menu</h3>
                    <ul className="[&>li]:flex [&>li]:items-center [&>li]:p-[5px] [&>li]:rounded-[10px] [&>li]:cursor-pointer">
                        <li className={`side-bar-list-item hover:list-item-active ${activeItem === "users" ? "list-item-active" : ""}`}
                            onClick={() => clickHandler("users")}>
                            <Link to="/users">
                                <PermIdentity className="text-5 mr-[5px]"/>
                                Users
                            </Link>
                        </li>
                        <li className={`side-bar-list-item hover:list-item-active ${activeItem === "newUser" ? "list-item-active" : ""}`}
                            onClick={() => clickHandler("newUser")}>
                            <Link to="/newuser">
                                <PermIdentity className="text-5 mr-[5px]"/>
                                New User
                            </Link>
                        </li>
                        <li className={`side-bar-list-item hover:list-item-active ${activeItem === "products" ? "list-item-active" : ""}`}
                            onClick={() => clickHandler("products")}>
                            <Link to="/products">
                                <Storefront className="text-5 mr-[5px]"/>
                                Products
                            </Link>
                        </li>
                        <li className={`side-bar-list-item hover:list-item-active ${activeItem === "transAction" ? "list-item-active" : ""}`}
                            onClick={() => clickHandler("transAction")}>
                            <Link to="*">
                                <AttachMoney className="text-5 mr-[5px]"/>
                                Transactions
                            </Link>
                        </li>
                        <li className={`side-bar-list-item hover:list-item-active ${activeItem === "reports" ? "list-item-active" : ""}`}
                            onClick={() => clickHandler("reports")}>
                            <Link to="*">
                                <BarChart className="text-5 mr-[5px]"/>
                                Reports
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Notifications */}
                <div className="mb-[10px] [&>ul]:p-[5px]">
                    <h3 className="text-[13px] text-side-bar-title">Notifications</h3>
                    <ul className="[&>li]:flex [&>li]:items-center [&>li]:p-[5px] [&>li]:rounded-[10px] [&>li]:cursor-pointer">
                        <li className={`side-bar-list-item hover:list-item-active ${activeItem === "mail" ? "list-item-active" : ""}`}
                            onClick={() => clickHandler("mail")}>
                            <Link to="*">
                                <MailOutline className="text-5 mr-[5px]"/>
                                Mail
                            </Link>
                        </li>
                        <li className={`side-bar-list-item hover:list-item-active ${activeItem === "fBack" ? "list-item-active" : ""}`}
                            onClick={() => clickHandler("fBack")}>
                            <Link to="*">
                                <DynamicFeed className="text-5 mr-[5px]"/>
                                Feedback
                            </Link>
                        </li>
                        <li className={`side-bar-list-item hover:list-item-active ${activeItem === "message" ? "list-item-active" : ""}`}
                            onClick={() => clickHandler("message")}>
                            <Link to="*">
                                <MessageOutlined className="text-5 mr-[5px]"/>
                                Message
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Staff */}
                <div className="mb-[10px] [&>ul]:p-[5px]">
                    <h3 className="text-[13px] text-side-bar-title">Staff</h3>
                    <ul className="[&>li]:flex [&>li]:items-center [&>li]:p-[5px] [&>li]:rounded-[10px] [&>li]:cursor-pointer">
                        <li className={`side-bar-list-item hover:list-item-active ${activeItem === "manage" ? "list-item-active" : ""}`}
                            onClick={() => clickHandler("manage")}>
                            <Link to="*">
                                <WorkOutline className="text-5 mr-[5px]"/>
                                Manage
                            </Link>
                        </li>
                        <li className={`side-bar-list-item hover:list-item-active ${activeItem === "analyt" ? "list-item-active" : ""}`}
                            onClick={() => clickHandler("analyt")}>
                            <Link to="*">
                                <Timeline className="text-5 mr-[5px]"/>
                                Analytics
                            </Link>
                        </li>
                        <li className={`side-bar-list-item hover:list-item-active ${activeItem === "repor" ? "list-item-active" : ""}`}
                            onClick={() => clickHandler("repor")}>
                            <Link to="*">
                                <WorkOutline className="text-5 mr-[5px]"/>
                                Reports
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideBar;