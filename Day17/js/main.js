import * as services from "./services.js";

// const products = await getAllProducts("products");
// console.log(products);
// console.log(a);

const product = await services.getById("products", 1);
console.log(product);
