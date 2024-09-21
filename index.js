const axios = require('axios');
const http = require('http');

// Agent HTTP untuk menjaga koneksi tetap hidup
const agent = new http.Agent({ keepAlive: true });

// Daftar URL yang ingin dibuka
const urls = [
    'https://botwa.mintopupzone.xyz/zhenn/status.php'
];

// Fungsi untuk mengecek status setiap URL
function checkStatus() {
    urls.forEach(url => {
        axios.get(url, { httpAgent: agent })
            .then(response => {
                // Menampilkan status sukses di konsol
                console.log(`Berhasil mengakses ${url}: ${response.status}`);
            })
            .catch(error => {
                // Menangani error dan menampilkan pesan di konsol
                console.error(`Gagal mengakses ${url}: ${error.message}`);
            });
    });
}

// Menjalankan fungsi checkStatus setiap 2,5 detik
setInterval(checkStatus, 1000);

// Menjalankan checkStatus satu kali langsung saat script dijalankan
checkStatus();
