import React from 'react';
import { Bar } from 'react-chartjs-2';
import chartData from './config';
import {useStyleChart} from './style';

function BarChart(props: any) {
      const classes =useStyleChart();
    // className={classes.root} 
    return <div  className={classes.root} >
        <Bar
          

            data={chartData}
            width={30}
            height={10}
            options={{}}

        />

    </div>
}

export default BarChart;