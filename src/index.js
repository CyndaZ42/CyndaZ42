//Import Statments
const data = require('./../database.json');
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
//Functions

//Document Ready
$(document).ready(function(){
  knownLanguages(data.languages);
});

function knownLanguages(languages) {
  languages.forEach(element => {
    $("#knownLanguages").append(`<img src="${element.src}" alt="${element.name}" width="40" height="40"/>`)
  });
}