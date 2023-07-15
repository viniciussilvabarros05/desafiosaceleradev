class Product {
    constructor(name, quant, amount) {
        this.name = name;
        this.quant = quant;
        this.amount = amount;
    }
    CreateProduct() {
        return {
            name: this.name.toLowerCase(),
            quant: this.quant,
            amount: this.amount,
        };
    }
}
class Stock {
    constructor() {
        this.list = [];
    }
    AddNewProduct({ name, quant, amount }) {
        let product = new Product(name, quant, amount);
        let newProduct = product === null || product === void 0 ? void 0 : product.CreateProduct();
        this.list = [...this.list, newProduct];
    }
    UpdateStock(quant, amount, index) {
        this.list[index] = Object.assign(Object.assign({}, this.list[index]), { amount, quant });
    }
    DeleteProductStock(name) {
        this.list = this.list.filter(item => item.name !== name);
    }
}
export class Controller extends Stock {
    constructor() {
        super();
    }
    HandleNewProduct(data) {
        const index = this.list.findIndex((item) => item.name === data.name.toLowerCase());
        const item = this.list.find((item) => item.name === data.name);
        if (data.name == "" || !data.quant) {
            alert("Nome não informado.");
            return;
        }
        if (index !== -1 && item) {
            let newQuant = (item === null || item === void 0 ? void 0 : item.quant) + data.quant;
            this.UpdateStock(newQuant, item.amount, index);
        }
        else {
            this.AddNewProduct(data);
        }
    }
    HandleUpdateStock(data) {
        const index = this.list.findIndex((item) => item.name === data.name.toLowerCase());
        console.log(data);
        if (data.name == "" || !data.quant) {
            alert("Nome não informado.");
            return;
        }
        if (index !== -1) {
            let newQuant = data.quant || 0;
            this.UpdateStock(newQuant, data.amount, index);
        }
        else {
            alert("Produto não cadastrado.");
        }
    }
    HandleDeleteProduct(name) {
        const index = this.list.findIndex((item) => item.name === name.toLowerCase());
        if (name == "") {
            alert("Nome não informado.");
            return;
        }
        if (index !== -1) {
            this.DeleteProductStock(name);
        }
        else {
            alert("Produto não cadastrado.");
        }
    }
}
