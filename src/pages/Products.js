import React from 'react'
import { Select, Input, Button } from '@chakra-ui/react'
import Product from "../components/Product.js"
import product_items from "../productsList.json"

function Products() {
  return (
    <div id="Products_container"> 
      <div id="Products_top_container">
        <div id="Products_search_bar">
          <div>
            <Input placeholder='Search the product'/>
          </div>
          <div>
           <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'md'}
              mr={4}
              // leftIcon={<SearchIcon />}
              >
              Search
            </Button>
          </div>
        </div>
        <div id="Products_dropdowns">
          <div id="Products_category">
            <Select placeholder='Category'>
              <option value='option1'>Type 1</option>
              <option value='option2'>Type 2</option>
              <option value='option3'>Type 3</option>
            </Select>
          </div>
          <div id="Products_sort">
            <Select placeholder='Sort By'>
              <option value='option1'>Price (high to low)</option>
              <option value='option2'>Price (low to high)</option>
              <option value='option3'>Ratings</option>
            </Select>
          </div>
        </div>
      </div>
      <div id="Product_display">
        {product_items.map((item)=>{
            return(
              <div className="Product_container">
                <Product title={item.title} description={item.description} price={item.price} rating={item.rating} />
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default Products