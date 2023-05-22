const nombre = document.getElementById('name');
const direccion = document.getElementById('direccion');
const telefono = document.getElementById('telefono');
const Email = document.getElementById('email');
const ciudad = document.getElementById('ciudad');
const edad = document.getElementById('edad');
const form = document.getElementById('form');


form.addEventListener('submit', e => {
    e.preventDefault();
    let warnings = "";
    let regexEmail =/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i
    let entrar = true;
    if(nombre.value.length == 0) {    
        alert("Digite el nombre del usuario...");      
        entrar = false;
        nombre.value = '';
    }else if(direccion.value.length == 0) {
        alert("Digite la direccion del usuario...");
        entrar = false;
        direccion.value = '';
    } else if(telefono.value.length == 0) {
        alert("Digite el numero de telefono del usuario...");
        entrar = false;
        telefono.value = '';
    } else if(! regexEmail.test(Email.value)){
        alert("Digite el E-mail del usuario no es válido...");
        entrar = false;
        Email.value = '';
    }else if(ciudad.value.length == 0) {
        alert("Digite la ciudad del usuario...");
        entrar = false;
        ciudad.value = '';
    }else if(edad.value.length == 0) {
        alert("Digite la edad del usuario...");
        entrar = false; 
        edad.value = '';


}

if(entrar == true) {

    alert(nombre.value +" "+"LOS CAMPOS SE HAN LLENDO CORRECTAMENTE BIENVENIDO A NUESTRO SISTEMA");
    
}

}); 
form.addEventListener('reset', e => {
    e.preventDefault();
    nombre.value = '';
    direccion.value = '';
    telefono.value = '';
    Email.value = '';
    ciudad.value = '';
    edad.value = '';
    e.value = '';
    entrar="false";
});
