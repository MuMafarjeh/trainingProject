import { getData, receiveData, deleteRow, editDataAction, editRow, getingApiData, sortDataAction, filterDataAction, deleteAction } from "../action/allAction";
import { typeOfAction } from '../action/actionType'
import { call, select, put, takeLatest, takeEvery, all, fork, take, join, delay } from "@redux-saga/core/effects";


function* getApiData(action: any) {
    const result = yield call(getData);

    if (result) {
        yield put(receiveData(result));
    } else {
        console.log("error");
    }
}
function* removeRow(action: any) {
    const rowId = action.payload
    try {
        const data = yield select(state => {
            return state.data.data
        })

        console.log(data, "saga");
        //   const dad = data.then((result:any)=>result);
        //        console.log(dad,'dad');
        // console.log(data.then((result:any)=>result), "saga");
        const arrayCopy = data.filter((row: any) => row.id !== rowId);
        // const result = data.slice(0);
        // result.splice(row, 1);
        yield put(deleteAction(arrayCopy));
    } catch (e) {
        console.log(e);

    }
}

function* editData(action: any) {
    try {
        const data = yield select(state => {
            return state.data.data
        })
        let newArr = [...data] as any;
        newArr[action.payload.i] = action.payload.editData;
        yield put(editDataAction(newArr));
    } catch (e) {
        console.log(e);

    }
}

function* sortData(action: any) {
    try {
        yield put(sortDataAction(action.payload));
    } catch (e) {
        console.log(e);

    }
}
function* filterData(action: any) {
    try {
        yield put(filterDataAction(action.payload));
    } catch (e) {
        console.log(e);

    }
}




export const watcher = {
    removingData: [
        takeEvery(typeOfAction.DELETE_DATA, removeRow)
    ],
    fetchingData: [
        takeEvery(typeOfAction.REQUST_DATA, getApiData)
    ],
    editingData: [
        takeEvery(typeOfAction.EDIT_DATA, editData)
    ],
    sortingData: [
        takeEvery(typeOfAction.SORT_DATA, sortData)
    ],

    filteringData: [
        takeEvery(typeOfAction.FILTER_DATA, filterData)
    ],



}
