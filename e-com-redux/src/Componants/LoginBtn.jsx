import { Menu, MenuButton, MenuList,Button, MenuItem,Text, Center } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
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
<Menu  bg={"black"}>
  <MenuButton 
    css={
                              {
                                  
                                  
                                  '@media (max-width: 610px)': {
                                      fontSize : '15px'
                                  },
                                  '@media (min-width: 610px)': {
                                      fontSize : '30px'
                                  },
                                  '@media (max-width: 300px)': {
                                      fontSize : '10px'
                                  }

                              }
                          }
    bg={"black"} color={"white"} as={Button} rightIcon={">"}>
  
    {
      logInStatus.status == false || logInStatus.status == null? <NavLink  to={'/login'}>Login </NavLink>  : <Text>{logInStatus.name}</Text>
    }
  </MenuButton>
  <MenuList alignItems={'center'}  bg={"black"}>
    <MenuItem   fontSize={"lg"} bg={"black"}>{logInStatus.status == false || logInStatus.status == null ? 
      <NavLink  to={'/login'}>LogIn </NavLink>
    : <button   onClick={()=>{
      localStorage.setItem("ecom-login-status",JSON.stringify({"name" : "Login", "status": false}));
      setIsLogIn(JSON.parse(localStorage.getItem("ecom-login-status")))
      }}>Logout</button>}</MenuItem>
  </MenuList>
</Menu>
  )
}

export default LoginBtn