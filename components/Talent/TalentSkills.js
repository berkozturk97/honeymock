import { Box, Flex, Text } from '@chakra-ui/react'

function TalentSkills({user}) {
    return(
        <Box h={'auto'}>
        <Text ml={2} fontSize="3xl">Skills</Text>
  
        {user[0].skills.map((skill, index) => {
        return (
        
            <Box
              pr={2}
              display="inline-flex"
              w={'auto'}
              h={'auto'}
              borderWidth="1px"
              borderRadius="8px"
              ml={5}
              mb={2}
            >
                <Flex key={index} float="left" direction="row">
              <Text ml={1} mt={1}>
              {skill.skillName}
              </Text>
              </Flex>
            </Box>
          
        )
      })}
      </Box>
    )
}

export default TalentSkills;