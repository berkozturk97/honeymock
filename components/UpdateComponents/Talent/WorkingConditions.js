import React, { useEffect, useState } from 'react'

import {
  Box,
  Button,
  Flex,
  Checkbox,
  Stack,
  Input,
  Text,
  Select
} from '@chakra-ui/react'
import { Radio, RadioGroup } from 'rsuite'
import { useRouter } from 'next/router'
import { Constants } from '../../../constants/index'
import { useDispatch } from 'react-redux'
import { updateUserData } from '../../../redux/actions/updateAction'


const { JOB_TIME, WORK_PLACE, START_TIME } = Constants

function WorkingConditions({user}) {

    useEffect(() => {
        validateCheckCities()
    },[])

  const [startTime, setStartTime] = React.useState(undefined);
  const [usPermit, setUsPermit] = React.useState(user.usPermit)
  const [jobTimes, setJobTimes] = useState(user.wantedJobTimes)
  const [workingCities, setWorkingCities] = useState(user.wantedWorkCity)
  const [checkedCities, setCheckedCities] = useState([false, false, false, false])

  const router = useRouter()
  const dispatch = useDispatch()

  const validateCheckCities = () =>{
    workingCities.map((item) => {
        if(item.value === 0){
            setCheckedCities([true,checkedCities[0]])
        }
        if(item.value === 1) {
            setCheckedCities([true,checkedCities[1]])
        }
        if(item.value === 2) {
            setCheckedCities([true,checkedCities[2]])
        }
        if(item.value === 3) {
            setCheckedCities([true,checkedCities[3]])
        }
    })
}

  const handleJobTime = (e) => {
    const { value, checked } = e.target
    if (checked === true) {
      //   setCheckedItems()
      setJobTimes([...jobTimes, JSON.parse(value)])
      let updatedData = {
        wantedJobTimes: [...jobTimes, JSON.parse(value)],
        
      }
      dispatch(updateUserData(updatedData))
      console.log('Eklenen', jobTimes)
    } else {
      const deletedJobTimes = JSON.parse(value)
      const updatedJobTimes = jobTimes.filter(
        (jobT) => jobT.value !== deletedJobTimes.value
      )
      setJobTimes(updatedJobTimes)
      let updatedData = {
        wantedJobTimes: updatedJobTimes,
        
      }
      dispatch(updateUserData(updatedData))
      console.log('Cikan', jobTimes)
    }
  }

  const handleBlur = () => {
    let updatedData = {
        usPermit: Boolean(usPermit)
        
      }
      dispatch(updateUserData(updatedData))
  }

  const handleWorkingCities = (e) => {
    const { value, checked } = e.target
    if (checked === true) {
      //   setCheckedItems()
      setWorkingCities([...workingCities, JSON.parse(value)])
      let updatedData = {
        wantedWorkCity: [...workingCities, JSON.parse(value)],
        
      }
      dispatch(updateUserData(updatedData))
      console.log('Eklenen', workingCities)
    } else {
      const deletedCities = JSON.parse(value)
      const updatedCities = workingCities.filter(
        (city) => city.value !== deletedCities.value
      )
      setWorkingCities(updatedCities)
      let updatedData = {
        wantedWorkCity: updatedCities,
        
      }
      dispatch(updateUserData(updatedData))
      console.log('Cikan', workingCities)
    }
  }

  const handlePermit = (e) => {
    setUsPermit(e.target.value)
    console.log(usPermit)
  }

  const handleStartTime = (e) => {
    setStartTime(JSON.parse(e))
    let updatedData = {
        startTime: JSON.parse(e)
      }
      dispatch(updateUserData(updatedData))
    console.log(startTime)
  }

  return (
    <Box>
    
      <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
        What type of employment are you looking for? *
      </Text>

      <Stack pl={6} mt={1} spacing={1}>
        {Object.values(JOB_TIME).map((jobItem, index) => {
          return (
            <Checkbox
              border="#555555"
              key={index}
              value={JSON.stringify(jobItem)}
              onChange={handleJobTime}
            >
              {jobItem.key}
            </Checkbox>
          )
        })}
      </Stack>

      <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
        Where would you like to work? *
      </Text>

      <Stack pl={6} mt={1} spacing={1}>
        {Object.values(WORK_PLACE).map((cityItem, index) => {
          return (
            <Checkbox
              border="#555555"
              key={index}
              value={JSON.stringify(cityItem)}
              onChange={handleWorkingCities}
            >
              {cityItem.key}
            </Checkbox>
          )
        })}
      </Stack>

      <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
        Do you have an USA work permit? *
      </Text>

      <Select
        onChange={handlePermit}
        onBlur={handleBlur}
        placeholder='--Select--'
        w={250}
        ml={5}
        mt={5}
      >
        <option value={1}>Yes</option>
        <option value={''}>No</option>
      </Select>

      <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
        When can you start? *
      </Text>

      <RadioGroup onChange={handleStartTime} mt={10} >
        <Stack ml={5} direction="column">
          {Object.values(START_TIME).map((time, index) => {
            return (
              <Radio key={index} value={JSON.stringify(time)}>
                {time.key}
              </Radio>
            )
          })}
        </Stack>
      </RadioGroup>

   
    </Box>
  )
}

export default WorkingConditions
