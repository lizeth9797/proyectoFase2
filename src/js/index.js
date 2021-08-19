import { Tooltip, Toast, Popover } from 'bootstrap';
import '../css/main.scss';
import '../js/header'

getRandomMeal()
.then(function (data) {
      let cardTitle=document.getElementById('recommendation-title');
      const texto=document.createTextNode(data.meals[0].strMeal)
      cardTitle.appendChild(texto)
      console.log(data)
      const liga=getYoutubeUrl(data)
      const link = document.getElementById('youtube-video');
      link.src=liga;
      const div=document.getElementsByClassName('card-body-recommendation');
      cardTitle.id=data.meals[0].idMeal
      div[0].addEventListener('click',recomendation)
})  
  
function getRandomMeal() {
    return fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(function (response) {
        return response.json();
    })
} 

function getYoutubeUrl(data) {
  const youtube=data.meals[0].strYoutube
  const baseImageUrl = 'https://www.youtube.com/embed';
  const url = youtube 
    .substr(32, 11)
  //console.log(url);
  return `${baseImageUrl}/${url}`;
}

function recomendation(e){
  let idM=e.currentTarget.childNodes[1].id
  localStorage.setItem('idMeal', idM) 
}


//BARRA DE BUSQUEDA
const random = document.getElementById('random');
const searchButton = document.getElementById('searchButton');
const input = document.getElementById('search');
searchButton.addEventListener('click', searchAction);

function searchAction() {
  event.preventDefault();
  const search = input.value;
  if(search) {
    localStorage.setItem('inputSearch',search)
    location.replace("./results.html")
  }else{
    alert("Please enter the name of a meal");
  }
}

function Random(event) {
  event.preventDefault();
  //dish.innerHTML = "";
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
       const randomMeal=data.meals[0].idMeal 
       localStorage.setItem('idMeal', randomMeal)
       location.replace("./recipe.html") 
      });
}
random.addEventListener('click', Random);

