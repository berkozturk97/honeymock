import { Box, Flex, Text } from '@chakra-ui/react'
import moment from 'moment';
import CardHeader from '../material-ui-component/Card/CardHeader';
import GridItem from '../material-ui-component/Grid/GridItem';
import './talent.less'

function TalentEducation({ user }) {
  return (
    <div class={"back"}>
    <CardHeader>
    <GridItem>
      <Text ml={2} fontSize="2xl">
        Education
      </Text>
      {(user.educations || []).map((education, index) => {
        return (
       <div class={'main-item-div'}>
         <a class={'title'}> <a class={'dot'}>•</a> {education.school}</a>
         <a class={'subtitle'}> - {education.degree} ({moment(education.startDate).format('YYYY')} - {moment(education.endDate).format('YYYY')}) </a>
       </div>
        )
      })}
     </GridItem>
     </CardHeader>
     </div>
  )
}

export default TalentEducation
 /*
   <Box key={index}>
            <Flex
              flexDirection="row"
            >
              <Text fontSize="xl">{education.school}</Text>
              <Text color="#1f2228" mr={8}>
              </Text>
            </Flex>
            <Text ml={2} color="#1f2228">
              {education.degree} ({moment(education.startDate).format('YYYY-MM')} - {moment(education.endDate).format('YYYY-MM')}) 
            </Text>
          </Box>
 */