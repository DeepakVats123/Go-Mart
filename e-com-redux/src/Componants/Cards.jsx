import { Button, Card, CardBody, Center, Divider, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../Redux/Actions/AddToCartAction'
import { Link, useNavigate } from 'react-router-dom'

const Cards = ({productDetails}) => {
    const dispatch = useDispatch();
    const navigate =  useNavigate();
    const sendItemToCart = (e)=>{
        
        addToCartAction(e,dispatch)
    }

    function handleNavigate(){
      navigate(`/${productDetails.title.slice(0,15)}`,{state : productDetails})
    }

  return (
    <GridItem mt={'10px'} >
        <Card borderRadius={'10px'}  boxShadow={'2xl'} maxW='lg' h='480' p={'10px'} >
        
  <CardBody onClick={()=>handleNavigate()} >
    <Center><Image  boxSize='180px'
      src={productDetails.image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    /></Center>
    <Stack mt='5' spacing='3'>
      <Heading size='md'>{productDetails.title.slice(0, 20).toUpperCase()}</Heading>
      <Text>
        {productDetails.category.toUpperCase()}
      </Text>
      <Text as='b' color='blue.600' fontSize='2xl'>
        ${productDetails.price}
      </Text>
      <Text as='b' color='green'>{productDetails.rating.rate} Rating</Text>
    </Stack>
  </CardBody>
 
  <Divider />
  
      <Stack align='center'>
      <Button onClick={()=>{sendItemToCart(productDetails)}} m='3' size='sm' variant='solid' colorScheme='blue'>Add to Cart</Button>
      </Stack>
  
</Card>
    </GridItem>
  )
}

export default Cards