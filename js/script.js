document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggle-btn');
    const navToggle = document.getElementById('navToggle');
    const closeBtn = document.getElementById('close-btn');

  
    toggleBtn.addEventListener('click', function (event) {
      event.preventDefault();
      navToggle.style.display = 'block'; 
    });
  
    closeBtn.addEventListener('click', function () {
      navToggle.style.display = 'none'; 
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



// şubelerimiz search buton

let branches = [
  { city: "Suudi Arabistan Riyadh", branch: "Othaim Rabwa Mall Çok Yakında", number: 101 },
  { city: "KAYSERI", branch: "Tuna Lıfe Center Avm, Yakında", number: 102 },
  { city: "İSTANBUL", branch: "MİMAROBA", number: 201 },
  { city: "MALATYA", branch: "Şube 1", number: 301 },
  { city: "ADANA - 2", branch: "Şube Y", number: 302 },
  { city: "İZMİR", branch: "DOLUNAY", number: 302 },
  { city: "İZMİR", branch: "FOLKART VEGA ", number: 302 },
  { city: "İZMİR", branch: "OPTİMUM AVM", number: 302 },
  { city: "İZMİR", branch: "PASAPORT ", number: 302 },
  { city: "ANKARA", branch: "DİKMEN ", number: 302 },
  { city: "AYDIN", branch: "KUŞADASI AVM", number: 302 },
  { city: "ADANA", branch: "YÜREĞİR ", number: 302 },
  { city: "İZMİR", branch: "NARLIDERE ", number: 302 },
  { city: "ERZURUM", branch: "PALANDÖKEN ", number: 302 },
  { city: "AYDIN", branch: "KUŞADASI ÇARŞI ", number: 302 },
  { city: "YALOVA", branch: "MERKEZ ", number: 302 },
  { city: "İSTANBUL", branch: "HALKALI ", number: 302 },
  { city: "İZMİT", branch: "KOCAELİ ", number: 302 },
  { city: "SAMSUN", branch: "KADİR ALKAN", number: 302 },
  { city: "İZMİR", branch: "KADİR ALKAN", number: 302 },
  { city: "BURSA", branch: "KADİR ALKAN", number: 302 },
  { city: "İSTANBUL", branch: "ETİLER KADİR ALKAN", number: 302 },
  { city: "Irak", branch: "KONTEYNER ARSUZ", number: 302 },
  { city: "Irak", branch: "ERBİL ", number: 302 },
  { city: "SAMSUN", branch: "VEZİRKÖPRÜ ", number: 302 },
  { city: "MARDİN", branch: "KIZILTEPE ", number: 302 },
  { city: "AĞRI", branch: "KAMPÜS ", number: 302 },
  { city: "AMASYA", branch: "GÖYNÜCEK ", number: 302 },
  { city: "ANTALYA", branch: "ÖZDİLEK AVM", number: 302 },
  { city: "ANTALYA", branch: "KUMLUCA ", number: 302 },
  { city: "AYDIN", branch: "DİDİM ", number: 302 },
  { city: "AYDIN", branch: "NAZİLLİ ", number: 302 },
  { city: "AYDIN", branch: "SÖKE ", number: 302 },
  { city: "AĞRI", branch: "PATNOS ", number: 302 },
  { city: "BALIKESİR", branch: "BANDIRMA ", number: 302 },
  { city: "BALIKESİR", branch: "EDREMİT ", number: 302 },
  { city: "BATMAN", branch: "Şube-1", number: 302 },
  { city: "BİTLİS", branch: "TATVAN ", number: 302 },
  { city: "BURDUR", branch: "Şube-1", number: 302 },
  { city: "ÇANAKKALE", branch: "MERKEZ ", number: 302 },
  { city: "DENİZLİ", branch: "ÇİVRİL ", number: 302 },
  { city: "DÜZCE", branch: "Şube-1", number: 302 },
  { city: "ELAZIĞ", branch: "Şube-1", number: 302 },
  { city: "İZMİR", branch: "AYRANCILAR ", number: 302 },
  { city: "İSTANBUL", branch: "GÜMÜŞYAKA - SİLİVRİ ", number: 302 },
  { city: "İSTANBUL", branch: "KÜÇÜKYALI - MALTEPE ", number: 302 },
  { city: "İSTANBUL", branch: "KISIKLI - ÜSKÜDAR ", number: 302 },
  { city: "İZMİR", branch: "TINAZTEPE-BUCA", number: 302 },
  { city: "İZMİR", branch: "ESERKENT ", number: 302 },
  { city: "İZMİR", branch: "İNCİRALTI ", number: 302 },
  { city: "İZMİR", branch: "KARŞIYAKA ÇARŞI", number: 302 },
  { city: "İZMİR", branch: "KEMALPAŞA", number: 302 },
  { city: "İZMİR", branch: "KONAK ", number: 302 },
  { city: "İZMİR", branch: "KORDON ", number: 302 },
  { city: "İZMİR", branch: "SIĞACIK ", number: 302 },
  { city: "İZMİR", branch: "TORBALI ", number: 302 },
  { city: "KARS", branch: "Şube-1", number: 302 },
  { city: "KONYA", branch: "AKŞEHİR ", number: 302 },
  { city: "MANİSA", branch: "AKHİSAR ", number: 302 },
  { city: "MANİSA", branch: "TURGUTLU ", number: 302 },
  { city: "MARDİN", branch: "MERKEZ ", number: 302 },
  { city: "MUĞLA", branch: "MARMARİS ", number: 302 },
  { city: "NİĞDE", branch: "Şube-1", number: 302 },
  { city: "SAMSUN", branch: "LOVELET AVM", number: 302 },
  { city: "TOKAT", branch: "Şube-1", number: 302 },
  { city: "TRABZON", branch: "SÖĞÜTLÜ ", number: 302 },
  { city: "URFA", branch: "NOVADA AVM", number: 302 },
  { city: "UŞAK", branch: "FESTİVA AVM", number: 302 },
  { city: "VAN", branch: "ERCİŞ ", number: 302 },
  { city: "İSTANBUL", branch: "SİLİVRİ ", number: 302 },
  { city: "BURSA", branch: "DİKKALDIRIM ", number: 302 },
];

// alfabetik sıralama işlemi
branches.sort((a, b) => (a.city + a.branch).localeCompare(b.city + b.branch));

// enter tuşu ile arama yapabilme
document.getElementById('search-input').addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    performSearch();
  }
});

// buton ile arama yapabilme
document.getElementById('search-button').addEventListener('click', function () {
  performSearch();
});

function performSearch() {
  const searchTerm = document.getElementById('search-input').value.toLocaleUpperCase('tr-TR');
  const searchResults = branches.filter(item => item.city.toLocaleUpperCase('tr-TR') === searchTerm);

  if (searchResults.length > 0) {
    const resultMessage = `${searchResults[0].city} şehrinde bulunan şubeler:<br>${searchResults.map(item => `-  ${item.branch}.${item.number}`).join('<br>')}`;
    document.getElementById('search-results').innerHTML = `<p>${resultMessage}</p>`;
  } else {
    document.getElementById('search-results').innerHTML = "<p>Aradığınız şehir bulunamadı.</p>";
  }
}

// prfoile-card görünümü
const profileCards = document.getElementById('profile-cards');
branches.forEach(item => {
  const card = `<div class="profile-card">${item.city.toLocaleUpperCase('tr-TR')} -  ${item.branch.toLocaleUpperCase('tr-TR')} - ${item.number}</div>`;
  profileCards.innerHTML += card;
});