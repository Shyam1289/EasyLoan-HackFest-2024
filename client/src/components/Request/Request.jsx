import {
    Box,
    Button,
    Container,
    FormLabel,
    Heading,
    Input,
    VStack,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  const Request = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [collateral, setCollateral] = useState();
    const [value, setValue] = useState();

    return (
      <Container h="90vh">
        <VStack h={'full'} justifyContent={'center'} spacing={'8'}>
          <Heading children="Request for Loan" />
          <form style={{ width: '100%' }}>
            <Box marginY={'4'}>
              <FormLabel htmlFor="name" children="Name" />
              <Input
                required
                id="name"
                type="text"
                value={name}
                focusBorderColor="yellow.500"
                placeholder="Enter Your Name"
                onChange={e => setName(e.target.value)}
              />
            </Box>
            <Box marginY={'4'}>
              <FormLabel htmlFor="email" children="Email Address" />
              <Input
                required
                id="email"
                type="email"
                value={email}
                focusBorderColor="yellow.500"
                placeholder="abc@gmail.com"
                onChange={e => setEmail(e.target.value)}
              />
            </Box>
            
            <Box marginY={'4'}>
              <FormLabel htmlFor="collateral" children="Collateral" />
              <Input
                required
                id="collateral"
                type="text"
                value={collateral}
                focusBorderColor="yellow.500"
                placeholder="e.g. House..."
                onChange={e => setCollateral(e.target.value)}
              />
            </Box>
            <Box marginY={'4'}>
              <FormLabel htmlFor="value" children="Market Value (in USD)" />
              <Input
                required
                id="value"
                type="number"
                value={value}
                focusBorderColor="yellow.500"
                placeholder=""
                onChange={e => setValue(e.target.value)}
              />
            </Box>
            <Button type="submit" colorScheme="yellow" minW={'80px'} marginY={'4'}>
              Send Mail
            </Button>
          </form>
        </VStack>
      </Container>
    );
  };
  export default Request;
  