import Axios from "axios";

async function getAllData() {
   return await Axios.get(`https://reqres.in/api/users`)
    .then(res => (res.data.data))
}

export { getAllData as default, getAllData }