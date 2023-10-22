import React, {useState} from 'react'
import { Select, Input, Button } from '@chakra-ui/react'
import Product from "../components/Product.js"
import product_items from "../productsList.json"

function Products() {
  const [sortedArray , setSortedArray] = useState([...product_items]);
  const [searchProduct, setSearchProduct] = useState("");
  const handleSort = (e) =>{
    let selectedValue = e.target.value;
    if(selectedValue==="option1"){
      setSortedArray([...product_items].sort((a,b)=>a.price-b.price));
    }else if(selectedValue === "option2")
    {
      setSortedArray([...product_items].sort((a,b)=>b.price-a.price));
    }else{
      setSortedArray([...product_items].sort((a,b)=>b.rating-a.rating));
    }
  }

  const handleCategory = (e) =>{
    let selectedValue = e.target.value;
    if(selectedValue==="option1"){
      let array = [...product_items].filter((product)=>{
        return product.category === "Electronics"
      });
      setSortedArray(array);
    }else if(selectedValue === "option2")
    {
      let array = [...product_items].filter((product)=>{
        return product.category === "Kitchen & Dining"
      });
      setSortedArray(array);
    }else{
      let array = [...product_items].filter((product)=>{
        return product.category === "Accessories"
      });
      setSortedArray(array);
    }
  }

  const handleSearch = (e) =>{
    let searchItem = e.target.value;
    setSearchProduct(searchItem);
  }

  const handleSearchButton = (e) =>{
    e.preventDefault();
    let arr=[];
    for(let i=0; i<[...product_items].length; i++)
    {
      if([...product_items][i].title === searchProduct){
        arr.push([...product_items][i]);
      }
    }
    setSortedArray(arr);
  }
  return (
    <div id="Products_container"> 
      <div id="Products_top_container">
        <div id="Products_search_bar">
          <div>
            <Input onChange={handleSearch} placeholder='Search the product'/>
          </div>
          <div>
           <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'md'}
              mr={4}
              // leftIcon={<SearchIcon />}
              onClick={handleSearchButton}
              >
              Search
            </Button>
          </div>
        </div>
        <div id="Products_dropdowns">
          <div id="Products_category">
            <Select placeholder='Category' id="Sort_dropdown" onChange={handleCategory}>
              <option value='option1'>Electronics</option>
              <option value='option2'>Kitchen & Dining</option>
              <option value='option3'>Accessories</option>
            </Select>
          </div>
          <div id="Products_sort">
            <Select placeholder='Sort By' id="Sort_dropdown" onChange={handleSort}>
              <option value='option1'>Price (low to high)</option>
              <option value='option2'>Price (high to low)</option>
              <option value='option3'>Ratings</option>
            </Select>
          </div>
        </div>
      </div>
      <div id="Product_display">
        {sortedArray.map((item)=>{
            return(
              <div className="Product_container">
                <Product title={item.title} description={item.description} price={item.price} rating={item.rating} category={item.category} />
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default Products