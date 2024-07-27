import {
    Box,
    Button,
    Container,
    FormLabel,
    HStack,
    Heading,
    Input,
    VStack,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
      <Container h={'95vh'}>
        <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
          <Heading children="Welcome to EasyLoan" />
          <form style={{ width: '100%' }}>
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
              <FormLabel htmlFor="password" children="Password" />
              <Input
                required
                id="password"
                type="password"
                value={password}
                focusBorderColor="yellow.500"
                placeholder="Enter Your Password"
                onChange={e => setPassword(e.target.value)}
              />
            </Box>
            <HStack marginY={'4'}>
              <Button type="submit" colorScheme="yellow" minW={'80px'}>
                Login
              </Button>
              <Box  marginX={'18rem'}>
              <Link to="/forgetPassword">
                <Button fontSize={'sm'} variant={'link'}>
                  Forget Password?
                </Button>
              </Link>
              </Box>
            </HStack>
          </form>
        </VStack>
      </Container>
    );
  };
  
  export default Login;
  