import React from 'react'
import CardProduct from './CardProduct'
import { ProductsContainer, TittleStyled } from './CardStyles'
import { useSelector } from 'react-redux'
import { selectCategory } from '../../redux/categories/categoriesSlice';
import getProductsData from '../../data/data-axios';

const CardProducts = () => {
  let products = useSelector(state=> state.products.products)
  const selectedCategory = useSelector(state=> state.categories.selectedCategory)

  if(selectedCategory) {
    products = {
      [selectedCategory]: products[selectedCategory]
    }
  }

  return (
    // <><TittleStyled>Hecha un vistazo!</TittleStyled>
      <ProductsContainer>
        {
          products && Object.entries(products).map(([,productEl])=>{
            return productEl.map((el)=>{
              return <CardProduct {...el} key={el.id} />
            })
          })
        }
      </ProductsContainer>
  );
};

export default CardProducts