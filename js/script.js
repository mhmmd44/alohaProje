document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggle-btn');
    const navToggle = document.getElementById('navToggle');
    const closeBtn = document.getElementById('close-btn');

  
    toggleBtn.addEventListener('click', function (event) {
      event.preventDefault();
      navToggle.style.display = 'block'; // Menüyü görünür yap
    });
  
    closeBtn.addEventListener('click', function () {
      navToggle.style.display = 'none'; // Menüyü gizle
    });

  });

 

  // Kariyer form 

  function validateForm() {
    var adSoyad = document.getElementById('adSoyad').value;
    var email = document.getElementById('email').value;
    var numara = document.getElementById('numara').value;
    var mesaj = document.getElementById('mesaj').value;

    var adSoyadUyari = document.getElementById('adSoyadUyari');
    var emailUyari = document.getElementById('emailUyari');
    var numaraUyari = document.getElementById('numaraUyari');
    var mesajUyari = document.getElementById('mesajUyari');

    adSoyadUyari.innerHTML = "";
    emailUyari.innerHTML = "";
    numaraUyari.innerHTML = "";
    mesajUyari.innerHTML = "";

    if (adSoyad === "") {
        adSoyadUyari.innerHTML = "Ad Soyad boş bırakılamaz";
        return false;
    }

    if (email === "") {
        emailUyari.innerHTML = "Email boş bırakılamaz";
        return false;
    }

    if (numara === "") {
        numaraUyari.innerHTML = "Numara boş bırakılamaz";
        return false;
    }

    if (mesaj === "") {
        mesajUyari.innerHTML = "Mesaj boş bırakılamaz";
        return false;
    }

    return true;
}

function dosyaSecildi(input) {
    document.getElementById('dosyaIsim').value = input.files[0].name;
}