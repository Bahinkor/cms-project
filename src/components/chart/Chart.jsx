import React from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip} from "recharts";

function Chart({title, data, dataKey, grid}) {
    // JSX
    return (
        <div className="m-5 p-5 box-shadow-feature-item">
            <h3 className="mb-5 font-bold">{title}</h3>
            <ResponsiveContainer width="100%" aspect="4">
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
                    <Tooltip/>
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10"/>}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;