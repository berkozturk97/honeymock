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
  const [login, setLogin] = useState(false)
  const [userData, setUserData] = useState([])

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem('userInformations')))
    console.log(ID._id)
    console.log(HEADER.tokenCode)
  }, [])

  const dispatch = useDispatch()
  const router = useRouter()

  const { stepData } = useSelector((state) => state.step)

  const goNextPage = () => {
    let updatedData = {
      wantedSalary: money,
      isFirstLogin: false
    }
    dispatch(addUserData(updatedData))
    updateTalent({ body: { ...stepData, ...updatedData } })
    router.push('/talentProfile')
  }

  return (
    <>
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
              w={300}
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

      <Box h={100} display="block">
        <Button left={0} mt={60}>
          Go Back
        </Button>
        <Button
          position="fixed"
          mr={30}
          right={40}
          onClick={goNextPage}
          mt={60}
        >
          Save & Next
        </Button>
      </Box>
    </>
  )
}

export default Step7
