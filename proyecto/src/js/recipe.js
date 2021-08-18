import '../js/header'
import '../css/recipe.scss'

function loadRecipe(data){

    const jsonRecipe = data;
    /*{
        "meals": [
            {
                "idMeal": "52908",
                "strMeal": "Ratatouille",
                "strDrinkAlternate": null,
                "strCategory": "Vegetarian",
                "strArea": "French",
                "strInstructions": "Cut the aubergines in half lengthways. Place them on the board, cut side down, slice in half lengthways again and then across into 1.5cm chunks. Cut off the courgettes ends, then across into 1.5cm slices. Peel the peppers from stalk to bottom. Hold upright, cut around the stalk, then cut into 3 pieces. Cut away any membrane, then chop into bite-size chunks.\r\nScore a small cross on the base of each tomato, then put them into a heatproof bowl. Pour boiling water over the tomatoes, leave for 20 secs, then remove. Pour the water away, replace the tomatoes and cover with cold water. Leave to cool, then peel the skin away. Quarter the tomatoes, scrape away the seeds with a spoon, then roughly chop the flesh.\r\nSet a sauté pan over medium heat and when hot, pour in 2 tbsp olive oil. Brown the aubergines for 5 mins on each side until the pieces are soft. Set them aside and fry the courgettes in another tbsp oil for 5 mins, until golden on both sides. Repeat with the peppers. Don’t overcook the vegetables at this stage, as they have some more cooking left in the next step.\r\nTear up the basil leaves and set aside. Cook the onion in the pan for 5 mins. Add the garlic and fry for a further min. Stir in the vinegar and sugar, then tip in the tomatoes and half the basil. Return the vegetables to the pan with some salt and pepper and cook for 5 mins. Serve with basil.",
                "strMealThumb": "https://www.themealdb.com/images/media/meals/wrpwuu1511786491.jpg",
                "strTags": "Vegetables,SideDish",
                "strYoutube": "https://www.youtube.com/watch?v=BFdQUgAFtGU",
                "strIngredient1": "Aubergine",
                "strIngredient2": "Courgettes",
                "strIngredient3": "Yellow Pepper",
                "strIngredient4": "Tomato",
                "strIngredient5": "Olive Oil",
                "strIngredient6": "Basil",
                "strIngredient7": "Onion",
                "strIngredient8": "Garlic Clove",
                "strIngredient9": "Red Wine Vinegar",
                "strIngredient10": "Sugar",
                "strIngredient11": "",
                "strIngredient12": "",
                "strIngredient13": "",
                "strIngredient14": "",
                "strIngredient15": "",
                "strIngredient16": "",
                "strIngredient17": "",
                "strIngredient18": "",
                "strIngredient19": "",
                "strIngredient20": "",
                "strMeasure1": "2 large",
                "strMeasure2": "4",
                "strMeasure3": "2",
                "strMeasure4": "4 large",
                "strMeasure5": "5 tbs",
                "strMeasure6": "Bunch",
                "strMeasure7": "1 medium",
                "strMeasure8": "3 finely chopped",
                "strMeasure9": "1 tsp ",
                "strMeasure10": "1 tsp ",
                "strMeasure11": "",
                "strMeasure12": "",
                "strMeasure13": "",
                "strMeasure14": "",
                "strMeasure15": "",
                "strMeasure16": "",
                "strMeasure17": "",
                "strMeasure18": "",
                "strMeasure19": "",
                "strMeasure20": "",
                "strSource": "https://www.bbcgoodfood.com/recipes/2903/ratatouille",
                "strImageSource": null,
                "strCreativeCommonsConfirmed": null,
                "dateModified": null
            }
        ]
    }

    */

    // Extracción de propiedades
    const meals = jsonRecipe.meals[0];
    const title = document.querySelector('#foodName-title');
    title.textContent = jsonRecipe.meals[0].strMeal;


    const ingredientsList = [];
    const measuresList = [];
    for (let i=1; i<=20; i++){
        let ingredient = 'strIngredient' + i;
        let measure = 'strMeasure' + i;
        if(meals[ingredient]){
            ingredientsList.push(meals[ingredient])
            if(meals[measure]){
                measuresList.push(meals[measure])
            }
        }
    }


    const instructions = meals.strInstructions;
    const splitedInstructions = instructions.split(". ")
    const instructionsOl = document.querySelector('#instructions-div > ol')

    // Creación de lista de ingredientes
/*     for (instruction of splitedInstructions) {   
        let instructionBullet = document.createElement('li')
        let instructionText = document.createTextNode(instruction + '.')
        instructionBullet.appendChild(instructionText)
        instructionsOl.appendChild(instructionBullet)
    }
 */

    for (let j=0; j<splitedInstructions.length;j++){
        let instructionBullet = document.createElement('li');
        let instructionText = document.createTextNode(splitedInstructions[j] + '.')
        instructionBullet.appendChild(instructionText)
        instructionsOl.appendChild(instructionBullet)
    }

    // Carga de Imagen

    const recipeImage = meals.strMealThumb;
    const img = document.querySelector('#recipe-img');
    img.src = recipeImage;


    // Carga de Video
    const videoFrame = document.querySelector('#video-frame');
    const urlVideo = meals.strYoutube;

    if(urlVideo){
        let youtubePrefix ="https://www.youtube.com/embed/";
        let delimiter = urlVideo.indexOf('=') +1
        let idVideo = urlVideo.slice(delimiter, urlVideo.length)
        videoFrame.src = youtubePrefix + idVideo;
    }


    const colsList = document.querySelector('#ingredients-list');

    // Genera una tarjeta de ingrediente
    function genIngredient( description, imgSrc){
        const divCol = document.createElement('div');
        divCol.className = "col";

        if(description != 'undefined undefined'){
            const ingredientImg = document.createElement('img')
            ingredientImg.src = imgSrc;
            ingredientImg.className="img-fluid"
        
            const ingredientDes = document.createElement('h7');
            const textDes = document.createTextNode(description);
            ingredientDes.appendChild(textDes);
        
            divCol.appendChild(ingredientImg);
            divCol.appendChild(textDes)
        }
    
        return divCol;
    }


    // Para dividir el total de ingredientes en varias filas
    function chunk(array, size) {
        let final = [];
        if (!(size < 1 || size > array.length)){
            for ( let i = 0; i < array.length; i+=size){
                final.push(array.slice(i, i+size));
            }
        }
        return final;
    };


    // Genera fila de ingredientes
    function genRow(ingredientsP, measuresP){
        let row = document.createElement('div');
        const ingLength = 4
        const urlPrefix = 'https://www.themealdb.com/images/ingredients/';
        const urlSufix ='.png'
        //ingredientsP.length;
        row.className = "row";
        for (let i = 0; i<ingLength; i++){
            let ingredient =  genIngredient(measuresP[i] + " " + ingredientsP[i], urlPrefix + ingredientsP[i] + urlSufix);
        
            row.appendChild(ingredient)
        }

        return row;
    }

    
    // Generación de un número específico de filas
    const rowLength = 4;

    const dividedIngredients = chunk(ingredientsList, rowLength);
    const dividedMeasures = chunk(measuresList, rowLength)

    for (let i=0; i<dividedIngredients.length;i++){
        colsList.appendChild(genRow(dividedIngredients[i], dividedMeasures[i]));
    }

}

// Definición de Consulta a la API

const getRecipeById = async (url) =>{
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        return data
    } catch(err){
        console.log(err)
    }

}

//Obtención del item idMeal
const idMeal = localStorage.getItem('idMeal');

const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}` 


getRecipeById(url)
  .then(function (data) {
    console.log('Id:',idMeal)
    loadRecipe(data)
  })

