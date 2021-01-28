import { Box, Button, Checkbox, CheckboxGroup, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {Constants} from "../../constants/index";
import { addUserData } from "../../redux/actions/stepOneAction";

const { WORK_PLACE, JOB_TITLES } = Constants

function Step1() {
    const [workingCities, setWorkingCities] = useState([])
    const [jobs, setJobs] = useState([])

    const router = useRouter()
    const dispatch = useDispatch()


     const handleJobs = (e) => {
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

      const goNextPage = () => {
        let updatedData = {
          wantedRoles: jobs,
          wantedWorkCity: workingCities,
        }
        dispatch(addUserData(updatedData))
        router.push('/company/companyInformation')
      }
    return(
        <>
            <Text ml={5} color="#979EA7" fontSize="3xl">
        Hi! Let's start with the basics!{' '}
      </Text>
      <hr />
      <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
        What markets are you hiring in?
      </Text>
      <Text ml={5} mt={2} fontSize="md">
        Hire candidates are located in 4 major markets; we also have people who are interested in working remotely.
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

      

      <Box >
        <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
        What roles are you hiring in?
      </Text>
      <Text ml={5} mt={2} fontSize="md">
        Build a pipeline of candidates with a range of roles and skills.
      </Text>
        <Box  d="inline-flex" mt={10}>
          <CheckboxGroup>
            <Stack w={[20,100,200,200]} ml={5} direction="column">
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
                      onChange={handleJobs}
                      value={JSON.stringify(job)}
                    >
                      {job.key}
                    </Checkbox>
                  )
                })}
            </Stack>
          </CheckboxGroup>

          <Stack w={[20,100,200,200]} ml={20} direction="column">
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
                    onChange={handleJobs}
                    value={JSON.stringify(job)}
                  >
                    {job.key}
                  </Checkbox>
                )
              })}
          </Stack>

          <CheckboxGroup>
            <Stack w={[20,150,200,200]} ml={20} direction="column">
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
                      onChange={handleJobs}
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

      <Button bg="#7DB0E4" color="white" _hover="none" onClick={goNextPage} ml={5} mt={5}>
        Click And Save
      </Button>
        </>
    )
}

export default Step1;
