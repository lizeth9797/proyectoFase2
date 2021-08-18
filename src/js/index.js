import { Tooltip, Toast, Popover } from 'bootstrap';
import '../css/main.scss';
import '../js/header'

//import "../app/results/results.scss"
//import "../app/recipe/recipe.js"
//localStorage.setItem('idMeal', '52867');
getRandomMeal()
.then(function (data) {
      let cardTitle=document.getElementById('recommendation-title');
      const texto=document.createTextNode(data.meals[0].strMeal)
      cardTitle.appendChild(texto)
      console.log(data)
      const liga=getYoutubeUrl(data)
      const link = document.getElementById('youtube-video');
      link.src=liga;
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

// AQUI EMPIEZA LA LOGICA 

/* const searchInput = document.getElementById('search');
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', algo);
function algo(){
    const a=searchInput.value;
    console.log(a)
}  */
 


const random = document.getElementById('random');
const searchButton = document.getElementById('searchButton');
const input = document.getElementById('search');
searchButton.addEventListener('click', searchGIFs);

function searchGIFs() {
  const search = input.value;
  console.log('SEARCH',search)
  if(search) {
    localStorage.setItem('inputSearch',search)
    console.log('storage y link')
    window.location('./results.html');


  }else{
    alert("Please enter the name of a meal");
  }
}
