import { Flex } from '@chakra-ui/react'
import LoginForm from '../components/LoginForm/LoginForm'

function Login() {
  return (
    <Flex
      width="auto"
      h={600}
      justify="center"
      align="center"
      direction="column"
    >
        <LoginForm />
    </Flex>
  )
}

export default Login
