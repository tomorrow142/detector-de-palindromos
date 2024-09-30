//detectar si es palíndromo o no.
function esPalindromo(string) {
    const cadenaLimpia = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cadenaInvertida = cadenaLimpia.split('').reverse().join('');
    return cadenaLimpia === cadenaInvertida;
};
//eventos para el botón 
document.getElementById("check-btn").addEventListener("click", () => {
    const input = document.getElementById("text-input").value;
    const DivResult = document.getElementById("result");
//alerta por si el usuario no ingresa un dato 
    if (!input) {
        alert("Please input a value");
    }
//devolución 
    if (esPalindromo(input)) {
        DivResult.textContent = `${input} is a palindrome`;
    } else {
        DivResult.textContent = `${input} is not a palindrome`;
    }
});