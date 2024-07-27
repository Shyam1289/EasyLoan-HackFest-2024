import {
    Box,
    Button,
    Container,
    FormLabel,
    Heading,
    Input,
    VStack,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  
  const UpdateProfile = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    return (
      <Container h={'90vh'} py={'16'}>
        <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
          <Heading textAlign={['center', 'left']}>Update Profile</Heading>
          <form style={{ width: '100%' }}>
            <Box marginY={'4'}>
              <FormLabel htmlFor="name" children="Name" />
              <Input
                required
                id="name"
                type="name"
                value={name}
                focusBorderColor="yellow.500"
                placeholder="Enter Your Name"
                onChange={e => setName(e.target.value)}
              />
            </Box>
            <Box marginY={'4'}>
              <FormLabel htmlFor="email" children="Email ID" />
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
            <Button
              marginY={'8'}
              width={'full'}
              colorScheme="yellow"
              type="submit"
            >
              Update
            </Button>
          </form>
        </VStack>
      </Container>
    );
  };
  export default UpdateProfile;
  