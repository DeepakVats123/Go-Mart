import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const EmptyCart = () => {
  return (
    <Box mt={'10px'}
     css={
            {
                '@media (max-width: 500px)': {
                    width : '280px',
                    padding : '2px'
                    
                },
            }
         } >
              <Box  p='20' mt='1' align='center' border={'1px solid lightGray'}>
                <Image m='5' boxSize={'200px'} alt='CartImage' src='https://cdn-icons-png.flaticon.com/512/4555/4555971.png' />
                <Text  as='b' fontSize={'2xl'} >Your cart is empty!</Text>
                <Text color={'blue.500'} >Explore our wide selection and find something you like!</Text>
              </Box>
    </Box>
  )
}

export default EmptyCart