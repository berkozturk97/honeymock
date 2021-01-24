import React, { useEffect, useState } from 'react'

import {
  Box,
  Button,
  Flex,
  Checkbox,
  Stack,
  Input,
  Text,
  Select,
  CheckboxGroup,
  HStack
} from '@chakra-ui/react'
import { Radio, RadioGroup } from 'rsuite'
import { useRouter } from 'next/router'
import { JobExpeerience } from '../JobExperince/JobExperience'
import { Constants } from '../../constants/index'
import { useDispatch } from 'react-redux'
import { addUserData } from '../../redux/actions/stepOneAction'

const { WHAT_BRINGS, JOB_TITLES } = Constants

function Step3() {

  const dispatch = useDispatch()

  const [whatBrings, setWhatBrings] = React.useState(undefined);

  const router = useRouter()
  
  

  const [jobs, setJobs] = useState([])

  useEffect(() => {}, [jobs])

  const handleClick = (e) => {
    const { value, checked } = e.target
    if (checked === true) {
    //   setCheckedItems()
    setJobs([...jobs, JSON.parse(value)])
      console.log(jobs)
    } else {
        const deletedJobs = JSON.parse(value);
        const updatedJobs = jobs.filter(job => job.value !== deletedJobs.value);
        setJobs(updatedJobs);
    }
  }
 
  const handleBrings = (e) => {
    setWhatBrings(JSON.parse(e))
    console.log(whatBrings)
  }

  const goNextPage = () => {
    let updatedData = {
      wantedRoles: jobs,
      whatBrings
    }
    dispatch(addUserData(updatedData))
    router.push('/login/loginStep4')
  }

  const handleYears = (e,job,index) => {
    console.log(e.target.value);
    const updatedJobs = jobs;
    updatedJobs[index] = {...updatedJobs[index], ...{ years:  parseInt(e.target.value)}}
    setJobs(updatedJobs);
    console.log('en gunceli',jobs)
  }

  return (
    <>
      <Text ml={5} color="#979EA7" fontSize="3xl">
        Get the job you want
      </Text>
      <hr />

      <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
        What brings you to Honeypot? *
      </Text>

      <RadioGroup onChange={handleBrings} mt={10} >
        <Stack ml={5} direction="column">
          {Object.values(WHAT_BRINGS).map((bring, index) => {
            return (
              <Radio key={index} value={JSON.stringify(bring)}>
                {bring.key}
              </Radio>
            )
          })}
        </Stack>
      </RadioGroup>

      <Box>
        <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
          What type of role are you looking for? *
        </Text>

        <Text ml={5} mt={2} fontSize="md">
          Select up to 5 roles that describe what you are looking for. These
          will help employers discover your profile
        </Text>
        <Box d="inline-flex" mt={10}>
          <CheckboxGroup>
            <Stack ml={5} direction="column">
              <Text ml={5} mt={2} fontWeight="bold" fontSize="md">
                Software Engineering
              </Text>
              {Object.values(JOB_TITLES)
                .slice(0, 5)
                .map((job,index) => {
                  return (
                    <Checkbox
                      key={index}
                      border="#555555"
                      onChange={handleClick}
                      value={JSON.stringify(job)}
                    >
                      {job.key}
                    </Checkbox>
                  )
                })}
            </Stack>
          </CheckboxGroup>

          <Stack ml={20} direction="column">
            <Text ml={5} mt={2} fontWeight="bold" fontSize="md">
              Infrastructure
            </Text>
            {Object.values(JOB_TITLES)
              .slice(5, 6)
              .map((job,index) => {
                return (
                  <Checkbox
                    key={index}
                    border="#555555"
                    onChange={handleClick}
                    value={JSON.stringify(job)}
                  >
                    {job.key}
                  </Checkbox>
                )
              })}
          </Stack>

          <CheckboxGroup>
            <Stack ml={20} direction="column">
              <Text ml={5} mt={2} fontWeight="bold" fontSize="md">
                Leadership
              </Text>
              {Object.values(JOB_TITLES)
                .slice(6, 8)
                .map((job,index) => {
                  return (
                    <Checkbox
                      key={index}
                      border="#555555"
                      onChange={handleClick}
                      value={JSON.stringify(job)}
                    >
                      {job.key}
                    </Checkbox>
                  )
                })}
            </Stack>
          </CheckboxGroup>
        </Box>
      </Box>

      {jobs.map((job, index) => {
        return (
          <Box>
          <Flex direction="row" h={'auto'}>
            <Text ml={5} fontWeight="bold" mt={10} fontSize="md">
              #{index+1}
            </Text>
            <Text ml={5} fontWeight="bold" mt={10} fontSize="md">
              {job.key}
            </Text>
      
            <Select placeholder="Select years of experience" onChange={(e) =>handleYears(e,job.value,index)}  w={300} ml={40} mt={8}>
              <option key='1' value={0}>{`<1 Years`}</option>
              <option key='2' value={1}>1 Year</option>
              <option key='3' value={2}>2 Years</option>
              <option key='4' value={3}>3 Years</option>
              <option key='5' value={4}>4 Years</option>
              <option key='6' value={5}>5+ Years</option>
            </Select>
              
          </Flex>
          <hr style={{marginTop: '20px'}}/>
          </Box>
        )
        
        
        //<JobExpeerience job={job} index={index + 1} />
      })}

      <Button bg="#7DB0E4" color="white" _hover="none" onClick={goNextPage} ml={5} mt={5}>
        Click And Save
      </Button>
    </>
  )
}

export default Step3
