import { Flex, Button, Box } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import LoginCompanyForm from '../components/LoginForm/LoginCompanyForm';


function LoginCompany() {
    const router = useRouter();
  return (
    <Box align='center' >

      <Button bg='white' onClick={() => router.push('/loginTalent')} mt={20}>Talent</Button>
      <Button bg='white'  ml={5} mt={20}>Company</Button>
      <hr style={{marginTop: '5px'}}/>  
   
    <Flex
      width="auto"
      h={600}
      justify="center"
      align="center"
      
    >
        <LoginCompanyForm />
    </Flex>
     </Box>
  )
}

export default LoginCompany;
