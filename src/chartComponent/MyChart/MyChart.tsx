import React from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';
import LineChart from './LineChart';

interface IProps {
    type: string
}
function MyChart(props: IProps) {

    if (props.type == 'bar') {
        return <BarChart />
    }
    else if (props.type == 'line') {
        return <LineChart />

    }
    else {
        return <PieChart />
    }

};

export default MyChart; 
