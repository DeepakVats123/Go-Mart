import { Box,Divider, Flex, Heading,Image,Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CartCard from '../Componants/CartCard';
import './Cart.css'
import EmptyCart from '../Componants/EmptyCart';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((storeData)=>{
    return storeData.cartProducts
  })
  const [logiInStatus, setlogiInStatus] = useState(
    JSON.parse(localStorage.getItem("ecom-login-status"))
  );
  const navigate = useNavigate();
  const toast = useToast();
  

  useEffect(() => {
    if (!logiInStatus) {
      setlogiInStatus(
        localStorage.setItem(
          "ecom-login-status",
          JSON.stringify({ status: false, name: "profile" })
        )
      );
    } else {
      if (!logiInStatus.status) {
        navigate("/");
        toast({
          title: "Please Login to access cart section!",
          status: "error",
          isClosable: true,
        });
      }
    }
  }, []);
  

  let plus = cartItems.reduce((sum , e)=> sum + e.price * e.quantity , 0)
  let discountValue = (plus / 100) * 10
  let total = (plus - discountValue) > 100 ? plus-discountValue-2 : plus-discountValue

  
  return (

    <Box className='CartGrid'  >
        <Box className='cartCartSection'>
        {cartItems.length > 0 ? cartItems.map((e,i) =>{
            return <CartCard key={i+1} e={e} i={i} />
          }) : <EmptyCart /> }
        </Box>
        
        <Box className='PriceDetailsSection'   >
          <Heading m='4' size={'lg'} >Price Details</Heading>
          <Divider/>
          <Flex className='PriceText'>
            <Text m='2' align='left' flex='1' ml='6' >Price ({cartItems.length} items)</Text>
            <Text m='2' mr='6' align='right' flex='1' >$ {Math.ceil(plus)} </Text>
          </Flex>

          <Flex className='PriceText'>
            <Text m='2' ml='6' align='left' flex='1'  >Discount (10%) </Text>
            <Text color='green' m='2' align='right' flex='1' mr='6' > -$ {Math.ceil(discountValue)} </Text>
          </Flex>

          <Flex className='PriceText'>
            <Text m='2' ml='6' align='left' flex='1' >Delivery Charges ($2) </Text>
            <Text m='2' align='right' flex='1' mr='6' >{total > 100  ? <Box><Text color='gray' as='del'>$ 2</Text><Text color='green'>free</Text></Box> : <Box><Text>$ 2</Text><Text fontSize='xs' color='green'>(Not applicable above $100 order)</Text></Box> } </Text>
          </Flex>
          <Divider />
          <Flex>
            <Text as='b' className='TotalText'  m='2' ml='6' align='left' flex='1' >Total Amount</Text>
            <Text as='b' className='TotalText'  m='2' mr='6' align='right' flex='1' >$ {cartItems.length > 0 ? Math.ceil(total) : 0} </Text>
          </Flex>
        </Box>
    </Box>
  )
}

export default Cart