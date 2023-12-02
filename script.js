import { saveSale, getSales, onGetSales, deleteSale, getThisSale } from "./firebase.js";

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
            <button class="btn-edit" data-id="${doc.id}"  >Edit</button>
        </div>
        `;
    });
    salesContainer.innerHTML = html;
    const btnsDelete = salesContainer.querySelectorAll('.btn-delete');
    btnsDelete.forEach(btn =>{
        btn.addEventListener("click", (event) =>{
            deleteSale(event.target.dataset.id);
        })
    });

    const btnsEdit = salesContainer.querySelectorAll('.btn-edit');
    btnsEdit.forEach(btn =>{
      btn.addEventListener("click", async (e) =>{
        const doc = await getThisSale(e.target.dataset.id);
        //editSale(event.target.dataset.id);
        console.log(e.target.dataset.id);
        console.log("doc", doc);
      })
    });

  });
});

saleForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const saleDate = saleForm["saleDate"];
  const clientName = saleForm["clientName"];
  const saleAmount = saleForm["saleAmount"];
  const typeSale = saleForm["typeSale"];

  saveSale(saleDate.value, clientName.value, saleAmount.value, typeSale.value);
  saleForm.reset();
});
