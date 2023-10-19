function Login() {
    var nombre= document.getElementById("Usuario").value
    var x = document.getElementById("Registro")
    var y = document.getElementById("Login")
    y.textContent = "Login completado " + nombre;
    x.textContent = "";




}
function Registro() {
    var nombre = document.getElementById("Usuario").value
    var x = document.getElementById("Registro")
    var y = document.getElementById("Login")
    y.textContent = "";
    x.textContent = "Registro completo " + nombre ;



}
