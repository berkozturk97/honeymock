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
import SuccessModal from '../Modals/Modal';
import { loginCompany } from '../../api/companyApi';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../redux/actions/userAction';
  
  function LoginCompanyForm() {
    const router = useRouter();
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [modalOptions, setModalOptions] = useState({
      open: false,
      message: '',
      title: '',
      isSuccess: false,
      yesButton: true,
    })
  
    async function handleSubmit(e) {
      e.preventDefault()
      const body = { email, password }
      const userInformations = await loginCompany({ body: body })
      console.log('user infp',userInformations)
      if (userInformations !== null || undefined) {
        setModalOptions({...modalOptions,
          open: true,
          message: 'Enjoy!',
          title: 'Login Successful! Welcome to HoneyMock',
          isSuccess: true,
          yesButton: false,
        })
        localStorage.setItem('userInformations', JSON.stringify(userInformations));
        dispatch(setUserData(JSON.stringify(userInformations)))
        if( userInformations.isFirstLogin === 'false'){
           router.push({
            pathname: '/companyProfile'
        });
        } else {
          router.push({
            pathname: '/company/basics'
        });
        }
      } else {
        setModalOptions({...modalOptions,
          open: true,
          message: 'Please make sure that email and password are correct!',
          title: 'Opps something went wrong please try again',
          isSuccess: false,
          yesButton: true
        })
      }
    }

    const handleCloseSuccess = () => {
      setModalOptions({
        ...modalOptions,
        open: false
      })
    };
  
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
  
          <Checkbox  border="black" colorScheme="green">
            Remember Me
          </Checkbox>
  
          <Button type="submit" width="full" mt={4}>
            Log In
          </Button>
        </form>
        <SuccessModal value={modalOptions} close={handleCloseSuccess}/>
      </Box>
    )
  }
  
  export default LoginCompanyForm;
  