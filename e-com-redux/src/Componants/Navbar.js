import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import '../Componants/Navbar.css'
import LoginBtn from './LoginBtn'

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
    <Flex className='FontDesign'  bg='black' height='75px' >
        <Box color='white' flex='1' m='auto' > <NavLink to={'/'}><Text>Products</Text></NavLink> </Box>
        <Box color='white' flex='1' m='auto' ><NavLink to={'/cart'}><Flex>
        <Box align='right' flex={'1'}>Cart </Box>
        <Box color={'blue.500'} align='left' flex={'1'}>({cartItemsCount}) </Box>
        </Flex></NavLink></Box>
        <Box color='white' flex='1' m='auto' > {<LoginBtn />}</Box>
        
    </Flex>
  )
}

export default Navbar