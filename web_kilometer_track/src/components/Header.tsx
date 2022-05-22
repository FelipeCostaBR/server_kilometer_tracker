import Image from 'next/image';
import { Flex } from '@chakra-ui/react';
import logo from '../asset/logo.png';

export const Header = () => {
  return (
    <Flex
      as='header'
      w='100%'
      mt='8'
      paddingRight={5}
      align='center'
      justify='center'
      display={'block'}
    >
      <Image
        src={logo}
        alt="ETROS Logo"
        layout='responsive'
      />
    </Flex >
  )
}
