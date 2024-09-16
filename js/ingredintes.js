/// <reference types="../@types/jquery" />

const btnIcon = $("aside i");
const rowData = document.getElementById("rowData");
const Area = document.getElementById("area");
const element = document.getElementById("ingredients");
const lodding = document.getElementById("lodding");

// =========== Arreys ===========

let allMaels = [];
let allGredients = [];
let allIngredients = [];
let listElementIngred = [];



getElement();
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
// ================== get Ingredients meals tap  ======================

element.addEventListener("click", function () {
  getElement();
});

async function getElement() {
  lodding.classList.remove("d-none");
  const apiResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );

  const data = await apiResponse.json();

  allIngredients = data.meals; // array
  console.log(allIngredients);
  displayElement();
  lodding.classList.add("d-none");
}

function displayElement() {
  lodding.classList.remove("d-none");
  let boxData = "";
  rowData.innerHTML = ``;
  for (let i = 0; i < 20; i++) {
    boxData += `
        <div class="col-md-3">
            
          <div onclick="getElementMeals('${
            allIngredients[i].strIngredient
          }')" class="rounded-2 text-white text-center cursor">
              <i class="fa-solid fa-drumstick-bite fa-4x"></i>
              <h3>${allIngredients[i].strIngredient}</h3>
               <p>
                    ${allIngredients[i].strDescription
                      .split(" ")
                      .slice(0, 20)
                      .join(" ")}
                </p>
                
          </div>

        </div>
    `;
  }
  rowData.innerHTML = boxData;
  lodding.classList.add("d-none");
}

async function getElementMeals(mealIngred) {
  lodding.classList.remove("d-none");

  const apiResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${mealIngred}`
  );
  const data = await apiResponse.json();
  listElementIngred = data.meals;
  console.log(listElementIngred);
  // displayIngredients();
  displayElementMeals();
  lodding.classList.add("d-none");
}

function displayElementMeals() {
  lodding.classList.remove("d-none");
  let boxData = "";
  for (let i = 0; i < listElementIngred.length; i++) {
    boxData += `
          <div class="col-md-3">
              <div  onclick="getIngredientsMeals('${listElementIngred[i].idMeal}')" class="my-card h-100 " >
                <img src="${listElementIngred[i].strMealThumb}" class="w-100 h-100 rounded" alt=" this is a ${listElementIngred[i].strMeal}" />

                <div class="layer d-flex align-items-center p-1 justify-content-center text-center h-100">
                  <h3> ${listElementIngred[i].strMeal}</h3>
                </div>
              </div>
            </div>`;
  }
  rowData.innerHTML = boxData;
  lodding.classList.add("d-none");
}

// ============== saidbar ===================
btnIcon.on("click", function () {
  $(".outer-side").animate({ width: "toggle" }, 500, function () {
    $(".links li").animate({ top: 200 }, 500);
  });
});
