import {
    Avatar,
    Button,
    Container,
    HStack,
    Heading,
    Stack,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
  
  const Profile = () => {
    const user = {
      name: 'Ram',
      email: 'ram@gmail.com',
      createdAt: String(new Date().toISOString()),
      subscription: {
        status: 'inactive',
      },
      playlist:{
          course: 'sample',
          poster: 'sample',
      },
    };
    return (
      <Container minH={'90vh'} maxW={'container.lg'} py={'8'}>
        <Heading m={'8'}>Profile</Heading>
        <Stack
          justifyContent={['center', 'flex-start']}
          direction={['column', 'row']}
          alignItems={'center'}
          spacing={'16'}
          p={'8'}
        >
          <VStack>
            <Avatar boxSize={'48'} />
            <Button variant={'ghost'} colorScheme="yellow">
              Change Photo
            </Button>
          </VStack>
          <VStack spacing={'4'} alignItems={'flex-start'}>
            <HStack>
              <Text children="Name:" fontWeight={'bold'} />
              <Text children={user.name} />
            </HStack>
            <HStack>
              <Text children="Email:" fontWeight={'bold'} />
              <Text children={user.email} />
            </HStack>
            <HStack>
              <Text children="Created At:" fontWeight={'bold'} />
              <Text children={user.createdAt.split('T')[0]} />
            </HStack>
            <HStack>
              {user.subscription.status !== 'active' ? (
                <Link to="/subscribe">
                  <Button colorScheme="yellow">Subscribe</Button>
                </Link>
              ) : (
                <></>
              )}
            </HStack>
            <Stack direction={['column', 'row']} alignItems={'center'}>
              <Link to="/updateprofile">
                <Button>Update Profile</Button>
              </Link>
              <Link to="/changepassword">
                <Button >Change Password</Button>
              </Link>
            </Stack>
          </VStack>
        </Stack>
        
      </Container>
    );
  };
  export default Profile;
  