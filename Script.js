let result = document.getElementById('screen');

// Fungsi untuk menampilkan angka atau simbol ke layar
const display = (value) => {
    if (result.value === '0' || result.value === '') {
        result.value = value;
    } else {
        result.value += value;
    }
};

// Fungsi untuk menghitung hasil
const calculate = () => {
    try {
        let expression = result.value.replace('^', '**'); // Ganti '^' dengan '**' untuk operasi pangkat
        result.value = eval(expression);
    } catch (error) {
        alert('Input salah!');
    }
};

// Fungsi untuk menghapus satu karakter terakhir
const deleteLast = () => {
    result.value = result.value.slice(0, -1);
};

// Fungsi untuk membersihkan layar
const clearScreen = () => {
    result.value = '';
};
