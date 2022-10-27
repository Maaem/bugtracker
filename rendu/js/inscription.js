window.addEventListener('DOMContentLoaded',()=>{

    //Afficher dans la console ce que j'écris en tant que user et mdp

    let user_name
    let password 

    const username = document.getElementById("user_name")
    username.addEventListener('keyup',(e)=>{
        user_name = e.target.value
        console.log(e.target.value)

    const psw = document.getElementById("password")
    psw.addEventListener('keyup', (e) =>{
        console.log(e.target.value)
       password= e.target.value
    })
    })

    const formdocument = document.getElementById("form")
    formdocument?.addEventListener("submit", (e) => signup(e,user_name,password))
})

export async function signup(e, user_name, password){
    e.preventDefault()
    console.log("test_1", e)
return await axios.get(`http://greenvelvet.alwaysdata.net/bugTracker/api/signup/${user_name}/${password}`,{

})

.then(function(response){
    console.log(response)
    SetLocalStorage(response.data.user_name,response.data.password)
    })
    .catch(function(error){
        console.log(error)
    })
};