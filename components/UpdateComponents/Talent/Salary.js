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
import { updateUserData } from '../../../redux/actions/updateAction'

function Salary({user}) {
  const [money, setMoney] = useState(user.wantedSalary)

  const dispatch = useDispatch()
  const router = useRouter()

  const handleBlur = () => {
    let updatedData = {
      wantedSalary: money
    }
    dispatch(updateUserData(updatedData))
  }

  return (
    <Box>
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
              onBlur={handleBlur}
            />
          </FormControl>
        </Flex>
      </Box>
    </Box>
  )
}

export default Salary
