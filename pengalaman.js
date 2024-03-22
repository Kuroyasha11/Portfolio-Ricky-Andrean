function pengalaman() {
    // tanggal pengalaman
    const tanggalPengalaman = "2021-01-01";

    // tanggal hari ini
    let date = new Date();
    let tahunHariIni = date.getFullYear();
    let bulanHariIni = date.getMonth() + 1;
    let hariIni = date.getDate();

    // Ekstraksi Tanggal Pengalaman
    let tahunPengalaman = parseInt(tanggalPengalaman.substring(0, 4));
    let bulanPengalaman = parseInt(tanggalPengalaman.substring(5, 7));
    let hariPengalaman = parseInt(tanggalPengalaman.substring(8, 10));

    // Hitung Pengalaman
    let pengalaman = tahunHariIni - tahunPengalaman
    if (bulanHariIni < bulanPengalaman || (bulanHariIni === bulanPengalaman && hariIni < hariPengalaman)) {
        pengalaman--;
    }
    return `${pengalaman} years`;
}

let classSpan = document.querySelectorAll(".pengalaman");

classSpan.forEach(function (e) {
    e.innerText = pengalaman();
})