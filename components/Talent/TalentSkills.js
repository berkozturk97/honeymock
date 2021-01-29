import { Box, Flex, Text } from '@chakra-ui/react'
import CardHeader from '../material-ui-component/Card/CardHeader';
import GridItem from '../material-ui-component/Grid/GridItem';
import './talent.less'
function TalentSkills({user}) {
    return(
      <div class={"back"}>
      <CardHeader>
        <GridItem h={'auto'}>
        <Text ml={2} fontSize="2xl">Skills</Text>
        {(user.skills || []).map((skill, index) => {
        return (
            <Box
              pr={2}
              display="inline-flex"
              w={'auto'}
              h={'auto'}
              borderWidth="1px"
              borderRadius="8px"
              ml={5}
              mb={2}
            >
              <Flex key={index} float="left" direction="row">
              <Text ml={1} mt={1}>
              {skill.skillName}
              </Text>
              </Flex>
            </Box>   
        )
      })}
      </GridItem>
      </CardHeader>
      </div>
    )
}

export default TalentSkills;