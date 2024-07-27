import {
    Box,
    Button,
    Container,
    FormLabel,
    Heading,
    Input,
    Textarea,
    VStack,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  const Contact = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    return (
      <Container h="90vh">
        <VStack h={'full'} justifyContent={'center'} spacing={'8'}>
          <Heading children="Contact Us" />
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
              <FormLabel htmlFor="message" children="Message" />
              <Textarea
                required
                id="message"
                type="text"
                value={message}
                focusBorderColor="yellow.500"
                placeholder="Your Message"
                onChange={e => setMessage(e.target.value)}
              />
            </Box>
            <Button type="submit" colorScheme="yellow" minW={'80px'} marginY={'4'}>
              Send Mail
            </Button>
            <Box marginY={'4'}>
              Request for a Loan?{' '}
              <Link to="/request">
                <Button fontSize={'sm'} variant={'link'}>
                  Click
                </Button>
                here
              </Link>
            </Box>
          </form>
        </VStack>
      </Container>
    );
  };
  export default Contact;
  