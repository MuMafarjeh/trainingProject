import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import chartData from './config';
import {useStyleChart} from './style';


function LineChart(props: any) {
      const classes =useStyleChart();
    // className={classes.root} 
    return <div className={classes.root} >
        <Line
        
            data={chartData}
            width={30}
            height={10}
            options={{}}

        />

    </div>
}

export default LineChart;