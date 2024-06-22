import React from 'react';
import "./TopBar.css";
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import {NavLink} from 'react-router-dom';

function TopBar() {
    // JSX
    return (
        <div className="w-full h-[50px] bg-white sticky top-0 z-50">
            <div className="h-full flex justify-between items-center py-0 px-5">
                {/* Top Left */}
                <div className="topLeft">
                    <NavLink to="/" className="font-bold text-[30px] text-blue-800 cursor-pointer hover:no-underline">Management</NavLink>
                </div>
                {/* Top Right */}
                <div className="flex items-center">
                    <NavLink to="*" className="relative text-[#555] mr-[10px] cursor-pointer">
                        <NotificationsIcon/>
                        <span className="size-[15px] flex items-center justify-center absolute -top-[5px] right-0 bg-red-600 text-white text-[10px] rounded-[50%]">2</span>
                    </NavLink>
                    <NavLink to="*" className="relative text-[#555] mr-[10px] cursor-pointer">
                        <LanguageIcon/>
                        <span className="size-[15px] flex items-center justify-center absolute -top-[5px] right-0 bg-red-600 text-white text-[10px] rounded-[50%]">2</span>
                    </NavLink>
                    <NavLink to="*" className="relative text-[#555] mr-[10px] cursor-pointer">
                        <SettingsIcon/>
                    </NavLink>
                    {/* Avatar img */}
                    <NavLink to="*">
                        <img src="/images/profile.jpg" alt="Admin Profile image" className="size-[40px] rounded-[50%] cursor-pointer"/>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default TopBar;