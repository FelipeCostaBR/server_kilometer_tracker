import { Flex, Box, Stack, Input, Text, Button, Center, Link } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { PasswordInput } from '../components/PasswordInput';


export default function Login() {
  return (
    <Flex flexDir={'column'} w='100vw' h='100vh'>
      <Header />
      <Flex
        as={'form'}
        mt={16}
        w='100vw'
        align='center'
        justify='center'
      >
        <Box w='70%'>
          <Stack spacing={0}>
            <Text>Email Address</Text>
            <Input
              type='email'
              placeholder='e-mail'
              size='lg'
              bgColor='white'
              color='blackAlpha.900'
              isRequired={true}
              focusBorderColor='green.light'
            />
          </Stack>

          <Stack spacing={0} mt={5}>
            <Text>Password</Text>
            <PasswordInput />
          </Stack>
          <Box mt='32px'>
            <Link href='/login'>
              <Text textAlign='right'>Forgot Password?</Text>
            </Link>
          </Box>

          <Button
            type={'submit'}
            w='100%'
            colorScheme="green"
            size={'lg'}
            mt='62px'
          >
            Login
          </Button>
        </Box>

      </Flex>
    </Flex >
  )
}