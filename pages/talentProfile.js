import { Box, Grid, GridItem, Spinner } from '@chakra-ui/react'
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
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    setIsLogin(false);
    //var userInformations = localStorage.getItem('userInformations')
    //setUser(JSON.parse(userInformations))
    const userData = await getTalentById();
    setUser(userData);
    console.log('dadss',user);
    setIsLogin(true);
  }

  if(isLogin === false){
    return <Spinner
    thickness="4px"
    speed="0.65s"
    emptyColor="gray.200"
    color="blue.500"
    size="xl"
  />
  }
  else {
  return ( 
    <Box w={'auto'} backgroundColor='#fff' h={'auto'} p={10} m={(0, 'auto')} mt={10}>
    <Grid
      mt={20}
      h="900px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={5}
    >
      <GridItem
        rowSpan={20}
        colSpan={1}
        h="auto"
        w="300px"
        bg='#ffffff'
    
        borderWidth={1}
        borderRadius={7}
      >
        <TalentAbout user={user} />
      </GridItem>
      <GridItem
        h="200px"
        w="auto"
        colSpan={4}
        bg='#ffffff'
     
        borderWidth={1}
        borderRadius={7}
      >
        <TalentInfo user={user} />
      </GridItem>

      <Grid
        h="700px"
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(70, 1fr)"
        gap={4}
      >
        
        <GridItem colSpan={50} bg='#ffffff' borderColor  borderWidth={1} borderRadius={7}>
              <TalentRoles user={user}/>
          </GridItem>
        <GridItem rowSpan={2} colSpan={20} bg="#FFFFFF" />
        <GridItem colSpan={50} bg='#ffffff'  borderWidth={1} borderRadius={7}>
              <TalentSummary />
          </GridItem>
          <GridItem colSpan={50} bg='#ffffff' borderWidth={1} borderRadius={7}>
              <TalentSkills user={user} />
          </GridItem>
          <GridItem colSpan={50} bg='#ffffff' h='auto'  borderWidth={1} borderRadius={7}>
              <TalentWorkExperience user={user}/>
          </GridItem>
          <GridItem colSpan={50} bg='#ffffff'  borderWidth={1} borderRadius={7}>
              <TalentEducation user={user} />
          </GridItem>
        
      </Grid>
    </Grid>
    </Box>
  )
}
}

export default TalenProfile
