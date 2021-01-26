import {
    FormControl,
    Input,
    Box,
    Button,
    Heading,
    Flex
  } from '@chakra-ui/react'
import { useState } from 'react';
import { createTalent } from '../../api/talentApi';

function SignUpFormCompany() {

    const [values, setValues] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        city: '',
        job: '',
        company: '',
        employees: '',
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
    <Box  w={[300,300,400,400]}>
    <Heading>Join XXXX</Heading>
    <Heading as="h6" size="xs">
      Find candidates for free!
    </Heading>
    <form onSubmit={handleSubmit}>
      {/* <Flex float='left'> */}
      <FormControl id="name" mt={4}>
        <Input
        w={[140,140,190,190]}
        type="name"
        name="name"
        value={values.name}
        onChange={handleInputChange} 
        placeholder="Your First Name" />
      
        <Input
        ml={5} 
        w={[140,140,190,190]}
        type="name"
        name="surname" 
        value={values.surname}
        onChange={handleInputChange} 
        placeholder="Your Last Name" />
      </FormControl>
      {/* </Flex> */}
      <FormControl id="email" mt={4}>
        <Input 
        type="email"
        name="email"
        value={values.email}
        onChange={handleInputChange} 
        placeholder="Work email address" />
      </FormControl>

      <FormControl id="phoneAndCity" mt={4}>
        <Input
        w={[140,140,190,190]}
        name="phone"
        type="tel"
        value={values.phone}
        onChange={handleInputChange} 
        placeholder="Phone" />
      
        <Input
        ml={5} 
        w={[140,140,190,190]}
        type="text" 
        name="city"
        value={values.city}
        onChange={handleInputChange} 
        placeholder="City" />
      </FormControl>

      <FormControl id="jobTitle" mt={4}>
        <Input 
        type="text" 
        name="job"
        value={values.job}
        onChange={handleInputChange} 
        placeholder="Job Title" />
      </FormControl>

      <FormControl id="company" mt={4}>
        <Input 
        type="text" 
        name="company"
        value={values.company}
        onChange={handleInputChange} 
        placeholder="Company" />
      </FormControl>

      <FormControl id="employees" mt={4}>
        <Input 
        type="number" 
        name="employees"
        value={values.employees}
        onChange={handleInputChange} 
        placeholder="Employees" />
      </FormControl>

      <Button type='submit' width="full" mt={4}>
        Sign Up
      </Button>
      </form>
    </Box>    )
    
}

export default SignUpFormCompany;