// EVENT
document.getElementById("button-search").addEventListener("click", search);

// EVENT
document.querySelector("input").addEventListener("click", SearchBar);

// EVENT
document.querySelector("#selectRegion").addEventListener("change", region);

document.querySelector(".categories-tablet").addEventListener("change", categories);

// EVENT FOR EACH CATEGORY
document.querySelectorAll(".category").forEach((eachCategory) => {
  eachCategory.addEventListener("click", categories);
});

// APPLIES DISPLAY = NONE
function displayNone(array) {
  array.forEach((eachIndex) => {
    document.querySelectorAll(".row")[eachIndex].style.display = "none";
  });
}

// DISPLAYS ALL COMPANIES AFTER REMOVING ALL THE FILTERS
function displayAllCompanies() {
  document.querySelectorAll(".row").forEach((eachRow) => {
    eachRow.style.display = "flex";
  });
}

function categories() {
  // ARRAY FOR CATEGORIES
  var categoryList = [];
  var varCategory = document.querySelector("#refine-tablet");

  // STORES NUMBER OF CATEGORIES
  var noOfCategories = document.querySelector("#refine-tablet").length;

  //PUSHING EACH CATEGORY INTO AN ARRAY
  for (var i = 0; i < noOfCategories; i++) {
    categoryList.push(varCategory[i].innerText);
  }

  // "ALL" FOR TABLET/MOBILE SIZE
  if (varCategory.value === categoryList[1]) {
    displayAllCompanies();
  }

  // "WORLD TOP BRANDS" FOR TABLET/MOBILE SIZE
  else if (varCategory.value === categoryList[2]) {
    displayAllCompanies();
    var indexes = new Array(0, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17);
    displayNone(indexes);
  }

  // "EDUCATIONAL INSTITUTES" FOR TABLET/MOBILE SIZE
  else if (varCategory.value === categoryList[3]) {
    displayAllCompanies();
    var indexes = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17);
    displayNone(indexes);
  }

  // "ORGANIZATIONS/NGO" FOR TABLET/MOBILE SIZE
  else if (varCategory.value === categoryList[4]) {
    displayAllCompanies();
    var indexes = new Array(1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17);
    displayNone(indexes);
  }

  // "MEDIA AND ENTERTAINMENT" FOR TABLET/MOBILE SIZE
  else if (varCategory.value === categoryList[5]) {
    displayAllCompanies();
    var indexes = new Array(0, 1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17);
    displayNone(indexes);
  }

  // "FINANCE AND BANKS" FOR TABLET/MOBILE SIZE
  else if (varCategory.value === categoryList[6]) {
    displayAllCompanies();
    var indexes = new Array(0, 1, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17);
    displayNone(indexes);
  }

  // "GLOBAL AUTOMOBILES" FOR TABLET/MOBILE SIZE
  else if (varCategory.value === categoryList[7]) {
    displayAllCompanies();
    var indexes = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17);
    displayNone(indexes);
  }

  // "HEALTHCARE AND HOSPITALS" FOR TABLET/MOBILE SIZE
  else if (varCategory.value === categoryList[8]) {
    displayAllCompanies();
    var indexes = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
    displayNone(indexes);
  }

  // "FOOD AND BEVERAGES" FOR TABLET/MOBILE SIZE
  else if (varCategory.value === categoryList[9]) {
    displayAllCompanies();
    var indexes = new Array(0, 1, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17);
    displayNone(indexes);
  }

  // "INTERNET AND TELECOM" FOR TABLET/MOBILE SIZE
  else if (varCategory.value === categoryList[10]) {
    displayAllCompanies();
    var indexes = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17);
    displayNone(indexes);
  }

  // EVENT
  // CLICKING "ALL" WILL DISPLAY ALL THE COMPANIES
  document.querySelector(".category-all").addEventListener("click", () => {
    displayAllCompanies();
  });

  // EVENT WORLD TOP BRANDS FOR LAPTOP SIZE
  document.querySelector(".category-wtb").addEventListener("click", () => {
    displayAllCompanies();
    var indexes = new Array(0, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17);
    displayNone(indexes);
  });

  // EVENT EDUCATIONAL INSTITUTES FOR LAPTOP SIZE
  document.querySelector(".category-edu").addEventListener("click", () => {
    displayAllCompanies();
    var indexes = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17);
    displayNone(indexes);
  });

  // EVENT FINANCE AND BANKS FOR LAPTOP SIZE
  document.querySelector(".category-banks").addEventListener("click", () => {
    displayAllCompanies();
    var indexes = new Array(0, 1, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17);
    displayNone(indexes);
  });

  // EVENT ORGANIZATIONS/NGO'S FOR LAPTOP SIZE
  document.querySelector(".category-org").addEventListener("click", () => {
    displayAllCompanies();
    var indexes = new Array(1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17);
    displayNone(indexes);
  });

  // EVENT MEDIA AND ENTERTAINMENT FOR LAPTOP SIZE
  document.querySelector(".category-media").addEventListener("click", () => {
    displayAllCompanies();
    var indexes = new Array(0, 1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17);
    displayNone(indexes);
  });

  // EVENT GLOBAL AUTOMOBILES FOR LAPTOP SIZE
  document.querySelector(".category-auto").addEventListener("click", () => {
    displayAllCompanies();
    var indexes = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17);
    displayNone(indexes);
  });

  // EVENT HEALTHCARE AND HOSPITALS FOR LAPTOP SIZE
  document.querySelector(".category-health").addEventListener("click", () => {
    displayAllCompanies();
    var indexes = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
    displayNone(indexes);
  });

  // EVENT FOOD AND BEVERAGES FOR LAPTOP SIZE
  document.querySelector(".category-food").addEventListener("click", () => {
    displayAllCompanies();
    var indexes = new Array(0, 1, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17);
    displayNone(indexes);
  });

  // EVENT INTERNET AND TELECOM SECTOR FOR LAPTOP SIZE
  document.querySelector(".category-net").addEventListener("click", () => {
    displayAllCompanies();
    var indexes = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17);
    displayNone(indexes);
  });
}

