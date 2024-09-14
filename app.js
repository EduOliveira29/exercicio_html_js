const form = document.getElementById("form");

function validaNumeros () {
    let campoA = document.getElementById("campoA").value
    let campoB = document.getElementById("campoB").value
    if (campoB > campoA) {
        alert("O campo B é maior que o campo A")
    } else {
        alert("O campo A é maior que o campo B")
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validaNumeros();
})
