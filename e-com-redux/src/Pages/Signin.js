import React, {useState} from 'react'
import {FormLabel,Input,Heading} from '@chakra-ui/react'

const Signin = () => {
    const [emalAddress, setEmailAddress] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        console.log("Subit is working")
        console.log(emalAddress, pass)
    }
  return (
    <form   onSubmit={handleSubmit}   style={{
        width : "600px",
        border:"1px solid black", 
        padding : "20px",
        margin : "auto",
        marginTop : "20px"
        }} >
        <Heading onChange={(e)=>{}} as={'h1'}>Sign In</Heading>

        <FormLabel>Name</FormLabel>
        <Input value={name} onChange={(e)=>{setName(e.target.value)}}  type='text' />
        <FormLabel>Email address</FormLabel>
        <Input value={emalAddress} onChange={(e)=>{setEmailAddress(e.target.value)}}  type='email' />
        <FormLabel>Password</FormLabel>
        <Input value={pass} onChange={(e)=>{setPass(e.target.value)}} type='password' />
        
        
        <Input mt={'10px'} border={'1px solid black'} type='submit' value={'Sign In'} />
        
    </form>
  )
}

export default Signin