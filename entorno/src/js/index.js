import { Tooltip, Toast, Popover } from 'bootstrap';
import "../../scss/main.scss"
//import "../app/results/results.scss"



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

