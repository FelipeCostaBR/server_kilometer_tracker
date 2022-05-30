import { Box, Text, Flex, Button, Stack } from '@chakra-ui/react';
import React from 'react';
import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { OdometerReader } from '../components/OdometerReader';

export default function Dashboard() {
  const userData = {
    Name: 'Felipe Costa',
    email: 'felipe.costa@gmail.com',
    date_birth: '15/07/1992'
  }

  const vehicleData = {
    vehicle: 'Toyota',
    model: 'Corolla',
    year: '2013',
    current_kilometers: '80.000',
    next_km_to_service: '90.000',
    next_service: '20/06/2023'
  }

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
          <Card data={userData}>Your Details</Card>
          <Card data={vehicleData}>Vehicle Details</Card>

        </Stack>

        <Stack
          w='100%'
          spacing={7}
          mt={4}
          as='form'

        >
          <Text mt={16} fontSize='xl'>Please, insert the odometer reader:</Text>
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