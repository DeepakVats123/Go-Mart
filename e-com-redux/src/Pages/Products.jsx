import React, { useEffect, useState } from 'react'
import './Products.css'
import { getDataFromServer } from '../Redux/Actions/getDataAction'
import { useDispatch, useSelector } from 'react-redux'
import {Box, Flex, Grid, GridItem,Image, Select, Text } from '@chakra-ui/react'
import Cards from '../Componants/Cards'



const Products = () => {
  const [fil, setFil] = useState(()=> ()=> ()=>{})
  const [sorting, setsorting] = useState(()=>()=>()=>{})
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
    .catch(err => console.log(err))
    
  }

  function handleFilterOnChange(e){
    if(e.target.value == "Select catageries"){
      setFil(()=> ()=> ()=>{})
    }
    else{
      setFil(()=>(el)=> el.category == e.target.value  )
      
    }
    
  }
  function handleSort(e){
    console.log(e.target.value)
   if(e.target.value == "sort-by"){
      setsorting(()=> ()=> ()=>{})
   }
   else if(e.target.value == "low-high"){
    setsorting(() => (a,b) => a.price - b.price)
    }
    else if(e.target.value == "high-low"){
      setsorting(() => (a,b) => b.price - a.price)
      }
      else if(e.target.value == "a-z"){
        setsorting(() => (a,b)=> {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        
        })
        }
        else if(e.target.value == "z-a"){
          setsorting(() => (a,b)=> {
            if (a.title > b.title) {
              return -1;
            }
            if (a.title < b.title) {
              return 1;
            }
            return 0;
          
          })
          }
        

  }
    
  return <Box>

        <Flex mt={'10px'} gap={'10px'}>
              <Box><Text fontSize={'2xl'} m={'3px'}>Filters</Text></Box>
              <Box >
              <Select onChange={handleFilterOnChange} >
                <option value="Select catageries">Select catageries</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jeweleries</option>
              </Select>
              </Box>
              
              <Box>
              <Select onChange={handleSort} >
                <option value="sort-by">Sort by</option>
                <option value='low-high'>Price (Low - High)</option>
                <option value='high-low'>Price (High - Low)</option>
                <option value='a-z'>A - Z</option>
                <option value='z-a'>Z - A</option>
              </Select>
              </Box>
              
        </Flex>
    
            <Grid  className='Grid-Box' align={'center'} gap={3} px={'30px'} pt='5'>
              {products.length > 0 ? products.filter(fil).sort(sorting).map((e,i)=>{
                return <Cards key={i} productDetails= {e} />
              }) : <GridItem  > <Image w={'150px'} src='https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-05-37_512.gif' /> </GridItem>}
            </Grid>
         </Box>
  
}

export default Products