import {
    FormControl,
    Input,
    Box,
    Button,
    Heading
  } from '@chakra-ui/react'
import { useState } from 'react';
import { createTalent } from '../../api/talentApi';

function SignUpForm() {

    const [values, setValues] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        rePassword: '',
    })

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const body = { name: values.name, surname: values.surname, password: values.password, email: values.email };
        console.log(body);
        const userInformations = await createTalent({body: body});
        console.log(userInformations);
      }
    return(
    <Box w={400}>
    <Heading>Join XXXX</Heading>
    <Heading as="h6" size="xs">
      Create a free XXXX account and let companies apply directly to you.
    </Heading>
    <form onSubmit={handleSubmit}>
      <FormControl id="firstName" mt={4}>
        <Input 
        type="name"
        name="name"
        value={values.name}
        onChange={handleInputChange} 
        placeholder="Your First Name" />
      </FormControl>

      <FormControl id="lastName" mt={4}>
        <Input 
        type="name"
        name="surname" 
        value={values.surname}
        onChange={handleInputChange} 
        placeholder="Your Last Name" />
      </FormControl>

      <FormControl id="email" mt={4}>
        <Input 
        type="email"
        name="email"
        value={values.email}
        onChange={handleInputChange} 
        placeholder="Email address" />
      </FormControl>

      <FormControl id="password" mt={4}>
        <Input
        name="password"
        type="password"
        value={values.password}
        onChange={handleInputChange} 
        placeholder="Create a password" />
      </FormControl>

      <FormControl id="rePassword" mt={4}>
        <Input 
        type="password" 
        name="rePassword"
        value={values.rePassword}
        onChange={handleInputChange} 
        placeholder="Repeat password" />
      </FormControl>

      <Button type='submit' width="full" mt={4}>
        Sign Up
      </Button>
      </form>
    </Box>    )
    
}

export default SignUpForm;