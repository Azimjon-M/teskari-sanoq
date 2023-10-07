const set_kun = document.getElementById('set-kun');
const set_soat = document.getElementById('set-soat');
const set_daqiqa = document.getElementById('set-daqiqa');
const set_sekund = document.getElementById('set-sekund');
const ofOn = document.getElementById('ofOn');

const BerV = '2023-01-23'

const bYil = BerV.slice(0, 4);
const bOy = BerV.slice(5, 7);
const bKun = BerV.slice(8, 10)



const TeskariSanoq = () => {
    const now = new Date();
    const Oy = now.getMonth() + 1;
    const Kun = now.getDay() + 1;
    const Soat = now.getHours();
    const Minut = now.getMinutes();
    const Sec = now.getSeconds();
    
    //Intervat
    const timer = setInterval(() => {
        set_kun.innerHTML = getDay >= 10 ? getDay : ('0' + getDay);
        set_soat.innerHTML = getHour >= 10 ? getHour : ('0' + getHour);
        set_daqiqa.innerHTML = getMinut >= 10 ? getMinut : ('0' + getMinut);
        set_sekund.innerHTML = getSecound >= 10 ? getSecound : ('0' + getSecound);
    }, 1000)
}
