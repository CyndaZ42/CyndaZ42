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
    $("#known-languages").append(`<img src="${element.src}" alt="${element.name}" class="${styles}" width="${size}" height="${size}"/>`);
  });
}

function currentlyLearning(languages) {
  let styles = "language-icon";
  let size = "70";
  languages.forEach(element => {
    $("#currently-learning").append(`<img src="${element.src}" alt="${element.name}" class="${styles}" width="${size}" height="${size}"/>`);
  });
}

function socialLinks(pages) {
  let size = "70";
  pages.forEach(element => {
    $("#social-links").append(`<a href="${element.link}"><img src="${element.src}" alt="${element.name}" width="${size}" height="${size}"/></a>`);
  });
}

  //Resume
function makeEducation(schools) {
  schools.forEach(element => {
    $("#education").append(`<h4>${element.name}</h4>`);
    $("#education").append(`<li><i>${element.degree}</i></li>`);
    $("#education").append(`<h6>${element.date}</h6>`);
    $("#education").append(`<p class="edu-summary">${element.summary}</p>`);
    $("#education").append(`<br>`);
  });
}

function makeSkills(skills) {
  let styles = "";
  skills.forEach(element => {
    $("#skills").append(`<p class="${styles}">${element.name}</p>`);
  });
}

//Document Ready
$(document).ready(function(){
  makeHeader(data.pages);
  knownLanguages(data.knownLanguages);
  currentlyLearning(data.currentlyLearning);
  makeSkills(data.skills);
  makeEducation(data.education);
  socialLinks(data.socialLinks);
});