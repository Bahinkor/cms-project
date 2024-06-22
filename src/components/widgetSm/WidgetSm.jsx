import React from 'react';
import {Visibility} from "@mui/icons-material";
import {Alert} from "@mui/material";
import {useState, useEffect} from "react";
import newUserData from "../../data-dir/newUserData";

function WidgetSm() {
    // State
    const [data, setData] = useState([]);
    // Fetch Data
    useEffect(() => {
        setTimeout(() => {
            setData(newUserData);
        }, 1000);
    }, [data]);

    // JSX
    return (
        <div className="flex-1 p-5 mr-5 box-shadow-feature-item">
            <span className="text-[22px] font-[600]">New Join Members</span>
            {/* Widget List */}
            <ul className="[&>li]:flex [&>li]:justify-between [&>li]:items-center [&>li]:mt-5">
                {
                    data.length ? data.map((user) => (
                        <li key={user.id}>
                            <img src="images/profile.jpg" alt="Profile images"
                                 className="size-10 rounded-full object-cover"/>
                            <div className="flex flex-col w-[200px]">
                                {/* User Name & Job Title */}
                                <span className="font-[600]">{user.username}</span>
                                <span className="font-[100] text-[#555]">{user.userTitle}</span>
                            </div>
                            {/* Visibility Button */}
                            <button
                                className="flex items-center bg-[#eeeef7] text-[#555] py-[7px] px-[10px] rounded-[10px] cursor-pointer">
                                <Visibility/>
                            </button>
                        </li>
                    )) : (
                        <Alert severity="info">Loading...</Alert>
                    )
                }
            </ul>
        </div>
    );
}

export default WidgetSm;