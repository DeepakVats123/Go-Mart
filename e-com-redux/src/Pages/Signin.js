import React, {useState} from 'react'
import {FormLabel,Input,Heading} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
const Signin = () => {
    const [signInData, setSignInData] = useState({"name" : "","email" : "","password" : ""})
    const navigate = useNavigate()
    const [errorsList, setErrorsList] = useState({})
    const handleChange = (e)=> {
        console.log(e.target.value)
        setSignInData((prevData)=>({
          ...prevData, [e.target.name] : e.target.value
        }))

    }

    const validateSignIn = (data)=>{
      const errors = {}
       if(!data.name){
          errors.name = "*Please add your name."
       }
       if(!data.email || !data.email.includes('@')) {
          errors.email = "*Please add a valid email address."
       }
       if(!data.password || data.password.length < 8) {
          errors.password = "*Please add your password (Atleast 8 letters required)."
       }
       setErrorsList(errors)
       return errors
    }

    function handleSubmit(e){
        e.preventDefault();
        

        const isValid =  validateSignIn(signInData)
        console.log(isValid)
        if(Object.keys(isValid).length) return
        console.log("Subit is working")
        console.log(signInData)

        localStorage.setItem("users", JSON.stringify(signInData))
        navigate('/login')    
    }
  return (
    <form   onSubmit={handleSubmit}   style={{
        width : "600px",
        border:"1px solid black", 
        padding : "20px",
        margin : "auto",
        marginTop : "20px"
        }} >
        <Heading as={'h1'}>Sign In</Heading>

        <FormLabel>Name</FormLabel>
        <Input name='name' value={signInData.name} onChange={handleChange}  type='text' />
        <p style={{color : "red", textAlign: "left"}}>{errorsList.name}</p>
        <FormLabel>Email address</FormLabel>
        <Input name='email' value={signInData.email} onChange={handleChange}  type='email' />
        <p style={{color : "red", textAlign: "left"}}>{errorsList.email}</p>
        <FormLabel>Password</FormLabel>
        <Input  name='password' value={signInData.password} onChange={handleChange} type='password' />
        <p style={{color : "red", textAlign: "left"}}>{errorsList.password}</p>
        
        
        <Input mb={'20px'} mt={'10px'} border={'1px solid black'} type='submit' value={'Sign In'} />
        <Link to='/login' >Existing User? Log in</Link>
        
    </form>
  )
}

export default Signin