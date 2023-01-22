var skillsEl = document.getElementById("skills-list");

//var skills = ["HTML", "CSS", "JS", "Drive"];
var skills = [
  { name: "HTML", endorcements: 5 },
  { name: "SKILLS", endorcements: 4 },
  { name: "js", endorcements: 4 },
  { name: "Drive", endorcements: 2 },
];
var skillsHTML = "";

//for (var i = 0; i < skills.length; i++) {
 // skillsHTML +=
 //   "<li>" + skills[i].name + "-" + skills[i].endorcements + "</li>";
//}
var s = skills.map(function (skill) {
  console.info(skill.name);
// return "<li>" + skill.name + "-" + skill.endorcements + "</li>";
return `<li> ${ skill.name}  - ${skill.endorcements} </li>`;
});
console.warn("s", s.join(""));
skillsEl.innerHTML = s.join("");

function hideAllPages() {
  var pages = document.querySelectorAll(".page");
  pages.forEach(function (page) {
    // console.info("inside for each", page.id);
    hide(page.id);
  });
  // pages.forEach(function (page) {
  //   console.warn('inside pages.forEach', page);
  // });
  /*
  pagesIds.forEach(function (pageId) {
    hide(pageId);
   // console.warn("H",v,i);
  });
 
  hide("home");
  hide("skills");
  hide("languages");
  hide ("projects");
  */
}

function show(id) {
  document.getElementById(id).style.display = "block";
}
function hide(id) {
  document.getElementById(id).style.display = "none";
}
/*
function displayHome() {
 
  displayPage("home");
}
function displaySkills() {
 
  displayPage("skills");
}
function displayLanguages() {
 
  displayPage("languages");
}
function displayProjects() {
  
  displayPage("projects");
}
*/
function displayPage(id) {
  hideAllPages();
  show(id);
}
function initMenu() {
  console.warn("init menu");
  document.getElementById('top-menu-bar').addEventListener("click", function (e) {
   // console.warn("click", e.target.matches('a'));
    if (e.target.matches('a')) {
     // var id = e.target.getAttribute("data-page");
      var id = e.target.dataset.page;
      console.warn("click", id,e.target);
      displayPage(id);
    }
  });
}
displayPage("home");
//displayHome();
initMenu();
