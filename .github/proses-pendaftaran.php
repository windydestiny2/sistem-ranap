<?php
include 'koneksi.php'; // menyertakan file koneksi

// Memeriksa apakah form telah disubmit
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Ambil data dari form
    $nama = $_POST['nama'];
    $tanggalLahir = $_POST['tanggalLahir'];
    $alamat = $_POST['alamat'];
    $kelasKamar = $_POST['kelasKamar'];
    $metodePembayaran = $_POST['metodePembayaran'];

    // Cek jika ada input tambahan berdasarkan metode pembayaran
    $nik = isset($_POST['nik']) ? $_POST['nik'] : null;
    $noBpjs = isset($_POST['noBpjs']) ? $_POST['noBpjs'] : null;
    $noAsuransi = isset($_POST['noAsuransi']) ? $_POST['noAsuransi'] : null;

    // Query untuk memasukkan data ke dalam tabel pasien
    $query = "INSERT INTO pasien (nama, tanggal_lahir, alamat, kelas_kamar, metode_pembayaran, nik, no_bpjs, no_asuransi)
              VALUES ('$nama', '$tanggalLahir', '$alamat', '$kelasKamar', '$metodePembayaran', '$nik', '$noBpjs', '$noAsuransi')";

    if ($conn->query($query) === TRUE) {
        echo "Pendaftaran berhasil!";
    } else {
        echo "Error: " . $query . "<br>" . $conn->error;
    }

    // Tutup koneksi
    $conn->close();
}
?>
