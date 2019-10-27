import React from 'react';
import { Bar } from 'react-chartjs-2';
import chartData from './config';

function BarChart(props: any) {
    return <div>
        <Bar
            data={chartData}
            width={30}
            height={10}
            options={{}}

        />

    </div>
}

export default BarChart;