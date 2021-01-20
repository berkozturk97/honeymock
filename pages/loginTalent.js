import { Flex, Button, Box } from '@chakra-ui/react'
import LoginTalentForm from '../components/LoginForm/LoginTalentForm'
import { useRouter } from 'next/router';

function LoginTalent() {
  const router = useRouter();
  return (
    <Box align='center' >

      <Button bg='white' mt={20}>Talent</Button>
      <Button bg='white' onClick={() => router.push('/loginCompany')} ml={5} mt={20}>Company</Button>
      <hr style={{marginTop: '5px'}}/>  
   
    <Flex
      width="auto"
      h={600}
      justify="center"
      align="center"
      direction="column"
    >
        <LoginTalentForm />
    </Flex>
     </Box>
  )
}

export default LoginTalent;
