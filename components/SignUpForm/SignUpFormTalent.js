import { FormControl, Input, Box, Button, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { createTalent } from '../../api/talentApi'
import LinkedInSignUp from '../LinkedIn/LinkedInSignUp'
import SuccessModal from '../Modals/Modal'

function SignUpFormTalent() {
  const router = useRouter()
  const [values, setValues] = useState({
    name: '',
    surname: '',
    email: '',
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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
    
  }

  const handleCloseSuccess = () => {
    setModalOptions({
      ...modalOptions,
      open: false
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const body = {
      name: values.name,
      surname: values.surname,
      password: values.password,
      email: values.email
    }
    console.log(body)
    if (
      values.email.trim().length === 0 ||
      values.password.trim().length === 0 ||
      values.name.trim().length === 0 ||
      values.surname.trim().length === 0 ||
      values.rePassword.trim().length === 0 ||
      values.password !== values.rePassword
    ) {
      setModalOptions({
        ...modalOptions,
        open: true,
        message: 'Please make sure that fill every field and also control your password',
        title: 'Opps something went wrong please try again',
        isSuccess: false,
        yesButton: true
      })
    } else {
      const userInformations = await createTalent({ body: body })
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
          password: '',
          rePassword: ''
        })
        router.push({
          pathname: '/loginTalent'
        })
      } else {
        setModalOptions({
          ...modalOptions,
          open: true,
          message: 'Please make sure that email and password are correct!',
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
        Create a free XXXX account and let companies apply directly to you.
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="firstName" mt={4}>
          <Input
            type="name"
            name="name"
            value={values.name}
            onChange={handleInputChange}
            placeholder="Your First Name"
          />
        </FormControl>

        <FormControl id="lastName" mt={4}>
          <Input
            type="name"
            name="surname"
            value={values.surname}
            onChange={handleInputChange}
            placeholder="Your Last Name"
          />
        </FormControl>

        <FormControl id="email" mt={4}>
          <Input
            type="email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            placeholder="Email address"
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

        <Button type="submit" width="full" mt={4}>
          Sign Up
        </Button>

        <LinkedInSignUp />

        <SuccessModal value={modalOptions} close={handleCloseSuccess} />
      </form>
    </Box>
  )
}

export default SignUpFormTalent
