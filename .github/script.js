// Fungsi untuk meng-handle form pendaftaran
document.getElementById('formPendaftaran')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const tanggalLahir = document.getElementById('tanggalLahir').value;
    const alamat = document.getElementById('alamat').value;
    alert(`Pendaftaran berhasil!\nNama: ${nama}\nTanggal Lahir: ${tanggalLahir}\nAlamat: ${alamat}`);
  });
  
  // Fungsi untuk chat AI cek gejala
  let chatBox = document.getElementById('chatBox');
  
  function sendChat() {
    let input = document.getElementById('chatInput').value;
    if (input === "") return;
  
    chatBox.innerHTML += `<div><strong>Pasien:</strong> ${input}</div>`;
    
    // Simulasi AI sederhana dengan gejala lebih banyak
    let response = checkGejala(input);
    chatBox.innerHTML += `<div><strong>AI:</strong> ${response}</div>`;
    
    document.getElementById('chatInput').value = "";
    chatBox.scrollTop = chatBox.scrollHeight;  // Scroll ke bawah
  }

  // Fungsi untuk meng-handle form pendaftaran
document.getElementById('formPendaftaran')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Ambil nilai dari form
    const nama = document.getElementById('nama').value;
    const tanggalLahir = document.getElementById('tanggalLahir').value;
    const alamat = document.getElementById('alamat').value;
    const kelasKamar = document.getElementById('kelasKamar').value;
    const metodePembayaran = document.getElementById('metodePembayaran').value;
  
    // Tampilkan konfirmasi pendaftaran
    alert(`
        Pendaftaran berhasil!
        Nama: ${nama}
        Tanggal Lahir: ${tanggalLahir}
        Alamat: ${alamat}
        Kelas Kamar: ${kelasKamar === 'kelas1' ? 'Kelas 1' : kelasKamar === 'kelas2' ? 'Kelas 2' : 'Kelas 3'}
        Metode Pembayaran: ${metodePembayaran === 'asuransi' ? 'Asuransi' : metodePembayaran === 'bpjs' ? 'BPJS' : 'Bayar Umum'}
        NIK KTP: ${nik}
        Nomor BPJS: ${noBPJS}
        Nomor Asuransi: ${noAsuransi}
      `);
    });
    
    // Fungsi untuk menampilkan input tambahan berdasarkan metode pembayaran
    document.getElementById('metodePembayaran')?.addEventListener('change', function() {
      const metode = this.value;
      const additionalFields = document.getElementById('additionalFields');
      additionalFields.innerHTML = '';  // Kosongkan input sebelumnya
    
      // Menampilkan input yang sesuai dengan metode pembayaran
      if (metode === 'asuransi') {
        additionalFields.innerHTML = `
          <label for="noAsuransi">Nomor Asuransi:</label>
          <input type="text" id="noAsuransi" name="noAsuransi" placeholder="Masukkan nomor asuransi" required>
        `;
      } else if (metode === 'bpjs') {
        additionalFields.innerHTML = `
          <label for="noBPJS">Nomor BPJS:</label>
          <input type="text" id="noBPJS" name="noBPJS" placeholder="Masukkan nomor BPJS" required>
        `;
      } else if (metode === 'umum') {
        additionalFields.innerHTML = `
          <label for="nik">NIK KTP:</label>
          <input type="text" id="nik" name="nik" placeholder="Masukkan NIK KTP" required>
        `;
      }
    });
    


/*
  function checkGejala(gejala) {
    // Simulasi deteksi gejala ke penyakit
    if (gejala.includes("demam")) {
      return "Berdasarkan gejala demam, Anda mungkin terkena flu atau infeksi virus.";
    } else if (gejala.includes("batuk")) {
      return "Batuk dapat terkait dengan flu atau gangguan pernapasan.";
    } else if (gejala.includes("nyeri")) {
      return "Nyeri tubuh bisa menjadi gejala flu, infeksi atau kelelahan.";
    } else if (gejala.includes("pilek")) {
      return "Pilek bisa menjadi tanda infeksi saluran pernapasan atas atau alergi.";
    } else if (gejala.includes("pusing")) {
      return "Pusing bisa disebabkan oleh tekanan darah rendah, migrain, atau masalah telinga.";
    } else if (gejala.includes("sakit gigi")) {
      return "Sakit gigi biasanya disebabkan oleh masalah gigi atau gusi.";
    } else if (gejala.includes("sakit perut")) {
        return "Sakit perut biasanya disebabkan oleh gas yang menumpuk / telat makan";
    } else {
      return "Gejala tidak dikenali. Silakan konsultasikan dengan dokter.";
    }
  }
  */

  function checkGejala(gejala) {
    // Database kemungkinan penyakit dan gejala terkait
    const penyakitDatabase = [
      {
        penyakit: "Flu",
        gejala: ["demam", "batuk", "pilek", "nyeri"],
        saran: "Minum banyak air, istirahat cukup, dan gunakan obat flu jika perlu.",
      },
      {
        penyakit: "Infeksi Virus",
        gejala: ["demam", "batuk", "nyeri", "pusing"],
        saran: "Periksa ke dokter jika demam lebih dari 3 hari atau semakin parah.",
      },
      {
        penyakit: "Migrain",
        gejala: ["pusing", "nyeri kepala", "mual"],
        saran: "Hindari stres dan cahaya terang. Minum obat migrain jika diperlukan.",
      },
      {
        penyakit: "Alergi",
        gejala: ["pilek", "bersin", "mata merah"],
        saran: "Hindari alergen yang memicu alergi. Gunakan antihistamin jika perlu.",
      },
      {
        penyakit: "Gangguan Pencernaan",
        gejala: ["sakit perut", "mual", "muntah"],
        saran: "Hindari makanan pedas dan asam. Minum air hangat.",
      },
      {
        penyakit: "Masalah Gigi",
        gejala: ["sakit gigi", "nyeri rahang"],
        saran: "Kunjungi dokter gigi untuk penanganan lebih lanjut.",
      },
    ];
  
    // Analisis gejala
    let hasil = [];
    gejala = gejala.toLowerCase(); // Normalize input
  
    penyakitDatabase.forEach((data) => {
      const gejalaTerkena = data.gejala.filter((g) => gejala.includes(g));
      if (gejalaTerkena.length > 0) {
        hasil.push({
          penyakit: data.penyakit,
          gejalaTerkena,
          saran: data.saran,
        });
      }
    });
  
    // Respon hasil analisis
    if (hasil.length > 0) {
      let pesan = "Berdasarkan gejala yang Anda masukkan, kemungkinan kondisi Anda:\n\n";
      hasil.forEach((item) => {
        pesan += `Penyakit: ${item.penyakit}\nGejala Terdeteksi: ${item.gejalaTerkena.join(", ")}\nSaran: ${item.saran}\n\n`;
      });
      return pesan;
    } else {
      return "Gejala tidak dikenali. Silakan konsultasikan dengan dokter untuk analisis lebih lanjut.";
    }
  }
  
  // Contoh penggunaan
  const inputGejala = "demam, batuk, pilek";
  const hasilAnalisis = checkGejala(inputGejala);
  console.log(hasilAnalisis);
  