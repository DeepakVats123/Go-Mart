import React, { useEffect } from 'react'
import './Products.css'
import { getDataFromServer } from '../Redux/Actions/getDataAction'
import { useDispatch, useSelector } from 'react-redux'
import {Grid, GridItem,Image } from '@chakra-ui/react'
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
  return <Grid  className='Grid-Box' align={'center'} gap={5} >
            {products.length > 0 ? products.map((e,i)=>{
              return <Cards key={i} productDetails= {e} />
            }) : <GridItem align='center' > <Image src='https://i.stack.imgur.com/ATB3o.gif' /> </GridItem>}
          </Grid>
  
}

export default Products