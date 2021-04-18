let usuario = document.getElementById("correo")
let clave = document.getElementById("password")
let btnSecion = document.getElementById("boton_iniciar_secion")

let usuarios = ["juan40", "pedro40", "hernesto20"];
let contraseñas = ["qwer22", "dsfa40", "aaaa20"];
// let usuario = prompt("ingrese un usuario");
// let clave = prompt("ingrese una clave ");

function validacion_correo(texto)
{
    let verificacion = false;
    if(texto.indexof("@")!= -1)
    {
        verificacion = true;
    }
        return verificacion;
}


let validacion = (usuario, clave, usuarios, contraseña) =>
{
    if(usuarios.indexOf(usuario) == -1 || contraseña.indexOf(clave) == -1)
    {
        return alert("datos de loguin incorrectos");
    }
    else 
    {
        return alert("Bienvenido" + usuario); 
    }
}
// validacion (usuario, clave, usuarios, contraseñas);

btnSecion.onclick = function () {

    let newUsuario = usuario.value


    if(validacion_correo(newUsuario)== false){
        alert("correo invalido")
        return
    }

    console.log(usuario.value);
    console.log(clave.value);

}