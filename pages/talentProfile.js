import { Grid, GridItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import TalentAbout from '../components/Talent/TalenAbout'
import TalentInfo from '../components/Talent/TalentInfo'
import TalentRoles from '../components/Talent/TalentRoles'
import TalentSkills from '../components/Talent/TalentSkills'
import TalentSummary from '../components/Talent/TalentSummary'
import TalentWorkExperience from '../components/Talent/TalentWorkExperience'
import TalentEducation from '../components/Talent/TalentEducation'

function TalenProfile() {
  const [user, setUser] = useState([])
  useEffect(() => {
    var userInformations = localStorage.getItem('userInformations')
    setUser(JSON.parse(userInformations))
  }, [])

  return (
    <Grid
      mt={20}
      h="1000px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={5}
    >
      <GridItem
        rowSpan={20}
        colSpan={1}
        h="auto"
        w="300px"
        bg="#f7f7fe"
        borderColor="turquoise"
        borderWidth={2}
        borderRadius={7}
      >
        <TalentAbout />
      </GridItem>
      <GridItem
        h="200px"
        w="auto"
        colSpan={4}
        bg="#f7f7fe"
        borderColor="turquoise"
        borderWidth={2}
        borderRadius={7}
      >
        <TalentInfo />
      </GridItem>

      {/* <Grid
        h='1000px'
        w={500}
        gap={2}
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(5, 1fr)"
        // ml={250}

      >
          <GridItem colSpan={100} bg='#f7f7fe' borderColor='turquoise' borderWidth={2} borderRadius={7}>
              <TalentRoles />
          </GridItem>
          <GridItem colSpan={100} bg='#f7f7fe' borderColor='turquoise' borderWidth={2} borderRadius={7} />
          <GridItem colSpan={100} bg='#f7f7fe' borderColor='turquoise' borderWidth={2} borderRadius={7} />
          <GridItem colSpan={100} bg='#f7f7fe' borderColor='turquoise' borderWidth={2} borderRadius={7} />
          <GridItem colSpan={100} bg='#f7f7fe' borderColor='turquoise' borderWidth={2} borderRadius={7} />
          <GridItem rowSpan={20} colSpan={10}  bg='#f7f7fe' borderColor='turquoise' borderWidth={2} borderRadius={7} />

      </Grid> */}

      <Grid
        h="1000px"
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(70, 1fr)"
        gap={4}
      >
        
        <GridItem colSpan={50} bg='#ffffff' borderColor  borderWidth={1} borderRadius={7}>
              <TalentRoles />
          </GridItem>
        <GridItem rowSpan={2} colSpan={20} bg="tomato" />
        <GridItem colSpan={50} bg='#f7f7fe' borderColor='turquoise' borderWidth={2} borderRadius={7}>
              <TalentSummary />
          </GridItem>
          <GridItem colSpan={50} bg='#f7f7fe' borderColor='turquoise' borderWidth={2} borderRadius={7}>
              <TalentSkills />
          </GridItem>
          <GridItem colSpan={50} bg='#f7f7fe' h='auto' borderColor='turquoise' borderWidth={2} borderRadius={7}>
              <TalentWorkExperience />
          </GridItem>
          <GridItem colSpan={50} bg='#f7f7fe' borderColor='turquoise' borderWidth={2} borderRadius={7}>
              <TalentEducation />
          </GridItem>
        
      </Grid>
    </Grid>
  )
}

export default TalenProfile
