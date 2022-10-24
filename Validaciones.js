//Validacion de los campo de nombre y de edad para que vayan vacios o para que el campo de nombre no lleve numeros
document.getElementById("BtnSub").addEventListener("click", enviar);

function enviar(){
    var nombre = document.getElementById("Integrantes").value;
    var patronnombre = /[a-zA-Z]/;
    var edadJugador = document.getElementById("Edad").value;

    if(nombre == "" || edadJugador == ""){
        alert("No hay ningun campo lleno");
        
    }

        if(patronnombre.test(nombre)){
            if(edad.test(edadJugador)){
                res.innerHTML = "<label>Los datos ingresados han sido validos</label>";
                return 0;
            }
            else{
                alert("La edad no es permitida");
                return 0;
            }
        }
        else{
            alert("El nombre no es correcto");
            return 0;
        }
}
