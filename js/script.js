
const container1 = document.getElementById('1');
const container2 = document.getElementById('2');
const container3 = document.getElementById('3');
const container4 = document.getElementById('4');
const container5 = document.getElementById('5');
const container6 = document.getElementById('6');
const thankYou = document.querySelector('.navbar-nav .tombol');
const opacity = document.getElementsByClassName('opacity')[0];
const closer = document.querySelector('.closer');
const navbarBrand = document.querySelector('.navbar .navbar-brand');
const audio = document.getElementsByTagName('audio')[0];


const tanggalTujuan = new Date('Jul 26, 2022 00:00:00').getTime();
const hitungMundur = setInterval(function() {
    const sekarang = new Date().getTime();
    const selisih = tanggalTujuan - sekarang;

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
    const detik = Math.floor(selisih % (1000 * 60) / (1000));


    const teks = document.getElementById('teks');
    teks.innerHTML = 'Your Birthday is : <br> ' + hari + ' days ' + jam + ' hours ' + menit + ' minutes ' + detik + ' second left!'; 

    if(selisih < 0) {
        clearInterval(hitungMundur);
        container1.classList.remove('active');
        container2.classList.add('active');
        audio.setAttribute('autoplay', '');
    };

    if(selisih < 0) {
        thankYou.style.display = "block";
    }

   
}, 1000);


// navbarBrand 
navbarBrand.addEventListener('click', function() {
    if (tanggalTujuan - new Date().getTime() < 0){
    container2.classList.add('active');
    container3.classList.remove('active');
    container4.classList.remove('active');
    container5.classList.remove('active');
    container6.classList.remove('active');
    } 
})

// jumboButton
const jumboButton = document.getElementsByClassName('jumboButton');
jumboButton[0].addEventListener('click', function() {
})

jumboButton[1].addEventListener('click', function() {
    container3.classList.add('active');
    container2.classList.remove('active');
})

jumboButton[2].addEventListener('click', function() {
    container3.classList.add('active');
    container4.classList.remove('active');
})

jumboButton[3].addEventListener('click', function() {
    container3.classList.add('active');
    container5.classList.remove('active');
})

jumboButton[3].addEventListener('click', function() {
    container3.classList.add('active');
    container6.classList.remove('active');
})

jumboButton[4].addEventListener('click', function() {
    container3.classList.add('active');
    container6.classList.remove('active');
})

// cake

const cake = document.getElementsByClassName('fa-birthday-cake');

cake[2].addEventListener('click', function() {
    container3.classList.remove('active');
    container4.classList.add('active');
    container5.classList.remove('active');
    container6.classList.remove('active');
});

cake[3].addEventListener('click', function() {
    container3.classList.remove('active');
    container4.classList.add('active');
    container5.classList.remove('active');
    container6.classList.remove('active');
});

cake[4].addEventListener('click', function() {
    container3.classList.remove('active');
    container4.classList.add('active');
    container5.classList.remove('active');
    container6.classList.remove('active');
});

cake[5].addEventListener('click', function() {
    container3.classList.remove('active');
    container4.classList.add('active');
    container5.classList.remove('active');
    container6.classList.remove('active');
});

// kamera

const kamera = document.getElementsByClassName('fa-camera-retro');
kamera[0].addEventListener('click', function() {
    container3.classList.remove('active');
    container5.classList.add('active');
})
kamera[1].addEventListener('click', function() {
    container4.classList.remove('active');
    container5.classList.add('active');
    container6.classList.remove('active');
});

kamera[2].addEventListener('click', function() {
    container4.classList.remove('active');
    container5.classList.add('active');
    container6.classList.remove('active');
});

kamera[3].addEventListener('click', function() {
    container4.classList.remove('active');
    container5.classList.add('active');
    container6.classList.remove('active');
});

// tanggal

const tanggal = document.getElementsByClassName('fa-calendar-day');
tanggal[0].addEventListener('click', function() {
    container3.classList.remove('active');
    container6.classList.add('active');
})
tanggal[1].addEventListener('click', function() {
    container4.classList.remove('active');
    container5.classList.remove('active');
    container6.classList.add('active');
});

tanggal[2].addEventListener('click', function() {
    container4.classList.remove('active');
    container5.classList.remove('active');
    container6.classList.add('active');
});

tanggal[3].addEventListener('click', function() {
    container4.classList.remove('active');
    container5.classList.remove('active');
    container6.classList.add('active');
});


// opacity
closer.addEventListener('click', function() {
    console.log(closer);
    opacity.classList.remove('active');
    closer.classList.remove('active');
});

const jumboButton2 = document.getElementsByClassName('jumboButton2');
jumboButton2[1].addEventListener('click', function() {
    opacity.classList.add('active');
    closer.classList.add('active');
})

jumboButton2[2].addEventListener('click', function() {
    opacity.classList.add('active');
    closer.classList.add('active');
})

jumboButton2[3].addEventListener('click', function() {
    opacity.classList.add('active');
    closer.classList.add('active');
})

jumboButton2[4].addEventListener('click', function() {
    opacity.classList.add('active');
    closer.classList.add('active');
})


