//Import Statments
const data = require('./assets/database.json');
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

//Functions

  //Global
  
function makeHeader(pages) {
  let styles = "menu-item";
  $(".menu-bar").append(`<p class="menu">`);
  pages.forEach(element => {
    $(".menu-bar").append(`<div><a class="${styles}" href="${element.link}">${element.name}</a></div>`);
  });
  $(".menu-bar").append(`</p>`);
}

/* function loading() {
  $("#loading").remove();
}
  setTimeout(loading, 4000); */

  //Homepage
function knownLanguages(languages) {
  let styles = "language-icon";
  let size = "70";
  languages.forEach(element => {
    $("#knownLanguages").append(`<img src="${element.src}" alt="${element.name}" class="${styles}" width="${size}" height="${size}"/>`);
  });
}

function currentlyLearning(languages) {
  let styles = "language-icon";
  let size = "70";
  languages.forEach(element => {
    $("#currentlyLearning").append(`<img src="${element.src}" alt="${element.name}" class="${styles}" width="${size}" height="${size}"/>`);
  });
}


  //Resume
function makeSkills(skills) {
  let styles = "";
  skills.forEach(element => {
    $(".skills").append(`<p class="${styles}">${element.name}</p>`);
  });
}

//Document Ready
$(document).ready(function(){
  makeHeader(data.pages);
  knownLanguages(data.knownLanguages);
  currentlyLearning(data.currentlyLearning);
  makeSkills(data.skills);
});