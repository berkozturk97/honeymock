import {
    Box,
    Select,
    Text,
    Textarea,
    FormControl,
    Input,
    Flex,
    Button,
    CloseButton
  } from '@chakra-ui/react'
  import { useRouter } from 'next/router'
  import { useState } from 'react'
  import { useDispatch } from 'react-redux'
  import { updateUserData } from '../../../redux/actions/updateAction'
  import { Constants } from '../../../constants/index'
  
  
  const { JOB_TITLES, JOB_TIME, EXPERIENCE_YEAR } = Constants
  
  function Contract({contracts}) {
    const [companyInfo, setCompanyInfo] = useState({
      jobTitle: '',
      jobTime: '',
      experience: 0,
      salary: '',
      roleDescription: ''
    })
    const [talentSkills, setTalentSkills] = useState([])
    const [skill, setSkill] = useState('')
    const [contract, setContract] = useState(contracts)
    const router = useRouter()
    const dispatch = useDispatch()
  
    const handleTitle = (e) => {
      const { name, value } = e.target
      setCompanyInfo({ ...companyInfo, [name]: value })
      console.log(companyInfo)
    }
    const handleExperience = (e) => {
      const { name, value } = e.target
      setCompanyInfo({ ...companyInfo, experience: JSON.parse(value) })
      console.log(companyInfo)
    }
    const handleSalary = (e) => {
      const { name, value } = e.target
      setCompanyInfo({ ...companyInfo, salary: parseInt(value) })
      console.log(companyInfo)
    }
    const saveSkills = () => {
      setTalentSkills([...talentSkills, { skillName: skill }])
      console.log(talentSkills)
      setSkill('')
    }
    const deleteSkill = (talentSkill, index) => {
      const updatedLanguageItems = talentSkills.filter((item, i) => i !== index)
      setTalentSkills(updatedLanguageItems)
    }
    const createContract = () => {
      setContract([...contract, { skills: talentSkills, companyInfo }])
      console.log('create',)
      let updatedData = {
        contract: [...contract, { skills: talentSkills, companyInfo }]
      }
      dispatch(updateUserData(updatedData))
      setTalentSkills([])
      console.log(contract)
    }
    const deleteContract = (con, index) => {
      const updatedContracts = contract.filter((item, i) => i !== index)
      let updatedData = {
        contract: updatedContracts
      }
      dispatch(updateUserData(updatedData))
      setContract(updatedContracts)
    }
    return (
      <Box h={'auto'}>
        <Box w={[300, 400, 600, 900]} h={20} display="flex" float="left" mt={10}>
          <Select
            placeholder="Select position"
            onChange={handleTitle}
            name="jobTitle"
            mt={4}
            ml={5}
          >
            {Object.values(JOB_TITLES).map((job, index) => (
              <option key={index} value={job.key}>
                {job.key}
              </option>
            ))}
          </Select>
          <Select
            placeholder="Select contract"
            onChange={handleTitle}
            name="jobTime"
            mt={4}
            ml={5}
          >
            {Object.values(JOB_TIME).map((job, index) => (
              <option key={index} value={job.key}>
                {job.key}
              </option>
            ))}
          </Select>
          <Select
            placeholder="Select experience"
            onChange={handleExperience}
            name="experience"
            mt={4}
            ml={5}
          >
            {Object.values(EXPERIENCE_YEAR).map((year,index) => (
              <option key={index} value={JSON.stringify(year.key)}>
              {year.key}
            </option>
            ))}
          </Select>
        </Box>
  
        <Box d='flex' float='left' w={600}>
      <Text ml={5} fontWeight="bold" mt={2} fontSize="xl">
            $
          </Text>
      <Input
        ml={1}
        w={200}
        onChange={handleSalary}
        name="salary"
        type="number"
        placeholder="Salary"
        
      />
      </Box>
  
        <Textarea
          w={[250,400,500,800]}
          name="roleDescription"
          onChange={handleTitle}
          placeholder="Role description"
          ml={5}
          mt={2}
          h={'auto'}
        />
        <Box w={300} h={10}>
          <Flex float="left">
            <Input
              ml={5}
              mt={4}
              name="skill"
              type="text"
              placeholder="Add skill "
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
            />
            <Button ml={5} mt={4} onClick={saveSkills}>
              Add
            </Button>
          </Flex>
        </Box>
  
        {talentSkills.map((talentSkill, index) => {
          return (
            <Box>
              <Box mt={5} key={index}>
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
        <Box w={100} h={'auto'} mt={20}>
          <Button
            bg="#7DB0E4"
            color="white"
            hover="none"
            onClick={createContract}
            ml={5}
            right={0}
            mt={10}
          >
            Create contract
          </Button>
        </Box>
  
        {contract.map((con, index) => {
          return (
            <Box>
              <Box mt={5} key={index}>
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
                    {con.companyInfo.jobTitle}
                  </Text>
                  <CloseButton
                    onClick={() => deleteContract(con, index)}
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
  
  export default Contract
  