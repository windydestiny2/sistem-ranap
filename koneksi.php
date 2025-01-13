<?php
$host = 'localhost'; // atau bisa dengan IP server
$username = 'root';  // username database, misalnya 'root'
$password = '';      // password database, jika ada
$database = 'rumah_sakit'; // nama database

// Membuat koneksi
$conn = new mysqli($host, $username, $password, $database);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
?>
