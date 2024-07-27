import {
    Avatar,
    Box,
    Button,
    Container,
    HStack,
    Heading,
    Stack,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import { RiSecurePaymentFill } from 'react-icons/ri';
  import { Link } from 'react-router-dom';
  import termsAndConditions from '../../assets/docs/termsAndConditions';
  const Founder = () => (
    <Stack direction={['column', 'row']} spacing={['4', '16']} p={'8'}>
      <VStack>
        <Avatar boxSize={['40', '48']} />
        <Text opacity={0.7}>Founder</Text>
      </VStack>
      <VStack justifyContent={'center'} alignItems={['center','flex-start']}>
      <Heading size={['md', 'xl']}>Ram Krishna</Heading>
      </VStack>
    </Stack>
  );
  const Terms = ({termsAndConditions}) => (
    <Box>
      <Heading size={'md'} textAlign={['center', 'left']} my={'4'}>
        Terms and Conditions
      </Heading>
      <Box h={'sm'} p={'4'} overflowY={'scroll'}>
        <Text
          letterSpacing={'widest'}
          textAlign={['center', 'left']}
        >
          {termsAndConditions}
        </Text>
      </Box>
    </Box>
  );
  
  const About = () => {
    return (
      <Container padding={'16'} boxShadow={'lg'} maxW={'container.lg'}>
        <Heading textAlign={['center', 'left']}>About Us</Heading>
  
        <Founder />
        <Stack alignItems={'center'} direction={['column', 'row']} m={'8'}>
          <Text fontSize={'20'} fontFamily={'Roboto'} m={'8'} textAlign={['center', 'left']}>
            We are a video streaming platform with premium courses availabe only
            for premium users.
          </Text>
          <Link to="/subscribe">
            <Button size={'lg'} variant={'ghost'} colorScheme="yellow">
              Checkout Our Plans
            </Button>
          </Link>
        </Stack>
        <Terms termsAndConditions={termsAndConditions}/>
        <HStack my={'4'} alignItems={['center','flex-start']}>
          <RiSecurePaymentFill />
          <Heading size={'xs'} fontFamily={'sans-serif'}>
            Payment is secured by RazorPay
          </Heading>
        </HStack>
      </Container>
    );
  };
  export default About;
  