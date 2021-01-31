import {
  FormControl,
  Input,
  Box,
  Button,
  Heading,
  Flex
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { createCompany } from '../../api/companyApi'
import { createTalent } from '../../api/talentApi'
import SuccessModal from '../Modals/Modal'

function SignUpFormCompany() {
  const router = useRouter()
  const [values, setValues] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    city: '',
    job: '',
    company: '',
    password: '',
    rePassword: ''
  })
  const [modalOptions, setModalOptions] = useState({
    open: false,
    message: '',
    title: '',
    isSuccess: false,
    yesButton: true
  })
  const handleCloseSuccess = () => {
    setModalOptions({
      ...modalOptions,
      open: false
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

 

  async function handleSubmit(e) {
    e.preventDefault()
    const body = {
      name: values.name,
      surname: values.surname,
      password: values.password,
      email: values.email,
      companyCity: values.city,
      jobTitle: values.job,
      companyName: values.company,
      phone: values.phone,
    }
    console.log(body)
    if(
      values.name.trim().length === 0 ||
      values.surname.trim().length === 0 ||
      values.email.trim().length === 0 ||
      values.phone.trim().length === 0 ||
      values.city.trim().length === 0 ||
      values.job.trim().length === 0 ||
      values.company.trim().length === 0 ||
      values.rePassword.trim().length === 0 ||
      values.password.trim().length === 0 ||
      values.password.trim().length < 6 ||
      values.password !== values.rePassword
    ){
      setModalOptions({
        ...modalOptions,
        open: true,
        message: 'Please make sure that fill every field and also control your password',
        title: 'Opps something went wrong please try again',
        isSuccess: false,
        yesButton: true
      })
    } else {
      const userInformations = await createCompany({ body: body })
      console.log(userInformations)
      if (userInformations.status === 200) {
        setModalOptions({
          ...modalOptions,
          open: true,
          message: 'Enjoy!',
          title: 'Sign Up Successful! Welcome to HoneyMock',
          isSuccess: true,
          yesButton: false
        })
        setValues({
          name: '',
          surname: '',
          email: '',
          phone: '',
          city: '',
          job: '',
          employees: 0,
          company: '',
          password: '',
          rePassword: ''
        })
        router.push({
          pathname: '/loginCompany'
        })
      } else {
        setModalOptions({
          ...modalOptions,
          open: true,
          message: 'Please make sure that valid email address!',
          title: 'Opps something went wrong please try again',
          isSuccess: false,
          yesButton: true
        })
      }
    }
   
  }
  return (
    <Box w={[300, 300, 400, 400]}>
      <Heading>Join XXXX</Heading>
      <Heading as="h6" size="xs">
        Find candidates for free!
      </Heading>
      <form onSubmit={handleSubmit}>
        {/* <Flex float='left'> */}
        <FormControl id="name" mt={4}>
          <Input
            w={[140, 140, 190, 190]}
            type="name"
            name="name"
            value={values.name}
            onChange={handleInputChange}
            placeholder="Your First Name"
          />

          <Input
            ml={5}
            w={[140, 140, 190, 190]}
            type="name"
            name="surname"
            value={values.surname}
            onChange={handleInputChange}
            placeholder="Your Last Name"
          />
        </FormControl>
        {/* </Flex> */}
        <FormControl id="email" mt={4}>
          <Input
            type="email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            placeholder="Work email address"
          />
        </FormControl>

        <FormControl id="password" mt={4}>
          <Input
            name="password"
            type="password"
            value={values.password}
            onChange={handleInputChange}
            placeholder="Create a password"
          />
        </FormControl>

        <FormControl id="rePassword" mt={4}>
          <Input
            type="password"
            name="rePassword"
            value={values.rePassword}
            onChange={handleInputChange}
            placeholder="Repeat password"
          />
        </FormControl>

        <FormControl id="phoneAndCity" mt={4}>
          <Input
            w={[140, 140, 190, 190]}
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleInputChange}
            placeholder="Phone"
          />

          <Input
            ml={5}
            w={[140, 140, 190, 190]}
            type="text"
            name="city"
            value={values.city}
            onChange={handleInputChange}
            placeholder="City"
          />
        </FormControl>

        <FormControl id="jobTitle" mt={4}>
          <Input
            type="text"
            name="job"
            value={values.job}
            onChange={handleInputChange}
            placeholder="Job Title"
          />
        </FormControl>

        <FormControl id="company" mt={4}>
          <Input
            type="text"
            name="company"
            value={values.company}
            onChange={handleInputChange}
            placeholder="Company"
          />
        </FormControl>


        <Button type="submit" width="full" mt={4}>
          Sign Up
        </Button>
      </form>
      <SuccessModal value={modalOptions} close={handleCloseSuccess}/>
    </Box>

    
  )
}

export default SignUpFormCompany
