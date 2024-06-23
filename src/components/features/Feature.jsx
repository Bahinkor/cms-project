import React, {useState} from 'react';
import {ArrowDownward} from "@mui/icons-material";
import {ArrowUpward} from "@mui/icons-material";
import featuresData from "../../data-dir/featuresData";

function Feature() {
    // Sates
    const [festursDataState, setFestursDataState] = useState(featuresData);

    // JSX
    return (
        <div
            className="flex justify-between w-[77rem] [&>div]:flex-1 [&>div]:mx-5 [&>div]:p-[30px] [&>div]:rounded-[10px] [&>div]:cursor-pointer [&>div]:box-shadow-feature-item">
            {/* item */}
            {
                festursDataState.map((item) => (
                    <div>
                        <h4 className="text-[20px] text-gray-600">{item.title}</h4>
                        <div className="flex items-center my-[10px]">
                            <span className="text-[30px] font-[600]">${item.num.toLocaleString()}</span>
                            <span className="flex items-center ml-5">
                                {item.growth}
                                {
                                    item.growth > 0 ? (
                                        <ArrowUpward className="text-[12px] text-green-700 ml-[5px]"/>
                                    ) : (
                                        <ArrowDownward className="text-[12px] text-red-700 ml-[5px]"/>
                                    )
                                }
                            </span>
                        </div>
                        <span className="text-[15px] text-gray-400">
                            {item.desc}
                        </span>
                    </div>
                ))
            }
        </div>
    );
}

export default Feature;