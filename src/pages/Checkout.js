import React , {useState} from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Textarea,
    Input,
    Button,
    RadioGroup,
    HStack,
    Radio,
    Text
  } from '@chakra-ui/react'

function Checkout({total, setTotal}) {
  const [selectedOption, setSelectedOption] = useState("UPI");
  const handleChange = (e) =>{
    setSelectedOption(e.target.value);
  } 
  return (
    <div id="Checkout_container">
        <FormControl isRequired>
            <Button mb={2} colorScheme='teal' size='md'>
                Proceed To Pay $ {total}
            </Button>
            <FormLabel my={2}>First name</FormLabel>
            <Input placeholder='First name' />
            <FormLabel my={2}>Last name</FormLabel>
            <Input placeholder='Last name' />
            <FormLabel my={2}>Shipping Address</FormLabel>
            <Textarea placeholder='Enter Shipping Address' />
            <FormLabel my={2} as='legend'>
                How Are You Going To Pay :
            </FormLabel>
            <RadioGroup >
                <HStack spacing='24px' onChange={handleChange}>
                <Radio value='UPI'>UPI</Radio>
                <Radio value='COD'>COD</Radio>
                <Radio value='Card'>Debit/Credit Card</Radio>
                </HStack>
            </RadioGroup>
            {
              <div>
                {(selectedOption==="UPI")?<div>
                <FormControl>
                  <FormLabel>Enter UPI ID</FormLabel>
                  <Input placeholder='UPI ID' />
                </FormControl>
                <Button
                  mt={4}
                  colorScheme='teal'
                >
                  Verify
                </Button>
                </div> : (selectedOption==="COD")?<div>
                  <Text>Pay ${total} using UPI/Cash to the delivery man.</Text>
                </div> :
                <div>
                  <FormControl>
                    <FormLabel>Card Number</FormLabel>
                    <Input placeholder='Enter Card Number' />
                    <FormLabel>CVV</FormLabel>
                    <Input placeholder='Enter CVV' />
                  </FormControl>
                  <Button
                    mt={4}
                    colorScheme='teal'
                  >
                    Verify
                  </Button>
                </div>
                }
              </div>
            }
        </FormControl>
    </div>
  )
}

export default Checkout;
