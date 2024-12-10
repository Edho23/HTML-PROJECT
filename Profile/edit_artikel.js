document.getElementById('article-id').addEventListener('change', function () {
    const selectedArticleId = this.value;
  
    // Data artikel (simulasi, bisa diganti dengan API call ke server)
    const articles = {
      1: {
        title: "Judul Artikel 1",
        content: "Ini adalah isi artikel 1.",
        category: "teknologi",
      },
      2: {
        title: "Judul Artikel 2",
        content: "Ini adalah isi artikel 2.",
        category: "pendidikan",
      },
      3: {
        title: "Judul Artikel 3",
        content: "Ini adalah isi artikel 3.",
        category: "kesehatan",
      },
    };
  
    // Isi form berdasarkan artikel yang dipilih
    if (selectedArticleId && articles[selectedArticleId]) {
      const article = articles[selectedArticleId];
      document.getElementById('edit-title').value = article.title;
      document.getElementById('edit-content').value = article.content;
      document.getElementById('edit-category').value = article.category;
    } else {
      document.getElementById('edit-title').value = '';
      document.getElementById('edit-content').value = '';
      document.getElementById('edit-category').value = '';
    }
  });
  
  document.getElementById('edit-article-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const articleId = document.getElementById('article-id').value;
    const title = document.getElementById('edit-title').value;
    const content = document.getElementById('edit-content').value;
    const category = document.getElementById('edit-category').value;
  
    if (articleId && title && content && category) {
      alert(`Artikel ${articleId} berhasil diperbarui!`);
      // Kirim data ke server melalui API
      // Reset form
      this.reset();
    } else {
      alert('Harap isi semua bidang yang diperlukan.');
    }
  });
  