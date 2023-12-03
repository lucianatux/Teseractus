import {
  saveSale,
  getSales,
  onGetSales,
  deleteSale,
  getThisSale,
  updateSale,
} from "./firebase.js";

const salesContainer = document.getElementById("salesContainer");
const saleForm = document.getElementById("saleForm");

let editStatus = false;
let id = "";

window.addEventListener("DOMContentLoaded", async () => {
  onGetSales((querySnapshot) => {
    let html = "";

    querySnapshot.forEach((doc) => {
      const sale = doc.data();
      html += `
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Fecha</th>
            <th scope="col">Cliente</th>
            <th scope="col">Monto</th>
            <th scope="col">TipoVenta</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-light">
            <td>${sale.fecha}</td>
            <td>${sale.nombre}</td>
            <td>${sale.monto}</td>
            <td>${sale.tipoVenta}</td>
            <td><button class="btn btn-secondary btn-delete" data-id="${doc.id}">Borrar</button></td>
            <td><button class="btn btn-info btn-edit" data-id="${doc.id}">Editar</button></td>
          </tr>
        </tbody>
        </table> 
        `;
    });
    salesContainer.innerHTML = html;
    const btnsDelete = salesContainer.querySelectorAll(".btn-delete");
    btnsDelete.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        deleteSale(event.target.dataset.id);
      });
    });

    const btnsEdit = salesContainer.querySelectorAll(".btn-edit");
    btnsEdit.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const sale = await getThisSale(e.target.dataset.id);
        //editSale(event.target.dataset.id);
        console.log(e.target.dataset.id);
        console.log(sale);
        saleForm["saleDate"].value = sale.fecha;
        saleForm["clientName"].value = sale.nombre;
        saleForm["saleAmount"].value = sale.monto;
        saleForm["typeSale"].value = sale.tipoVenta;

        editStatus = true;
        id = e.target.dataset.id;

        saleForm["saleSubmit"].innerText = "Actualizar";
      });
    });
  });
});

saleForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const saleDate = saleForm["saleDate"];
  const clientName = saleForm["clientName"];
  const saleAmount = saleForm["saleAmount"];
  const typeSale = saleForm["typeSale"];

  if (!editStatus) {
    saveSale(
      saleDate.value,
      clientName.value,
      saleAmount.value,
      typeSale.value
    );
  } else {
    console.log("editando");
    updateSale(id, {
      fecha: saleDate.value,
      nombre: clientName.value,
      monto: saleAmount.value,
      tipoVenta: typeSale.value,
    });
    editStatus = false;
    saleForm["saleSubmit"].innerText = "Guardar";
  }

  saleForm.reset();
});
