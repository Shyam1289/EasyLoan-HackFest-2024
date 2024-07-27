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
  
  const ChangePassword = () => {
    const [newPassword, setNewPassword] = useState();
    const [oldPassword, setOldPassword] = useState();
    return (
      <Container h={'90vh'} py={'16'}>
        <VStack
          h={'full'}
          justifyContent={'center'}
          spacing={'16'}
        >
          <Heading textAlign={['center', 'left']}>Change Password</Heading>
          <form style={{width:'100%'}}>
            <Box marginY={'4'}>
              <FormLabel htmlFor="oldPassword" children="Password" />
              <Input
                required
                id="oldPassword"
                type="oldPassword"
                value={oldPassword}
                focusBorderColor="yellow.500"
                placeholder="Enter Your Password"
                onChange={e => setOldPassword(e.target.value)}
              />
            </Box>
            <Box marginY={'4'}>
              <FormLabel htmlFor="newPassword" children="New Password" />
              <Input
                required
                id="newPassword"
                type="newPassword"
                value={newPassword}
                focusBorderColor="yellow.500"
                placeholder="Enter Your New Password"
                onChange={e => setNewPassword(e.target.value)}
              />
            </Box>
            <Button marginY={'8'} width={'full'} colorScheme="yellow" type="submit">
              Change
            </Button>
          </form>
        </VStack>
      </Container>
    );
  };
  export default ChangePassword;
  