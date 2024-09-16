/// <reference types="../@types/jquery" />

const btnIcon = $("aside i");
const rowData = document.getElementById("rowData");
const Area = document.getElementById("area");
const element = document.getElementById("ingredients");
const lodding = document.getElementById("lodding");

// =========== Arreys ===========
let allCategories = [];
let allMaels = [];
let allGredients = [];
let allArea = [];
let allIngredients = [];
let listElementIngred = [];

// ===========  Categories =============

getCategories();

async function getCategories() {
  lodding.classList.remove("d-none");
  const ApiResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  const data = await ApiResponse.json();
  allCategories = data.categories;
  // console.log(allCategories);
  displaycategories();
  lodding.classList.add("d-none");
}
// =========== display Categories =============

function displaycategories() {
  lodding.classList.remove("d-none");

  let boxData = "";
  for (let i = 0; i < allCategories.length; i++) {
    boxData += `
          <div class="col-md-3">
              <div  onclick="getCatogeryMaels('${
                allCategories[i].strCategory
              }')" class="my-card h-100 " >
                <img src="${
                  allCategories[i].strCategoryThumb
                }" class="w-100 h-100 rounded" alt=" this is a ${
      allCategories[i].strCategory
    }" />

                <div class="layer text-center p-1 h-100">
                  <h3 class="py-1"> ${allCategories[i].strCategory}</h3>
                  <p>
                    ${allCategories[i].strCategoryDescription
                      .split(" ")
                      .slice(0, 20)
                      .join(" ")}
                  </p>
                </div>
              </div>
            </div>`;
  }
  rowData.innerHTML = boxData;
  lodding.classList.add("d-none");
}

// ============== >> get and display Catogery Maels << ===================

async function getCatogeryMaels(CatogeryMaels) {
  lodding.classList.remove("d-none");
  const ApiResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${CatogeryMaels}`
  );
  const data = await ApiResponse.json();

  allMaels = data.meals;
  console.log(allMaels);

  displayCatogeryMaels(allMaels);
  lodding.classList.add("d-none");
}

function displayCatogeryMaels(allMaels) {
  lodding.classList.remove("d-none");
  rowData.innerHTML = ``;
  let boxData = "";
  for (let i = 0; i < allMaels.length; i++) {
    boxData += `
           <div class="col-md-3">
              <div onclick="getIngredientsMeals('${allMaels[i].idMeal}') " class="my-card  h-100 " >
                <img src="${allMaels[i].strMealThumb}" class="w-100 h-100 w-100 rounded" alt=" this is a ${allMaels[i].strMealThumb}" />
                <div class="layer p-2 text-center d-flex justify-content-center align-items-center h-100">
                  <h3> ${allMaels[i].strMeal}</h3>
                </div>
              </div>
            </div>`;
  }
  rowData.innerHTML = boxData;

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












//  logic for all 

/* 
// ========================= All get and display Area && Area Meals ======================

Area.addEventListener("click", function () {
  getArea();
});

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
  */


// ============== saidbar ===================
btnIcon.on("click", function () {
  $(".outer-side").animate({ width: "toggle" }, 500, function () {
    for (let i = 0; i < 5; i++) {
      $(".links li").eq(i).animate({ top: 0} , (i + 5) * 100)
  }
  });
});


