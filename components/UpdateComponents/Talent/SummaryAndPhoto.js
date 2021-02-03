import { Box, Button, Checkbox, CloseButton, Flex, FormControl, Image, Input, Text, Textarea } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateUserData } from '../../../redux/actions/updateAction'


import {
  getHeaderFromBase64,
  getFormDataContent,
  base64ToBinary,
  dataURItoBlob
} from '../../../utils/functions/upload'

function SummaryAndPhoto({user}) {
    const [imageUrl, setImageUrl] = useState(user.proilePhoto)
    const [summary, setSummary] = useState(user.summary)
 
  
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
          let updatedData = {
            proilePhoto: response.request.responseURL.split('?Con')[0]
          }
          dispatch(updateUserData(updatedData))
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  const handleBlur = () => {
      let updatedData = {
      summary: summary
    }
    dispatch(updateUserData(updatedData))

  }

    return (
        <Box w={[350,600,780,1000]}  backgroundColor='#fff' h={'auto'} p={10} m={(0, 'auto')} mt={10}>
             <Box >
      
      <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
        Update your talent profile
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
        ml={5}
        mt={2}
        src={ 
            'https://via.placeholder.com/300x150?text=Upload+Your+Profile+Photo' 
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
    <Textarea onBlur={handleBlur} value={summary} onChange={(e) => e.target.value} ml={5} mt={2} h={'auto'} />




      
    </Box>
        </Box>
      )
}

export default SummaryAndPhoto;