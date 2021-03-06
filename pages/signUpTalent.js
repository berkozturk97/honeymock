import { Box, Button, Flex } from '@chakra-ui/react'
import SignUpFormTalent from '../components/SignUpForm/SignUpFormTalent'
import { useRouter } from 'next/router';


function SignUpTalent() {
  const router = useRouter();
  return (
    <Box  width="auto"
      h={[300,400,500,600]} align='center'>

      <Button bg='white' mt={20}>Talent</Button>
      <Button bg='white' onClick={() => router.push('/signUpCompany')} ml={5} mt={20}>Company</Button>
     
    <Flex
     
      justify="center"
      align="center"
      direction="column"
    >
      
     <SignUpFormTalent />
    </Flex>
    </Box>
  )
}

export default SignUpTalent
