import { Controller } from "./index.js";
window.addEventListener("DOMContentLoaded", () => {
    const controller = new Controller();
    let submitUpdate = document.getElementById("submitUpdate");
    ;
    let submitDelete = document.getElementById("submitDelete");
    ;
    let buttonAdd = document.getElementById("buttonAdd");
    ;
    let buttonUpdate = document.getElementById("buttonUpdate");
    ;
    let buttonDelete = document.getElementById("buttonDelete");
    ;
    let modal = document.getElementById("modal");
    let modalUpdate = document.getElementById("modalUpdate");
    let modalDelete = document.getElementById("modalDelete");
    let listTable = document.getElementById("list");
    let data = {
        name: "",
        quant: 0,
        amount: 0,
    };
    function HandleNewProduct() {
        controller.HandleNewProduct(data);
        HandleGetList();
        clearInputs();
        modal.style.display = "none";
    }
    function clearInputs() {
        let inputs = document.getElementsByTagName("input");
        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            input.value = "";
        }
    }
    function HandleUpdateStock() {
        controller.HandleUpdateStock(data);
        HandleGetList();
        clearInputs();
        modal.style.display = "none";
    }
    function HandleDelete() {
        controller.HandleDeleteProduct(data.name);
        HandleGetList();
        clearInputs();
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
    function closeModal(e) {
        var _a;
        if ((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.id.includes("modal")) {
            modal.style.display = "none";
        }
    }
    function setName() {
        let inputName = document.getElementById("inputName");
        inputName === null || inputName === void 0 ? void 0 : inputName.addEventListener("change", (event) => {
            data.name = inputName === null || inputName === void 0 ? void 0 : inputName.value;
        });
    }
    function setQuant() {
        let inputName = document.getElementById("inputQuant");
        inputName === null || inputName === void 0 ? void 0 : inputName.addEventListener("change", (event) => {
            data.quant = Number(inputName === null || inputName === void 0 ? void 0 : inputName.value);
        });
    }
    function setAmount() {
        let inputName = document.getElementById("inputAmount");
        inputName === null || inputName === void 0 ? void 0 : inputName.addEventListener("change", (event) => {
            data.amount = Number(inputName === null || inputName === void 0 ? void 0 : inputName.value);
        });
    }
    function ListerEvents() {
        setName();
        setQuant();
        setAmount();
    }
    function OpenModal() {
        var _a;
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
    `;
        (_a = document.getElementById("submitAdd")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", HandleNewProduct);
        ListerEvents();
    }
    function OpenModalUpdate() {
        var _a;
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
        
    `;
        (_a = document.getElementById("submitUpdate")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", HandleUpdateStock);
        ListerEvents();
    }
    function OpenModalDelete() {
        var _a;
        modal.style.display = "flex";
        modal.innerHTML = `
    <div class="form" style="border-color: #e34b04">
        <h1 id="title">Deletar Produto</h1>
        <label> Nome do Produto </label>
        <input type="text" id="inputName" />
        <button class="submit"  id="submitDelete">DELETAR</button>
    </div>
    
    `;
        (_a = document.getElementById("submitDelete")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", HandleDelete);
        ListerEvents();
    }
    buttonAdd === null || buttonAdd === void 0 ? void 0 : buttonAdd.addEventListener("click", OpenModal);
    buttonUpdate === null || buttonUpdate === void 0 ? void 0 : buttonUpdate.addEventListener("click", OpenModalUpdate);
    buttonDelete === null || buttonDelete === void 0 ? void 0 : buttonDelete.addEventListener("click", OpenModalDelete);
    modal === null || modal === void 0 ? void 0 : modal.addEventListener("click", closeModal);
    modalUpdate === null || modalUpdate === void 0 ? void 0 : modalUpdate.addEventListener("click", closeModal);
    modalDelete === null || modalDelete === void 0 ? void 0 : modalDelete.addEventListener("click", closeModal);
    submitUpdate === null || submitUpdate === void 0 ? void 0 : submitUpdate.addEventListener("click", HandleUpdateStock);
    submitDelete === null || submitDelete === void 0 ? void 0 : submitDelete.addEventListener("click", HandleDelete);
});
