document.getElementById('add-article-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const category = document.getElementById('category').value;
  
    if (title && content && category) {
      alert('Artikel berhasil ditambahkan!');
      // Di sini, Anda dapat menambahkan kode untuk mengirimkan data ke server
      this.reset(); // Mengosongkan form setelah submit
    } else {
      alert('Harap isi semua bidang yang wajib diisi.');
    }
  });
  