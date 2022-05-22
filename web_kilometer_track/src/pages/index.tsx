import { Flex, Stack, Button, Divider, Box } from '@chakra-ui/react';

import { Header } from '../components/Header';

export default function Home() {
  return (
    <Box>
      <Header />

      <Flex
        w='100vw'
        h='70vh'
        align='center'
        justify='center'
      >
        <Stack spacing={5} w='280px' align='center'>
          <Button w='200px' colorScheme="green" size={'lg'}>Login</Button>
          <Divider borderWidth={1} />
          <Button w='200px' colorScheme='black' size={'lg'} variant='outline'>Sign up</Button>
        </Stack>
      </Flex>
    </Box >
  )
}
