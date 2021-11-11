
function login(){

    let user = prompt("Ingrese el usuario: (Pista: pepe)");

    while (user != "pepe"){

        user = prompt("Ingrese el usuario: (Pista: pepe)");

    }

    let pass = prompt("Ingrese la contraseña: (Pista: 123)");

    while (pass != "123"){

        pass = prompt("Ingrese la contraseña: (Pista: 123)");
        
    }

    alert(user+" has ingresado con la contraseña "+pass)

}

login();

//La idea es hacer un Login, con una pequeña tienda. Todo ambientado en un Hospital con diferentes planes médicos.