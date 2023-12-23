// Ambil elemen span menggunakan ID
let spanUsia = document.getElementById('usia');
function umur() {

    // Tanggal Lahir
    const tanggalLahir = "2001-11-27";

    // Tanggal Hari Ini
    let date = new Date();
    let tahunHariIni = date.getFullYear();
    let bulanHariIni = date.getMonth() + 1;
    let hariIni = date.getDate();

    // Ekstraksi Tanggal Lahir
    let tahunLahir = parseInt(tanggalLahir.substring(0, 4));
    let bulanLahir = parseInt(tanggalLahir.substring(5, 7));
    let hariLahir = parseInt(tanggalLahir.substring(8, 10));

    // Hitung Umur
    let umur = tahunHariIni - tahunLahir;
    if (
      bulanHariIni < bulanLahir ||
      (bulanHariIni === bulanLahir && hariIni < hariLahir)
    ) {
      umur--;
    }

    return umur;
  }

  // Memperoleh nilai usia
let usiaSaya = umur();

// Ubah teks di dalam tag <span>
spanUsia.textContent = usiaSaya + " years old";
 