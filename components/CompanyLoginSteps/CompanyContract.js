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
import { Constants } from '../../constants/index'
import { addUserData } from '../../redux/actions/stepOneAction'

const { JOB_TITLES, JOB_TIME } = Constants

function CompanyContract() {
  const [companyInfo, setCompanyInfo] = useState({
    jobTitle: '',
    jobTime: '',
    experience: 0,
    salary: 0,
    roleDescription: ''
  })
  const [talentSkills, setTalentSkills] = useState([])
  const [skill, setSkill] = useState('')
  const [contract, setContract] = useState([])
  const router = useRouter()
  const dispatch = useDispatch()
  const handleTitle = (e) => {
    const { name, value } = e.target
    setCompanyInfo({ ...companyInfo, [name]: value })
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
    setTalentSkills([])
    console.log(contract)
  }
  const deleteContract = (con, index) => {
    const updatedContracts = contract.filter((item, i) => i !== index)
    setContract(updatedContracts)
  }
  const goNextPage = () => {
   let updatedData = {
      contract
    }
    dispatch(addUserData(updatedData))
    router.push('/company/companyInformation')
  }
  return (
    <Box h={'auto'}>
      <Text ml={5} color="#979EA7" fontSize="3xl">
        Let's create company's first contract!{' '}
      </Text>
      <hr />
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
          onChange={handleTitle}
          name="experience"
          mt={4}
          ml={5}
        >
          <option key="1" value={1}>
            1
          </option>
          <option key="2" value={2}>
            2
          </option>
          <option key="3" value={3}>
            3
          </option>
          <option key="4" value={4}>
            4
          </option>
          <option key="5" value={5}>
            5
          </option>
        </Select>
      </Box>

      <Input
        ml={5}
        w={100}
        onChange={handleTitle}
        name="salary"
        type="text"
        placeholder="Salary"
        value={companyInfo.salary}
      />

      <Textarea
        name="roleDescription"
        onChange={handleTitle}
        placeholder="What employers need to do?"
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

      <Box w={100} h={'auto'} mt={30}>
        <Button
          bg="#7DB0E4"
          color="white"
          _hover="none"
          onClick={goNextPage}
          ml={5}
          right={0}
          mt={10}
        >
          Click And Save
        </Button>
      </Box>
    </Box>
  )
}

export default CompanyContract
