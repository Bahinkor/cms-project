import React from 'react';
import {useState, useEffect} from "react";
import {Alert} from "@mui/material";
import transActions from "../../data-dir/transActions";

function WidgetLg() {

    // State
    const [transActionData, setTransActionData] = useState([]);

    // Fetch Data
    useEffect(() => {
        setTimeout(() => {
            setTransActionData(transActions);
        }, 1500);
    }, [transActionData]);


    // JSX
    return (
        <div className="flex-[2] p-5 box-shadow-feature-item">
            <h3 className="text-[22px] font-[600]">Last TransActions</h3>
            <table className="w-full mt-5 border-spacing-5">
                {/* Table Headers */}
                <thead>
                <tr className="[&>th]:text-left">
                    <th>Costomer</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
                </thead>
                {/* Table Data */}
                <tbody>

                {/* Data Table */}
                {
                    transActionData.length ? transActionData.map(user => (
                        <tr>
                            <td className="flex items-center">
                                <img src="images/profile.jpg" alt="profile image"
                                     className="size-10 rounded-full m-[10px] object-cover"/>
                                <span className="widget-lg-name">{user.username}</span>
                            </td>
                            <td className="text-[#555] font-[100]">{user.date}</td>
                            <td className="text-[#555] font-[100]">${user.amount}</td>
                            <td className="widget-lg-user">
                                <button
                                    className={`py-[5px] px-[7px] rounded-[10px] bg-[#ebf1fe] ${user.status}`}>{user.status}
                                </button>
                            </td>
                        </tr>
                    )) : (
                        <Alert severity="info">Loading...</Alert>
                    )
                }
                </tbody>
            </table>
        </div>
    );
}

export default WidgetLg;