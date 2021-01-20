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

function LoginTalentForm() {
  const router = useRouter();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const body = { email, password };
    const userInformations = await loginTalent({body: body});
    if (userInformations !== null || undefined){
        localStorage.setItem('userInformations', JSON.stringify(userInformations));
        router.push({
            pathname: '/talentProfile'
        });
    }
  }

  return (
    <Box w={400}>
      <Heading>Log In</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mt={4}>
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
    </Box>
  )
}

export default LoginTalentForm
