import React from 'react'
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
    Radio
  } from '@chakra-ui/react'

function Checkout({total, setTotal}) {
  return (
    <div id="Checkout_container">
        <FormControl isRequired>
            <FormLabel my={2}>First name</FormLabel>
            <Input placeholder='First name' />
            <FormLabel my={2}>Last name</FormLabel>
            <Input placeholder='Last name' />
            <FormLabel my={2}>Shipping Address</FormLabel>
            <Textarea placeholder='Enter Shipping Address' />
            <FormLabel my={2} as='legend'>
                How Are You Going To Pay :
            </FormLabel>
            <RadioGroup defaultValue='Itachi'>
                <HStack spacing='24px'>
                <Radio value='Sasuke'>PayTm</Radio>
                <Radio value='Nagato'>UPI</Radio>
                <Radio value='Itachi'>COD</Radio>
                <Radio value='Sage of the six Paths'>Debit/Credit Card</Radio>
                </HStack>
            </RadioGroup>
            <Button mt={2} colorScheme='teal' size='md'>
                Proceed To Pay $ {total}
            </Button>
        </FormControl>
    </div>
  )
}

export default Checkout
