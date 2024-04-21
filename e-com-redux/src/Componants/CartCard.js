import { Box, Button, Card, CardBody, Divider, Flex, Heading, Image, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCartAction } from '../Redux/Actions/DeleteFromCartAction';
import { IncCartAction } from '../Redux/Actions/IncCartAction';
import { DecCartAction } from '../Redux/Actions/DecCartAction';
import './CartCard.css'
const CartCard = ({e,i}) => {
  
    const dispatch = useDispatch()
    const cartItems = useSelector((storeData)=>{
        return storeData.cartProducts
    })
    console.log(cartItems)

    function onChangeEventFn(e){
      
    }
  return (
            <Card mt='5' 
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            size='sm' >
                    <Image
                      m='3'
                      objectFit='cover'
                      maxW={{ sm: '100px' }}
                      maxH={{ sm: '150px'}}
                      src={e.image}
                      alt='Caffe Latte'
                    />

                <Stack>
                  <CardBody align='left' width={'600px'}  >
                    <Heading  size='lg'>{e.title.slice(0, 28)}</Heading>

                    <Text mb='-4' >
                      {e.description.slice(0, 50)}
                    </Text>
                  </CardBody>
                  <Divider />
                  <Flex   alignItems={'center'} mb='2         '>
                      <Box   align = 'center' flex='4' >
                      <Heading   size='md' >${e.price}</Heading>
                      <Text color='green'>{e.rating.rate} Rating</Text>
                      </Box>

                      <Box flex='2' align={'center'}>
                            <Flex>
                            <Button isDisabled={e.quantity === 1} onClick={()=> DecCartAction(e,dispatch)}   variant='solid' colorScheme='blue'>-</Button>
                            <Input  onChange={onChangeEventFn}  w='60px'  placeholder={e.quantity} />
                            <Button isDisabled={e.quantity === 10} onClick={()=>{IncCartAction(e,dispatch,e.id)}} variant='solid' colorScheme='blue'>+</Button>
                            </Flex>
                            
                      </Box>
                      
                      <Box   align='center' flex='1' >
                      <Button  onClick={()=>{deleteFromCartAction(cartItems,dispatch,i)}} size={'md'} variant='solid' colorScheme='blue'>Delete</Button>
                      </Box>
                    </Flex>
                </Stack>
            </Card>
  )
}

export default CartCard