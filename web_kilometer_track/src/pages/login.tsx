import { Flex, Box, Stack, Input, Text, Button, Link } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { PasswordInput } from '../components/PasswordInput';

export default function Login() {
  return (
    <Flex
      w='100vw'
      h='100vh'
      align='center'
      flexDir={'column'}
    >
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
            <Text textAlign='right'>Forgot Password?</Text>
          </Box>

          <Link href='/dashboard'>
            <Button
              type={'submit'}
              w='100%'
              colorScheme="green"
              size={'lg'}
              mt='62px'
            >
              Login
            </Button>
          </Link>
        </Box>

      </Flex>
    </Flex >
  )
}