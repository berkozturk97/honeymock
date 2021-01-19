import { Box, Flex, Text } from '@chakra-ui/react'

function TalentSkills() {
    return(
        <Box>
        <Text  fontSize="3xl">Skills</Text>
  
        <Flex justify='flex-start' m={4} p={4}  width='auto'>
              <span style={{border: '1px solid #3685d6', borderRadius: '16px', color: '#525252', height: '30px', margin: '4px 4px 4px 0'}}>Agile</span>
              <span style={{border: '1px solid #3685d6', borderRadius: '16px', color: '#525252', margin: '4px 4px 4px 0'}}>Git</span>
              <span style={{border: '1px solid #3685d6', borderRadius: '16px', color: '#525252', margin: '4px 4px 4px 0'}}>Js</span>
        </Flex>
      </Box>
    )
}

export default TalentSkills;