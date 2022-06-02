$("#signup").click(function () {
  $("#first").fadeOut("fast", function () {
    $("#second").fadeIn("fast");
  });
});


$("#signin").click(function () {
  $("#second").fadeOut("fast", function () {
    $("#first").fadeIn("fast");
  });
});

$(function () {
  $("form[name='login']").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
      },
    },
    messages: {
      email: "Por favor, introduce una dirección de correo electrónico válida",

      password: {
        required: "Por favor, ingrese contraseña",
      },
    },
    submitHandler: function (form) {
      form.submit();
    },
  });
});

$(function () {
  $("form[name='registration']").validate({
    rules: {
      firstname: "requerida",
      lastname: "requerida",
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 5,
      },
    },

    messages: {
      firstname: "Por favor, introduzca su nombre",
      lastname: "Por favor, introduzca su apellido",
      password: {
        required: "Por favor proporcione una contraseña",
        minlength: "Tu contraseña debe tener al menos 5 caracteres",
      },
      email: "Por favor, introduce una dirección de correo electrónico válida",
    },

    submitHandler: function (form) {
      form.submit();
    },
  });
});
