import getAllData from "../../getTableData"
import { typeOfAction } from './actionType';



  export const editDataAction =(editData:any)=>{
   return({type:typeOfAction.EDIT_DATA,payload:editData})

  }
export const deleteAction = (row:any) =>{

  return ({ type: typeOfAction.DELETE_DATA, payload: row })

}

export const sortAction = (sortData:any) =>{
  return ({ type: typeOfAction.SORT_DATA, payload: sortData })
}
export const filterDataAction = (filtertData:any) =>{
  return ({ type: typeOfAction.FILTER_DATA, payload: filtertData })
}

export const fetchData = () => {
  
  return {
    type: typeOfAction.RECEIVE_USER,
    payload:  getAllData().then((data) => data)  }


  return async (dispatch: any) => {
    dispatch({ type: typeOfAction.FETCH_USER_START })
    await getAllData().then((data) => {
      dispatch({ type: typeOfAction.RECEIVE_USER, payload: data })

    }).catch((err) => {
      dispatch({ type: typeOfAction.FETCH_USER_ERROR, payload: err })

    })
  }
}