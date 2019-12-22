import React, { useState, useContext, useEffect, Component } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { fetchData, sortData, filterData } from '../duck/action/allAction';
import { editDataAction } from '../duck/action/allAction';
import BodyTableClass from './TableBody';
import EnhancedTable from './EnhancedTable';
import { requestData } from '../duck/action/allAction';
import { bindActionCreators } from 'redux';


class TableBodyContainer extends Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            dataFetched:[],
        }

    }

    componentDidMount() {

        this.props.dispatchRequestData();
        // this.setState({ dataFetched: this.props.data })
        // console.log(this.state.dataFetched, 'dataFetched');
    }

    render() {
        console.log(this.props.data, "remder");
        const { data } = this.props.data;
        return (<EnhancedTable
            allData={data}
            dispatchSort={this.props.dispatchSortData}
            dispatchSearch={this.props.dispatchSearchData}


        />


        )
    }
}
function mapStateToProps(state: any){


    return {
        data: state.data,
        // data: getData (state)

    }

}
function mapDispatchToProps(dispatch: any) {

    // bindActionCreators({requestData},dispatch)

    return {
        dispatchRequestData: () => dispatch(requestData()),
        dispatchSortData: (dataSorted: any) => dispatch(sortData(dataSorted)),
        dispatchSearchData: (dataSearched: any) => dispatch(filterData(dataSearched)),


    }

}

export default connect(mapStateToProps, mapDispatchToProps)(TableBodyContainer);