import {
  Box,
  Button,
  Flex,
  Input,
  FormControl,
  Text,
  Select,
  CloseButton
} from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTalent } from '../../api/talentApi'
import { HEADER, ID } from '../../constants/header'
import { addUserData } from '../../redux/actions/stepOneAction'
import SuccessModal from '../Modals/Modal'

function Step7() {
  const [money, setMoney] = useState(0)
  const [data, setData] = useState([])
  const [modalOptions, setModalOptions] = useState({
    open: false,
    message: '',
    title: '',
    isSuccess: false,
    yesButton: true,
  })

  useEffect(async() => {
  }, [])

  const { stepData } = useSelector((state) => state.step)
  const { userData } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const router = useRouter()

  const goNextPage = async () => {
    const profile = JSON.parse(userData);
    let updatedData = {
      wantedSalary: money,
      isFirstLogin: 'false'
    }
    dispatch(addUserData(updatedData))
    const user = await updateTalent({ body: { ...stepData, ...updatedData }, _id: profile._id , token: profile.tokenCode})
    if (!user || user !== null || user !== undefined){
      setModalOptions({...modalOptions,
        open: true,
        message: 'Enjoy with your experience!',
        title: 'Login Steps Finish!',
        isSuccess: true,
        yesButton: false,
      })
      localStorage.setItem('userInformations', JSON.stringify(user));
      router.push({
        pathname: '/talentProfile',
        query: {
          id: profile._id,
        }
    });
  } else {
    setModalOptions({...modalOptions,
      open: true,
      message: 'Please make sure that complete necessary fields!',
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
    <Box>
      <Text ml={5} color="#979EA7" fontSize="3xl">
        One last thing...
      </Text>
      <hr />

      <Box mt={10} mb={20}>
        <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
          What minimum yearly (pre-tax) salary would you like to earn at your
          next job? *
        </Text>
        <Text color="#979EA7" mt={2} ml={5} fontSize="md">
          Make sure to enter an amount you are comfortable with; you can choose
          a different salary on a per city basis once you've finished signing
          up!
        </Text>
        <Text color="#979EA7" mt={2} mt={5} ml={5} fontSize="md">
          I want to earn a minimum salary of:
        </Text>
        <Flex float="left">
          <Text ml={5} fontWeight="bold" mt={5} fontSize="xl">
            $
          </Text>
          <FormControl id="money" mt={4}>
            <Input
              ml={5}
              w={250}
              onChange={(e) => setMoney(parseInt(e.target.value))}
              name="skill"
              type="number"
              placeholder="10000 - 500000 (gross/year) "
              
              //   onChange={handleInputChange}
            />
          </FormControl>
        </Flex>
      </Box>
      <Box mt={20} ml={2}>
        <Button>
          Go Back
        </Button>
        <Button
          position="fixed"
          bg="#7DB0E4"
          color="white"
          _hover="none"
          onClick={goNextPage}
          ml={50}
        >
          Save & Next
        </Button>
      </Box>
      <SuccessModal  value={modalOptions} close={handleCloseSuccess}/>
    </Box>
  )
}

export default Step7
