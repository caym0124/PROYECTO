function validarFormulario() {
    var tipoAveria = document.getElementById("tipo-averia").value;
    var descripcion = document.getElementById("descripcion").value;
  
    if (tipoAveria === "") {
      alert("Debes seleccionar un tipo de avería");
      return false;
    }
  
    if (descripcion === "") {
      alert("Debes escribir una descripción de la avería");
      return false;
    }
  
    return true;
  }
  
  document.getElementById("form").addEventListener("submit", validarFormulario);
  