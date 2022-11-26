// değişkenler 

let min = 1, max = 10, kazananSayi = rastgeleKazananSayi(min,max), tahminHakki = 3;

//Html Elemanların değerlerini bir değişkene aktralım

const minSayi = document.querySelector(".min"),
    maxSayi = document.querySelector(".max"),
    tahminInput = document.querySelector("#tahmin-input"),
    tahminBtn = document.querySelector("#tahmin-btn"),
    oyun = document.querySelector(".oyun"),
    mesaj = document.querySelector(".mesaj");

// min ve max sayıları değerleri belirleyelim

minSayi.textContent = min;
maxSayi.textContent = max;



// Tahmine başlayalım

tahminBtn.addEventListener("click", function () {
    const tahminEdilenSayi = tahminInput.value;

    if (tahminEdilenSayi === "" ||
        tahminEdilenSayi < min ||
        tahminEdilenSayi > max) {
        mesajYazdir("Hata ! Geçerli aralıkta bir değer giriniz", "red")
    }

    else if (tahminEdilenSayi == kazananSayi) {
   oyunBitti (false, "Doğru tahmin! Tebrikler :)")
    } else {
        tahminHakki -= 1;

        if (tahminHakki == 0) {
            //oyun bitti
            oyunBitti(true,`Üzgünüm! Tahmin hakkınız kalmadı :( Cevap: ${kazananSayi}`);
        } else {

            // oyun devam ediyor

            mesajYazdir(`Tahmin hakkınız ${tahminHakki} kaldı...`, "red");

        }

    }


});

// mesaj yazdır fonksiyonu

function mesajYazdir(msj, color) {
    // renk değiştirelim
    mesaj.style.color = color

    // mesaj parametresi
    mesaj.textContent = msj;
}

// oyun bitti fonksiyonu

function oyunBitti(kontrol,msj) {

    let color;
kontrol == true ? (color = "red"): (color = "green");


    tahminInput.disabled = true;
    tahminInput.style.borderColor = color
    mesajYazdir(msj, color);

    // buton olayını değiştirelim

    tahminBtn.textContent = "Tekrar Oyna";
    tahminBtn.className = "tekrar-oyna";
}

// rastgele kazanan sayı üretme

function rastgeleKazananSayi(min,max){
    return Math.floor(Math.random()*(max-min +1)+min);

    console.log(Math.floor(Math.random()*(max-min +1)+min))
}

// oyun bittiğinde yeniden başlatalım

oyun.addEventListener("mousedown",function(e){
    if (e.target.className === "tekrar-oyna"){
        window.location.reload();
    }
    })