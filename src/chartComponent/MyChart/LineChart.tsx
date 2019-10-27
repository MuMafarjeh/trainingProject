import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import chartData from '../MyChart/config';



function LineChart(props: any) {

    return <div>
        <Line
            data={chartData}
            width={30}
            height={10}
            options={{}}

        />

    </div>
}

export default LineChart;