import React from 'react';
import { Link } from 'react-router-dom';
import {
  VStack,
  Stack,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import home from '../../../src/assets/images/home.jpg';
import './Home.css';


const Home = () => {
  return (
    <section className="home" >
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing={'6'}
          >
            <Heading children="Funding Your Aspirations" size={'2xl'} />
            <Text
              fontSize={'xl'}
              children="Loans Made Simple and Fast"
            />
            <Link to="/courses">
              <Button size={'lg'} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>
          <Image className="animate" boxSize={'md'} src={home} />
        </Stack>
      </div>

    </section>
  );
};
export default Home;
