document.addEventListener('DOMContentLoaded', function () {
    // Simulasi data statistik
    const dataStatistics = {
      labels: ["Artikel 1", "Artikel 2", "Artikel 3", "Artikel 4", "Artikel 5"], // Judul artikel
      views: [150, 300, 120, 200, 180], // Jumlah yang melihat
      likes: [25, 45, 10, 30, 22], // Jumlah likes
    };
  
    // Konfigurasi data untuk Chart.js
    const ctx = document.getElementById('statistikChart').getContext('2d');
    new Chart(ctx, {
      type: 'line', // Diagram garis
      data: {
        labels: dataStatistics.labels, // Labels (judul artikel)
        datasets: [
          {
            label: 'Views', // Label untuk yang melihat artikel
            data: dataStatistics.views, // Data views
            borderColor: 'rgba(75, 192, 192, 1)', // Warna garis
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Area di bawah garis
            borderWidth: 2, // Ketebalan garis
            tension: 0.3, // Smoothness garis
          },
          {
            label: 'Likes', // Label untuk likes artikel
            data: dataStatistics.likes, // Data likes
            borderColor: 'rgba(255, 99, 132, 1)', // Warna garis
            backgroundColor: 'rgba(255, 99, 132, 0.2)', // Area di bawah garis
            borderWidth: 2, // Ketebalan garis
            tension: 0.3, // Smoothness garis
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top', // Posisi legenda
          },
          title: {
            display: true,
            text: 'Statistik Artikel (Views & Likes)',
          },
        },
        scales: {
          y: {
            beginAtZero: true, // Mulai skala Y dari 0
          },
        },
      },
    });
  });
  