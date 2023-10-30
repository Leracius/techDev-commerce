import React, { useEffect } from 'react'
import CardProduct from './CardProduct'
import { ProductsContainer } from './CardStyles'
import { useDispatch, useSelector } from 'react-redux'
import getProductsData from '../../data/data-axios';
import { setProducts } from '../../redux/products/productSlice';

const CardProducts = () => {
  const {products} = useSelector(state=> state.products)
  let filtreds = products.reducedProducts
  const {selectedCategory} = useSelector(state=> state.categories)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const prod = await getProductsData();
      dispatch(setProducts(prod))
    };
  
    fetchData();
  }, []);

  if(selectedCategory) {
    filtreds = {
      [selectedCategory]: filtreds[selectedCategory]
    }
  }

  return (
      <ProductsContainer>
        {
          filtreds && Object.entries(filtreds).map(([,productEl])=>{
            return productEl.map((el)=>{
              return <CardProduct {...el} key={el.id} />
            })
          })
        }
      </ProductsContainer>
  );
};

export default CardProducts