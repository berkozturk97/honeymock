import { Box, Button, Flex, Text } from '@chakra-ui/react'
import CardHeader from '../material-ui-component/Card/CardHeader';
import GridItem from '../material-ui-component/Grid/GridItem';
import './talent.less'
function TalentSummary() {
    return(
      <div class={"back"}>
      <CardHeader>
      <GridItem>
      <Text justifySelf='center' ml={2} fontSize="2xl">Summary</Text>

      <Flex align='center' justify='center' pb={10}>
            <Button>+ Add Summary</Button>
      </Flex>
    </GridItem>
    </CardHeader>
    </div>
    )    
}

export default TalentSummary;