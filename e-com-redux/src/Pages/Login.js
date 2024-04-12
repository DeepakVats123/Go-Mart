import React, { useState } from 'react'
import {FormControl,FormLabel,Input,Heading} from '@chakra-ui/react'


const Login = () => {
    const [formdata, setFormData] = useState({
      email : '',
      password : ''
    })
    const [errorsList, setErrorsList] = useState('')
    
    const validForm = (data)=>{
      const errors = {}
        if(!data.email){
            errors.email = "please provide email address"
        }
        if(!data.password){
          errors.password = "please provide password"
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
        
        const validateResult = validForm(formdata)
        console.log(validateResult)
        if(Object.keys(validateResult).length) return

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
        
        <Input mt={'10px'} border={'1px solid black'} type='submit' value={'Login'} />
        
    </form>
    
     
  )
}

export default Login