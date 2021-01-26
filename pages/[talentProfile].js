import { Box, Flex, Grid, GridItem, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import TalentAbout from '../components/Talent/TalenAbout'
import TalentInfo from '../components/Talent/TalentInfo'
import TalentRoles from '../components/Talent/TalentRoles'
import TalentSkills from '../components/Talent/TalentSkills'
import TalentSummary from '../components/Talent/TalentSummary'
import TalentWorkExperience from '../components/Talent/TalentWorkExperience'
import TalentEducation from '../components/Talent/TalentEducation'
import { getTalentById } from '../api/talentApi'
import { HEADER, ID } from '../constants/header'
import axios from 'axios'

function TalenProfile() {
  const [user, setUser] = useState([])
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    setIsLogin(false)
    //var userInformations = localStorage.getItem('userInformations')
    //setUser(JSON.parse(userInformations))
    const userData = await getTalentById()
    setUser(userData)
    console.log('dadsss', user)
    setIsLogin(true)
  }

  if (isLogin === false) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    )
  } else {
    return (
      <Box
        w={'auto'}
        backgroundColor="#fff"
        h={'auto'}
        p={10}
        m={(0, 'auto')}
        mt={10}
        justifyContent='center'
        alignItems='center'
        display='grid'
      >
        <Box w={1000} borderWidth={1}>
          <TalentInfo user={user} />
        </Box>
        
        <Box display='flex' >
          <Box w={60} h={'auto'} mt={5} borderWidth={1}>
            <TalentAbout user={user}  />
          </Box>

          <Box flexDirection='column'>
          <Box w={740} h={'auto'} mt={5} ml={5}  borderWidth={1}>
            <TalentRoles user={user}  />
          </Box>
          <Box w={740} h={100} mt={5} ml={5}  borderWidth={1}>
            <TalentSummary  user={user} />
          </Box>
          <Box w={740} h={'auto'} mt={5} ml={5}  borderWidth={1}>
            <TalentSkills user={user}  />
          </Box>
          <Box w={740} h={'auto'} mt={5} ml={5}  borderWidth={1}>
            <TalentWorkExperience user={user}  />
          </Box>
          <Box w={740} h={'auto'} mt={5} ml={5}  borderWidth={1}>
            <TalentEducation user={user}  />
          </Box>
           
          </Box>
          
        </Box>
      </Box>
    )
  }
}

export default TalenProfile
