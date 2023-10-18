function botonclick() {
        var articulo= document.getElementById("articulo")
        var precio= document.getElementById("precio")
        var x =articulo.value +"    $" + precio.value;
        var divCr=document.createElement("div");
        divCr.textContent=x
        document.getElementById("artprecio").appendChild(divCr);
        
        document.getElementById("preciototal").textContent=document.getElementById("preciototal").textContent*1+precio.value*1;
        articulo.value="";
        precio.value="";
    }




