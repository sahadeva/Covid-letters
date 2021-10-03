$(document).ready(function() {
    
    $('.list-group-item').click(function() {

       // Turn off all answers in card
      $(this).parent().parent().children('.answer').addClass('d-none');

      // Turn off all checkmarks in card
      $(this).parent().find('.checkmark').addClass('d-none');

      // Turn on this charckmark
      $(this).children('.checkmark').removeClass('d-none');

      
      if ($(this).hasClass('god-yes')) {
      }
       else {
        $('#answers').removeClass('god-yes');
       };

    }); 

    $('.show-next-card').click(function() {

      // Turn on next card
      $(this).parent().parent().parent().next('.card-wrapper').removeClass('d-none');

    }); 

    $('.hide-next-card').click(function() {

      // Turn on next card
      $(this).parent().parent().parent().next('.card-wrapper').addClass('d-none');

    }); 

    // Show continue button
    $('.show-continue').click(function() {
      $(this).parent().parent().parent().find('.continue').removeClass('d-none');

    }); 

    // Hide continue button
    $('.show-next-card').click(function() {
      $(this).parent().parent().parent().find('.continue').addClass('d-none');

    }); 

    // Click continue bbutton
    $('.continue-btn').click(function() {
      $(this).parent().parent().next('.card-wrapper').removeClass('d-none');
      $(this).parent().addClass('d-none'); 
    }); 


    // ANSWER TOGGLES 

    $('#question-1-b').click(function() { $('#question-one-answer-two').removeClass('d-none'); });
    $('#question-1-c').click(function() { $('#question-one-answer-three').removeClass('d-none'); });

    $('#question-2-a').click(function() { $('#question-two-answer-one').removeClass('d-none'); });
    
    $('#question-3-a').click(function() { $('#question-three-no-a').removeClass('d-none'); });
    $('#question-3-b').click(function() { $('#question-three-no-b').removeClass('d-none'); });
    $('#question-3-c').click(function() { $('#question-three-no-c').removeClass('d-none'); });
    $('#question-3-e').click(function() { $('#question-three-no-e').removeClass('d-none'); });

    $('#question-4-a').click(function() { $('#question-four-answer-one').removeClass('d-none'); });

    $('#question-5-a').click(function() { $('#question-five-answer-one').removeClass('d-none'); });

    $('#question-6-a').click(function() { $('#question-six-answer-one').removeClass('d-none'); });

    $('#question-7-a').click(function() { $('#question-seven-answer-one').removeClass('d-none'); });

    $('#question-8-a').click(function() { $('#question-eight-answer-one').removeClass('d-none'); });

    $('#question-9-a').click(function() { $('#question-nine-answer-one').removeClass('d-none'); });


}); 

$(document).ready(function() {
  $.ajaxSetup({ cache: true });
  $.getScript('https://connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId: '1367636646972840',
      version: 'v2.7' // or v2.1, v2.2, v2.3, ...
    });     
    $('#loginbutton,#feedbutton').removeAttr('disabled');
    FB.getLoginStatus(updateStatusCallback);
    
  });
});

$(document).ready(function() {
  $('.fb-share').click(function(e) {
      $('#shareModal').modal('hide');
      e.preventDefault();
      window.open($(this).attr('href'), 'fbShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
      return false;
  });
});