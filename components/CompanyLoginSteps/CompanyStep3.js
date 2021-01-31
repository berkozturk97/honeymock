import {
  Box,
  Button,
  Checkbox,
  Text
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Constants } from '../../constants/index'
import { addUserData } from '../../redux/actions/stepOneAction'

const { INDUSTRIES } = Constants

function Step3() {
  const router = useRouter()
  const dispatch = useDispatch()
  const goNextPage = () => {
    router.push('/company/final')
  }
  return (
    <>
      <Text ml={5} color="#979EA7" fontSize="3xl">
        Terms and Conditions!
      </Text>
      <hr />
      <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
        Accept our terms and conditions
      </Text>
      <Text ml={5} mt={2} fontSize="md">
        Hired is committed to protecting your data. As part of our continuing
        compliance efforts, please accept our updated terms.
      </Text>

      <Box w={[300, 300, 400, 700]} mt={5} ml={5}>
        <Checkbox border="#555555" textAlign="center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
          commodi consectetur earum dignissimos ipsam animi possimus vero, ipsum
          dolorum dolore officia atque tempore sunt velit voluptas perferendis
          amet? Tenetur, praesentium.
        </Checkbox>
        <Checkbox border="#555555" textAlign="center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
          commodi consectetur earum dignissimos ipsam animi possimus vero, ipsum
          dolorum dolore officia atque tempore sunt velit voluptas perferendis
          amet? Tenetur, praesentium.
        </Checkbox>
      </Box>

      <Button
        bg="#7DB0E4"
        color="white"
        _hover="none"
        onClick={goNextPage}
        ml={5}
        mt={5}
      >
        Click And Save
      </Button>
    </>
  )
}

export default Step3
