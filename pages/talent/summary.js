import { Box, Button, Checkbox, CloseButton, Flex, FormControl, Image, Input, Text, Textarea } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addUserData } from '../../redux/actions/stepOneAction'

import {
  getHeaderFromBase64,
  getFormDataContent,
  base64ToBinary,
  dataURItoBlob
} from '../../utils/functions/upload'

function Summary() {
    const [imageUrl, setImageUrl] = useState('')
    const [summary, setSummary] = useState('')
 
  
  const router = useRouter()
  const dispatch = useDispatch()

  const upload = async (event) => {
    const { url } = await getFormDataContent(event)
    const file = event.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.onloadend = async function (e) {
      const data = e.target.result
      await axios
        .put(url, base64ToBinary(data), { headers: getHeaderFromBase64(data) })
        .then((response) => {
          setImageUrl(response.request.responseURL.split('?Con')[0])
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  const goNextPage = () => {
    let updatedData = {
      proilePhoto: imageUrl,
      summary: summary
    }
    dispatch(addUserData(updatedData))
    router.push('/talent/salary')
  }
    return (
        <Box w={[350,600,780,1000]}  backgroundColor='#fff' h={'auto'} p={10} m={(0, 'auto')} mt={10}>
             <Box >
      <Text ml={5} color="#979EA7" fontSize="3xl">
        Almost done!
      </Text>
      <hr />
      <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
        Create your talent profile
      </Text>
      <Text ml={5} mt={2} fontSize="md">
        The fields below are optional, but our the most successful talents
        include this info to help maximize their candidate response rate.
      </Text>

      <Text ml={5} fontWeight="bold" mt={10} fontSize="md">
        Profile Photo
      </Text>
      <Text ml={5} mt={2} fontSize="md">
        Files should be at least 150px
      </Text>

      <Image
        w={200}
        h={100}
        ml={5}
        mt={2}
        src={ !imageUrl  || imageUrl.length === 0 || imageUrl === null ?
          'https://via.placeholder.com/300x150?text=Upload+Your+Company+Logo' : imageUrl
        }
      />
        <Box ml={5}
        mt={2}>
      <input type="file" onChange={upload} multiple />
      </Box>

      <Text ml={5} fontWeight="bold" mt={10} fontSize="md">
        Summary
      </Text>
      <Text ml={5} mt={2} fontSize="md">
        Write your summary.
      </Text>
    <Textarea value={summary} onChange={(e) => setSummary(e.target.value)} ml={5} mt={2} h={'auto'} />




        <Box w={100} h={'auto'} mt={30}>
      <Button
        bg="#7DB0E4"
        color="white"
        _hover="none"
        onClick={goNextPage}
        ml={5}
        left={750}
        right={0}
        mt={10}
      >
        Click And Save
      </Button>
      </Box>
    </Box>
        </Box>
      )
}

export default Summary;