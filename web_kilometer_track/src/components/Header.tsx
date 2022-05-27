import Image from 'next/image';
import { Flex, Link } from '@chakra-ui/react';
import logo from '../asset/logo.png';

export const Header = () => {
  return (
    <Flex
      as='header'
      w='100%'
      maxW='50%'
      mt='82px'
      paddingRight={5}
      align='center'
      justify='center'
      display={'block'}
    >
      <Link href='/'>
        <Image
          src={logo}
          alt="ETROS Logo"
          layout='responsive'
        />
      </Link>
    </Flex >
  )
}
