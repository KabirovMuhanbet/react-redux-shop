import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import { setProduct } from './../redux/actions/productActions';

function ProductListing() {
   const dispatch = useDispatch();
   const fetchProducts = async () => {
      const res = await axios.get('https://fakestoreapi.com/products')
         .catch(err => {
            console.log('Errr', err);
         })
      dispatch(setProduct(res.data))
   }
   React.useEffect(() => {
      fetchProducts()
   }, [])

   return (
      <div className="container">
         <div className='cards_wrapper'>
            <ProductComponent />
         </div>
      </div>
   )
}

export default ProductListing