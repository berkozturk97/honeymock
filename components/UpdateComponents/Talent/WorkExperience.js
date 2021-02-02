import {
  Box,
  Button,
  Flex,
  Input,
  FormControl,
  Text,
  Select,
  Textarea
} from '@chakra-ui/react'

import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { DatePicker } from 'rsuite'

import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'

import { updateUserData } from '../../../redux/actions/updateAction'

import ProfessionalExperience from '../../JobExperince/ProfessionalExperience'

function WorkExperience({ user }) {
  const router = useRouter()
  const dispatch = useDispatch()
  const [experience, setExperience] = useState({
    company: '',
    position: '',
    startDate: '03/03/2020',
    endDate: '03/03/2020',
    description: ''
  })
  const [year, setYear] = useState(undefined)
  const [talentExperiences, setTalentExperiences] = useState(
    user.workedCompanies
  )
  function handleSubmit(e) {
    e.preventDefault()
    setTalentExperiences([...talentExperiences, experience])
    let updatedData = {
      workedCompanies: [...talentExperiences, experience]
    }
    dispatch(updateUserData(updatedData))
    console.log(talentExperiences)
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setExperience({ ...experience, [name]: value })
  }

  const deleteExperience = (talentExperience, index) => {
    console.log(talentExperience)
    const updatedTalentExperience = talentExperiences.filter(
      (te, i) => i !== index
    )
    setTalentExperiences(updatedTalentExperience)
    let updatedData = {
      workedCompanies: updatedTalentExperience
    }
    dispatch(updateUserData(updatedData))
    console.log('guncel', updatedTalentExperience)
  }

  const handleYears = (e) => {
    setYear(parseInt(e.target.value))
    console.log(year)
  }

  const handleBlur = () => {
    let updatedData = {
      experienceYear: year
    }
    dispatch(updateUserData(updatedData))
  }

  const goNextPage = () => {
    let updatedData = {
      workedCompanies: talentExperiences,
      experienceYear: year
    }
    dispatch(addUserData(updatedData))
    router.push('/talent/education')
  }

  return (
    <Box>
      

      <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
        Years of professional experience *
      </Text>

      <Select
        onBlur={handleBlur}
        placeholder="Select years of professional experience"
        onChange={handleYears}
        w={[250, 400, 500, 700]}
        ml={5}
        mt={8}
      >
        <option key="1" value="0">{`<1 Years`}</option>
        <option key="2" value="1">
          1 Year
        </option>
        <option key="3" value="2">
          2 Years
        </option>
        <option key="4" value="3">
          3 Years
        </option>
        <option key="5" value="4">
          4 Years
        </option>
        <option key="6" value="5">
          5 Years
        </option>
        <option key="7" value="6">
          6 Years
        </option>
        <option key="8" value="7">
          7 Years
        </option>
        <option key="9" value="8">
          8 Years
        </option>
        <option key="10" value="9">
          9 Years
        </option>
        <option key="11" value="10+">
          10+ Years
        </option>
      </Select>

      <Text ml={5} fontWeight="bold" mt={10} fontSize="md">
        Add your professional experience
      </Text>


        <form onSubmit={handleSubmit}>
          <Box d='flex'>
            <FormControl id="company" w={[100, 160, 320, 320]} mt={4}>
              <Input
                ml={5}
                name="company"
                type="text"
                placeholder="Company"
                value={experience.company}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl id="position" ml={30} w={[100, 160, 320, 320]} mt={4}>
              <Input
                ml={5}
                name="position"
                type="text"
                placeholder="Position"
                value={experience.position}
                onChange={handleInputChange}
              />
            </FormControl>
          </Box>

         
            <FormControl ml={5} id="password" mt={5} mb={10}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  value={experience.startDate}
                  onChange={date => setExperience({ ...experience, startDate: date })}
                
                  KeyboardButtonProps={{
                    'aria-label': 'change date'
                  }}
                />

                <KeyboardDatePicker
                  disableToolbar
                  style={{marginLeft: 10}}
                  value={experience.endDate}
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  onChange={date => setExperience({ ...experience, endDate: date })}
                  id="date-picker-inline"
              
                  KeyboardButtonProps={{
                    'aria-label': 'change date'
                  }}
                />
              </MuiPickersUtilsProvider>
            </FormControl>
        
          <FormControl id="description" mt={10}>
            <Textarea
              componentclass={'textarea'}
              //Text ortadan basliyor
              w={[250, 400, 500, 700]}
              ml={5}
              name="description"
              type="text"
              placeholder="What did you do?"
              value={experience.description}
              onChange={handleInputChange}
            />
          </FormControl>

          <Button w={[250, 400, 500, 700]} ml={5} type="submit" mt={4}>
            Save
          </Button>
        </form>
      

      <Box ml={5} mt={10}>
        {talentExperiences.map((talentExperience, index) => {
          return (
            <Box>
              <ProfessionalExperience
                talentExperience={talentExperience}
                index={index}
              />
              <Button
                mt={2}
                key={index}
                onClick={() => deleteExperience(talentExperience, index)}
              >
                Delete
              </Button>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default WorkExperience
