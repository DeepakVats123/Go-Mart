import { Menu, MenuButton, MenuList,Button, MenuItem,Text, Center, Flex, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiOutlineLogin } from 'react-icons/ai'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

const LoginBtn = () => {
  const lStorage = JSON.parse(localStorage.getItem("ecom-login-status"))
  if(!lStorage){
    localStorage.setItem("ecom-login-status",JSON.stringify({"name" : "Login", "status": false}));
  }
  
  

const [logInStatus,setIsLogIn] = useState(JSON.parse(localStorage.getItem("ecom-login-status")))

useEffect(()=>{
  setIsLogIn(JSON.parse(localStorage.getItem("ecom-login-status")))
})

  return (
<Menu bg={"black"} >
  <MenuButton 
    css={
                              {
                                  
                                  
                                  '@media (max-width: 610px)': {
                                      fontSize : '20px'
                                  },
                                  '@media (min-width: 610px)': {
                                      fontSize : '30px'
                                  },
                                  '@media (max-width: 400px)': {
                                      fontSize : '15px'
                                  }

                              }
                          }
    bg={"black"} p={"10px"} pb={"15px"} color={"white"} _hover={{color: "black", bg: "white"}} as={Button}>
  
    {
      logInStatus.status == false || logInStatus.status == null? <NavLink to={'/login'}><Flex align={"center"} justify={"center"}>Login <AiOutlineLogin /></Flex></NavLink>  : <Text>{logInStatus.name}</Text>
    }
  </MenuButton>
  <MenuList alignItems={'center'}  content='center' p='10px'  bg={"black"}>
    <MenuItem border='1px'borderRadius={'md'} w='100%'  fontSize={"lg"} bg={"black"}>{logInStatus.status == false || logInStatus.status == null ? 
      <NavLink  to={'/login'}>
      <Flex alignItems={'center'} gap='110px'><Box>Login </Box><Box><AiOutlineLogin /></Box></Flex>
      </NavLink>
    : <button  onClick={()=>{
      localStorage.setItem("ecom-login-status",JSON.stringify({"name" : "Login", "status": false}));
      setIsLogIn(JSON.parse(localStorage.getItem("ecom-login-status")))
      }}><Flex alignItems={'center'} gap='100px'><Box>LogOut </Box><Box><RiLogoutCircleLine /></Box></Flex></button>}</MenuItem>
  </MenuList>
</Menu>
  )
}

export default LoginBtn