let listaNombres = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();

    if (nombre === "") {
        alert("Debes completar un nombre para añadirlo a la lista");
    } else {
        listaNombres.push(nombre);
        let listaAmigos = document.getElementById("listaAmigos");
        let elementoLista = document.createElement("li");

        elementoLista.textContent = nombre;
        listaAmigos.appendChild(elementoLista);

        /* Limpiar input */
        document.getElementById("amigo").value = "";
    }
    console.log(listaNombres);
}

function sortearAmigo() {
    if (listaNombres.length === 0) {
        alert("Debes agregar al menos un nombre antes de sortear.");
        return;
    }

    let amigoRandom = Math.floor(Math.random() * listaNombres.length);
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    let amigoSecreto = document.createElement("li");
    amigoSecreto.textContent = "El amigo secreto es: " + listaNombres[amigoRandom];
    resultado.appendChild(amigoSecreto);

    document.getElementById("listaAmigos").style.display = "none";
}

