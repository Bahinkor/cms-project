import React from 'react';
import {ArrowDownward} from "@mui/icons-material";
import {ArrowUpward} from "@mui/icons-material";

function Feature() {
    // JSX
    return (
        <div
            className="flex justify-between w-[77rem] [&>div]:flex-1 [&>div]:mx-5 [&>div]:p-[30px] [&>div]:rounded-[10px] [&>div]:cursor-pointer [&>div]:box-shadow-feature-item">
            {/* Revalue item */}
            <div>
                <h4 className="text-[20px] text-gray-600">Revalue</h4>
                <div className="flex items-center my-[10px]">
                    <span className="text-[30px] font-[600]">$2,412</span>
                    <span className="flex items-center ml-5">
                        -11.4
                        <ArrowDownward className="text-[12px] text-red-700 ml-[5px]"/>
                    </span>
                </div>
                <span className="text-[15px] text-gray-400">
                    Compared to last month
                </span>
            </div>

            {/* Sales item */}
            <div>
                <h4 className="text-[20px] text-gray-600">Sales</h4>
                <div className="flex items-center my-[10px]">
                    <span className="text-[30px] font-[600]">$4,415</span>
                    <span className="flex items-center ml-5">
                        -1.4
                        <ArrowDownward className="text-[12px] text-red-700 ml-[5px]"/>
                    </span>
                </div>
                <span className="text-[15px] text-gray-400">
                    Compared to last month
                </span>
            </div>

            {/* Cost item */}
            <div>
                <h4 className="text-[20px] text-gray-600">Cost</h4>
                <div className="flex items-center my-[10px]">
                    <span className="text-[30px] font-[600]">$2,225</span>
                    <span className="flex items-center ml-5">
                        +2.4
                        <ArrowUpward className="text-[12px] text-green-700 ml-[5px]"/>
                    </span>
                </div>
                <span className="text-[15px] text-gray-400">
                    Compared to last month
                </span>
            </div>
        </div>
    );
}

export default Feature;