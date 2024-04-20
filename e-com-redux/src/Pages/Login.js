import React, { useEffect, useState } from "react";
import { FormLabel, Input, Heading, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorsList, setErrorsList] = useState("");
  const [userNotFound, setUserNotFound] = useState("");
  const navigate = useNavigate();
  const toast = useToast()
  
  const logiInStatus = JSON.parse(localStorage.getItem("ecom-login-status"))
   
  useEffect(()=>{
    if(logiInStatus.status){
      navigate('/')
    }
   },[])
  

  const validForm = (data) => {
    const errors = {};
    if (!data.email) {
      errors.email = "*Please provide a valid email address";
    }
    if (!data.password || data.password.length < 8) {
      errors.password = "*Please provide a valid password";
    }
    setErrorsList(errors);
    return errorsList;
  };

  const handleChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };
  function handleSubmit(e) {
    e.preventDefault();

    const validateResult = validForm(formdata);
    console.log(validateResult);
    if (Object.keys(validateResult).length) return;

    const userData = JSON.parse(localStorage.getItem("users"));
    console.log(userData);
    if (userData) {
      const login = userData.filter((e) => {
        return e.email == formdata.email && e.password == formdata.password;
      });
      console.log("Login Data", login);

      if (login.length !== 0) {
        console.log("login succsussful");
        localStorage.setItem("ecom-login-status", JSON.stringify({"status" : true,"name": userData[0].name}));
        setFormData({
          email: "",
          password: "",
        });
        toast({
          
          title : 'Login Done',
          description: "you are successfully logged In",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        navigate('/')
        
      } else {
        console.log("login Failed");
        localStorage.setItem("ecom-login-status", JSON.stringify({"status" : true,"name": "Login"}));

        
        toast({
          title: "User not found ! wrong email/password.",
          status: "error",
          isClosable: true,
        })
      }
    } else {
      console.log("user not found");
      
      
      toast({
        title: "User not found ! wrong email/password.",
        status: "error",
        isClosable: true,
      })
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "600px",
        border: "1px solid black",
        padding: "20px",
        margin: "auto",
        marginTop: "20px",
        minHeight: "300px",
      }}
    >
      <Heading onChange={(e) => {}} as={"h1"}>
        Login
      </Heading>
      <FormLabel>Email address</FormLabel>
      <Input
        name="email"
        value={formdata.email}
        onChange={handleChange}
        type="email"
      />
      <p style={{ textAlign: "left", color: "red" }}>{errorsList.email}</p>
      <FormLabel>Password</FormLabel>
      <Input
        name="password"
        value={formdata.password}
        onChange={handleChange}
        type="password"
      />
      <p style={{ textAlign: "left", color: "red" }}>{errorsList.password}</p>

      <Input
        mb={"20px"}
        mt={"10px"}
        border={"1px solid black"}
        type="submit"
        value={"Login"}
      />

      <Link style={{ color: "blue", textDecoration: "underline" }} to="/signin">
        New User ? Create an account
      </Link>

      <p style={{ color: "red" }}>{userNotFound}</p>
    </form>
  );
};

export default Login;
