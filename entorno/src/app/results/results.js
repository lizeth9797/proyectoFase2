//import "../results/results.scss"


const search= document.getElementById('search');
const submit = document.getElementById('submit');
const resultsTitle = document.getElementById('resultsTitle');
const meals = document.getElementById('meals');
const  dish = document.getElementById('dish');


function lookUp(event) {
    event.preventDefault();
    dish.innerHTML= '';
    const searchValue = search.value;
//    alert(searchValue);
const isEmpty = str => !searchValue.trim().length;
if( isEmpty(this.value) ) {
    alert("Please enter the name of a meal" )
  } else {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        resultsTitle.innerHTML = `<h2> Results for ${searchValue} : </h2>`
    
    
        if (data.meals === null){
            `<h2>Sorry, there are no recipes to show</h2>`
          }
          else {
            

      
              meals.innerHTML = data.meals.map(
                  function(meal){
                      return `
                      
                        <div class="dish">
                        <h2>${meal.strMeal}</h2>
                          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                     
                        </div>
                      `
                  }
         
              )
              .join('');
          }
    
    }) 
     
}
}
submit.addEventListener('submit', lookUp);