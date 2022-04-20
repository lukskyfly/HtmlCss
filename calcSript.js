var liczby = document.querySelectorAll('.liczba');
var operator = document.querySelectorAll('.operator');
var wyczysc = document.querySelector('.wyczysc');
var usun = document.querySelector('.usun');
var rownosc = document.querySelector('.rownosc');
var wynikPoprzednie = document.querySelector('.poprzednieDzialanie');
var wynikAktualne = document.querySelector('.aktualneDzialanie');

var aktualneDzialanie = '';
var poprzednieDzialanie = '';
var operacja = undefined;

const zaktualizujWynik = () =>
{
    wynikAktualne.innerText = aktualneDzialanie;
    wynikPoprzednie.innerText = poprzednieDzialanie;
}
const dodajLiczbe = (liczba) => 
{
    if(liczba==='.'){
        if(aktualneDzialanie.includes('.')){
    return
    }
    liczba = '.'
}
    aktualneDzialanie = aktualneDzialanie.toString() + liczba.toString();
}

const usunLiczbe = () => 
{
    aktualneDzialanie = aktualneDzialanie.toString().slice(0, -1)
}

const wyczyscWynik = () =>
{
    aktualneDzialanie = ''
    operacja = undefined
    poprzednieDzialanie = ''
}

liczby.forEach((liczba) => 
{
    liczba.addEventListener('click', () =>
    {
        dodajLiczbe(liczba.innerText)
        zaktualizujWynik()
    })
})

usun.addEventListener('click', () =>
    {
        usunLiczbe();
        zaktualizujWynik();
    })

    wyczysc.addEventListener('click', () => {
        wyczyscWynik()
        zaktualizujWynik()
      })