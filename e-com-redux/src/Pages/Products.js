import React, { useEffect } from 'react'
import './Products.css'
import { getDataFromServer } from '../Redux/Actions/getDataAction'
import { useDispatch, useSelector } from 'react-redux'
import {Box, Flex, Grid, GridItem,Image, Select, Text } from '@chakra-ui/react'
import Cards from '../Componants/Cards'


const Products = () => {
  const dispatch = useDispatch()
  const products = useSelector((storeData)=>{
    return storeData.products;
  })
  useEffect(()=>{
    return getData()
  },[]);

  function getData() {
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((res2) => getDataFromServer(res2,dispatch))
    
  }
  return <Box>
    <Flex mt={'10px'} gap={'10px'}>
      <Box><Text fontSize={'2xl'} m={'3px'}>Filters</Text></Box>
      <Box >
      <Select  placeholder='Select Catagries' >
        <option value='option1'>Men's Clothing</option>
        <option value='option2'>Women's Clothing</option>
        <option value='option3'>Electronics</option>
        <option value='option3'>Jewelleries</option>
      </Select>
      </Box>
      
      <Box>
      <Select placeholder='Sort by'>
        <option value='option1'>Price (Low - High)</option>
        <option value='option2'>Price (High - Low)</option>
        <option value='option3'>A - Z</option>
        <option value='option3'>Z - A</option>
      </Select>
      </Box>
      
    </Flex>
    <Grid  className='Grid-Box' align={'center'} gap={3} >
            {products.length > 0 ? products.map((e,i)=>{
              return <Cards key={i} productDetails= {e} />
            }) : <GridItem align='center' > <Image src='https://i.stack.imgur.com/ATB3o.gif' /> </GridItem>}
          </Grid>
  </Box>
  
}

export default Products