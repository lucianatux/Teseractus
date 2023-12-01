import { saveSale, getSales } from "./firebase.js";

window.addEventListener('DOMContentLoaded', ()=>{
    getSales();
});

const saleForm = document.getElementById('saleForm');

saleForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('enviado');
    const saleDate = saleForm['saleDate'];
    const clientName = saleForm['clientName']; 
    const saleAmount = saleForm['saleAmount'];
    const typeSale = saleForm['typeSale'];

    console.log(saleDate.value, clientName.value, saleAmount.value, typeSale.value);

   saveSale(saleDate.value, clientName.value, saleAmount.value, typeSale.value);
   saleForm.reset();
});


















/*
var firebaseConfig = {
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function registrarVenta() {
  var fechaVenta = document.getElementById("fechaVenta").value;
  var nombreCliente = document.getElementById("nombreCliente").value;
  var monto = document.getElementById("monto").value;
  var tipoVenta = document.getElementById("tipoVenta").value;

 

  // Guardar los datos en la base de datos
  database.ref("ventas").push({
    fechaVenta: fechaVenta,
    nombreCliente: nombreCliente,
    monto: monto,
    tipoVenta: tipoVenta,

    
  });

  // limpiar el formulario después de registrar la venta
  document.getElementById("ventaForm").reset();
}
*/
