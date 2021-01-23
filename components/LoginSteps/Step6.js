import {
  Box,
  Button,
  Flex,
  Checkbox,
  Stack,
  Input,
  FormControl,
  Text,
  Select,
  CheckboxGroup,
  HStack,
  Icon,
  Textarea,
  CloseButton
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Constants } from '../../constants/index'
import { addUserData } from '../../redux/actions/stepOneAction'

const { LANGUAGE_LEVEL } = Constants

function Step6() {
  const dispatch = useDispatch()
    const router = useRouter()

  const [level, setLevel] = useState({})
  const [language, setLanguage] = useState('')
  const [languageLevel, setLanguageLevel] = useState([])

  const [skill, setSkill] = useState('');
  const [talentSkills, setTalentSkills] = useState([]);

  function handleSubmit() {
    // e.preventDefault()
    setLanguageLevel([
      ...languageLevel,
      { language: language, level: JSON.parse(level) }
    ])
    console.log('toplu', languageLevel)
  }
  const deleteLanguageItem = (languageItem,index) => {
    console.log(languageItem.level)
    const updatedLanguageItems = languageLevel.filter(
      (item,i) => i !== index
    )
    setLanguageLevel(updatedLanguageItems)
  }

  const handleLanguageLevel = (e) => {
    const { value } = e.target
    setLevel(value)
    console.log(level)
  }

  const saveSkills = () => {
        setTalentSkills([...talentSkills, {skillName: skill}])
        console.log(talentSkills);
        setSkill('');
  }

  const deleteSkill = (talentSkill,index) => {
    const updatedLanguageItems = talentSkills.filter(
        (item,i) => i !== index
      )
      setTalentSkills(updatedLanguageItems);
  }

  const goNextPage = () => {
    let updatedData = {
      languages: languageLevel,
      skills: talentSkills
  
    }
    dispatch(addUserData(updatedData))
    router.push('/login/loginStep7')
  }

  return (
    <>
      <Text ml={5} color="#979EA7" fontSize="3xl">
        Tell us about your skills!
      </Text>
      <hr />

      <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
        Languages *
      </Text>

      <Text ml={5} color="#979EA7" mt={10} fontSize="md">
        Which languages can you use to communicate to humans?
      </Text>

      <Flex direction="row">
        <Box display="inline-flex">
          <FormControl id="language" mt={4}>
            <Input
              ml={5}
              w={300}
              onChange={(e) => setLanguage(e.target.value)}
              name="language"
              type="text"
              placeholder="Language"
              value={language}
              //   onChange={handleInputChange}
            />
          </FormControl>
          <FormControl id="level" ml={3}>
            <Select
              onChange={handleLanguageLevel}
              placeholder="Select Level"
              w={200}
              mt={4}
            >
              {Object.values(LANGUAGE_LEVEL).map((language,index) => {
                return (
                  <option key={index} value={JSON.stringify(language)}>
                    {language.key}
                  </option>
                )
              })}
            </Select>
          </FormControl>
        </Box>
        <Button ml={5} mt={4} onClick={handleSubmit}>
          Save
        </Button>
      </Flex>

      {languageLevel.map((languageItem, index) => {
        return (
          <Flex key={index} float="left" direction="row">
            <Box
              display="inline-flex"
              w={'auto'}
              h={30}
              borderWidth="1px"
              borderRadius="8px"
              mt={10}
              ml={5}
            >
              <Text ml={1} mt={1}>
                {languageItem.language}
              </Text>
              <Text ml={1} mt={1}>
                ({languageItem.level.key})
              </Text>
              <CloseButton
                onClick={() => deleteLanguageItem(languageItem,index)}
                color="red"
                alignSelf="center"
                ml={1}
                mt={1 / 2}
                size="sm"
              />
            </Box>
          </Flex>
        )
      })}

      <Box mt={200} mb={20}>
        <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
          Skills *
          <Text color="#979EA7" mt={2} fontSize="md">
          Which languages and frameworks are your currently using?
          Feel free to also add skills such as Git, TDD, CI, Agile, etc...
          </Text>
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
          <Flex mt={10} key={index} float="left">
            <Box
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
                onClick={() => deleteSkill(talentSkill,index)}
                color="red"
                alignSelf="center"
                ml={1}
                size="sm"
              />
            </Box>
          </Flex>
        )
      })}


        <Button ml={5} mt={60} onClick={goNextPage}>
            Save & Next
        </Button>

    </>
  )
}

export default Step6
