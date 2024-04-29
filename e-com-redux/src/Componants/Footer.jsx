import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Link, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <SimpleGrid textAlign={'left'} p={4} bg={'black'} mt={'50px'}  templateColumns='repeat(auto-fill, minmax(320px, 1fr))'>
    <Card  color={'gray'} bg={'black'}>
      <CardHeader mb='-30px'>
        <Heading size='md'> ABOUT</Heading>
      </CardHeader>
      <CardBody textAlign={'left'} color={'white'}>
        <Link>Contact us</Link> <br />
        <Link>About us</Link> <br />
        <Link>Careers</Link> <br />
        <Link>Corporate Information</Link>
      </CardBody>
      
    </Card>

    <Card color={'gray'} bg={'black'}>
      <CardHeader mb='-30px'>
        <Heading size='md'> GROUP COMPANIES</Heading>
      </CardHeader>
      <CardBody textAlign={'left'} color={'white'}>
        <Link>FlipKart</Link> <br />
        <Link>Myntra</Link> <br />
        <Link>Amazone</Link> <br />
        <Link>Boat</Link>
      </CardBody>
      
    </Card>

    <Card color={'gray'} bg={'black'}>
      <CardHeader mb='-30px'>
        <Heading size='md'> HELP</Heading>
      </CardHeader>
      <CardBody textAlign={'left'} color={'white'}>
        <Link>Payment</Link> <br />
        <Link>Shipping</Link> <br />
        <Link>Cancellation & Return</Link> <br />
        <Link>FAQ</Link>
      </CardBody>
      
    </Card>

    <Card color={'gray'} bg={'black'}>
      <CardHeader mb='-30px'>
        <Heading size='md'> CONSUMER POLICY</Heading>
      </CardHeader>
      <CardBody textAlign={'left'} color={'white'}>
        <Link>Cancellation & Returns</Link> <br />
        <Link>Terums of use</Link> <br />
        <Link>Security</Link> <br />
        <Link>privacy</Link>
      </CardBody>
      
    </Card>
   
    
  </SimpleGrid>
  )
}

export default Footer
