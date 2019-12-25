'use strict';


function getDogImage() {
  $('form').submit(event => {
    event.preventDefault();
    const qtyDog = $(event.currentTarget).find('input[name="number-of-dogs"]').val();
  fetch(`https://dog.ceo/api/breeds/image/random/${qtyDog}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
  });
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  for(let i=0; i<responseJson.message.length; i++) {
    $('.results').append(`<img src="${responseJson.message[i]}" class="results-img">`);
  }
  
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {

    getDogImage();
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  
  watchForm();
});