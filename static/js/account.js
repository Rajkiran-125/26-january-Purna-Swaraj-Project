+ function($) {
  $('.palceholder').click(function() {
    $(this).siblings('input').focus();
  });

  $('.form-control').focus(function() {
    $(this).parent().addClass("focused");
  });

  $('.form-control').blur(function() {
    var $this = $(this);
    if ($this.val().length == 0)
      $(this).parent().removeClass("focused");
  });
  $('.form-control').blur();

  // validetion
  $.validator.setDefaults({
    errorElement: 'span',
    errorClass: 'validate-tooltip'
  });

  $("#formvalidate").validate({
    rules: {
      FirstName: {
        required: true,
        minlength: 6
      },
      LastName: {
        required: true,
        minlength: 6
      },
      UserName: {
        required: true,
        minlength: 6
      },
      userPassword: {
        required: true,
        minlength: 6
      },
      File: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      FirstName: {
        required: "Please enter your username.",
        minlength: "Please provide valid username."
      },
      LastName: {
        required: "Please enter your username.",
        minlength: "Please provide valid username."
      },
      userPassword: {
        required: "Enter your password to Login.",
        minlength: "Incorrect login or password."
      }
    }
  });

}(jQuery);