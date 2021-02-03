import { Box, Text } from '@chakra-ui/react'
import { NoSsr } from '@material-ui/core'
import CardHeader from '../material-ui-component/Card/CardHeader'
import GridItem from '../material-ui-component/Grid/GridItem'
import './talent.less'
function TalentRoles({ user }) {
  return (
    <NoSsr>
    <div class={"back"}>
    <CardHeader>
    <GridItem>
      <Text justifySelf="center" ml={2} fontSize="2xl">
        Desired Roles
      </Text>
      <Box>
      {(user.wantedRoles || []).map((role, index) => {
        return (
          <div key={index} class={'main-item-div'}>
          <Text fontSize="md" > {role.key} </Text>
          <Text fontSize="sm"> - {role.years} {role.years === 1 ? 'Year' : 'Years'}  </Text>
        </div>
        )
      })}
      </Box>
      
    </GridItem>
    </CardHeader>
    </div>
    </NoSsr>
  )
}

export default TalentRoles
