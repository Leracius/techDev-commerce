import axios from "axios";
import { BASE_URL } from "../utils/costants";

const getProductsData = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/products`);
    const products = res.data.data;

    const categorias = [...new Set(products.map(product => product.category))];

    const reducedProducts = products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }

      acc[product.category] = [...acc[product.category], product];

      return acc;
    }, {});
    console.log(
      products,
      categorias,
      reducedProducts,)
    return {
      products,
      categorias,
      reducedProducts,
    };
  } catch (error) {
    console.log('error en ' + error);
    return {
      products: [],
      categorias: [],
      reducedProducts: {},
    };
  }
};

export default getProductsData;

// const getProduct = async() =>{
//   try {
//     const res = await axios.get(`${BASE_URL}/products`)

//     console.log(res);
    
//     return res.data.data
    
//   } catch (error) {
//     console.log('error en ' + error);
    
//   }
// }

// export const products = await getProduct()

// export const categorias = [...new Set(products.map(product => product.category))];

// export const reducedProducts = products.reduce((acc, product) => {
//   if (!acc[product.category]) {
//     acc[product.category] = [];
//   }

//   acc[product.category] = [...acc[product.category], product];

//   return acc;
// }, {});
