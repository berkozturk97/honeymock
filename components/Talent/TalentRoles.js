import { Box, Flex, Text } from '@chakra-ui/react'

function TalentRoles({ user }) {
  return (
    <Box flexDirection="row">
      <Text justifySelf="center" ml={2} fontSize="3xl">
        Desired Roles
      </Text>
      <Box>
      {user[0].wantedRoles.map((role, index) => {
        return (
          <Box  w={750}
          h={'auto'} key={index}>
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
             
            >
              <Text ml={2} color="#606c78" fontWeight="400px">
                {role.key}
              </Text>
              <Text color="#1f2228" fontWeight="400px">
                {role.years} {role.years === 1 ? 'Year' : 'Years'}
              </Text>

              <hr />
            </Flex>
          </Box>
        )
      })}
      </Box>
      
    </Box>
  )
}

export default TalentRoles
