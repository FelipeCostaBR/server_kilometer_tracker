import { HStack, Box, Text } from '@chakra-ui/react';
import { IoIosArrowBack } from 'react-icons/io';

export const Card = ({ children }) => {
  return (
    <Box
      p={7}
      mt={7}
      borderRadius='4px'
      bg='cardBg.dark'
    >
      <HStack justify='space-between'>
        <Text
          color='white'
          fontSize='xl'
          fontWeight='bold'
          textAlign='left'
        >
          {children}
        </Text>
        <IoIosArrowBack size={18} color='white' />
      </HStack>
    </Box>
  )
}