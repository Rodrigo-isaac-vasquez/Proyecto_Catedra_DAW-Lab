//Este es un codigo para que por medio de un boton y de la validacion de el form se pueda redireccionar a el siguiente html
document.getElementById("BtnSub").addEventListener("click", redireccionar);
function redireccionar(){
    var Nomeusuario=document.getElementById("Integrantes").value;
    var edadUsuario = document.getElementById("Edad").value;

    for(var i=0; i<Integrantes.length; i++){
        if(Nomeusuario == Integrantes[i]){
            for(var j=0; j<Edad.length; j++){
                if(edadUsuario == Edad[j]){
                    location.href = "index.html";
                }
                else{
                    alert("No se ha ingresado ningun dato");
                }
            }
        }
    }
}
