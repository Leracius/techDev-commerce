import axios from "axios";
import { BASE_URL } from "../utils/costants";
import { setProducts } from "../redux/products/productSlice";

const getProductsData = async (dispatch) => {
  
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
