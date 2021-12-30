const url = "https://api.openweathermap.org/data/2.5/";
const apikey = "32b0a9a7483405f6d3fdebaa8e4d1e4f";

const setQuery = (e) =>{
    if(e.keyCode == "13")
    getResult(sehir.value)
};
const getResult =(Sehiradi) =>{
    let query = `${url}weather?q=${Sehiradi}&appid=${apikey}&units=metric&lang=tr`;
    fetch(query)
    .then(response => response.json())
    .then(gelenveri)

}
const gelenveri = (veri) => {
    let sehir = document.querySelector(".sehir");
    let sicaklik = document.querySelector(".sicaklik");
    let durum = document.querySelector(".durum");
    let en = document.querySelector(".en");
    let img = document.querySelector(".img-icon");

    sehir.innerText = `${veri.name},${veri.sys.country}`
    sicaklik.innerText = `${Math.round(veri.main.temp)}°C`
    durum.innerText = `${veri.weather[0].description}`
    en.innerText = `${Math.round(veri.main.temp_min)}°C /${Math.round(veri.main.temp_max)}°C`
    img.src = `http://openweathermap.org/img/w/${veri.weather[0].icon}.png`

}
const sehir = document.getElementById("Sehirarama");
sehir.addEventListener("keypress", setQuery)