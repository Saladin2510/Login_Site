const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const header = document.querySelector('.header');
let nama = document.getElementById('nama');
let email = document.getElementById('surel');
let password = document.getElementById('kataKunci');
let emailIn = document.getElementById('surelMasuk')
let passwordIn = document.getElementById('kataKunciMasuk')
let rememberMeCheckbox = document.querySelector('.remember-forgot input[type="checkbox"]');
let namaHasil = document.getElementById('namaHasil');
let emailHasil = document.getElementById('surelHasil');
let passwordHasil = document.getElementById('kataKunciHasil');

header.style.display = "none"

registerLink.onclick = () => {
    document.querySelector('.form-box.register').style.display ="block"
    document.querySelector('.form-box.login').style.display ="none"
}

loginLink.onclick = () => {
    document.querySelector('.form-box.register').style.display ="none"
    document.querySelector('.form-box.login').style.display ="block"
}


function daftar() {
    console.log('tombol daftar diklik')
    console.log(nama.value);
    console.log(email.value);
    console.log(password.value);

    // Simpan data akun di localStorage
    localStorage.setItem('nama', nama.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);

    alert('Akun berhasil didaftarkan');
}

function masuk() {
    console.log('tombol masuk diklik');

    if (emailIn.value == "" || passwordIn.value == "") {
        alert('silahkan isi email dan password');
        return;
    }

    // Ambil data dari localStorage
    const storedNama = localStorage.getItem('nama');
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Cek email dan password yang dimasukkan
    if (emailIn.value === storedEmail && passwordIn.value === storedPassword) {
        alert("Selamat Anda telah masuk");

        // Jika "Remember Me" dipilih, simpan data login ke localStorage
        // Jika "Remember Me" dipilih, simpan data login ke localStorage

        if (rememberMeCheckbox.checked) {
            localStorage.setItem('rememberEmail', emailIn.value);
            localStorage.setItem('rememberPassword', passwordIn.value);
        } else {
            // Jika tidak, hapus data login dari localStorage
            localStorage.removeItem('rememberEmail');
            localStorage.removeItem('rememberPassword');
        }

        //tampilan data hasil pada div "form-box hasil"
        namaHasil.textContent = `Nama Lengkap : ${storedNama}`;
        emailHasil.textContent = `Email : ${storedEmail}`;
        passwordHasil.textContent = `Password : ${storedPassword}`;

        document.querySelector('.form-box.login').style.display = 'none';
        document.querySelector('.form-box.hasil').style.display = 'block';    
        header.style.display = "block"
          
    } else {
        alert('akun belum terdaftar')
    }
}

function kembali() {
    console.log('tombol kembali diklik')
    alert('anda telah keluar');
    document.querySelector('.form-box.login').style.display = 'block';
    document.querySelector('.form-box.hasil').style.display = 'none'
    document.querySelector('.header').style.display = "none"
}

// Ambil data "Remember Me" dari localStorage jika ada
window.onload = () => {
    if (localStorage.getItem('rememberEmail') && localStorage.getItem('rememberPassword')) {
        emailIn.value = localStorage.getItem('rememberEmail');
        passwordIn.value = localStorage.getItem('rememberPassword');
        rememberMeCheckbox.checked = true;
    }


}

