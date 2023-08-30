'use client'

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image ,
  Button,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { ReactNode } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import {Link as RouterLink} from "react-router-dom"
const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (

    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
)
}


export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'7xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '3fr 2fr 2fr' }}
          spacing={8}>
          <Stack spacing={3}>
            <Box>
              <Link to='/'><Image style={{width:"140px",height:"auto",paddingBottom:"20px"}} src="https://valentinesagaassets.s3.ap-south-1.amazonaws.com/New-logo-final.jpg" alt="" /></Link>
            </Box>
            <Text fontSize={'sm'} w="80%">Address :  D-499 3rd Floor, Ramphal Chowk, Dwarka Sector 7, New Delhi-110075</Text>
            <Text fontSize={'sm'}>Email id : support@velentinesaga.com</Text>
            <Text fontSize={'sm'}>Mobile No : +91 8210005030</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'https://twitter.com/RaviJha63438448'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'https://www.youtube.com/@ValentineSaga'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'https://www.instagram.com/valentine.saga/'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'Facebook'} href="https://www.facebook.com/Coupleservices">
                <FaFacebook />
              </SocialButton>
              <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/valentine-saga-00252126a/'}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={'Pinterest'} href={'https://in.pinterest.com/rpj0597saga'}>
                <FaPinterest />
              </SocialButton>
            </Stack>
            <Box width="50px">
            <Button colorScheme='blue'>
              <Link to="/contact">Contact Us</Link>
            </Button>
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Connect With Us</ListHeader>
            <Box as={RouterLink} to="/">
            Home
            </Box>
            <Box as={RouterLink} to="/about">
            About us
            </Box>
            <Box as={RouterLink} to="/products">
            Shop
            </Box>
            <Box as={RouterLink} to="/blogs">
            Blogs
            </Box>
            <Box as={RouterLink} to="/faq">
            Faq
            </Box>
            <Box as={RouterLink} to="/terms">
            Term And Conditions
            </Box>
            <Box as={RouterLink} to="/policy">
            Privacy Policy
            </Box>
          </Stack>
          {/* <Stack align={'flex-start'}>
            <ListHeader>Conditions</ListHeader>
            <Box as="a" href={'#'}>
              Help Center
            </Box>
            <Box as="a" href={'#'}>
              Terms of Service
            </Box>
            <Box as="a" href={'#'}>
              Legal
            </Box>
            <Box as="a" href={'#'}>
              Privacy Policy
            </Box>
            <Box as="a" href={'#'}>
              Satus
            </Box>
          </Stack> */}
          <Stack align={'flex-start'}>
            <ListHeader>Subscribe Get <br/> updates and exclusive offers!</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('green.400', 'green.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'green.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}