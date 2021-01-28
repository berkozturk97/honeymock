import React, { useState } from 'react'

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
import { Constants } from '../../constants'
import { useDispatch } from 'react-redux'
import { addUserData } from '../../redux/actions/stepOneAction'

const { JOB_TIME, WORK_PLACE, START_TIME } = Constants

function Step2() {
  const [startTime, setStartTime] = React.useState(undefined);
  const [usPermit, setUsPermit] = React.useState(false)
  const [jobTimes, setJobTimes] = useState([])
  const [workingCities, setWorkingCities] = useState([])

  const router = useRouter()
  const dispatch = useDispatch()

  const handleJobTime = (e) => {
    const { value, checked } = e.target
    if (checked === true) {
      //   setCheckedItems()
      setJobTimes([...jobTimes, JSON.parse(value)])
      console.log('Eklenen', jobTimes)
    } else {
      const deletedJobTimes = JSON.parse(value)
      const updatedJobTimes = jobTimes.filter(
        (jobT) => jobT.value !== deletedJobTimes.value
      )
      setJobTimes(updatedJobTimes)
      console.log('Cikan', jobTimes)
    }
  }

  const handleWorkingCities = (e) => {
    const { value, checked } = e.target
    if (checked === true) {
      //   setCheckedItems()
      setWorkingCities([...workingCities, JSON.parse(value)])
      console.log('Eklenen', workingCities)
    } else {
      const deletedCities = JSON.parse(value)
      const updatedCities = workingCities.filter(
        (city) => city.value !== deletedCities.value
      )
      setWorkingCities(updatedCities)
      console.log('Cikan', workingCities)
    }
  }

  const handlePermit = (e) => {
    setUsPermit(e.target.value)
    console.log(usPermit)
  }

  const handleStartTime = (e) => {
    setStartTime(JSON.parse(e))
    console.log(startTime)
  }
  const goNextPage = () => {
    let updatedData = {
      startTime,
      wantedJobTimes: jobTimes,
      wantedWorkCity: workingCities,
      usPermit: usPermit == 'true'
    }
    dispatch(addUserData(updatedData))
    router.push('/talent/roles')
  }

  return (
    <>
      <Text ml={5} color="#979EA7" fontSize="3xl">
        Some practical questions..
      </Text>
      <hr />
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
        placeholder='--Select--'
        w={300}
        ml={5}
        mt={5}
      >
        <option value={true}>Yes</option>
        <option value={false}>No</option>
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

      <Button
        bg="#7DB0E4"
        color="white"
        hover="none"
        ml={5}
        onClick={goNextPage}
        mt={5}
      >
        Click And Save
      </Button>
    </>
  )
}

export default Step2
