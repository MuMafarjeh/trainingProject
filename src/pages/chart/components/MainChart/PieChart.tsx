import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import chartData from './config';
import  {useStyleChart} from './style';


function PieChart() {
     const classes =useStyleChart(); 
    // className={classes.root}
    return <div className={classes.root}>
        <Pie
            data={chartData}
            width={50}
            height={20}
            options={{}}

        />

    </div>
}

export default PieChart;