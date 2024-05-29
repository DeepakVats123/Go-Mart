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
            <Card  mt={'10px'}
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            size='md'
                            alignItems={'center'}
                            css={{'@media (max-width: 480px)': {
                                      width : '99%',
                                      
                                          },
                                          '@media (max-width: 800px)': {
                                      
                                          }
                                    
                                          }}
                             >
                    <Image
                      m='3'
                      objectFit='cover'
                      maxW={{ sm: '100px' }}
                      maxH={{ sm: '150px'}}
                      src={e.image}
                      alt='Caffe Latte'
                      css={{'@media (max-width: 480px)': {
                                      width : '35%'
                                          }}}
                    />

                <Stack>
                  <CardBody
                   align='left'
                   width={'95%'}
                   css={{'@media (max-width: 480px)': {
                                      fontSize : 'sm'
                                          }}}
                     >
                    <Heading  size='md'>{e.title.slice(0, 20)}</Heading>

                    <Text mb='-4' >
                      {e.description.slice(0, 30)}
                    </Text>
                  </CardBody>
                  <Divider />
                  <Flex   alignItems={'center'} mb='2'>
                      <Box ml={'20px'}  align = 'center' flex='1' >
                      <Heading   size='md' >${e.price}</Heading>
                      <Text color='green'><Text as={'b'}>{e.rating.rate}</Text> Rating</Text>
                      </Box>

                      <Box ml={'20px'}  flex='1' align={'left'}  >
                            <Flex >
                            <Button size={'sm'} isDisabled={e.quantity === 1} onClick={()=> DecCartAction(e,dispatch)}   variant='solid' colorScheme='blue'>-</Button>
                            <Input size={'sm'}  onChange={onChangeEventFn} p={1} w='30px'  placeholder={e.quantity} />
                            <Button size={'sm'} isDisabled={e.quantity === 10} onClick={()=>{IncCartAction(e,dispatch,e.id)}} variant='solid' colorScheme='blue'>+</Button>
                            </Flex>
                            
                      </Box>
                      
                      <Box ml={'20px'} align={'left'}   flex='4' >
                      <Button  onClick={()=>{deleteFromCartAction(cartItems,dispatch,i)}} size={'sm'} variant='solid' colorScheme='blue'>Delete</Button>
                      </Box>
                    </Flex>
                </Stack>
            </Card>
  )
}

export default CartCard