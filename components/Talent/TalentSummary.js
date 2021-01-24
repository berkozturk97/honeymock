import { Box, Button, Flex, Text } from '@chakra-ui/react'

function TalentSummary() {
    return(
        <Box >
      <Text justifySelf='center' ml={2} fontSize="3xl">Summary</Text>

      <Flex  align='center' justify='center' pb={10}>
            <Button>+ Add Summary</Button>
      </Flex>
    </Box>
    )    
}

export default TalentSummary;