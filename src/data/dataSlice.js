import axios from "axios";
import { BASE_URL } from "../utils/costants";
import { setProducts } from "../redux/products/productSlice";

export const getProduct = async() =>{
  try {
    const res = await axios.get(`${BASE_URL}/products`)

    console.log(res.data.data);
    return res.data.data
    
  } catch (error) {
    console.log('error en ' + error);
    
  }
}
// export const products = await getProduct()

export const toCategories = (products) => {
  const categorias = [...new Set(products.map(product => product.category))];
  return categorias
}

export const toReducedProduct = (products) => {
  const reducedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
  
    acc[product.category] = [...acc[product.category], product];
  
    return acc;
  }, {});
  return reducedProducts

}

// export const categorias = [...new Set(products.map(product => product.category))];

// export const reducedProducts = products.reduce((acc, product) => {
//   if (!acc[product.category]) {
//     acc[product.category] = [];
//   }

//   acc[product.category] = [...acc[product.category], product];

//   return acc;
// }, {});
