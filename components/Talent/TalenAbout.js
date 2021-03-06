import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import GridItem from '../material-ui-component/Grid/GridItem'
function TalentAbout({ user }) {
  return (
    <Box h={'auto'}>
      <Flex flexDirection="column" justify="center" align="center" mt={5}>
        <GridItem mt={5} ml={10}>
          <Text fontSize="3xl">
            {user.name} {user.surname}
          </Text>
          <Text fontSize="md">{user.livingCity}</Text>
          <GridItem>
            <div style={{display: 'flex', marginLeft: '40px'}}>
              <a target="_blank" href={user.githubUrl}>
                <img
                  src="/github.png"
                  style={{ width: 30, height: 30 }}
                  alt="Git Hub"
                />
              </a>

              <a target="_blank" href={user.linkedInUrl}>
                <img
                  src="/linkedin.png"
                  style={{ width: 30, height: 30 }}
                  layout="fixed"
                  alt="Git Hub"
                />
              </a>
              <a target="_blank" href={user.xingUrl}>
                <img
                  src="/xing.png"
                  style={{ width: 30, height: 30 }}
                  layout="fixed"
                  alt="Git Hub"
                />
              </a>
              <a target="_blank" href={user.sofUrl}>
                <img
                  src="/sof.png"
                  style={{ width: 25, height: 25 }}
                  layout="fixed"
                  alt="Git Hub"
                />
              </a>
            </div>
          </GridItem>
          <GridItem>
            <a href={user.cvUrl} target="_blank" rel="cv">
              Click to see your cv
            </a>
          </GridItem>
        </GridItem>
        <Text fontSize="2xl">About</Text>
        <Text mt={10} color="#606c78" fontWeight="400px">
          Professional experience
        </Text>
        <Text color="#1f2228" fontWeight="400px">
          {user.experienceYear}
        </Text>

        <Text mt={10} color="#606c78" fontWeight="400px">
          Contract
        </Text>
        {(user.wantedJobTimes || []).map((contract, index) => {
          return (
            <Text key={index} color="#1f2228" fontWeight="400px">
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
          {user.usPermit === true ? 'Yes' : 'No'}
        </Text>

        <Text mt={10} color="#606c78" fontWeight="400px">
          Wants to work in (salary)
        </Text>
        {(user.wantedWorkCity || []).map((city, index) => {
          return (
            <Text key={index} color="#1f2228" fontWeight="400px">
              {city.key} (${user.wantedSalary})
            </Text>
          )
        })}

        <Text mt={10} color="#606c78" fontWeight="400px">
          Languages
        </Text>
        {(user.languages || []).map((language, index) => {
          return (
            <Text key={index} color="#1f2228" fontWeight="400px">
              {language.language} ({language.level.key})
            </Text>
          )
        })}
      </Flex>
    </Box>
  )
}

export default TalentAbout
