/// <reference types="../@types/jquery" />

const btnIcon = $("aside i");
const rowData = document.getElementById("rowData");
const Area = document.getElementById("area");
const element = document.getElementById("ingredients");
const lodding = document.getElementById("lodding");

// =========== Arreys ===========

let allGredients = [];      //  in get Ingredients Meals
let allArea = [];          // ==>> in get Area
let allIngredients = [];
let allMaels = [];



// ===========  Categories =============

getArea();

async function getArea() {
  lodding.classList.remove("d-none");

  const ApiResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  const data = await ApiResponse.json();
  allArea = data.meals;
  console.log(allArea);
  displayArea();
  lodding.classList.add("d-none");
}


// ================= get and display Ingredients =============

async function getIngredientsMeals(mealId) {
  lodding.classList.remove("d-none");

  const apiResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  );
  const data = await apiResponse.json();
  allGredients = data.meals;
  console.log(data.meals);
  displayIngredients();
  lodding.classList.add("d-none");
}

function displayIngredients() {
  lodding.classList.remove("d-none");
  rowData.innerHTML = ``;
  let boxData = " ";

  for (let i = 0; i < allGredients.length; i++) {
    boxData += `
    
      <div class="col-md-4">
              <div class="card text-white bg-transparent my-5">
                <div class="card-img w-100">
                  <img src="${allGredients[i].strMealThumb}" class="card-img-top rounded" alt="" />
                  <h2 class="pt-1">${allGredients[i].strMeal}</h2>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card bg-transparent p-2 text-white card-p my-5">
                <div class="w-100">
                  <nav aria-label="breadcrumb ">
                    <h1>Instructions</h1>
                  </nav>

                  <div class="p-2 caption">
                    <p class="Recipes-caption lh-p ">
                    ${allGredients[i].strInstructions}
                    </p>
                    <p class="h3"><span>Area: </span>${allGredients[i].strArea}</p>
                    <p class="h3"><span>Category: </span>${allGredients[i].strCategory}</p>
                    <p class="h3"><span>Recipes : </span></p>
                    <div class="Recipes-Gredients">
                      <ul class="list-unstyled d-flex g-3 flex-wrap">
                        <li class="alert alert-info m-2 p-1">1 ${allGredients[i].strIngredient1}</li>
                        <li class="alert alert-info m-2 p-1">1 ${allGredients[i].strIngredient2}</li>
                        <li class="alert alert-info m-2 p-1">
                        ${allGredients[i].strIngredient3}
                        </li>
                        <li class="alert alert-info m-2 p-1">
                          1 tbs Tomato Puree
                        </li>
                        <li class="alert alert-info m-2 p-1"> ${allGredients[i].strIngredient4} </li>
                        <li class="alert alert-info m-2 p-1">${allGredients[i].strIngredient5}</li>
                        <li class="alert alert-info m-2 p-1">${allGredients[i].strIngredient6}</li>
                        <li class="alert alert-info m-2 p-1">${allGredients[i].strIngredient7}</li>
                        <li class="alert alert-info m-2 p-1">
                        ${allGredients[i].strIngredient8}
                        </li>
                        <li class="alert alert-info m-2 p-1">
                        ${allGredients[i].strIngredient9}
                        </li>
                        <li class="alert alert-info m-2 p-1">
                        ${allGredients[i].strIngredient10}
                        </li>
                        <li class="alert alert-info m-2 p-1">${allGredients[i].strIngredient11}</li>
                        <li class="alert alert-info m-2 p-1">${allGredients[i].strIngredient12}</li>
                      </ul>
                      <ul class="list-unstyled d-flex g-3 flex-wrap">
                    
                          <li class="alert alert-danger m-2 p-1">Greasy</li>
                          <li class="alert alert-danger m-2 p-1">UnHealthy</li>
                          <li class="alert alert-danger m-2 p-1">HangoverFood</li>
                          <li class="alert alert-danger m-2 p-1">Calorific</li>
                          <li class="alert alert-danger m-2 p-1">Breakfast</li>
                          <li class="alert alert-danger m-2 p-1">BBQ</li>
                      </ul>
                    </div>
                    <p class="h3 mb-3">
                      Tags :
                    </p>
                    <a class="btn btn-success me-1" href="${allGredients[i].strSource}">Source</a>
                    <a class="btn btn-danger " href="${allGredients[i].strYoutube}">Youtube</a>
                  </div>
                </div>
              </div>
            </div>
    `;
  }

  rowData.innerHTML = boxData;
  lodding.classList.add("d-none");
}

// ========================= All get and display Area && Area Meals ======================

Area.addEventListener("click", function () {
  getArea();
});


function displayArea() {
  lodding.classList.remove("d-none");
  let boxData = "";
  rowData.innerHTML = ``;
  for (let i = 0; i < allArea.length; i++) {
    boxData += `

     <div class="col-md-3">
            <div onclick="getAreaMeals('${allArea[i].strArea}')" class="rounded-2 text-center cursor ">
                      <i class="fa-solid fa-house-laptop text-white fa-4x"></i>
                    <h3 class="text-white">${allArea[i].strArea}</h3>
            </div>
      </div>
     `;
  }
  rowData.innerHTML = boxData;
  lodding.classList.add("d-none");
}

async function getAreaMeals(areaName) {
  lodding.classList.remove("d-none");

  const apiResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`
  );
  const data = await apiResponse.json();
  allAreaMeals = data.meals;
  console.log(allAreaMeals);
  displayAreaMeals();
  lodding.classList.add("d-none");
}

function displayAreaMeals() {
  lodding.classList.remove("d-none");
  let boxData = "";
  rowData.innerHTML = ``;
  for (let i = 0; i < allAreaMeals.length; i++) {
    boxData += `
          <div class="col-md-3">
              <div  onclick="getIngredientsMeals('${allAreaMeals[i].idMeal}')" class="my-card h-100 p-0" >
                <img src=" ${allAreaMeals[i].strMealThumb}" class="w-100 h-100 rounded" alt=" this is a${allAreaMeals[i].strMeal}" />

                <div class="layer text-center d-flex align-items-center p-1 h-100">
                  <h3> ${allAreaMeals[i].strMeal}</h3>
                </div>
              </div>
          </div> 
      `;
  }
  rowData.innerHTML = boxData;
  lodding.classList.add("d-none");
}

// ================== get Ingredients meals tap  ======================


// ============== saidbar ===================
btnIcon.on("click", function () {
  $(".outer-side").animate({ width: "toggle" }, 500, function () {
    $(".links li").animate({ top: 200 }, 500);
  });
});
