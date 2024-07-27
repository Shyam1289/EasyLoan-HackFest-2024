import React from 'react';
import { Link } from 'react-router-dom';
import { RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import {
  VStack,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  HStack,
} from '@chakra-ui/react';
const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const isAuthenticated = true;
  const logoutHandler = () => {
    console.log('Logout');
    onClose();
  };
  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme="yellow"
        width={'12'}
        height={'12'}
        rounded={'full'}
        top={'6'}
        left={'6'}
        position={'fixed'}
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>Dashboard</DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'} alignItems={'flex-start'}>
              <Link to="/" onClick={onClose}>
                <Button variant={'ghost'}>Home</Button>
              </Link>
              <Link to="/loans" onClick={onClose}>
                <Button variant={'ghost'}>Browse all Loans</Button>
              </Link>
              <Link to="/request" onClick={onClose}>
                <Button variant={'ghost'}>Request for a Loan</Button>
              </Link>
              <Link to="/contact" onClick={onClose}>
                <Button variant={'ghost'}>Contact Us</Button>
              </Link>
              <Link to="/about" onClick={onClose}>
                <Button variant={'ghost'}>About Us</Button>
              </Link>
            </VStack>

            <HStack
              justifyContent={'space-evenly'}
              bottom={'2rem'}
              position={'absolute'}
            >
              {isAuthenticated ? (
                <>
                  <Link to="/profile" onClick={onClose}>
                    <Button variant={'ghost'} colorScheme="yellow">
                      Profile
                    </Button>
                  </Link>
                  <Button variant={'ghost'} onClick={logoutHandler}>
                    <RiLogoutBoxLine />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={onClose}>
                    <Button colorScheme="yellow"> Login</Button>
                  </Link>

                  <p>OR</p>
                  <Link onClick={onClose}>
                    <Button colorScheme="yellow"> Sign Up</Button>
                  </Link>
                </>
              )}
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default Header;
