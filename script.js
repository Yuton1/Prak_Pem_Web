document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const alamat = document.getElementById('alamat').value.trim();

    
    if (nama === "" || email === "" || alamat === "") {
        alert("Semua data harus diisi.");
    } else {
        alert("Form berhasil disubmit!");
     
        document.getElementById('registrationForm').reset();
    }
});
