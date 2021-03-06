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
import { Constants } from '../../../constants/index'
import { updateUserData } from '../../../redux/actions/updateAction'

const { LANGUAGE_LEVEL } = Constants

function LanguageSkill({ user }) {
  const dispatch = useDispatch()
  const router = useRouter()

  const [level, setLevel] = useState({})
  const [language, setLanguage] = useState('')
  const [languageLevel, setLanguageLevel] = useState(user.languages)

  const [skill, setSkill] = useState('')
  const [talentSkills, setTalentSkills] = useState(user.skills)

  function handleSubmit() {
    // e.preventDefault()
    setLanguageLevel([
      ...languageLevel,
      { language: language, level: JSON.parse(level) }
    ])
    let updatedData = {
      languages: [
        ...languageLevel,
        { language: language, level: JSON.parse(level) }
      ]
    }
    dispatch(updateUserData(updatedData))
    console.log('toplu', languageLevel)
  }
  const deleteLanguageItem = (languageItem, index) => {
    console.log(languageItem.level)
    const updatedLanguageItems = languageLevel.filter((item, i) => i !== index)
    setLanguageLevel(updatedLanguageItems)
    let updatedData = {
      languages: updatedLanguageItems
    }
    dispatch(updateUserData(updatedData))
  }

  const handleLanguageLevel = (e) => {
    const { value } = e.target
    setLevel(value)
    console.log(level)
  }

  const saveSkills = () => {
    setTalentSkills([...talentSkills, { skillName: skill }])
    let updatedData = {
      skills: [...talentSkills, { skillName: skill }]
    }
    dispatch(updateUserData(updatedData))
    console.log(talentSkills)
    setSkill('')
  }

  const deleteSkill = (talentSkill, index) => {
    const updatedLanguageItems = talentSkills.filter((item, i) => i !== index)
    setTalentSkills(updatedLanguageItems)
    let updatedData = {
      skills: updatedLanguageItems
    }
    dispatch(updateUserData(updatedData))
  }

  return (
    <Box>
      <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
        Languages *
      </Text>

      <Text ml={5} color="#979EA7" mt={10} fontSize="md">
        Which languages can you use to communicate to humans?
      </Text>

      <Flex direction="row">
        <Box display="inline-flex">
          <FormControl id="language" ml={5} mt={4}>
            <Input
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
              mt={4}
            >
              {Object.values(LANGUAGE_LEVEL).map((language, index) => {
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
                onClick={() => deleteLanguageItem(languageItem, index)}
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
            Which languages and frameworks are your currently using? Feel free
            to also add skills such as Git, TDD, CI, Agile, etc...
          </Text>
        </Text>
        <Flex float="left">
          <FormControl id="skill" mt={4}>
            <Input
              ml={5}
              onChange={(e) => setSkill(e.target.value)}
              name="skill"
              type="text"
              placeholder="Type in a skill and press 'Add' "
              value={skill}
              //   onChange={handleInputChange}
            />
          </FormControl>

          <Button ml={10} mt={4} onClick={saveSkills}>
            Add
          </Button>
        </Flex>
      </Box>

      {talentSkills.map((talentSkill, index) => {
        return (
          <Box>
            <Box mt={20} key={index}>
              <Flex
                float="left"
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

export default LanguageSkill
