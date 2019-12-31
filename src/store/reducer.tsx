import reducerCreated from '../pages/enhancedTable/duck/reducer';
import { combineReducers } from 'redux';


  const rootReducer = combineReducers({
    data: reducerCreated,
    //  dataReducer:reducerCreated
})

export default rootReducer;