export interface IProduct {
  name: string;
  quant: number;
  amount: number;
}

class Product {
  name: string;
  quant: number;
  amount: number;

  constructor(name: string, quant: number, amount: number) {
    this.name = name;
    this.quant = quant;
    this.amount = amount;
  }

  CreateProduct(): IProduct {
    return {
      name: this.name.toLowerCase(),
      quant: this.quant,
      amount: this.amount,
    };
  }
}

class Stock {
  list: IProduct[] = [];

  AddNewProduct({ name, quant, amount }: IProduct) {
    let product: Product = new Product(name, quant, amount);
    let newProduct = product?.CreateProduct();
    this.list = [...this.list, newProduct];
  }

  UpdateStock(quant: number, amount: number, index: number) {
    this.list[index] = { ...this.list[index], amount, quant };
  }
  DeleteProductStock(name:string) {
   this.list = this.list.filter(item=> item.name !== name)
  }
}

export class Controller extends Stock {
  constructor() {
    super();
  }

  HandleNewProduct(data: IProduct) {
    const index = this.list.findIndex((item) => item.name === data.name.toLowerCase());
    const item = this.list.find((item) => item.name === data.name);

    if (data.name == "" || !data.quant) {
      alert("Nome não informado.");
      return;
    }

    if (index !== -1 && item) {
      let newQuant = item?.quant + data.quant;
      this.UpdateStock(newQuant, item.amount, index);
    } else {
      this.AddNewProduct(data);
    }
  }

  HandleUpdateStock(data: IProduct) {
    const index = this.list.findIndex((item) => item.name === data.name.toLowerCase());
    console.log(data)
    if (data.name == "" || !data.quant) {
      alert("Nome não informado.");
      return;
    }

    if (index !== -1) {
      let newQuant = data.quant || 0;
      this.UpdateStock(newQuant, data.amount, index);
    } else {
      alert("Produto não cadastrado.");
    }
  }
  HandleDeleteProduct(name: string) {
    const index = this.list.findIndex((item) => item.name === name.toLowerCase());
    if (name == "") {
      alert("Nome não informado.");
      return;
    }

    if (index !== -1) {
      this.DeleteProductStock(name);
    } else {
      alert("Produto não cadastrado.");
    }
  }

}
