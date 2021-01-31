import { Box, Button, Flex, Text } from '@chakra-ui/react'
import CardHeader from '../material-ui-component/Card/CardHeader';
import GridItem from '../material-ui-component/Grid/GridItem';
import '../Talent/talent.less'
function CompanyVision() {
    return(
      <div class={"back"}>
      <CardHeader>
      <GridItem>
      <Text justifySelf='center' ml={2} fontSize="2xl">Company Vision and Mission</Text>
      <Text ml={2} justifySelf="center" fontSize="md">
        Our Mission is .......
      </Text>
      <Flex align='center' justify='center' pb={10}>
            
      </Flex>
    </GridItem>
    </CardHeader>
    </div>
    )    
}

export default CompanyVision;