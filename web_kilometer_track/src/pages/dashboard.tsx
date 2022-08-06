import { Box, Text, Flex, Button, Stack } from '@chakra-ui/react';
import React from 'react';
import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { OdometerReader } from '../components/OdometerReader';
import { useAuth } from '../hooks/auth';
import baseURL from '../services/api';

interface IUser {
  id: string;
  name: string;
  email: string;
  date_birth: Date;
  phone: number;
  created_at: Date;
  updated_at: Date;
}
interface IVehicle extends IUser {

  id: string;
  user_id: string;
  vehicle: string;
  model: string;
  year: string;
  transmission: string;
  registration: string;
  current_kilometers: number;
  next_km_to_service: number;
  next_service: Date;
  created_at: Date;
  updated_at: Date
}

export default function Dashboard(vehicle: IVehicle, user: IUser) {
  useAuth
  console.log(vehicle)
  console.log(user)

  return (
    <Flex
      w='100vw'
      h='100vh'
      align='center'
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
          {/* <Card data={user}>Your Details</Card> */}
          {/* <Card data={vehicle}>Vehicle Details</Card> */}

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

export async function getServerSideProps(context) {
  console.log('context', context)
  const response = await fetch(`${baseURL}/vehicles/user/}`)
  const vehicle = await response.json()

  // Pass data to the page via props
  return { props: { vehicle } }
}
