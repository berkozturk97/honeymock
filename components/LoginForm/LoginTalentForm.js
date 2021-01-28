import {
  FormControl,
  Input,
  Box,
  Button,
  Heading,
  Checkbox
} from '@chakra-ui/react';

import React, { useState } from 'react';

import { useRouter } from 'next/router';

import { loginTalent } from '../../api/talentApi';
import { HEADER, ID } from '../../constants/header';
import axios from 'axios';
import LinkedInLogin from '../LinkedIn/LinkedInLogin';
import { LINKEDIN_URL_LOGIN } from '../../helpers/auth';

function LoginTalentForm() {
  const router = useRouter();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  async function handleSubmit(e) {
    e.preventDefault()
    const body = { email, password };
    const userInformations = await loginTalent({body: body});
    console.log(userInformations);
    if (userInformations !== null || undefined){
        localStorage.setItem('userInformations', JSON.stringify(userInformations));
        axios.defaults.headers.token =  userInformations.tokenCode;
        HEADER.tokenCode = userInformations.tokenCode;
        ID._id = userInformations._id;
        if( userInformations.isFirstLogin === 'false'){
           router.push({
            pathname: '/talentProfile'
        });
        } else {
          router.push({
            pathname: '/talent/basics'
        });
        }
       
    }
  }

  
  

  return (
    <Box w={[300,300,400,400]}>
      <Heading mt={[6,6,5,4]}>Log In</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mt={[6,6,5,4]}>
          <Input 
          name="email"
           type="email" 
           placeholder="Email" 
           value={email} 
           onChange={(e) => setEmail(e.target.value)}/>
        </FormControl>

        <FormControl id="password" mt={4}>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        <Checkbox border="black" colorScheme="green">
          Remember Me
        </Checkbox>

        <Button type="submit" width="full" mt={4}>
          Log In
        </Button>
      </form>
      <LinkedInLogin />
  
    </Box>
  )
}

export default LoginTalentForm
