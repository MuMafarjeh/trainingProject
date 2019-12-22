import Axios from "axios";
import dispatch from 'react-redux';
import { typeOfAction } from '../tableComponent/connectComponent/action/actionType';
async function getAllData() {
 
    return await Axios.get(`https://reqres.in/api/users`)
        .then(res =>  (res.data.data)).catch((err) => {
            
             return(err.dispatch((dispatch:any)=>{ dispatch({type: typeOfAction.FETCH_USER_ERROR, payload: err })}))
      
          })
}

export { getAllData as default, getAllData }