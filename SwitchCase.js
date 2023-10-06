// Contoh penggunaan if-else
let nilai_ujian_akhir = 75;
if (nilai_ujian_akhir >= 65) {
    console.log("Nilai kamu sudah mencapai KKM");
} else {
    console.log("maaf nilai kamu belum mencukupi, kamu harus ikut remedial");
}

// Contoh penggunaan nested if
let nilai_uts = 65;
if (nilai_uts >= 65) {
    if (nilai_uts === 85) {
        console.log("Nilai kamu diatas KKM");
    } else {
        console.log("Selamat kamu dinyatakan lulus");
    }
} else {
    console.log("Maaf nilai kamu belum mencukupi, coba di lain waktu ya, Semangat!");
}

// Contoh penggunaan switch case
let warna = prompt ('masukan pilihan warnamu: ');

switch (warna) {
case 'merah' :
    alert('Wah pilihan warnamu sangat berani');
    break;
case 'kuning' :
    alert('Menarik! kuning melambangkan keceriaan');
    break;
case 'hijau' :
    alert('Keren! hijau merupakan warna yang sangat indah');
    break;
case 'hitam' :
    alert('Menakjubkan! tidak selamanya hitam melambangkan duka, karena bintang yang indah pun bersinar ditengah kegelapan');
    break;
case 'biru' :
    alert('Aku juga suka warna biru karena mengingatkanku dengan laut');
    break;
default :
    alert('Maaf, sayang sekali warna yang kamu pilih tidak tersedia');
    break;
}

// Contoh penggunaan for statement
for (let x = 1; x <= 5; x++) {
    console.log("Aku suka membaca buku dan ini buku ku yang ke-" + x );
}

// Contoh penggunaan while
let buku = 0;
while (buku < 10) {
    console.log("Ini buku ke-" + (buku + 1));
    buku++;
}

// Contoh penggunaan do while
let Buku = 1;
do {
    console.log("Data buku ke-" + Buku);
    Buku++;
} while (Buku <= 5);

// Contoh penggunaan function
function rata(nilai_uts, nilai_uas) {
    return (nilai_uts + nilai_uas)/2 ;
}
let HasilRataRata = rata(83, 94);
console.log("Hasil Rata-Rata: " + HasilRataRata);
