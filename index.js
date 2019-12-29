'use strict';


function getDogImage() {
  $('form').submit(event => {
    event.preventDefault();
    const qtyDog = $(event.currentTarget).find('input[name="number-of-dogs"]').val();
    if(qtyDog > 0 & qtyDog < 51) {
      fetch(`https://dog.ceo/api/breeds/image/random/${qtyDog}`)
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
    }
    else {
      alert('Please choose number between 1 and 50.');
    }
  });
}

function displayResults(responseJson) {
  console.log(responseJson);
  $('.results').empty();
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