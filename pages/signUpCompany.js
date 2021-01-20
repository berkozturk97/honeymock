import { Box, Button, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import SignUpFormCompany from '../components/SignUpForm/SignUpFormCompany';



function SignUpCompany() {
    const router = useRouter();
    return (
      <Box align='center'>
  
        <Button bg='white' onClick={() => router.push('/signUpTalent')} mt={20}>Talent</Button>
        <Button bg='white' ml={5} mt={20}>Company</Button>
        <hr style={{marginTop: '5px'}}/>
      <Flex
        width="auto"
        h={600}
        justify="center"
        align="center"
        d='inline-flex'
      >
        
       <SignUpFormCompany />
      </Flex>
      </Box>
    )
}

export default SignUpCompany;