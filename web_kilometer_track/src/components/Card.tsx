import { Box, Text, Flex, Collapse, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';


interface DataInfos {
  children: string;
  data: object;
}

export const Card = ({ children, data }: DataInfos) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleTransition = () => setIsOpen(!isOpen)
  const data_array = Object.entries(data)
  return (
    <Box
      p={7}
      mt={7}
      borderRadius='4px'
      bg='cardBg.dark'
    >
      <Flex justify='space-between' onClick={handleTransition}>
        <Text
          color='white'
          fontSize='xl'
          fontWeight='bold'
          textAlign='left'
        >
          {children}
        </Text>
        <Flex align='center'>
          {isOpen ? <IoIosArrowDown size={20} color='white' /> : <IoIosArrowBack size={20} color='white' />}
        </Flex>
      </Flex>

      <Collapse
        in={isOpen}
        startingHeight={0}
        style={{ display: 'block' }} animateOpacity
      >
        <Flex
          marginRight='2'
          mt='9'
          rounded='md'

        >
          <Stack
            spacing={3}
            mb={5}
            w='100%'
          >
            {data_array.map((value, index) => (
              <Text

                key={index}
                bg='white'
                color='blackAlpha.900'
                paddingX={3}
                paddingY={1.5}
                borderRadius='4px'
              >
                <strong>{value.shift()}:</strong> {value.pop()}
              </Text>
            ))}
          </Stack>
        </Flex>

      </Collapse>


    </Box >
  )
}