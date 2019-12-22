import React, { useState, useContext, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import BodyTable from './TableBody';
import { fetchData } from './connectComponent/action/allAction';
import { deleteAction } from './connectComponent/action/allAction';
import { editDataAction } from './connectComponent/action/allAction';
import BodyTableClass from './TableBodyClass';

export interface ITableBodyContainer {
    allData: Array<any>
    // onDelete: (rowId: any) => void;
    onEdit: (data: any) => void;



}

export default function TableBodyContainer(props: ITableBodyContainer) {
    const { onEdit, allData } = props;
    const storeState = useSelector((state: any) => state.data);
    const dispatch = useDispatch();
    const [data, setData] = useState([] as any);
    useEffect(() => {
        dispatch(fetchData());

    }, []);

    useEffect(() => {

        setData(storeState.data);

    }, [storeState]);

    return (<BodyTableClass
        onEdit={onEdit}
        allData={allData}
        dataFromStore={data}
        onDeleteDispatch={(row: any) => dispatch(deleteAction(row))}
        onEditDispatch={(editData: any) => dispatch(editDataAction(editData))}


    />
    )
}