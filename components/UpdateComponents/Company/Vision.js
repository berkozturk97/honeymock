import { Box, Button, Checkbox, CloseButton, Flex, FormControl, Image, Input, Text, Textarea } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserData } from '../../../redux/actions/updateAction'
import {
  getHeaderFromBase64,
  getFormDataContent,
  base64ToBinary,
  dataURItoBlob
} from '../../../utils/functions/upload'


function Vision({vision, photo, wantedSkills}) {
  const [imageUrl, setImageUrl] = useState(photo)

  const [isVisible, setIsVisible] = useState(true)
  const [skill, setSkill] = useState('');
  const [visionMission, setVisionMission] = useState(vision)
  const [talentSkills, setTalentSkills] = useState(wantedSkills);
  
  const router = useRouter()
  const dispatch = useDispatch()

//   let updatedData = {
//     companyLogoUrl: imageUrl,
//     visionMission,
//     wantedSkills: talentSkills,
//     isFirstLogin: 'false'
//   }
//  dispatch(addUserData(updatedData))

  const handleInputChange = (e) => {
    const { value } = e.target
    setVisionMission(value);
  }
  

  const saveSkills = () => {
    setTalentSkills([...talentSkills, { skillName: skill }])
      let updatedData = {
    wantedSkills: [...talentSkills, { skillName: skill }],
  }
    dispatch(updateUserData(updatedData))
    console.log(talentSkills);
    setSkill('');
  }

  const deleteSkill = (talentSkill, index) => {
    const updatedTalentItems = talentSkills.filter(
      (item, i) => i !== index
    )
    setTalentSkills(updatedTalentItems);
    let updatedData = {
        wantedSkills: talentSkills,
      }
        dispatch(updateUserData(updatedData))
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
          let updatedData = {
            companyLogoUrl: response.request.responseURL.split('?Con')[0]
            }
          dispatch(updateUserData(updatedData))
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  const updateMision = () => {
        let updatedData = {
        visionMission: visionMission
  }
      dispatch(updateUserData(updatedData))
  }
  
   
  return (
    <Box >
      

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
        src={ imageUrl.length === 0 ?
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
      <Textarea onBlur={updateMision} w={[250,400,500, 800]} value={visionMission} onChange={handleInputChange} ml={5} mt={2} h={'auto'} />

      <Box w={[300,400,500, 800]}>
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
              w={[180,200,300,300]}
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

    
    </Box>
  )
}

export default Vision
