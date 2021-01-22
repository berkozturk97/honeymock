import { Box, Button, Stat, StatHelpText, StatLabel, StatNumber, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import moment from 'moment';

function ProfessionalExperience({talentExperience}) {

  return (
    <Box borderWidth='1px' w={400} >
      <Stat ml={5} >
        <Text fontWeight="bold" mt={10} fontSize="md" >{talentExperience.company}</Text>
        <StatLabel>{talentExperience.position}</StatLabel>
        <StatHelpText>{moment(talentExperience.startDate).utc().format('YYYY-MM')} - {moment(talentExperience.endDate).utc().format('YYYY-MM')}</StatHelpText>
      </Stat>
    </Box>
  )
}

export default ProfessionalExperience
