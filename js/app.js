$(document).ready(function() {
    
    $('.list-group-item').click(function() {

       // Turn off all answers in card
      $(this).parent().parent().children('.answer').addClass('d-none');

      // Turn off all checkmarks in card
      $(this).parent().find('.checkmark').addClass('d-none');

      // Turn on this charckmark
      $(this).children('.checkmark').removeClass('d-none');

      
      if ($(this).hasClass('god-yes')) {
        $('#answers').addClass('god-yes');
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

    $('.show-continue').click(function() {

    // Show continue button
      $(this).parent().parent().parent().find('.continue').removeClass('d-none');

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
    $('#question-3-d').click(function() { $('#question-three-no-d').removeClass('d-none'); });

    $('#question-4-a').click(function() { $('#question-four-answer-one').removeClass('d-none'); });

    $('#question-5-a').click(function() { $('#question-five-answer-one').removeClass('d-none'); });

    $('#question-6-a').click(function() { $('#question-six-answer-one').removeClass('d-none'); });

}); 