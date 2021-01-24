import { Box, Button, Stat, StatHelpText, StatLabel, StatNumber, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import moment from 'moment';

function ProfessionalExperience({talentExperience, index}) {

  return (
    <Box key={index} borderWidth={1} borderColor={'#7DB0E4'} w={400} mt={10} >
      <Stat ml={5} >
        <Text fontWeight="bold" mt={3} fontSize="md" >{talentExperience.company}</Text>
        <StatLabel>{talentExperience.position}</StatLabel>
        <StatHelpText>{moment(talentExperience.startDate).utc().format('YYYY-MM')} - {moment(talentExperience.endDate).utc().format('YYYY-MM')}</StatHelpText>
      </Stat>
    </Box>
  )
}

export default ProfessionalExperience
