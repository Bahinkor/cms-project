import React from 'react';
import Feature from "../../components/features/Feature";
import Chart from "../../components/chart/Chart";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import XAxesData from "../../data-dir/datas";

function Home() {
    // JSX
    return (
        <div className="flex-4">
            <Feature/>
            <Chart grid title="Manth Sale" data={XAxesData} dataKey="sale"/>
            <div className="flex m-5">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    );
}

export default Home;