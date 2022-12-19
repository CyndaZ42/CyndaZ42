//Import Statments
const data = require('./database.json');
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
//Functions

function knownLanguages(languages) {
  languages.forEach(element => {
    $("#knownLanguages").append(`<img src="${element.src}" alt="${element.name}" width="40" height="40"/>`);
  });
}

function currentlyLearning(languages) {
  let styles = "";
  languages.forEach(element => {
    $("#currentlyLearning").append(`<img src="${element.src}" alt="${element.name}"  width="40" height="40"/>`);
  });
}

function makeHeader(pages) {
  let styles = "menu-item";
  //$(".menu-bar").append('<ul>');
  $(".menu-bar").append(`<p class="menu">`);
  pages.forEach(element => {
    $(".menu-bar").append(`<div><a class="${styles}" href="${element.link}">${element.name}</a></div>`);
  });
  $(".menu-bar").append(`</p>`);
  //$(".menu-bar").append('</ul>');
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