var comprob = false;

function validar() {
    var nombre = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;
    var usuario = document.getElementById('email').value;
    var contraseña = document.getElementById('contraseña').value;
    var Ccontraseña = document.getElementById('Ccontraseña').value;

    if(!nombre == '' && !apellidos == '' && !usuario == '' && !contraseña == '' && !Ccontraseña == ''){
        
        if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(usuario)){
            comprob = true;
        }else if (/[0-9]{9}/.test(usuario)){
            comprob = true;
        }else {
            alert("Error de formato.");
            comprob = flase;
        }
        
        if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8}$/.test(contraseña) && contraseña == Ccontraseña){
            comprob = true;
        }else if(Ccontraseña != contraseña){
            alert("Las contraseñas no coinciden: "+contraseña+" "+Ccontraseña);
            comprob = false;
        }else {
            alert("La contraseña no contiene los carecteres obligatorios.");
            comprob = false;
        }
    }else{
        alert("Los campos: \nNombre\nApellidos\nCorreo - Telefono\nContraseña\nNo pueden dejarse vacios.");
        // document.body.innerHTML = "Los campos: \nNombre\nApellidos\nCorreo - Telefono\nContraseña\nNo pueden dejarse vacios.";
        comprob = false;
    }

    if(comprob == true){
        pasarPag();
    }
}

function inicializar(){
    var btn;
    btn = document.getElementById("botones");
    btn.addEventListener("click", validar);
}

function pasarPag(){
    document.getElementById("pag").innerHTML = "<h4>¡¡Registro completado!!</h4>";
}
