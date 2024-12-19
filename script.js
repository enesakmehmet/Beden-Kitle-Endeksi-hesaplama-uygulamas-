function startCalculator() {
    const kilo = Number(prompt("Kilonuzu giriniz:"));
    const boy = Number(prompt("Boyunuzu metre cinsinden giriniz:"));

    if (!kilo || !boy || kilo <= 0 || boy <= 0) {
        alert("Lütfen geçerli bir değer giriniz!");
        return;
    }

    const sonuc = kilo / (boy * boy);
    let mesaj;

    if (sonuc < 18.5) {
        mesaj = `İdeal kilonun altında (${sonuc.toFixed(2)})`;
    } else if (sonuc >= 18.5 && sonuc <= 24.9) {
        mesaj = `İdeal kiloda (${sonuc.toFixed(2)})`;
    } else if (sonuc >= 25 && sonuc <= 29.9) {
        mesaj = `İdeal kilonun üstünde (${sonuc.toFixed(2)})`;
    } else if (sonuc >= 30 && sonuc <= 39.9) {
        mesaj = `İdeal kilonun çok üstünde (obez) (${sonuc.toFixed(2)})`;
    } else {
        mesaj = `İdeal kilonun çok üstünde (morbid obez) (${sonuc.toFixed(2)})`;
    }

    document.getElementById("result").innerText = mesaj;
}
