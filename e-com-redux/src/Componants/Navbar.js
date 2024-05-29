import { Box, Flex, Image, Img, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import '../Componants/Navbar.css'
import LoginBtn from './LoginBtn'
import Headroom from 'react-headroom'

const Navbar = () => {
  const cartItemsCount = useSelector((storeData)=>{
    return storeData.cartProducts.length
  })

  


  // const Active = {
  //   textDecoration : 'underline'
  // }
  // const inActive ={
  //   textDecoration : 'none'
  // }
  return (
    <Headroom>
    <Flex className='FontDesign'  bg='black' textAlign={'left'}  >
        <Box color='white' flex={'1'}  m='auto' ml={'5px'} > <NavLink to={'/'}><Text as={'b'} display={'inline'} p={'5px'} >GOmart</Text></NavLink> </Box>
        <Box color='white' flex='1' m='auto' > <NavLink to={'/'}><Text>Products</Text></NavLink> </Box>
        <Box color='white' flex='1' m='auto' ><NavLink to={'/cart'}><Text display={'inline'}>
        Cart 
        <Text as={'b'} display={'inline'} color={'blue.500'}> [{ cartItemsCount}] </Text>
        </Text></NavLink></Box>
        <Box color='white' flex='1' m='auto' > {<LoginBtn />}</Box>
        
    </Flex>
    </Headroom>
  )
}

export default Navbar