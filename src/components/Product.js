import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

function Product({props, cart, setCart}) {
  const isProductInCart = cart.find(item => item === props);
  const handleIncreaseQty = (item_id) =>{
    setCart((prevCart)=>
      prevCart.map((item)=>
        item.id === item_id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }
  const handleDecreaseQty = (item_id) =>{
    setCart((prevCart)=>
      prevCart.map((item)=>
        item.id === item_id ? { ...item, quantity:Math.max(1, item.quantity - 1) } : item
      )
    )
  }
  return (
    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    >
    <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
        alt='Caffe Latte'
    />
    <Stack>
        <CardBody>
        <Heading size='md'>{props.title}</Heading>
        <Text py='2'>{props.description}</Text>
        <Text py='0'>{props.rating} / 5</Text>
        <Text py='0' as="em">{props.category}</Text>
        </CardBody>
        <CardFooter>
          {isProductInCart?(
            <div class="after_add_to_cart">
              <Button variant='outline' colorScheme='teal' onClick={()=>{
                setCart(cart.filter((ele)=>ele!==props));
              }}>
                Remove From The Cart
              </Button>
              <div class="quantity">
                <AddIcon h={4} w={4} onClick={()=>{handleIncreaseQty(props.id)}}/>
                <Text class="qty">{props.quantity}</Text>
                <MinusIcon h={4} w={4} onClick={()=>{handleDecreaseQty(props.id)}} />
              </div>
            </div>
          ):(
            <Button variant='solid' colorScheme='teal' onClick={()=>{
                setCart([...cart, props]);
              }
            }>
              Add To Cart
            </Button>
          )}
        <Heading py='2' px='4' size='sm'>${props.price}</Heading>
        </CardFooter>
    </Stack>
    </Card>
  )
}

export default Product