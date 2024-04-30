import { Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'
import { useLocation } from 'react-router-dom';

const ProductDetails = (props) => {
     
    const { state } = useLocation()
    const {id,title,price,description,category,image,rating} = state
    console.log(state)
        
     
  return (
    <Box alignItems={'center'} boxShadow='outline' p='6' rounded='md' bg='white' m={'20px'}
     css={
            {
                '@media (max-width: 950px)': {
                    width : '80%'
                },
            }
         }
     >
        <Flex
         gap={'50px'} 
         textAlign={'center'}
         css={
            {
                '@media (max-width: 950px)': {
                    flexDirection : 'column',
                    
                    textAlign : 'center',
                    alignItems : 'center'
                },
            }
         }
         >
            <Box
            css={
            {
                '@media (max-width: 950px)': {
                    
                    textAlign : 'center'
                },
            }
         }
             boxShadow='md' p='5' rounded='md' bg='white'>
                <Image 
                
                  maxW={'400px'} minHeight={'300px'} maxH={'300px'} src={image} />
            </Box>
            <Box p={'40px'} textAlign={'left'} >
                <Heading  size={"lg"} >{title}</Heading>
                <Text>{description}</Text>
                <br />
                {rating ? <Text fontSize={'xl'} textAlign={'left'} bg='blue.500' color={'white'} as='mark'>Rating : {rating.rate}</Text> : <Text>No ratings</Text>}
                <br />
                <Text fontSize='small' color={'green'} as='b'>Special Price</Text>
                <br />
                <Text fontSize='3xl'  as='b'>${price}</Text>
                <Text ml={'10px'} color={'gray'} as='s'>{price*1.5}</Text>
                <Text ml={'10px'} color={'green'} as='b'>50% Off</Text>
                <br />
                <Text > Category : <Text as='b'>{category}</Text></Text>
                
            </Box>
        </Flex>
    </Box>
  )
}

export default ProductDetails
