//Import Statments
const data = require('./assets/database.json');
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
//Functions

function knownLanguages(languages) {
  let styles = "language-icon";
  let size = "60"
  languages.forEach(element => {
    $("#knownLanguages").append(`<img src="${element.src}" alt="${element.name}" class="${styles}" width="${size}" height="${size}"/>`);
  });
}

function currentlyLearning(languages) {
  let styles = "language-icon";
  let size = "60"
  languages.forEach(element => {
    $("#currentlyLearning").append(`<img src="${element.src}" alt="${element.name}" class="${styles}" width="${size}" height="${size}"/>`);
  });
}

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

//Document Ready
$(document).ready(function(){
  makeHeader(data.pages);
  knownLanguages(data.knownLanguages);
  currentlyLearning(data.currentlyLearning);
});