import { saveSale, getSales, onGetSales, deleteSale } from "./firebase.js";

const salesContainer = document.getElementById("salesContainer");
const saleForm = document.getElementById("saleForm");

window.addEventListener("DOMContentLoaded", async () => {
  onGetSales((querySnapshot) => {
    let html = "";

    querySnapshot.forEach((doc) => {
      const sale = doc.data();
      html += `
        <div>
            <p>${sale.fecha}</p>
            <p>${sale.nombre}</p>
            <p>${sale.monto}</p>
            <p>${sale.tipoVenta}</p>
            <button class="btn-delete" data-id="${doc.id}"  >Delete</button>
        </div>
        `;
      console.log(sale);
    });
    salesContainer.innerHTML = html;
    const btnsDelete = salesContainer.querySelectorAll('.btn-delete');
    btnsDelete.forEach(btn =>{
        btn.addEventListener("click", (event) =>{
            deleteSale(event.target.dataset.id);
            console.log(event.target.dataset.id);
        })
    })
  });
});

saleForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("enviado");
  const saleDate = saleForm["saleDate"];
  const clientName = saleForm["clientName"];
  const saleAmount = saleForm["saleAmount"];
  const typeSale = saleForm["typeSale"];

  console.log(
    saleDate.value,
    clientName.value,
    saleAmount.value,
    typeSale.value
  );

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
