import { Box, Flex, Text } from '@chakra-ui/react'

function TalentSkills({user}) {
    return(
        <Box>
        <Text ml={2} fontSize="3xl">Skills</Text>
  
        {user[0].skills.map((skill, index) => {
        return (
          <Flex key={index} float="left" direction="row">
            <Box
              pr={2}
              display="inline-flex"
              w={'auto'}
              h={30}
              borderWidth="1px"
              borderRadius="8px"
              mt={10}
              ml={5}
              mb={2}
            >
              <Text ml={1} mt={1}>
                {skill.skillName}
              </Text>
            </Box>
          </Flex>
        )
      })}
      </Box>
    )
}

export default TalentSkills;