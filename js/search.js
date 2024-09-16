const btnIcon = $("aside i");
const fristName = document.getElementById("fristName");
const firstLetter = document.getElementById("firstLetter");
const rowData=  document.getElementById("rowData")
const lodding = document.getElementById("lodding");

// ============== saidbar ===================

fristName.addEventListener("keyup", function () {
  getMaelByName(fristName.value);
});

firstLetter.addEventListener("input", function () {
  getMaelByFirstLetter(firstLetter.value)
});

btnIcon.on("click", function () {
  $(".outer-side").animate({ width: "toggle" }, 500, function () {
    $(".links li").animate({ top: 200 }, 500);
  });
});

let allMaels = [];
let MaelsFirstLetter =[]

//================ get Mael By First Letter =======================

async function getMaelByFirstLetter(maelName) {
  
  try {
    lodding.classList.remove("d-none");
    const ApiResponse = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${maelName[0]}`
    );
    const data = await ApiResponse.json();
  
    MaelsFirstLetter = data.meals;
    console.log(MaelsFirstLetter);
    displayMaelByFirstLetter()
    lodding.classList.add("d-none");

  } catch (error) {
    
    console.log('Error From Api');
    lodding.classList.add("d-none");
  }
  
}

function displayMaelByFirstLetter() {
  lodding.classList.remove("d-none");

  let boxData = "";


  for (let i = 0; i < MaelsFirstLetter.length; i++) {
    boxData += `
           <div class="col-md-3">
              <div onclick="getIngredientsMeals('${MaelsFirstLetter[i].idMeal}') " class="my-card  h-100 " >
                <img src="${MaelsFirstLetter[i].strMealThumb}" 
                class="w-100 h-100 w-100 rounded" 
                alt=" this is a ${MaelsFirstLetter[i].strMealThumb}" />

                <div class="layer p-2 text-center d-flex align-items-center h-100">
                  <h3> ${MaelsFirstLetter[i].strMeal}</h3>
                </div>
              </div>
            </div>
            `;
  }
  rowData.innerHTML = boxData;
  lodding.classList.add("d-none");

}
//================ get Mael By Name =======================
async function getMaelByName(maelName) {
  // let term = maelName;
try {
  lodding.classList.remove("d-none");

  const ApiResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${maelName}`
  );
  const data = await ApiResponse.json();

  allMaels = data.meals;
  console.log(allMaels);
  displayMaelByName();
  lodding.classList.add("d-none");

  
} catch (error) {
  lodding.classList.add("d-none");
  console.log('Error From Api ');
}
}

function displayMaelByName() {
  lodding.classList.remove("d-none");

  let boxData = "";

  for (let i = 0; i < allMaels.length; i++) {
    boxData += `
           <div class="col-md-3">
              <div onclick="getIngredientsMeals('${allMaels[i].idMeal}') " class="my-card m h-100 " >
                <img src="${allMaels[i].strMealThumb}" 
                class="w-100 h-100 w-100 rounded" 
                alt=" this is a ${allMaels[i].strMealThumb}" />

                <div class="layer p-2 text-center d-flex align-items-center h-100">
                  <h3> ${allMaels[i].strMeal}</h3>
                </div>
              </div>
            </div>`;
  }
  rowData.innerHTML = boxData;
  lodding.classList.add("d-none");

}
// ===================== get Ingredients And Display data of Meals ======================

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
  document.getElementById('form').innerHTML=``

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



























/* 
function openSideNav() {
  $(".parant-side").animate({ left: 0 }, 500)


  $(".open-close-icon").removeClass("fa-align-justify");
  $(".open-close-icon").addClass("fa-x");


  for (let i = 0; i < 5; i++) {
      $(".links li").eq(i).animate({
          top: 0
      }, (i + 5) * 100)
  }
}

function closeSideNav() {
  let boxWidth = $(".parant-side outer-side").outerWidth() 
  $(".parant-side").animate({
      left: -boxWidth
  }, 500)

  $(".open-close-icon").addClass("fa-align-justify");
  $(".open-close-icon").removeClass("fa-x");


  $(".links li").animate({
      top: 300
  }, 500)
}

closeSideNav()

$(".parant-side i.open-close-icon").click(() => {
    if ($(".parant-side").css("left") == "0px") {
        closeSideNav()
    } else {
        openSideNav()
    }
})
 */

