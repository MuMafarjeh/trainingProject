import { typeOfAction } from '../action/actionType';
import { useSelector } from 'react-redux';
const initialState = {
  data: [],
  fetching: false,
  fetched: false,
  error: null,

};



const reducer = (state = initialState, action: any) => {

 
  switch (action.type) {
    case typeOfAction.FETCH_USER_START: {

      return { ...state, fetching: true };
      break;
    }
    case typeOfAction.FETCH_USER_ERROR: {
      return { ...state, fetching: false, error: action.payload };
      break;

    }
    case typeOfAction.RECEIVE_USER: {
      return { ...state, fetching: false, fetched: true, data: action.payload };
      break;

    }
    case typeOfAction.EDIT_DATA: {
    //   const AllData = state.data.slice(0);
    //   let newArr = [...AllData] as any;
    //  newArr[action.id -1] = action.editData;
   
      return { ...state, fetching: false, fetched: true, data:action.payload};
      break;

    }
    case typeOfAction.DELETE_DATA: {

    //   const result = state.data.slice(0);

    // result.splice(action.row, 1);
      return { ...state, fetching: false, fetched: true, data: action.payload };
      break;

    }
    case typeOfAction.FILTER_DATA: {
      return { ...state, fetching: false, fetched: true, data: action.payload };
      break;

    }
    case typeOfAction.SORT_DATA: {
      return { ...state, fetching: false, fetched: true, data: action.payload };
      break;

    }


  }
  return state;
};

export default reducer;