import React from 'react';

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
    // JSX
    return (
        <div className="sticky top-[50px] flex-1 h-[calc(100vh - 50px)] bg-side-bar">
            {/* Side Bar Wrapper */}
            <div className="text-[#555] p-5">
                {/* Dashboard */}
                <div className="mb-[10px] [&>ul]:p-[5px]">
                    <h3 className="text-[13px] text-side-bar-title">Dashboard</h3>
                    <ul className="[&>li]:flex [&>li]:items-center [&>li]:p-[5px] [&>li]:rounded-[10px] [&>li]:cursor-pointer">
                        <li className="side-bar-list-item list-item-active hover:list-item-active">
                            <Link to="/">
                                <LineStyle className="text-5 mr-[5px]"/>
                                Home
                            </Link>
                        </li>
                        <li className="side-bar-list-item hover:list-item-active">
                            <Link to="*">
                                <Timeline className="text-5 mr-[5px]"/>
                                Analytics
                            </Link>
                        </li>
                        <li className="side-bar-list-item hover:list-item-active">
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
                        <li className="side-bar-list-item hover:list-item-active">
                            <Link to="/users">
                                <PermIdentity className="text-5 mr-[5px]"/>
                                Users
                            </Link>
                        </li>
                        <li className="side-bar-list-item hover:list-item-active">
                            <Link to="/newuser">
                                <PermIdentity className="text-5 mr-[5px]"/>
                                New User
                            </Link>
                        </li>
                        <li className="side-bar-list-item hover:list-item-active">
                            <Link to="/products">
                                <Storefront className="text-5 mr-[5px]"/>
                                Products
                            </Link>
                        </li>
                        <li className="side-bar-list-item hover:list-item-active">
                            <Link to="*">
                                <AttachMoney className="text-5 mr-[5px]"/>
                                Transactions
                            </Link>
                        </li>
                        <li className="side-bar-list-item hover:list-item-active">
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
                        <li className="side-bar-list-item hover:list-item-active">
                            <Link to="*">
                                <MailOutline className="text-5 mr-[5px]"/>
                                Mail
                            </Link>
                        </li>
                        <li className="side-bar-list-item hover:list-item-active">
                            <Link to="*">
                                <DynamicFeed className="text-5 mr-[5px]"/>
                                Feedback
                            </Link>
                        </li>
                        <li className="side-bar-list-item hover:list-item-active">
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
                        <li className="side-bar-list-item hover:list-item-active">
                            <Link to="*">
                                <WorkOutline className="text-5 mr-[5px]"/>
                                Manage
                            </Link>
                        </li>
                        <li className="side-bar-list-item hover:list-item-active">
                            <Link to="*">
                                <Timeline className="text-5 mr-[5px]"/>
                                Analytics
                            </Link>
                        </li>
                        <li className="side-bar-list-item hover:list-item-active">
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