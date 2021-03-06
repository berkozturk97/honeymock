import { Box } from '@chakra-ui/react'
import Step1 from '../../components/LoginSteps/Step1'

function LoginStep1() {
  return (
    <Box w={[350,500,600,1000]} backgroundColor='#fff' h={'auto'} p={10} m={(0, 'auto')} mt={10}>
      <Step1 />
    </Box>
  )
}

export default LoginStep1;
