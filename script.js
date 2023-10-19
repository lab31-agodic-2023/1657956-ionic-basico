function Registro() {

    var nombre = document.getElementById("Usuario").value
    var login = document.getElementById("LoginT")
    var registro = document.getElementById("RegistroT")
    login.textContent="Login correcto " +nombre;
    registro.textContent = "";

}
function Login() {

    var nombre = document.getElementById("Usuario").value
    var login = document.getElementById("LoginT")
    var registro = document.getElementById("RegistroT")
    login.textContent = "";
    registro.textContent = "Registro correcto " + nombre;

}
