import { Box, Button, Checkbox, CloseButton, Flex, FormControl, Image, Input, Text, Textarea } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCompany } from '../../api/companyApi'

import { addUserData } from '../../redux/actions/stepOneAction'

import {
  getHeaderFromBase64,
  getFormDataContent,
  base64ToBinary,
  dataURItoBlob
} from '../../utils/functions/upload'
import SuccessModal from '../Modals/Modal'

function Step4() {
  const [imageUrl, setImageUrl] = useState('')

  const [isVisible, setIsVisible] = useState(true)
  const [skill, setSkill] = useState('');
  const [visionMission, setVisionMission] = useState('')
  const [talentSkills, setTalentSkills] = useState([]);
  const [modalOptions, setModalOptions] = useState({
    open: false,
    message: '',
    title: '',
    isSuccess: false,
    yesButton: true,
  })
  const router = useRouter()
  const dispatch = useDispatch()
  const { stepData } = useSelector((state) => state.step)
  const { userData } = useSelector(state => state.user)


  const handleInputChange = (e) => {
    const { value } = e.target
    setVisionMission(value);
  }
  

  const saveSkills = () => {
    setTalentSkills([...talentSkills, { skillName: skill }])
    console.log(talentSkills);
    setSkill('');
  }

  const deleteSkill = (talentSkill, index) => {
    const updatedLanguageItems = talentSkills.filter(
      (item, i) => i !== index
    )
    setTalentSkills(updatedLanguageItems);
  }

  const handleCloseSuccess = () => {
		setModalOptions({
			...modalOptions,
			open: false
		})
	};

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

  const goNextPage = async () => {
    const profile = JSON.parse(userData);
    let updatedData = {
      companyLogoUrl: imageUrl,
      visionMission,
      wantedSkills: talentSkills,
      isFirstLogin: 'false'
    }
   dispatch(addUserData(updatedData))
   const user = await updateCompany({ body: { ...stepData, ...updatedData }, _id: profile._id , token: profile.tokenCode})
   console.log(user);
   if(user !== null || user !== undefined){
    setModalOptions({...modalOptions,
      open: true,
      message: 'Enjoy with your experience!',
      title: 'Login Steps Finish!',
      isSuccess: true,
      yesButton: false,
    })
    localStorage.setItem('userInformations', JSON.stringify(user));
    router.push({
      pathname: '/company/companyProfile',
      query: { id: profile._id }
    })
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
  return (
    <Box >
      <Text ml={5} color="#979EA7" fontSize="3xl">
        Let's make the final touches
      </Text>
      <hr />
      <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
        Create your company profile
      </Text>
      <Text ml={5} mt={2} fontSize="md">
        The fields below are optional, but our the most successful companies
        include this info to help maximize their candidate response rate.
      </Text>

      <Text ml={5} fontWeight="bold" mt={10} fontSize="md">
        Company Logo
      </Text>
      <Text ml={5} mt={2} fontSize="md">
        Files should be at least 150px
      </Text>

      <Image
        ml={5}
        mt={2}
        w={200}
        h={100}
        src={ !imageUrl  || imageUrl.length === 0 || imageUrl === null ?
          'https://via.placeholder.com/300x150?text=Upload+Your+Company+Logo' : imageUrl
        }
      />
      <Box ml={5}
        mt={2}>
        <input type="file" onChange={upload} multiple />
      </Box>

      <Text ml={5} fontWeight="bold" mt={10} fontSize="md">
        Vision / mission statement
      </Text>
      <Text ml={5} mt={2} fontSize="md">
        A compelling mission statement is meaninful to candidates who look for a strong sense of purpose to connect with. Consider using what is on your company's careers page.
      </Text>
      <Textarea onChange={handleInputChange} ml={5} mt={2} h={'auto'} />

      <Box>
        <Text ml={5} fontWeight="bold" mt={10} fontSize="md">
          Tech Stack
      </Text>
        <Text ml={5} mt={2} fontSize="md">
          The tech stack you employ is key for matching skills and candidate preferences. Add as many technologies as you think relevant for prospective candidates.
      </Text>

        <Flex float='left'>
          <FormControl id="skill" mt={4}>
            <Input
              ml={5}
              w={300}
              onChange={(e) => setSkill(e.target.value)}
              name="skill"
              type="text"
              placeholder="Type in a skill and press 'Add' "
              value={skill}
            //   onChange={handleInputChange}
            />
          </FormControl>

          <Button ml={5} mt={4} onClick={saveSkills}>
            Add
        </Button>
        </Flex>
      </Box>

      {talentSkills.map((talentSkill, index) => {
        return (
          <Box>
            <Box mt={20} key={index}>
              <Flex
                float='left'
                display="inline-flex"
                w={'auto'}
                h={30}
                borderWidth="1px"
                borderRadius="8px"
                mt={10}
                ml={5}
              >
                <Text ml={1} mt={1}>
                  {talentSkill.skillName}
                </Text>
                <CloseButton
                  onClick={() => deleteSkill(talentSkill, index)}
                  color="red"
                  alignSelf="center"
                  ml={1}
                  size="sm"
                />
              </Flex>
            </Box>
          </Box>
        )
      })}

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
      <SuccessModal value={modalOptions} close={handleCloseSuccess} />
    </Box>
  )
}

export default Step4
