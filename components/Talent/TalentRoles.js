import { Box, Flex, Text } from '@chakra-ui/react'

function TalentRoles() {
  return (
    <Box flexDirection="row">
      <Text justifySelf='center' fontSize="3xl">Desired Roles</Text>

      <Flex flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        w={750}
        h={100}>
        <Text ml={2} color="#606c78" fontWeight="400px">
          Frontend Enginner
        </Text>
        <Text color="#1f2228" fontWeight="400px">
          2 Years
        </Text>

      </Flex>
    </Box>
  )
}

export default TalentRoles
