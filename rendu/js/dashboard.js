import {GetListStorage,getLocalStorage} from "../storage.js"


export async function list_dev(){
    const token = getLocalStorage('token')
    return await axios.get(`http://greenvelvet.alwaysdata.net/bugTracker/api/list/${token}/0`,{
}).then(function(response){
    console.log(response)
    console.log("bvfgdc ")
    GetListStorage(response.data.users,response.data.token)
    })
    .catch(function(error){
        console.log(error)
    })
};

list_dev()