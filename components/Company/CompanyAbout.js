import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import GridItem from '../material-ui-component/Grid/GridItem'
function CompanyAbout({user}) {
  return (
    <Box h={'auto'}>
      <Flex flexDirection="column" justify="center" align="center" mt={5}>
      <GridItem mt={5} ml={10}>
        <Text fontSize="3xl">
          {user.name} {user.surname}
        </Text>
        <Text fontSize="md">{user.livingCity}</Text>
        
      </GridItem>
        <Text fontSize="2xl">About</Text>
        <Text mt={10} color="#606c78" fontWeight="400px">
          Company Name
        </Text>
        <Text color="#1f2228" fontWeight="400px">
          {user.companyName}
        </Text>

        <Text mt={10} color="#606c78" fontWeight="400px">
          Company Employee Size
        </Text>
        <Text color="#1f2228" fontWeight="400px">
          {user.companyEmployeeNumber.key}
        </Text>

        <Text mt={10} color="#606c78" fontWeight="400px">
          Company Website
        </Text>
        <Text color="#1f2228" fontWeight="400px">
          {user.companyUrl}
        </Text>

        <Text mt={10} color="#606c78" fontWeight="400px">
          Company City
        </Text>
        <Text color="#1f2228" fontWeight="400px">
          {user.companyCity}
        </Text>

        <Text mt={10} color="#606c78" fontWeight="400px">
          Company Address and Location
        </Text>
        <Text color="#1f2228" fontWeight="400px">
          {user.headquartersAddress}
        </Text>

        <Text mt={10} color="#606c78" fontWeight="400px">
          Company Phone Number
        </Text>
        <Text color="#1f2228" fontWeight="400px">
          {user.phone}
        </Text>

        <Text mt={10} color="#606c78" fontWeight="400px">
        Wants to work in these cities
        </Text>
        {(user.wantedWorkCity || []).map((contract, index) => {
          return (
            <Text key={index} color="#1f2228" fontWeight="400px">
              {contract.key}
            </Text>
          )
        })}

      <Text mt={10} color="#606c78" fontWeight="400px">
        Wants to work with these roles
        </Text>
        {(user.wantedRoles || []).map((contract, index) => {
          return (
            <Text key={index} color="#1f2228" fontWeight="400px">
              {contract.key}
            </Text>
          )
        })}

      <Text mt={10} color="#606c78" fontWeight="400px">
        Wants to work with these skills
        </Text>
        {(user.wantedSkills || []).map((item, index) => {
         
              return(<Text key={index} color="#1f2228" fontWeight="400px">
                {item.skillName}
              </Text>)
        
        })}

     

    

       
      </Flex>
    </Box>
  )
}

export default CompanyAbout
