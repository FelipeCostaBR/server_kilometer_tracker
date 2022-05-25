import { Box, Text, Flex, Button, Stack } from '@chakra-ui/react';
import React from 'react';
import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { OdometerReader } from '../components/OdometerReader';

export default function Dashboard() {
  const [value, setValue] = React.useState()

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
          <OdometerReader />
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