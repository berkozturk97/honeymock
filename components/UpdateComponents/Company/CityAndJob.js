import { Box, Button, Checkbox, CheckboxGroup, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Constants } from '../../../constants/index'
import { updateUserData } from "../../../redux/actions/updateAction";

const { WORK_PLACE, JOB_TITLES } = Constants

function CityAndJob({wantedRoles, wantedWorkCities}) {
    const [workingCities, setWorkingCities] = useState(wantedWorkCities)
    const [jobs, setJobs] = useState(wantedRoles)
    const [checkedCities, setCheckedCities] = useState([false, false, false, false])
    const [checkedRoles, setCheckedRoles] = useState([false, false, false, false,false,false,false,false])

    useEffect(() => {
        validateCheckCities()
        validateCheckRoles()
    },[])

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
    const validateCheckRoles = () =>{
        jobs.map((item) => {
            if(item.value === 0){
                setCheckedRoles([true,checkedRoles[0]])
            }
            if(item.value === 1) {
                setCheckedRoles([true,checkedRoles[1]])
            }
            if(item.value === 2) {
                setCheckedRoles([true,checkedRoles[2]])
            }
            if(item.value === 3) {
                setCheckedRoles([true,checkedRoles[3]])
            }
            if(item.value === 4) {
                setCheckedRoles([true,checkedRoles[4]])
            }
            if(item.value === 5) {
                setCheckedRoles([true,checkedRoles[5]])
            }
            if(item.value === 6) {
                setCheckedRoles([true,checkedRoles[6]])
            }
            if(item.value === 7) {
                setCheckedRoles([true,checkedRoles[7]])
            }
        })
    }
     const handleJobs = (e) => {
    const { value, checked } = e.target
    if (checked === true) {
    //   setCheckedItems()
    setJobs([...jobs, JSON.parse(value)])
    let updatedData = {
        wantedRoles: [...jobs, JSON.parse(value)],
      }
      dispatch(updateUserData(updatedData))
    } else {
        const deletedJobs = JSON.parse(value);
        const updatedJobs = jobs.filter(job => job.value !== deletedJobs.value);
        setJobs(updatedJobs);
        let updatedData = {
            wantedRoles: updatedJobs,
          }
          dispatch(updateUserData(updatedData))
    }
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

    return(
        <Box>
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
            //   isChecked={checkedCities[index]}
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
                      isChecked={checkedRoles[index]}
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

        </Box>
    )
}

export default CityAndJob;
