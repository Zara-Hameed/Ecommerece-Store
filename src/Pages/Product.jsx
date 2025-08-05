import React, { useContext } from 'react'
import { ShopContext } from '../Context/Shopcontext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import Productdispplay from '../Components/Productdisplay/Productdispplay';
import Descriptionbox from '../Components/DescriptionBox/Descriptionbox';
import Relatedproducts from '../Components/Relatedproducts/Relatedproducts';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId} = useParams();
  const product =  all_product.find((e)=>e.id===Number(productId));
  return (
    <div>
<Breadcrum product={product}/>
<Productdispplay product={product}/>
<Descriptionbox/>
<Relatedproducts/>
    </div>
  )
}

export default Product