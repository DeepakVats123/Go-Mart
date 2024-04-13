import React, { useState } from 'react'
import {FormLabel,Input,Heading, textDecoration} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Login = () => {
    const [formdata, setFormData] = useState({
      email : '',
      password : ''
    })
    const [errorsList, setErrorsList] = useState('')
    
    const validForm = (data)=>{
      const errors = {}
        if(!data.email){
            errors.email = "*Please provide a valid email address"
        }
        if(!data.password || data.password.length < 8){
          errors.password = "*Please provide a valid password"
        }
        setErrorsList(errors)
        return errorsList
    }

    const handleChange = (e)=>{
      setFormData((prevData)=>{
        return {...prevData, [e.target.name] : e.target.value}
        
      })
    }
    function handleSubmit(e){
        e.preventDefault()
        const userData = JSON.parse(localStorage.getItem("users"))
        console.log(userData)
        
        const validateResult = validForm(formdata)
        console.log(validateResult)
        if(Object.keys(validateResult).length) return

        if(userData.email == formdata.email && userData.password == formdata.password){
          console.log("login succsussful")
        }else{
          console.log("login Failed")
        }

        setFormData({
          email : '',
          password : ''
        })
    }

  return (
    
    <form   onSubmit={handleSubmit}   style={{
        width : "600px",
        border:"1px solid black", 
        padding : "20px",
        margin : "auto",
        marginTop : "20px"
        }} >
        <Heading onChange={(e)=>{}} as={'h1'}>Login</Heading>
        <FormLabel>Email address</FormLabel>
        <Input name='email' value={formdata.email} onChange={handleChange}  type='email' />
        <p style={{textAlign: 'left', color: "red"}}>{errorsList.email}</p>
        <FormLabel>Password</FormLabel>
        <Input  name='password' value={formdata.password} onChange={handleChange} type='password' />
        <p style={{textAlign: 'left', color: "red"}}>{errorsList.password}</p>
        
        <Input mb={'20px'} mt={'10px'} border={'1px solid black'} type='submit' value={'Login'} />

        <Link style={{color : "blue"}} onMouseOver={{textDecoration: "underline"}} to='/signin' >New User ? Create an account</Link>
        
        
    </form>
    
     
  )
}

export default Login