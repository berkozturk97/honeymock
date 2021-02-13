import { Flex, Button, Box } from '@chakra-ui/react'
// import LoginTalentForm from '../components/LoginForm/LoginTalentForm'
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'
import AppFooter from '../components/Nav/footer';

const LoginTalentForm = dynamic(
  () => import('../components/LoginForm/LoginTalentForm'),
  { ssr: false }
)

function LoginTalent() {
  const router = useRouter();
  return (
    <div>
    <Box width="auto"
    h={600} align='center' >

      <Button bg='white' mt={20}>Talent</Button>
      <Button bg='white' onClick={() => router.push('/loginCompany')} ml={5} mt={20}>Company</Button>
      <hr style={{marginTop: '10px', width: '600px', color: '#d3d3d3'}}/> 
   
    <Flex
      
      justify="center"
      align="center"
      direction="column"
    >
      <LoginTalentForm />
    </Flex>
     </Box>
     <AppFooter/>
     </div>
  )
}

export default LoginTalent;
