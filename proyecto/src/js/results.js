import '../js/header'
import '../css/main.scss';

const search = document.getElementById("search");
const submit = document.getElementById("submit");
const resultsTitle = document.getElementById("resultsTitle");
const meals = document.getElementById("meals");
const dish = document.getElementById("dish");

function lookUp(event) {
  event.preventDefault();
  dish.innerHTML = "";
  const searchValue = search.value;
  //    alert(searchValue);
  const isEmpty = (str) => !searchValue.trim().length;
  if (isEmpty(this.value)) {
    alert("Please enter the name of a meal");
  } else {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        resultsTitle.innerHTML = `
        <h2> Results for ${searchValue} : </h2>`;

        if (data.meals === null) {
          `<h2>Sorry, there are no recipes to show</h2>`;
        } else {
          meals.innerHTML = data.meals
            .map(function (meal) {
              return `
                      
                        <div class="dish">
                        <h2>${meal.strMeal}</h2>
                          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                     
                        </div>
                      `;
            })
            .join("");
        }
      });
  }
}
submit.addEventListener("submit", lookUp);

//static bottom part

const dLetter = document.querySelector(".containerBrowseByName");
dLetter.addEventListener("click", lookUpAlpha);

function lookUpAlpha(event) {

    // alert(event.target.getAttribute('id'));

alert(event.currentTarget.value());//()
    // event.target.value());
    // const bLetter = search.value;
    // fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
    //       .then(function (response) {
    //         return response.json();
    //       })
    //       .then(function (data) {
    //         console.log(data);
    //         resultsTitle.innerHTML = `<h2> Results for ${searchValue} : </h2>`;
    
    //         if (data.meals === null) {
    //           `<h2>Sorry, there are no recipes to show</h2>`;
    //         } else {
    //           meals.innerHTML = data.meals
    //             .map(function (meal) {
    //               return `
                            
    //                           <div class="dish">
    //                           <h2>${meal.strMeal}</h2>
    //                             <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                           
    //                           </div>
    //                         `;
    //             })
    //             .join("");
    //         }
    //       });



    // alert("hola");
//   event.preventDefault();
//   dish.innerHTML = "";
//   const searchValue = search.value;
//   //    alert(searchValue);
//   const isEmpty = (str) => !searchValue.trim().length;
//   if (isEmpty(this.value)) {
//     alert("Please enter the name of a meal");
//   } else {
//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data);
//         resultsTitle.innerHTML = `<h2> Results for ${searchValue} : </h2>`;

//         if (data.meals === null) {
//           `<h2>Sorry, there are no recipes to show</h2>`;
//         } else {
//           meals.innerHTML = data.meals
//             .map(function (meal) {
//               return `
                        
//                           <div class="dish">
//                           <h2>${meal.strMeal}</h2>
//                             <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                       
//                           </div>
//                         `;
//             })
//             .join("");
//         }
//       });
//   }
}
 

// // trying to join them

// function lookUpAlpha3(event) {

// // alert(event.target.dataset.id)
//     // let brLetter = event.target.dataset.id;
//     alert(event.target.getAttribute('id'));
//     alert(event.target.value);
//     // alert(brLetter);

// }

// function lookUpAlpha(event) {

// //   event.preventDefault();

// //   let brLetter = event.target.dataset.id; //kinda
// // alert(event.target.getAttribute('id'));
//   // dish.innerHTML= '';
//   // const searchValue = search.value;
//   //    alert(searchValue);

// //   let brLetter = event.target.getAttribute('id');
// //   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
//   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${brLetter}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       let html = "";

//       if (data.meals === null) {
//         `<h2>Sorry, there are no recipes to show</h2>`;
//       } else {

//         meals.innerHTML = data.meals
//           .map(function (meal) {
//             return `

//                         <div class="dish">
//                         <h2>${meal.strMeal}</h2>
//                           <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />

//                         </div>
//                       `;
//           })
//           .join("");
//       }
//     });
// }
