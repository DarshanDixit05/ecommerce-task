import React, {useState, useEffect} from 'react'
import { Select, Input, Button, Text } from '@chakra-ui/react'
import Product from "../components/Product.js"
import { useNavigate } from 'react-router-dom';

function Cart({cart, setCart, total, setTotal}) {
    const navigate = useNavigate();
    useEffect(() => {
        setTotal(cart.reduce((acc, curr)=>acc+(curr.price*curr.quantity), 0));
    }, [cart]);
    const handleCheckoutClick = () =>{
        navigate("/checkout");
    }
  return (
    <div>
    <div id="Cart_container"> 
      <div id="Cart_top_container">
        <div id="Cart_control_bar">
          <div>
          <Text py='1'>Total : ${total}</Text>
          </div>
          <div>
           <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              onClick={handleCheckoutClick}
              >
              Proceed To Pay
            </Button>
          </div>
        </div>
      </div>
      <div id="Cart_display">
        {cart.map((item)=>{
            return(
              <div className="Product_container">
                <Product props={item} cart={cart} setCart={setCart} />
              </div>
            )
        })}
      </div>
    </div>
    </div>
  )
}

export default Cart