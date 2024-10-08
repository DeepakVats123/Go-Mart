import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import '../Componants/Navbar.css'
import LoginBtn from './LoginBtn'
import Headroom from 'react-headroom'
import { MdShoppingCart } from 'react-icons/md'

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
        <Flex align={'center'} ><Text mr={'3px'}>Cart</Text> <MdShoppingCart /><Text fontSize={'lg'}  w={'23px'} h={'23px'} justify={'center'}  textAlign={'center'} as={'b'}  bg={"red"} borderRadius={'100%'} mb={'20px'} ml={'-12px'} color={'white'}>{cartItemsCount}</Text></Flex>
        </Text></NavLink></Box>
        <Box color='white' flex='1' m='auto' > {<LoginBtn />}</Box>
        
    </Flex>
    </Headroom>
  )
}

export default Navbar