import { Flex } from '@chakra-ui/react'
import SignUpForm from '../components/SignUpForm/SignUpForm'

function SignUpTalent() {
  return (
    <Flex
      width="auto"
      h={600}
      justify="center"
      align="center"
      direction="column"
    >
     <SignUpForm />
    </Flex>
  )
}

export default SignUpTalent
