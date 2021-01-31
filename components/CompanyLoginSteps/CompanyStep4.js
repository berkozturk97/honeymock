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

function Step4() {
  const [imageUrl, setImageUrl] = useState('')

  const [isVisible, setIsVisible] = useState(true)
  const [skill, setSkill] = useState('');
  const [talentSkills, setTalentSkills] = useState([]);
  const router = useRouter()
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCompanyInfo({ ...companyInfo, [name]: value })
    console.log(companyInfo)
  }
  const handleEmployeeNumber = (e) => {
    setCompanyInfo({ ...companyInfo, employee: e.target.value })
    console.log(companyInfo)
  }

  const handleIndustry = (e) => {
    if (e.target.value === 'Other') {
      setIsVisible(false)
    } else {
      setIsVisible(true)
      setCompanyInfo({ ...companyInfo, industry: e.target.value })
    }
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
    // let updatedData = {
    //   wantedRoles: jobs,
    //   wantedWorkCity: workingCities
    // }
   // dispatch(addUserData(updatedData))
    const mainUser = await JSON.parse(localStorage.getItem('userInformations'));
    router.push({
      pathname: '/company/companyProfile',
      query: { id: mainUser._id }
    })
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
        src={
          'https://via.placeholder.com/300x150?text=Upload+Your+Company+Logo'
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
      <Textarea ml={5} mt={2} h={'auto'} />

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
    </Box>
  )
}

export default Step4
