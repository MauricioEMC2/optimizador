let InputsHeadersCorte = Array.from(document.querySelectorAll(".longInputs"));
let containerCortes = document.getElementById("listaCorte");
let botonAgregar = document.getElementById("botonAgregar");
let descripcionMaterial = document.getElementById("descripcionMaterial");
let longitudMaterial = document.getElementById("longitudMaterial");
let unidadesMedida = document.getElementById("unidadesMedida");
let grosorHta = document.getElementById("grosorHta");

function validar_corte() {
  if (descripcionMaterial.value == "") {
    alert("falta ingresar la descripción del material");
    return false;
  }
  if (longitudMaterial.value == "") {
    alert("falta ingresar la Longitud del material");
    return false;
  }
  if (unidadesMedida.value == "") {
    alert("falta ingresar las unidades de medida");
    return false;
  }
  if (grosorHta.value == "") {
    alert("falta ingresar el grosor de la herramienta");
    return false;
  }

  let esVacio = InputsHeadersCorte.some(function (item) {
    return item.value == "";
  });

  if (esVacio == true) {
    alert("debe llenar todos los campos");
    return false;
  }
}

let crearPlantilla = function () {
  let idConsecutivo = new Date().getTime();
  let idFila = `fila-${idConsecutivo}`;
  console.log(idFila);
  return `
  <div class="longClass" id="${idFila}">
      <div>
          <input type="text" class="longInputs" value="${InputsHeadersCorte[0].value}" disabled>
      </div>
      <div>
          <input type="number" class="longInputs" value="${InputsHeadersCorte[1].value}" disabled>
      </div>
      <div>
          <input type="number" class="longInputs" value="${InputsHeadersCorte[2].value}" disabled>
      </div>
      <div>
      <span onclick="function borrarEsto(){document.getElementById('${idFila}').remove()};borrarEsto()" >X</span>
      </div>
  </div>
  `;
};

function agregar_corte() {
  containerCortes.innerHTML += crearPlantilla();

  InputsHeadersCorte.forEach(function (element) {
    element.value = "";
  });
}

botonAgregar.onclick = function () {
  if (validar_corte() == false) {
    return;
  }
  agregar_corte();
};
