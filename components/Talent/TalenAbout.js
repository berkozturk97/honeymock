import { Flex, Text } from '@chakra-ui/react'

function TalentAbout({user}) {
  return (
    <Flex flexDirection="column" justify="center" align="center" mt={5}>
      <Text fontSize="3xl">About</Text>

      <Text mt={20} color="#606c78" fontWeight="400px">
        Professional experience
      </Text>
      <Text color="#1f2228" fontWeight="400px">
        {user[0].experienceYear}
      </Text>

      <Text mt={10} color="#606c78" fontWeight="400px">
        Contract
      </Text>
      {user[0].wantedJobTimes.map((contract, index) => {
        return (
          <Text key={index}  color="#1f2228" fontWeight="400px">
            {contract.key}
          </Text>
        )
      })}

      <Text mt={10} color="#606c78" fontWeight="400px">
        Earliest start date
      </Text>
      <Text color="#1f2228" fontWeight="400px">
        20.06.2021
      </Text>

      <Text mt={10} color="#606c78" fontWeight="400px">
        USA work permit
      </Text>
      <Text color="#1f2228" fontWeight="400px">
        {user[0].usPermit === true ? 'Yes' : 'No'}
      </Text>

      <Text mt={10} color="#606c78" fontWeight="400px">
        Wants to work in (salary)
      </Text>
      {user[0].wantedWorkCity.map((city, index) => {
        return (
          <Text key={index}  color="#1f2228" fontWeight="400px">
            {city.key} (${user[0].wantedSalary})
          </Text>
        )
      })}
      

      <Text mt={10} color="#606c78" fontWeight="400px">
        Languages
      </Text>
      {user[0].languages.map((language, index) => {
        return (
          <Text key={index}  color="#1f2228" fontWeight="400px">
            {language.language} ({language.level.key})
          </Text>
        )
      })}

    </Flex>
  )
}

export default TalentAbout
