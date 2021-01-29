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
import { useRouter } from 'next/router'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTalent } from '../../api/talentApi'
import { HEADER, ID } from '../../constants/header'
import { addUserData } from '../../redux/actions/stepOneAction'

function Step7() {
  const [money, setMoney] = useState('')
  const [login, setLogin] = useState('false')
  const [userData, setUserData] = useState([])

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem('userInformations')))
    console.log(ID._id)
    console.log(HEADER.tokenCode)
  }, [])

  const dispatch = useDispatch()
  const router = useRouter()

  const { stepData } = useSelector((state) => state.step)

  const goNextPage = async () => {
    let updatedData = {
      wantedSalary: money,
      isFirstLogin: login
    }
    dispatch(addUserData(updatedData))
    const user = await updateTalent({ body: { ...stepData, ...updatedData } })
    if (user !== null || undefined){
      console.log('user',user)
      localStorage.setItem('userInformations', JSON.stringify(user));
      router.push({
          pathname: '/talentProfile'
      });
  }
  }

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
              value={money}
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
  
    </Box>
  )
}

export default Step7
