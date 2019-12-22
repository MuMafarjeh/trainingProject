import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import TableHeader from './TableHeader';
import { fetchData } from '../duck/action/allAction';


export interface ITableHeaderContainer {
    columns: Array<any>;
    onSort: (column: any) => void;
    sortDirection: any;
    columnSorted: any;
    // DataSorted: Array<any>



}

export default function TableHeaderContainer(props: ITableHeaderContainer) {
    const { columns, sortDirection, columnSorted, onSort } = props;
    const storeState = useSelector((state: any) => state.data);
    const dispatch = useDispatch();


    return (<TableHeader

        // DataSorted={DataSorted}
        columns={columns}
        sortDirection={sortDirection}
        columnSorted={columnSorted}
        onSort={onSort}
        // onSortDispatch={(row: any) => dispatch(sortAction(row))}


    />)
}