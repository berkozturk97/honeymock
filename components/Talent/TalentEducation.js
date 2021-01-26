import { Box, Flex, Text } from '@chakra-ui/react'
import moment from 'moment';

function TalentEducation({ user }) {
  return (
    <Box>
      <Text justifySelf="center" ml={2} fontSize="3xl">
        Education
      </Text>
      {user[0].educations.map((education, index) => {
        return (
          <Box key={index}>
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              w={750}
              h={50}
              ml={2}
            >
              <Text fontSize="2xl">{education.school}</Text>
              <Text color="#1f2228" mr={8} fontWeight="400px">
              {moment(education.startDate).format('YYYY-MM')} - {moment(education.endDate).format('YYYY-MM')} 
              </Text>
            </Flex>
            <Text ml={2} color="#1f2228" fontWeight="400px">
              {education.degree}
            </Text>
          </Box>
        )
      })}
    </Box>
  )
}

export default TalentEducation
