import {removeTokenStorage} from "../storage.js"

window.addEventListener('DOMContentLoaded',()=>{

    const logt = document.getElementById("logout")
    logt?.addEventListener("click", (e) => logout())


})

export async function logout(token){
    console.log("test_1")
return await axios.get(`http://greenvelvet.alwaysdata.net/bugTracker/api/logout/${token}`,{

})

.then(function(response){
    console.log(response)
    console.log("remove")
    removeTokenStorage(response.data.id,response.data.token)
    document.location.href = "/rendu/connexion.html";
    })
    .catch(function(error){
        console.log(error)
    })
};