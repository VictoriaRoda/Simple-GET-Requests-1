'use strict';

function getDogImage() {
  const options = {method: 'GET'};
  fetch('https://dog.ceo/api/breeds/image/random', options)
    .then(response => response.json())
    .then(responseJson => 
    displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function checkValidForm(val) {
  if(val >= 1 && val <= 50) {
    return true;
  }
  else {
    return false;
  }
}


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let resultNumber = $("#number").val();
    if(checkValidForm(resultNumber)) {
      console.log(`Results to retrieve: ${resultNumber}`);
      getDogImage(resultNumber);
    }
    else {
      alert("Sorry, you must enter a number between 1 and 50. Try again")
    }
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});