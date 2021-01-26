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
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { DatePicker } from 'rsuite';

import { addUserData } from '../../redux/actions/stepOneAction';
import ProfessionalExperience from '../JobExperince/ProfessionalExperience';

function Step4() {
  const router = useRouter()
  const dispatch = useDispatch()
  const [experience, setExperience] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: ''
  });
  const [year, setYear] = useState(undefined);
  const [talentExperiences, setTalentExperiences] = useState([]);
  function handleSubmit(e) {
    e.preventDefault()
    setTalentExperiences([...talentExperiences, experience]);
    console.log(talentExperiences);

  }
  const handleInputChange = e => {
    const { name, value } = e.target
    setExperience({ ...experience, [name]: value })
  }
  
  const deleteExperience = (talentExperience,index) => {
    console.log(talentExperience);
    const updatedTalentExperience = talentExperiences.filter((te,i) => i !== index)
    setTalentExperiences(updatedTalentExperience);
    console.log('guncel', updatedTalentExperience);
  }

  const handleYears = (e) => {
    setYear(parseInt(e.target.value));
    console.log(year);
  }

  const goNextPage = () => {
    let updatedData = {
      workedCompanies: talentExperiences,
      experienceYear: year
    }
    dispatch(addUserData(updatedData))
    router.push('/login/loginStep5')
  }

  return (
    <>
      <Text ml={5} color="#979EA7" fontSize="3xl">
        Tell us about your experience!
      </Text>
      <hr />

      <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
        Years of professional experience *
      </Text>

      <Select placeholder="Select years of professional experience" onChange={handleYears} w={700} ml={5} mt={8}>
        <option key='1' value="0">{`<1 Years`}</option>
        <option key='2' value="1">1 Year</option>
        <option key='3' value="2">2 Years</option>
        <option key='4' value="3">3 Years</option>
        <option key='5' value="4">4 Years</option>
        <option key='6' value="5">5 Years</option>
        <option key='7' value="6">6 Years</option>
        <option key='8' value="7">7 Years</option>
        <option key='9' value="8">8 Years</option>
        <option key='10' value="9">9 Years</option>
        <option key='11' value="10+">10+ Years</option>
      </Select>

      <Text ml={5} fontWeight="bold" mt={10} fontSize="md">
        Add your professional experience
      </Text>

      <Flex direction='row'>
        <form onSubmit={handleSubmit}>
          <Flex float={'left'}>
            <FormControl id="company" w={320} mt={4}>
              <Input
                ml={5}
                name="company"
                type="text"
                placeholder="Company"
                value={experience.company}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl id="position" ml={30} w={320} mt={4}>
              <Input
                ml={5}
                name="position"
                type="text"
                placeholder="Position"
                value={experience.position}
                onChange={handleInputChange}
              />
            </FormControl>
          </Flex>

          <FormControl ml={5} id="password" mt={20}>
            <DatePicker style={{width:320}} onChange={date => setExperience({ ...experience, startDate: date })} format='YYYY-MM' />
            <DatePicker style={{width:320, marginLeft:35}} onChange={date => setExperience({ ...experience, endDate: date })} format='YYYY-MM' />
          </FormControl>

          <FormControl id="description" mt={10}>
            <Textarea
              componentclass={'textarea'}
              //Text ortadan basliyor
              w={700}
              ml={5}
              h={100}
              name="description"
              type="text"
              placeholder="What did you do?"
              value={experience.description}
              onChange={handleInputChange}
            />
          </FormControl>

          <Button ml={5} type="submit" width="full" mt={4}>
            Save
            </Button>
        </form>


      </Flex>

      <Box ml={5} mt={10}>
        {
          talentExperiences.map((talentExperience, index) => {
            return (
              <>
                <ProfessionalExperience talentExperience={talentExperience} index={index} />
                <Button key={index} onClick={() => deleteExperience(talentExperience,index)}>Delete</Button>
              </>
            )
          })
        }
      </Box>

      <Button bg="#7DB0E4" color="white" _hover="none" onClick={goNextPage} ml={5} mt={5}>
        Click And Save
      </Button>
    </>
  )
}

export default Step4
