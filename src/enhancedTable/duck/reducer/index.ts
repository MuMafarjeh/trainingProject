import { combineReducers } from 'redux';

import {reducer,reducerCreated} from './dataReducer';


 const rootReducer = combineReducers({
     data: reducerCreated,
    //  dataReducer:reducerCreated
})

export default rootReducer;