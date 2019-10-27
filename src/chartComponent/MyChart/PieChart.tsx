import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import chartData from './config';


function PieChart() {
    return <div>
        <Pie
            data={chartData}
            width={50}
            height={20}
            options={{}}

        />

    </div>
}

export default PieChart;