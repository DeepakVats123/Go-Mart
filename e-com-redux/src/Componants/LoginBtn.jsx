import { Menu, MenuButton, MenuList,Button, MenuItem,ChevronDownIcon } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const LoginBtn = () => {

const logiInStatus = JSON.parse(localStorage.getItem("ecom-login-status"))

  return (
<Menu bg={"black"}>
  <MenuButton bg={"black"} color={"white"} as={Button} rightIcon={">"}>
    {localStorage.status? logiInStatus.name : <NavLink to={'/login'}>Login </NavLink>}
  </MenuButton>
  <MenuList bg={"black"}>
    <MenuItem fontSize={"md"} bg={"black"}>{localStorage.status?<button onClick={()=>{

    localStorage.setItem("ecom-login-status",JSON.stringify({"status": false,"name":"Login"}))}} >Logout</button> : <NavLink to={'/login'}>Login </NavLink>}</MenuItem>
  </MenuList>
</Menu>
  )
}

export default LoginBtn