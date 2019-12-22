import React, { Component } from 'react';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Chart from 'react-chartjs-2';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import MyChart from './MainChart';
import useStyle from './MainChart/style'
class Charts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myChart: null,
            type: 'bar',
            options: {

                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            },




        }
    }
    handleClick = event => {
        this.setState({ type: event.target.value });

    };




    render() {
        const { type } = this.state
        const { classes } = this.props;
        console.log(this.state.type)

        return (

            <div>
                <div className={classes.root}>
                    <FormControl variant="filled"  >
                        <InputLabel htmlFor="filled-age-simple"></InputLabel>
                        <Select
                            value={this.state.type}
                            onChange={event => this.handleClick(event)}
                        >
                            <MenuItem value={'bar'}>Bar Chart</MenuItem>
                            <MenuItem value={'line'}>Line Chart</MenuItem>
                            <MenuItem value={'radar'}>Bubble Chart</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>

                </div>

                <MyChart
                type={type} />


            </div>
        )
    }
}


export default (useStyle)(Charts)   