(function (formulario) {
  let formulario = document.getElementsByName("formulario")[0],
    elementos = formulario.elements;
  boton = document.getElementById("btn");

  let validarNombre = function (e) {
    if (formulario.nombre.value == 0) {
      alert("Completa el campo nombre");
      e.preventDefault();
    }
  };

  let validarApellido = function (e) {
    if (formulario.apellido.value == 0) {
      alert("Completa el campo apellido");
      e.preventDefault();
    }
  };

  let validarRadio = function () {
    if (
      formulario.sexo[0].checked == true ||
      formulario.sexo[1].checkeed == true
    ) {
    } else {
      alert("Completa el sexo");
      e.preventDefault();
    }
  };

  let validarCheckbox = function (e) {
    if (formulario.terminos.checked == false) {
      alert("Acepta los Términos y Condiciones");
      e.preventDefault();
    }
  };

  let validar = function (e) {
    validarNombre(e);
    validarApellido(e);
    validarRadio(e);
    validarCheckbox(e);
  };

  formulario.addEventListener("submit", validar);
});
