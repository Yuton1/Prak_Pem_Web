document.getElementById('sumForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    if (num1 === "" || num2 === "") {
        alert("Silakan masukkan kedua bilangan!");
        return;
    }

    const sum = parseFloat(num1) + parseFloat(num2);

    document.getElementById("result").textContent = "Hasil: " + sum;
});

document.getElementById('resetButton').addEventListener('click', function()
{

    document.getElementById("result").textContent = "Hasil: ";
});
