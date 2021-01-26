import { Box, Text } from '@chakra-ui/react'
import CardHeader from '../material-ui-component/Card/CardHeader'
import GridItem from '../material-ui-component/Grid/GridItem'
import './talent.less'
function TalentRoles({ user }) {
  return (
    <div class={"back"}>
    <CardHeader>
    <GridItem>
      <Text justifySelf="center" ml={2} fontSize="2xl">
        Desired Roles
      </Text>
      <Box>
      {user[0].wantedRoles.map((role, index) => {
        return (
          <div class={'main-item-div'}>
          <a class={'title'}> <a class={'dot'}>•</a> {role.key} </a>
          <a class={'subtitle'}> - {role.years} {role.years === 1 ? 'Year' : 'Years'}  </a>
        </div>
        )
      })}
      </Box>
      
    </GridItem>
    </CardHeader>
    </div>
  )
}

export default TalentRoles
