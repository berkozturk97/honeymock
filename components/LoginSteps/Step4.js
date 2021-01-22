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
import { DatePicker } from 'rsuite';
import {Input as RInput }from 'rsuite';
import ProfessionalExperience from '../JobExperince/ProfessionalExperience';
import AddExperience from '../Modals/AddExperience';



function Step4() {
  const router = useRouter()
    const [experience, setExperience] = useState({
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: ''
    });
    const [talentExperiences,setTalentExperiences] = useState([]);
    function handleSubmit(e) {
        e.preventDefault()
        
            localStorage.setItem('userExperience', JSON.stringify(experience));
            const deneme = localStorage.getItem('userExperience');
            setTalentExperiences([...talentExperiences, JSON.parse(deneme)]);
            console.log(talentExperiences);
           
        }
    const handleInputChange = e => {
            const { name, value } = e.target
            setExperience({ ...experience, [name]: value })
    }
    const handleDateChange = e => {
        const { value } = e.target
        setExperience({ ...experience, startDate: value })
    }
    const deleteExperience = (talentExperience) => {
        console.log(talentExperience);
        const updatedTalentExperience = talentExperiences.filter(te => te.company !== talentExperience.company)
        setTalentExperiences(updatedTalentExperience);
        console.log('guncel',updatedTalentExperience);
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

      <Select placeholder="Select years of professional experience"  w={300} ml={5} mt={8}>
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
    
        <Flex  direction='row'>
        {/* <span>
            <Icon mr={5}
              width="15px"
              height="15px"
              borderRadius="4px" as={AiFillPlusCircle} />
        </span> */}
        {/* <AddExperience/> */}
        <form onSubmit={handleSubmit}>
              <FormControl id="company" mt={4}>
                <Input
                ml={5}
                  name="company"
                  type="text"
                  placeholder="Company"
                  value={experience.company}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl id="position" mt={4}>
                <Input
                    ml={5}
                  name="position"
                  type="text"
                  placeholder="Position"
                  value={experience.position}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl ml={5} id="password" mt={4}>
                <DatePicker   onChange={date=> setExperience({...experience, startDate: date})}  format='YYYY-MM' />
                <DatePicker   onChange={date=> setExperience({...experience, endDate: date})}  format='YYYY-MM' />
              </FormControl>

             

              <FormControl id="description" mt={4}>
                <Textarea
                 componentClass='textarea'
                  //Text ortadan basliyor
                  w={300}
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
                talentExperiences.map((talentExperience,index) => {
                    return (
                        <>
                    <ProfessionalExperience talentExperience={talentExperience} index={index} />
                            <Button onClick={() => deleteExperience(talentExperience)}>Delete</Button>
                        </>
                    )
                })
            }
        </Box>

        <Button bg="#7DB0E4" color="white" _hover="none" onClick={() => router.push('/login/loginStep5')} ml={5} mt={5}>
        Click And Save
      </Button>
    </>
  )
}

export default Step4
