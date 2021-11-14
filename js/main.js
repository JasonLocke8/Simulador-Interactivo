//La idea es hacer un Login, con una pequeña tienda. Todo ambientado en un Hospital con diferentes planes médicos.

function usuario(user, contrasena) {
    this.user = user;
    this.contrasena = contrasena;
}

const usuario1 = new usuario ("nico","1234");
const usuario2 = new usuario ("pablo","4321");
const usuario3 = new usuario ("juan","1122");

function login(){  

    var user = document.getElementById("exampleInputEmail1").value;
    var contrasena = document.getElementById("exampleInputPassword1").value;


    if (user==usuario1.user && contrasena==usuario1.contrasena) { 
        window.location="pages/principal.html"; 
    } 
    if (user==usuario2.user && contrasena==usuario2.contrasena) { 
        window.location="pages/principal.html"; 
    } 
    if (user==usuario3.user && contrasena==usuario3.contrasena) { 
        window.location="pages/principal.html";
    } 
    if (user=="" && contrasena=="") { 
        alert("Ingrese los datos!");
    } 
    }