import { typeOfAction } from '../action/actionType';
import { useSelector } from 'react-redux';
import { deleteAction, getingApiData, receiveData, editDataAction, filterDataAction, sortDataAction } from '../action/allAction';
import { createReducer } from 'redux-act';
const initialState = {
  data: [],
  fetching: false,
  fetched: false,
  error: null,

};

// [getingApiData]:(state=initialState ,action  ) =>{
//   return {...state,fetching: false, fetched: true, data:  action.payload }
// }

export const reducerCreated = createReducer(function (reducer) {
  
  reducer(deleteAction, (state, action: any) => {
    return { ...state, fetching: false, fetched: true, data: action }
  })

  reducer(receiveData, (state, action: any) => {
    return { ...state, fetching: false, fetched: true, data: action }
  })

  reducer(editDataAction, (state, action: any) => {
    return { ...state, fetching: false, fetched: true, data: action }
  })

  reducer(filterDataAction, (state, action: any) => {
    return { ...state, fetching: false, fetched: true, data: action }
  })

  reducer(sortDataAction, (state, action: any) => {
    return { ...state, fetching: false, fetched: true, data: action }
  })


}, initialState);






export const reducer = (state = initialState, action: any) => {


  switch (action.type) {
    case typeOfAction.FETCH_USER_START: {
      return { ...state, fetching: true };
      break;
    }
    case typeOfAction.FETCH_USER_ERROR: {
      return { ...state, fetching: false, error: action.payload };

    }
    case typeOfAction.RECEIVE_USER: {
      return { ...state, fetching: false, fetched: true, data: action.payload };

    }
    case typeOfAction.EDIT_DATA_SUCCES: {
      return { ...state, fetching: false, fetched: true, data: action.payload };

    }
    case  typeOfAction.DELETE_DATA_SUCCESS: {
      
      return { ...state, fetching: false, fetched: true, data:  action.payload  };

    }
    case typeOfAction.FILTER_DATA_SUCCESS: {
      return { ...state, fetching: false, fetched: true, data: action.payload };

    }
    case typeOfAction.SORT_DATA_SUCCESS: {
      return { ...state, fetching: false, fetched: true, data: action.payload };

    }


  }
  return state;
};

