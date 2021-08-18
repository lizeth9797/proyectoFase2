import { Tooltip, Toast, Popover } from 'bootstrap';
import '../css/main.scss';
import '../js/header'
//import "../app/results/results.scss"
//import "../app/recipe/recipe.js"
localStorage.setItem('idMeal', '52867');
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
 


const searchInput = document.getElementById('search');
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', searchGIFs);

function searchGIFs() {
  const search = searchInput.value;
  console.log('SEARCH',search)
  if(search) {
    const formattedSearch = formatSearchString(search);
    const url = buildUrl(formattedSearch);
    console.log(url)
    return getGiphyResults(url)
      .then(function(gifs) {
        console.log(gifs)
/*         gifs.forEach(function(gif) {
          const img = document.createElement('img');
          img.src = gif.images.fixed_height.url;
          img.alt = gif.title;

          results.appendChild(img)
        }) */
      })
  }
}

function formatSearchString(search) {
  return search.replace(/ /g, '+');
}

function buildUrl (search) {
  const baseUrlS = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  return `${baseUrlS}${search}`;
}

function getGiphyResults(url) {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data.data
    })
    .catch(function(err) {
      console.log(err)
    })
}




