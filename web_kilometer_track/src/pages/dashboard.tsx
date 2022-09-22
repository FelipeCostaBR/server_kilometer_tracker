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

const users = [
  {
    id: 1,
    name: "Felipe Costa",
    email: "felipe@g.com",
    dt_birth: "1992-07-15",
  },
  {
    id: 2,
    name: "Julian Costa",
    email: "julian@g.com",
    dt_birth: "2019-12-01",
  }
]
const vehicles = [
  {
    id: 1,
    user_id: null,
    vehicle: "Volkswagen",
    model: "Ranchero",
    year: "2020",
    transmission: "Automatic",
    registration: "OV40TTH",
    current_kilometers: 98857,
    next_km_to_service: 108857,
    next_service: null,

  },
  {
    id: 2,
    user_id: null,
    vehicle: "Volvo",
    model: "X10",
    year: "2022",
    transmission: "Automatic",
    registration: "1PK020",
    current_kilometers: 10000,
    next_km_to_service: 20000,
    next_service: "2022-10-20",
  }
]

export default function Dashboard() {
  useAuth

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
          <Text fontSize='2xl'>Hi {users[0].name},</Text>
          <Text fontSize='2xl' >Thank you for choosing Etros!</Text>
        </Stack>

        <Stack spacing={6}>
          <Card data={users[0]}>Your Details</Card>
          <Card data={vehicles[0]}>Vehicle Details</Card>

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

// export async function getServerSideProps() {
//   // imagine we have a fetch here ....

//   // Pass data to the page via props
//   return { props: { users } }
// }
