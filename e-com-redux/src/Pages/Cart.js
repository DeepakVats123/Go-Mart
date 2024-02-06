import { Box,Divider, Flex, Heading,Image,Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux';
import CartCard from '../Componants/CartCard';
import './Cart.css'
import EmptyCart from '../Componants/EmptyCart';

const Cart = () => {
  const cartItems = useSelector((storeData)=>{
    return storeData.cartProducts
  })
  

  let plus = cartItems.reduce((sum , e)=> sum + e.price * e.quantity , 0)
  let discountValue = (plus / 100) * 10
  let total = (plus - discountValue) > 100 ? plus-discountValue-2 : plus-discountValue

  
  return (

    <Box className='CartGrid'  >
        <Box    m='10'>
        {cartItems.length > 0 ? cartItems.map((e,i) =>{
            return <CartCard key={i+1} e={e} i={i} />
          }) : <EmptyCart /> }
        </Box>
        
        <Box h='350px' border='1px solid lightGray'  m='16' >
          <Heading m='4' size={'lg'} >Price Details</Heading>
          <Divider/>
          <Flex fontSize={'x-large'}>
            <Text m='2' align='left' flex='1' ml='6' >Price ({cartItems.length} items)</Text>
            <Text m='2' mr='6' align='right' flex='1' >$ {Math.ceil(plus)} </Text>
          </Flex>

          <Flex fontSize={'x-large'}>
            <Text m='2' ml='6' align='left' flex='1'  >Discount (10%) </Text>
            <Text color='green' m='2' align='right' flex='1' mr='6' > -$ {Math.ceil(discountValue)} </Text>
          </Flex>

          <Flex fontSize={'x-large'}>
            <Text m='2' ml='6' align='left' flex='1' >Delivery Charges ($2) </Text>
            <Text m='2' align='right' flex='1' mr='6' >{total > 100  ? <Box><Text color='gray' as='del'>$ 2</Text><Text color='green'>free</Text></Box> : <Box><Text>$ 2</Text><Text fontSize='xs' color='green'>(Not applicable above $100 order)</Text></Box> } </Text>
          </Flex>
          <Divider />
          <Flex>
            <Text as='b' fontSize='2xl' m='2' ml='6' align='left' flex='1' >Total Amount</Text>
            <Text as='b' fontSize='2xl' m='2' mr='6' align='right' flex='1' >$ {cartItems.length > 0 ? Math.ceil(total) : 0} </Text>
          </Flex>
        </Box>
    </Box>
  )
}

export default Cart