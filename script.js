import { saveSale, getSales } from "./firebase.js";

const salesContainer = document.getElementById("salesContainer");
const saleForm = document.getElementById('saleForm');


window.addEventListener('DOMContentLoaded', async () => {
    const querySnapshot = await getSales();

    let html= '';

    querySnapshot.forEach(doc => {
        html += `
        <div>
            <h5>${doc.data().clientName}</h5>
        </div>
        `

        console.log(doc.data());
        console.log(salesContainer);
    })
    salesContainer.innerHTML = '';
});

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
