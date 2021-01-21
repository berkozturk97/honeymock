import { Flex, Text, Select, Box } from '@chakra-ui/react'
import { useEffect } from 'react'

export const JobExpeerience = ({job,index}) => {

    useEffect(() => {
        console.log(job)
    },[])
    
  return (
      
    <Box>
    <Flex direction="row" h={'auto'}>
      <Text ml={5} fontWeight="bold" mt={10} fontSize="md">
        #{index}
      </Text>
      <Text ml={5} fontWeight="bold" mt={10} fontSize="md">
        {job.key}
      </Text>

      <Select placeholder="Select years of experience"  w={300} ml={10} mt={8}>
        <option value="0">{`<1 Years`}</option>
        <option value="1">1 Year</option>
        <option value="2">2 Years</option>
        <option value="3">3 Years</option>
        <option value="4">4 Years</option>
        <option value="5+">5+ Years</option>
      </Select>
        
    </Flex>
    <hr style={{marginTop: '20px'}}/>
    </Box>
  )
}


