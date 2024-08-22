import React, { useState,useEffect } from "react";
import {
  FormLabel,useToast,
  Input,
  Heading,
  AlertIcon,
  Stack,
  Alert,
  Center,
  Box,
} from "@chakra-ui/react";


import { Link, useNavigate } from "react-router-dom";
const Signin = () => {
  const [signInData, setSignInData] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const [errorsList, setErrorsList] = useState({});
  const [userIsAlreadyRegisterd, setuserIsAlreadyRegisterd] = useState("");
  const toast = useToast()
  const navigate = useNavigate();
  
  const logiInStatus = JSON.parse(localStorage.getItem("ecom-login-status"))
   
  useEffect(()=>{
    if(logiInStatus.status){
      navigate('/')
    }
   },[logiInStatus.status])
  
  const handleChange = (e) => {
    console.log(e.target.value);
    setSignInData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const validateSignIn = (data) => {
    const errors = {};
    if (!data.name) {
      errors.name = "*Please add your name.";
    }
    if (!data.email || !data.email.includes("@")) {
      errors.email = "*Please add a valid email address.";
    }
    if (!data.password || data.password.length < 8) {
      errors.password =
        "*Please add your password (Atleast 8 letters required).";
    }
    setErrorsList(errors);
    return errors;
  };

  function handleSubmit(e) {
    e.preventDefault();

    const isValid = validateSignIn(signInData);
    console.log(isValid);
    if (Object.keys(isValid).length) return;

    const LocalStorageData = JSON.parse(localStorage.getItem("users"));

    if (LocalStorageData) {
      var isUserExisist = LocalStorageData.filter((e) => {
        return signInData.email == e.email;
      });

      if (LocalStorageData && isUserExisist.length != 0) {
        console.log("user is already registered");
        // setSignInData({"name" : "","email" : "","password" : ""})
        setuserIsAlreadyRegisterd("This email address is already registered");
      } else if (LocalStorageData) {
        localStorage.setItem(
          "users",
          JSON.stringify([...LocalStorageData, signInData])
        );
        setSignInData({
          name: "",
          email: "",
          password: "",
        })
        toast({
          
          title : 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        setTimeout(()=>navigate("/login"),2000)
      }
    } else {
      localStorage.setItem("users", JSON.stringify([signInData]));
      setSignInData({
        name: "",
        email: "",
        password: "",
      })
      toast({
        title : 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      setTimeout(()=>navigate("/login"),2000)
    }
  }
  return (
    <Box
     w={'650px'}
     m={'auto'}
     mt={12}
     boxShadow={'outline'}
     p={6}
     css={{
                '@media (max-width: 680px)': {
                    width: "350px",
                },
            }}
     >
    <form
      onSubmit={handleSubmit}
      
    >
      <Heading as={"h1"}>Sign In</Heading>

      <FormLabel>Name</FormLabel>
      <Input
        name="name"
        value={signInData.name}
        onChange={handleChange}
        type="text"
      />
      <p style={{ color: "red", textAlign: "left" }}>{errorsList.name}</p>
      <FormLabel>Email address</FormLabel>
      <Input
        name="email"
        value={signInData.email}
        onChange={handleChange}
        type="email"
      />
      <p style={{ color: "red", textAlign: "left" }}>{errorsList.email}</p>
      <FormLabel>Password</FormLabel>
      <Input
        name="password"
        value={signInData.password}
        onChange={handleChange}
        type="password"
      />
      <p style={{ color: "red", textAlign: "left" }}>{errorsList.password}</p>

      <Input
        mb={"20px"}
        mt={"10px"}
        border={"1px solid black"}
        type="submit"
        value={"Sign In"}
      />
      <Link style={{ color: "blue", textDecoration: "underline" }} to="/login">
        Existing User? Log in
      </Link>

      {userIsAlreadyRegisterd ? (
        <Center mt={"20px"}>
          <Stack spacing={3}>
            <Alert status="error">
              <AlertIcon />
              {userIsAlreadyRegisterd}
            </Alert>
          </Stack>
        </Center>
      ) : (
        <>
        
        </>
      )}
    </form>
    </Box>
  );
};

export default Signin;
