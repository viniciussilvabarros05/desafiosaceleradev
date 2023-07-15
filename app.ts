import { Controller, IProduct } from "./index.js";

window.addEventListener("DOMContentLoaded", () => {
  const controller = new Controller();

 
  let submitUpdate = document.getElementById("submitUpdate")as HTMLElement;;
  let submitDelete = document.getElementById("submitDelete")as HTMLElement;;
  let buttonAdd = document.getElementById("buttonAdd")as HTMLElement;;
  let buttonUpdate = document.getElementById("buttonUpdate")as HTMLElement;;
  let buttonDelete = document.getElementById("buttonDelete")  as HTMLElement;;
  let modal = document.getElementById(
    "modal"
  ) as HTMLElement;
  let modalUpdate = document.getElementById("modalUpdate") as HTMLElement;
  let modalDelete = document.getElementById("modalDelete") as HTMLElement;
  let listTable = document.getElementById("list") as HTMLElement;

  let data = {
    name: "",
    quant: 0,
    amount: 0,
  } as IProduct;

  function HandleNewProduct() {
    controller.HandleNewProduct(data)
    HandleGetList();
    clearInputs()
    modal.style.display = "none";
  }

  function clearInputs(){
    let inputs = document.getElementsByTagName("input")
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        input.value = ""
    }
  }

  function HandleUpdateStock(){
    controller.HandleUpdateStock(data)
    HandleGetList();
    clearInputs()
    modal.style.display = "none";
  }

  function HandleDelete(){
    controller.HandleDeleteProduct(data.name)
    HandleGetList();
    clearInputs()
    modal.style.display = "none";
  }

  function HandleGetList() {
    let listProducts = controller.list;
    listTable.innerHTML = ``;
    listProducts.forEach((item) => {
      const formatoReal = item.amount.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      listTable.innerHTML += `
        <tr>
        <td>${item.name}</td>
        <td>${item.quant}</td>
        <td>${formatoReal}</td>
      </tr>

    `;
    });
  }

  function closeModal(e: any) {
    if (e?.target?.id.includes("modal")) {
      modal.style.display = "none";
    }
  }
  function setName() {
    let inputName = document.getElementById("inputName") as HTMLInputElement;
    inputName?.addEventListener("change", (event: Event) => {
      data.name = inputName?.value;
    });
  }
  function setQuant() {
    let inputName = document.getElementById("inputQuant") as HTMLInputElement;
    inputName?.addEventListener("change", (event: Event) => {
      data.quant = Number(inputName?.value);
    });
  }
  function setAmount() {
    let inputName = document.getElementById("inputAmount") as HTMLInputElement;
    inputName?.addEventListener("change", (event: Event) => {
      data.amount = Number(inputName?.value);
    });
  }
  function ListerEvents() {
    setName();
    setQuant();
    setAmount();
  }

  function OpenModal() {
   
    modal.style.display = "flex";
    modal.innerHTML = `
    
    <div class="form" style="border-color: #4cba1f">
        <h1 id="title">Novo Produto</h1>
        <label> Nome do Produto </label>
        <input type="text" id="inputName" />
        <label> Quantidade de Produtos </label>
        <input type="number" id="inputQuant" />
        <label> Preço do Produto </label>
        <input type="number" id="inputAmount" />
        <button class="submit" style="background-color: #4cba1f" id="submitAdd">
        ADICIONAR
        </button>
    </div>
    `
    document.getElementById("submitAdd")?.addEventListener("click", HandleNewProduct);
    ListerEvents();
  }

  function OpenModalUpdate() {
    modal.style.display = "flex";

    modal.innerHTML = `
    <div class="form" style="border-color: #fcb005">
        <h1 id="title">Atualizar Produto</h1>
        <label> Nome do Produto </label>
        <input type="text" id="inputName" />
        <label> Quantidade de Produtos </label>
        <input type="number" id="inputQuant" />
        <label> Preço do Produto </label>
        <input type="number" id="inputAmount" />
        <button class="submit" style="background-color: #fcb005" id="submitUpdate">
        ATUALIZAR
        </button>
    </div>
        
    `
    document.getElementById("submitUpdate")?.addEventListener("click", HandleUpdateStock);
    ListerEvents();
  }

  function OpenModalDelete() {
    modal.style.display = "flex";
    modal.innerHTML = `
    <div class="form" style="border-color: #e34b04">
        <h1 id="title">Deletar Produto</h1>
        <label> Nome do Produto </label>
        <input type="text" id="inputName" />
        <button class="submit"  id="submitDelete">DELETAR</button>
    </div>
    
    `
    document.getElementById("submitDelete")?.addEventListener("click", HandleDelete);
    ListerEvents();
  }

  
  buttonAdd?.addEventListener("click", OpenModal);

  buttonUpdate?.addEventListener("click", OpenModalUpdate);

  buttonDelete?.addEventListener("click", OpenModalDelete);

  modal?.addEventListener("click", closeModal);
  modalUpdate?.addEventListener("click", closeModal);
  modalDelete?.addEventListener("click", closeModal);

  
  submitUpdate?.addEventListener("click", HandleUpdateStock);
  submitDelete?.addEventListener("click", HandleDelete);
});
