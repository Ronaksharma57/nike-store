import React, { useContext } from 'react'
import { PRODUCTS } from '../../products';
import { PiHeartStraight, PiHeartStraightFill } from 'react-icons/pi'
import { ProductContext } from '../../context/ProductContext';
import "./products.css"

function Products() {

   const {cartItems, addToCart}=  useContext(ProductContext);
    const cartItemCount = cartItems[PRODUCTS.id];

  return (
    <div className='products'>

    <div className="products-wrapper">
        <div className='title'>
            <h1>Shop Products</h1>
        </div>
        <div className="all-products">
            {
                PRODUCTS.map((product)=> 
                    <div className='product-card' key={product.id}>
                        <div>
                            <img src={product.productImage} alt="" />
                        </div>
                        <div className="product-details">
                            <h3>
                                {product.productName}
                            </h3>
                            <h4>
                            INR {product.price}
                            </h4>
                        </div>
                        <div className="btns">
                            <PiHeartStraight className="wishlist"size={35}/>
                            <button className="addToCartBttn" onClick={() => addToCart(product.id)}>
                                Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
    </div>
  )
}

export default Products