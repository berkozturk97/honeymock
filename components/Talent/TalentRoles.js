import { Box, Flex, Text } from '@chakra-ui/react'

function TalentRoles({ user }) {
  return (
    <Box flexDirection="row">
      <Text justifySelf="center" ml={2} fontSize="3xl">
        Desired Roles
      </Text>

      {user[0].wantedRoles.map((role, index) => {
        return (
          <Box key={index}>
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              w={750}
              h={100}
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
  )
}

export default TalentRoles
