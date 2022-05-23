import { Box, Input, InputGroup, InputLeftElement, Text, Flex, Button, Stack } from '@chakra-ui/react';
import { Card } from '../components/Card';
import { Header } from '../components/Header';
import InputMask from "react-input-mask";

import { IoSpeedometerOutline } from 'react-icons/io5';

export default function Login() {
  return (
    <Flex
      w='100vw'
      h='100vh'
      align='center'
      justify='top'
      flexDir={'column'}
    >
      <Header />
      <Box>
        <Stack
          spacing={4}
          mt='60px'
          textAlign={'center'}
        >
          <Text fontSize='2xl'>Hi Felipe,</Text>
          <Text fontSize='2xl' >Thank you for choosing Etros!</Text>
        </Stack>

        <Stack spacing={6}>
          <Card>Your Details</Card>
          <Card>Vehicle Details</Card>
          <Text fontSize='xl'>Please, insert the odometer reader:</Text>
        </Stack>

        <Stack
          w='100%'
          spacing={7}
          mt={4}
          as='form'
        >
          <InputGroup>
            <Input
              as={InputMask}
              placeholder='Type here'
              _placeholder={{ opacity: 0.5, color: 'inherit' }}
              paddingLeft={14}
              size='lg'
              focusBorderColor='green.light'
              bg='cardBg.dark'
              color='white'
              border='InactiveBorder'
              isRequired={true}
              mask="***,***.**"
              maskChar={null}
            />
            <InputLeftElement w='4.5rem' h='100%' className="InputLeft" pointerEvents="none">
              <IoSpeedometerOutline color='white' size={24} />
            </InputLeftElement>

          </InputGroup>
          <Button
            type={'submit'}
            w='100%'
            colorScheme="green"
            size={'lg'}
            mt='50px'
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </Flex >
  )
}