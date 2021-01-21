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

function Step3() {
  const [value, setValue] = React.useState('1')
  const [isVisible, setIsVisible] = useState()
  const router = useRouter()
  const [checkedItems, setCheckedItems] = React.useState(false)
  const [values, setValues] = useState(Constants.JOB_TITLES)

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
  const handleCheck = () => {
    setCheckedItems(!checkedItems)
    console.log(checkedItems)
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

      <RadioGroup onChange={setValue} mt={10} value={value}>
        <Stack ml={5} direction="column">
          <Radio value="1">I am actively looking for a job</Radio>
          <Radio value="2">I am open to an interesting offer</Radio>
          <Radio value="3">I am just curious</Radio>
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
              {Object.values(values)
                .slice(0, 5)
                .map((job) => {
                  return (
                    <Checkbox
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
            {Object.values(values)
              .slice(5, 6)
              .map((job) => {
                return (
                  <Checkbox
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
              {Object.values(values)
                .slice(6, 8)
                .map((job) => {
                  return (
                    <Checkbox
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
        return <JobExpeerience job={job} index={index + 1} />
      })}

      <Button bg="#7DB0E4" color="white" _hover="none" ml={5} mt={5}>
        Click And Save
      </Button>
    </>
  )
}

export default Step3
