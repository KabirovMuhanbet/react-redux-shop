import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function ProductComponent() {
   const products = useSelector(state => state.productReducer.products)

   const renderList = products.map(product => {
      const { id, title, image, price, category } = product;
      return (
         <div className='card2' key={id}>
            <Link to={`/product/${id}`}>
               <div className="ui link cards">
                  <div className="ui card">
                     <div className="ui image img_wrapper">
                        <img src={image} alt={title} className="img" />
                     </div>
                     <div className="content">
                        <div className="title">{title}</div>
                        <div className="meta price">$ {price}</div>
                        <div className="meta">{category}</div>
                     </div>
                  </div>
               </div>
            </Link>
         </div>
      )
   })
   return <>{renderList}</>
}

export default ProductComponent