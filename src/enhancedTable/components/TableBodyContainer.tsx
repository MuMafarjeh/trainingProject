import React, { useState, useContext, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
// import BodyTable from './TableBody';
import { fetchData } from '../duck/action/allAction';
import { deleteRow } from '../duck/action/allAction';
import { editRow } from '../duck/action/allAction';
import BodyTableClass from './TableBody';
import { typeOfAction } from '../duck/action/actionType';

export interface ITableBodyContainer {
    allData: Array<any>

}

export default function TableBodyContainer(props: ITableBodyContainer) {
    const { allData } = props;
    const storeState = useSelector((state: any) => state.data);
    const dispatch = useDispatch();
    const [data, setData] = useState([] as any);


    return (<BodyTableClass

        allData={props.allData}
        dataFromStore={data}
        onDeleteDispatch={(row: any) => dispatch(deleteRow(row))}
        onEditDispatch={(editData: any, id: any) => dispatch(editRow(editData, id))}
   

    />
    )
}