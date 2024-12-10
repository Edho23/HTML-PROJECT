const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

// Fungsi untuk toggle visibility password
togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    if (type === 'password') {
        togglePassword.src = 'gambar/hide.png'; 
    } else {
        togglePassword.src = 'gambar/view.png'; 
    }
});

// Event listener untuk memeriksa input pada password field
passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length > 0) {
        togglePassword.style.display = 'block';
    } else {
        togglePassword.style.display = 'none'; 
    }
});
