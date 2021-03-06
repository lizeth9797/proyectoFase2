import '../js/header'
import '../css/main.scss';

const search = document.getElementById("search");
const submit = document.getElementById("submit");
const searchButton = document.getElementById("searchButton");
const random = document.getElementById("random");
const resultsTitle = document.getElementById("resultsTitle");
const meals = document.getElementById("meals");
const dish = document.getElementById("dish");
const inputSearch = localStorage.getItem('inputSearch');

//one or more results
function lookUp(event) {
  dish.innerHTML = "";
  const searchValue = inputSearch;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        resultsTitle.innerHTML = `
        <h2> Results for ${searchValue} : </h2>`;
        if (data.meals === null) {
          resultsTitle.innerHTML = 
          `<h2>Sorry, there are no recipes to show</h2>`;
        } else {

          meals.innerHTML = data.meals
            .map(function (meal) {
              return `   
                        <div class="dish">
                        <a href="./recipe.html" id="${meal.idMeal}" " >${meal.strMeal}
                          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" /></a>
                        </div>
                      `;
            })
            .join("");
            const div=document.getElementsByClassName('dish')
           
            for (let i=0; i<div.length;i++){              
              div[i].addEventListener('click',showRecipe)
            }
            function showRecipe(e){
            let idMeal=e.currentTarget.childNodes[1].id
            localStorage.setItem('idMeal', idMeal)
            }
        }
      });
  
}
lookUp()

//searchButton.addEventListener('click', lookUp);

//random search
function Random(event) {
  event.preventDefault();
  dish.innerHTML = "";
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
       const randomMeal=data.meals[0].idMeal 
       localStorage.setItem('idMeal', randomMeal)
        resultsTitle.innerHTML = `
        <h2> Random meal: </h2>`;
        meals.innerHTML = data.meals
            .map(function (meal) {
              return `   
                        <div class="dish">
                        <a href="./recipe.html">${meal.strMeal}</a>
                          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                        </div>
                      `;
            })
            .join("");        
      });
}
random.addEventListener('click', Random);



//A to Z


//from here Browse by name

const dLetter = document.querySelector(".containerBrowseByName");

//browse by name bar is generated
let alpha = Array.from(Array(26)).map((e, i) => i + 65);
let alphabet = alpha.map((x) => String.fromCharCode(x));

let html = "";
//loop through the alphabet to generate the buttons
for (let x = 0; x < alphabet.length; x++) {
  html += `
    <button type="submit" 
    class="containerBrowseByName browseLetter"
    value="${alphabet[x]}"
    id="${alphabet[x]}">
        <h6  browseLetterS="${alphabet[x]}">
        ${alphabet[x]}</h6>
    </button>
    `;
}

// we add it to the html

dLetter.innerHTML = html;

// set event listener to the buttons, first by selecting the classes
let Buttons = document.querySelectorAll(".containerBrowseByName  button ");

// loop through the buttons using for..of
for (let button of Buttons) {
  // listen for a click event
  button.addEventListener("click", (e) => {
    // store the current clicked button
    let brLetter = e.currentTarget.value;

    //f r o m h e r e
    // we get the results according to whatever value of the button has been clicked
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${brLetter}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        let html = "";

        if (data.meals === null) {
          `<h2>Sorry, there are no recipes to show</h2>`;
        } else {
          meals.innerHTML = data.meals
          .map(function (meal) {
            return `   
                    <div class="dish">
                    <a href="./recipe.html" id="${meal.idMeal}" " >${meal.strMeal}
                      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" /></a>
                    </div>
                  `;
            })
            .join("");
            const div=document.getElementsByClassName('dish')
            for (let i=0; i<div.length;i++){              
              div[i].addEventListener('click',showRecipe)
            }
            function showRecipe(e){
            let idMeal=e.currentTarget.childNodes[1].id
            localStorage.setItem('idMeal', idMeal)
            }
          }
     
      });
  });
}
