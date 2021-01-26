import { Box, Button, Container, Flex, Text } from '@chakra-ui/react'
import moment from 'moment';

function TalentWorkExperience({user}) {
  return (
    <Box>
      <Text ml={2} justifySelf="center" fontSize="3xl">
        Work Experience
      </Text>
      {
        user[0].workedCompanies.map((company,index) =>{
          return (
            <Box mt={4} key={index}>
            <Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            w={750}
            h={'auto'}
            ml={2}
          >
            <Text fontSize="2xl">{company.position}</Text>
            <Text color="#1f2228" mr={6} fontWeight="400px">
              {moment(company.startDate).format('YYYY-MM')} - {moment(company.endDate).format('YYYY-MM')} 
            </Text>
          </Flex>
          <Text color="#1f2228" ml={2} fontWeight="400px">
            {company.company}
          </Text>
    
          <Container centerContent mt={3}>
           {company.description}
          </Container>
          <hr/>
          </Box>
          )
        })
      }
      
    </Box>
  )
}

export default TalentWorkExperience
