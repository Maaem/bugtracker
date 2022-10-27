// Username login
window.addEventListener('DOMContentLoaded',()=>{

    const user = document.getElementById("Username")
    user.addEventListener('keyup',(e)=>{
        
        console.log(e.target.value)
    })
})

// Username password
window.addEventListener('DOMContentLoaded',()=>{

    const user = document.getElementById("password")
    user.addEventListener('keyup',(e)=>{
        
        console.log(e.target.value)
    })
})

//requete 
fetch('http://greenvelvet.alwaysdata.net/bugTracker/api/signup/bill/secret')
			.then((res) => res.json())
			.then((response) => {
				console.log(response);
			})
			.catch((error) => console.error(error));