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
import { useDispatch } from 'react-redux'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'
import { addUserData } from '../../redux/actions/stepOneAction'
import TalentEducation from '../TalentEducation/TalentEducation'

function Step5() {
  const dispatch = useDispatch()
  const router = useRouter();
  const [study, setStudy] = useState({
    school: '',
    degree: '',
    startDate: '03/03/2020',
    endDate: '03/03/2020'
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
    router.push('/talent/skills')
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
      
        <form onSubmit={handleSubmit}>
          <FormControl id="school" mt={4}>
            <Input
              ml={5}
              w={[250,320,500,500]}
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
              w={[250,320,500,500]}
              name="degree"
              type="text"
              placeholder="Degree, field of study"
              value={study.degree}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl ml={5} id="password" mt={4}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                value={study.startDate}
                onChange={(date) =>
                  setStudy({ ...study, startDate: date })
                }
                
                KeyboardButtonProps={{
                  'aria-label': 'change date'
                }}
              />

              <KeyboardDatePicker
                disableToolbar
                style={{ marginLeft: 10 }}
                value={study.endDate}
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                onChange={(date) =>
                    setStudy({ ...study, endDate: date })
                }
                id="date-picker-inline"
                
                KeyboardButtonProps={{
                  'aria-label': 'change date'
                }}
              />
            </MuiPickersUtilsProvider>
          </FormControl>

          <Button w={[250,320,500,500]} ml={5} type="submit" width="full" mt={4}>
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
