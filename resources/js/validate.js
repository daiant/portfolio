$(document).ready(function() {
   $('#email2').hide();
   $('#form').submit(function(e) {
        var botEmail = $('#email2').val()
        if($.trim(botEmail).length != 0) {alert("Jaja eres un bot");e.preventDefault()}
        var sEmail = $('#email').val();
        if ($.trim(sEmail).length == 0) {
            // alert('Please enter valid email address');
            $('#email').addClass('.red_input');
            $('.bar_email').addClass('.red_bar');
            e.preventDefault();
        }
        if(!validateEmail(sEmail)) {
            // alert('Invalid Email Address');
            $('#email').focus();
            $('#email').addClass('red_input');
            $('#email_bar').addClass('red_bar');
            e.preventDefault();
        }
    });
    $('#email').change(function() {
      var email = $('#email');
      var value = validateEmail(email.val());
      if(value && email.hasClass('red_input')) {
        email.removeClass('red_input');
        $('#email_bar').removeClass('red_bar');
      } else if(!value && !email.hasClass('red_input')) {
        email.addClass('red_input');
        $('#email_bar').addClass('red_bar');
      }
    });
});
function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
        }
    else {
        return false;
    }
  }
