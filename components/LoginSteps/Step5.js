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
  Textarea
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { DatePicker } from 'rsuite'
import { addUserData } from '../../redux/actions/stepOneAction'
import ProfessionalExperience from '../JobExperince/ProfessionalExperience'
import TalentEducation from '../TalentEducation/TalentEducation'

function Step5() {
  const dispatch = useDispatch()
  const router = useRouter();
  const [study, setStudy] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: ''
  })
  const [talentEducations, setTalentEducations] = useState([])
  function handleSubmit(e) {
    e.preventDefault()

    
    setTalentEducations([...talentEducations, study])
    console.log(talentEducations)
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setStudy({ ...study, [name]: value })
  }

  const deleteEducation = (talentEducation, index) => {
    console.log(talentEducation)
    const updatedTalentEducation = talentEducations.filter(
      (te,i) => i !== index
    )
    setTalentEducations(updatedTalentEducation)
    console.log('guncel', talentEducations);
  }

  const goNextPage = () => {
    let updatedData = {
      educations: talentEducations,
  
    }
    dispatch(addUserData(updatedData))
    router.push('/login/loginStep6')
  }


  return (
    <>
      <Text ml={5} color="#979EA7" fontSize="3xl">
        Tell us about your education!
      </Text>
      <hr />

      <Text ml={5} fontWeight="bold" mt={10} fontSize="md">
        Add your education
      </Text>

      <Flex direction="row">
        {/* <span>
              <Icon mr={5}
                width="15px"
                height="15px"
                borderRadius="4px" as={AiFillPlusCircle} />
          </span> */}
        {/* <AddExperience/> */}
        <form onSubmit={handleSubmit}>
          <FormControl id="school" mt={4}>
            <Input
              ml={5}
              name="school"
              type="text"
              placeholder="University / School"
              value={study.school}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl id="degree" mt={4}>
            <Input
              ml={5}
              name="degree"
              type="text"
              placeholder="Degree, field of study"
              value={study.degree}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl ml={5} id="password" mt={4}>
            <DatePicker
              key='date1'
              onChange={
                (date) => setStudy({ ...study, startDate: date })
                
              }
              format="YYYY-MM"
            />
            <DatePicker
              key='date2'
              onChange={(date2) => setStudy({ ...study, endDate: date2 })
               
              }
              format="YYYY-MM"
            />
          </FormControl>

          <Button ml={5} type="submit" width="full" mt={4}>
            Save
          </Button>
        </form>
      </Flex>

      <Box ml={5} mt={10}>
        {talentEducations.map((talentEducation, index) => {
          return (
            <>
              <TalentEducation
                talentEducation={talentEducation}
                index={index}
              />
              <Button onClick={() => deleteEducation(talentEducation,index)}>
                Delete
              </Button>
            </>
          )
        })}
      </Box>

      <Button bg="#7DB0E4" color="white" _hover="none" onClick={goNextPage} ml={5} mt={5}>
        Click And Save
      </Button>
    </>
  )
}

export default Step5
