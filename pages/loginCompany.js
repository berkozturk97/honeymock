import { Flex, Button, Box } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import LoginCompanyForm from '../components/LoginForm/LoginCompanyForm';
import AppFooter from '../components/Nav/footer';


function LoginCompany() {
    const router = useRouter();
  return (
    <div>
    <Box width="auto"
      h={600} align='center' >
      <Button bg='white' onClick={() => router.push('/loginTalent')} mt={20}>Talent</Button>
      <Button bg='white'  ml={5} mt={20}>Company</Button>
     
    <Flex
      justify="center"
      align="center" 
    >
        <LoginCompanyForm />
    </Flex>
    </Box>
    
    </div>
  )
}

export default LoginCompany;
