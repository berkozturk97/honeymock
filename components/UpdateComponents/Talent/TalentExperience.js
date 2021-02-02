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

import { Constants } from '../../../constants/index'
import { useDispatch } from 'react-redux'
import { updateUserData } from '../../../redux/actions/updateAction'


const { JOB_TITLES } = Constants

function TalentExperience({user}) {
  const dispatch = useDispatch()
 
  const router = useRouter()
  const [jobs, setJobs] = useState(user.wantedRoles)
  

  const handleClick = (e) => {
    const { value, checked } = e.target
    if (checked === true) {
    setJobs([...jobs, JSON.parse(value)])
      console.log(jobs)
    } else {
        const deletedJobs = JSON.parse(value);
        const updatedJobs = jobs.filter(job => job.value !== deletedJobs.value);
        setJobs(updatedJobs);
    }
  }
 
 

  const goNextPage = () => {
    let updatedData = {
      wantedRoles: jobs,
      whatBrings
    }
    dispatch(addUserData(updatedData))
    router.push('/talent/experience')
  }

  const handleYears = (e,job,index) => {
    console.log(e.target.value);
    const updatedJobs = jobs;
    updatedJobs[index] = {...updatedJobs[index], ...{ years:  parseInt(e.target.value)}}
    setJobs(updatedJobs);
    console.log('en gunceli',jobs)
  }
  const handleBlur = () => {
    let updatedData = {
        wantedRoles: jobs,
      }
      dispatch(updateUserData(updatedData))
  }

  return (
    <Box w={[250,300,500,900]}>
    

      <Box >
        <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
          What type of role are you looking for? *
        </Text>

        <Box  d="inline-flex" mt={10}>
          <CheckboxGroup>
            <Stack w={[15,100,200,200]} ml={2} direction="column">
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

          <Stack w={[15,100,200,200]} ml={20} direction="column">
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
            <Stack w={[15,150,200,200]} ml={20} direction="column">
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
          <Box key={index} >
          <Flex direction="row" h={'auto'}>
            <Text ml={5} fontWeight="bold" mt={10} fontSize="md">
              #{index+1}
            </Text>
            <Text ml={5} fontWeight="bold" mt={10} fontSize="md">
              {job.key}
            </Text>
      
            <Select onBlur={handleBlur} placeholder="Select years of experience" onChange={(e) =>handleYears(e,job.value,index)}  w={300} ml={[10,30,40,40]} mt={8}>
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

      
    </Box>
  )
}

export default TalentExperience
