'use strict';

// Sticky nav
window.onscroll = function() {myFunction()};

const header = document.getElementById("profileNav");
const sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

// Kuvatiedoston lisäys ja poistaminen luo tapahtuma -sivulla
function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.imageUpload').hide();

      $('.fileImage').attr('src', e.target.result);
      $('.fileContent').show();
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  }
}

function removeUpload() {
  $('.file').replaceWith($('.file').clone());
  $('.fileContent').hide();
  $('.imageUpload').show();
}

/*
// Haku

$(document).ready( () => {

  $( "#mySearch" ).focusin( () => {
    $('a').addClass('hidden');
  });
  $( "#mySearch" ).focusout( () => {
    $('a').removeClass('hidden');
  });

});
*/

// Kiinnostunut / osallistuu napit
$('div[class=eventButton]').click(function() {
  $(this).addClass('selected').siblings().removeClass('selected');
});