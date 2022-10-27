function login()
{
    var uname = document.getElementById("Username").value;
    var pwd = document.getElementById("password").value;
    if(uname =='')
    {
        alert("Veuillez saisir un nom d'utilisateur");
    }
    else if(pwd=='')
    {
        alert("Veuillez saisir un mot de passe valide");
    }
    else
    {
    alert('Vous allez être rediriger');
        //Redirection.
        window.location.assign("/dashboard.html");
    }
}	

function register_authentification()
{
    var uname2 = document.getElementById("Username2").value;
    var pwd2 = document.getElementById("password2").value;
    var pwd3 = document.getElementById("password3").value;
    if(uname2 =='')
    {
        alert("Veuillez saisir un nom d'utilisateur");
    }
    else if(pwd2=='')
    {
        alert("Veuillez saisir un mot de passe valide");
    }
    else if(pwd2.length < 6 || pwd2.length > 6)
    {
        alert("Le mot de passe doit faire au moins 6 charactères.");
    }
    else if(pwd2 !== pwd3)
    {
        alert("Le mot de passe n'est pas valide");
    }
    else
    {
    alert('Vous allez être rediriger');
       // Redirection
        window.location.assign("/dashboard.html");
    }
}	