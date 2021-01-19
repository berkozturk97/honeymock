import { Box, Flex, Text } from '@chakra-ui/react'

function TalentEducation() {
  return (
    <Box>
      <Text justifySelf="center" fontSize="3xl">
        Education
      </Text>

      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        w={750}
        h={50}
      >
        <Text fontSize="2xl">School</Text>
        <Text color="#1f2228" fontWeight="400px">
          Years
        </Text>
      </Flex>
      <Text color="#1f2228" fontWeight="400px">
        Department
      </Text>
    </Box>
  )
}

export default TalentEducation;