// FOR TOGGLE ANIMATION
const menuBtn = document.querySelector(".nav-toggle");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }

  // FOR ANIMATION OF MENU WHEN IT APPEARS
  const navLinks = document.querySelector(".sidebar-links");
  const links = document.querySelectorAll(".sidebar-links li");

  // FOR FADE EFFECT WHEN WE CLICK HAMBURGER MENU
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });

  // ANIMATION WHEN WE CLICK THE HAMBURGER
  const navToggle = document.querySelector(".nav-toggle");
  navToggle.classList.toggle("transition");
});

// FUNCTIONALITY FOR SEARCHING CUSTOMER
function search() {
  // STORES THE LIST OF COMPANIES
  var listOfCompanies = [];

  // STORES THE NUMBER OF COMPANIES
  var noOfCompanies = document.getElementsByClassName("col-md-3").length;

  for (var i = 0; i < noOfCompanies; i++) {
    var company = document.getElementsByClassName("col-md-3")[i].innerText.toLowerCase();
    // ADDING EACH COMPANY INTO OUR ARRAY
    listOfCompanies.push(company);
  }

  // STORES USER'S INPUT
  var userInput = document.querySelector("input").value.toLowerCase();
  var indexOfUserInput = listOfCompanies.indexOf(userInput);

  // INFORM USER TO ENTER A NAME BEFORE HITTING "SEARCH" BUTTON
  if (userInput === "") {
    // "PLEASE ENTER A NAME" ALERT
    var alertWarning = document.querySelector(".alert-warning");
    alertWarning.style.display = "block";

    // "CUSTOMER NOT FOUND" ALERT
    var alertDanger = document.querySelector(".alert-danger");
    alertDanger.style.display = "none";
  }

  // IF COMPANY FOUND
  else if (listOfCompanies.includes(userInput)) {
    for (var i = 0; i < noOfCompanies; i++) {
      if (i === indexOfUserInput) {

        var element = document.querySelectorAll(".col-md-3")[indexOfUserInput];
        element.style.display = "block";

        var companyHtml = element.parentElement.innerHTML;

        returnRowNumber(companyHtml);
      }
      else {
        var element = document.querySelectorAll(".col-md-3")[i];
        element.style.display = "none";
      }
    }
  }

  // IF CUSTOMER NOT FOUND
  else {
    var customerNotFound = true;
    var alertDanger = document.querySelector(".alert-danger");
    alertDanger.style.display = "block";

    if (customerNotFound) {
      var companies = document.querySelector(".companies");
      companies.style.display = "none";
    }
  }
}

function returnRowNumber(companyHtml) {
  var rows = document.querySelectorAll(".row");
  var rowHtml = [];
  for (var i = 0; i < rows.length; i++) {
    var eachRow = rows[i].innerHTML;
    rowHtml.push(eachRow);
  }

  if (rowHtml.includes(companyHtml)) {
    var rowIndex = rowHtml.indexOf(companyHtml);

    for (var i = 0; i < rows.length; i++) {
      if (i === rowIndex) {
        continue
      }
      else {
        rows[i].style.display = "none";
      }
    }
  }
}


function SearchBar() {
  // CLEARS THE BAR EVERYTIME USER CLICKS ON IT
  this.value = "";

  // SETTING DISPLAY: NONE AFTER VIEWING THE ALERT
  var alertDanger = document.querySelector(".alert-danger");
  alertDanger.style.display = "none";

  // SETTING DISPLAY = NONE AFTER VIEWING THE ALERT
  var alertWarning = document.querySelector(".alert-warning");
  alertWarning.style.display = "none";

  // SETTING DISPLAY = BLOCK AFTER AN ALERT
  var companies = document.querySelector(".companies");
  companies.style.display = "block";

  // BRINGS BACK ALL THE COMPANIES AFTER SEARCH IS COMPLETED
  for (var i = 0; i < document.querySelectorAll(".col-md-3").length; i++) {
    var element = document.querySelectorAll(".col-md-3")[i];
    element.style.display = "block";
  }

  // BRINGS BACK ALL THE ROW OF COMPANIES AFTER SEARCH IS COMPLETED
  for (var i = 0; i < document.querySelectorAll(".row").length; i++) {
    document.querySelectorAll(".row")[i].style.display = "flex";
  }
}

// FUNCTIONALITY FOR REGION FILTER
function region() {
  var varRefine = document.querySelector("#selectRegion");

  if (varRefine.value === "All") {
    displayAllCompanies();
  } else if (varRefine.value === "Middle East") {
    displayAllCompanies();
    var indexes = new Array(0, 2, 7, 5, 11, 13, 4);
    displayNone(indexes);
  } else if (varRefine.value === "Asia Pacific") {
    displayAllCompanies();
    var indexes = new Array(6, 12, 14, 9);
    displayNone(indexes);
  } else if (varRefine.value === "America") {
    displayAllCompanies();
    var indexes = new Array(3, 10, 15, 16, 17, 9, 1, 8);
    displayNone(indexes);
  }
}
