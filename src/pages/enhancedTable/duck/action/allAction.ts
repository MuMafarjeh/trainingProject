import getAllData from "../../components/getTableData";
import { typeOfAction } from './actionType';
import { createAction } from "redux-act";


export const getData = () => {

  return (getAllData().then((data) => {
    return data
  }).catch(error => error))
}


export const getingApiData = createAction(() => {
  return (getAllData().then((data) => {
    return data;
  }).catch(error => error))
})

export const editDataAction = createAction(typeOfAction.EDIT_DATA_SUCCES, data => data);
// export const editDataAction = (editData: any) => {
//   return ({ type: typeOfAction.EDIT_DATA_SUCCES, payload: editData })
// }

export const editRow = (editData: any, i: any) => {
  return ({ type: typeOfAction.EDIT_DATA, payload: { editData, i } })

}


export const deleteAction = createAction(typeOfAction.DELETE_DATA_SUCCESS, data => data);
// export const deleteAction = (data: any) => {
//   return ({ type: typeOfAction.DELETE_DATA_SUCCESS, payload: data })
// }
export const deleteRow = (row: any) => {
  console.log(row, "datadata");
  return ({ type: typeOfAction.DELETE_DATA, payload: row })
}


export const sortData = (sortedData: any) => {
  return ({ type: typeOfAction.SORT_DATA, payload: sortedData })
}

export const sortDataAction = createAction(typeOfAction.SORT_DATA_SUCCESS, data => data);
// export const sortDataAction = (sortedData: any) => {
//   return ({ type: typeOfAction.SORT_DATA_SUCCESS, sortedData })
// }

export const filterDataAction = createAction(typeOfAction.FILTER_DATA_SUCCESS, data => data);
// export const filterDataAction = (filtertData: any) => {
//   return ({ type: typeOfAction.FILTER_DATA_SUCCESS, payload: filtertData })
// }
export const filterData = (filtertData: any) => {
  return ({ type: typeOfAction.FILTER_DATA, payload: filtertData })
}




export const getDataRow = (row: any) => {
  console.log(row)
  return (getAllData().then((data) => {
    return data
  }).catch(error => error))
}


export const receiveData = createAction(typeOfAction.RECEIVE_USER, data => data);
// export const receiveData = (data: any) => {
//   return ({ type: typeOfAction.RECEIVE_USER, payload: data });
// }

export const requestData = () => {
  return ({ type: typeOfAction.REQUST_DATA });
}




export const fetchData = () => {

  return {
    type: typeOfAction.RECEIVE_USER,
    payload: getAllData().then((data: any) => data)
  }


  return async (dispatch: any) => {
    dispatch({ type: typeOfAction.FETCH_USER_START })
    await getAllData().then((data: any) => {
      dispatch({ type: typeOfAction.RECEIVE_USER, payload: data })

    }).catch((err: any) => {
      dispatch({ type: typeOfAction.FETCH_USER_ERROR, payload: err })

    })
  }



}