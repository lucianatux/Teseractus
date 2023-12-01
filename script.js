var firebaseConfig = {
  // Configuración de tu proyecto en Firebase
};

firebase.initializeApp(firebaseConfig);

// Obtén una referencia a la base de datos
var database = firebase.database();

function registrarVenta() {
  var nombreCliente = document.getElementById("nombreCliente").value;
  // Captura más datos aquí...

  // Guarda los datos en la base de datos
  database.ref("ventas").push({
    nombreCliente: nombreCliente,
    // Agrega más campos aquí...
  });

  // Puedes limpiar el formulario después de registrar la venta
  document.getElementById("ventaForm").reset();
}
