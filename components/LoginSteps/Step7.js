import {
    Box,
    Button,
    Flex,
    Input,
    FormControl,
    Text,
    Select,
 
    CloseButton
  } from '@chakra-ui/react'
  import { useEffect, useState } from 'react'
  import { Constants } from '../../constants/index'
  
  function Step7() {  
    const [money, setMoney] = useState('');
    const [talentSkills, setTalentSkills] = useState([]);
  
  
    const saveSkills = () => {
          setTalentSkills([...talentSkills, {skillName: skill}])
          console.log(talentSkills);
          setSkill('');
    }
  
  
    return (
      <>
        <Text ml={5} color="#979EA7" fontSize="3xl">
            One last thing...
        </Text>
        <hr />
                           
  
        <Box mt={10} mb={20}>
          <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
          What minimum yearly (pre-tax) salary would you like to earn at your next job? *
          </Text>
            <Text color="#979EA7" mt={2} ml={5} fontSize="md">
            Make sure to enter an amount you are comfortable with; you can choose a different salary on a per city basis once you've finished signing up!
            </Text>
          <Text color="#979EA7" mt={2} mt={5} ml={5} fontSize="md">
          I want to earn a minimum salary of:
            </Text>
          <Flex float='left'>
          <Text ml={5} fontWeight="bold" mt={5} fontSize="xl">
            $
          </Text>
          <FormControl id="money" mt={4}>
              <Input
                ml={5}
                w={300}
                onChange={(e) => setMoney(e.target.value)}
                name="skill"
                type="text"
                placeholder="10000 - 500000 (gross/year) "
                value={money}
                //   onChange={handleInputChange}
              />
            </FormControl>
        
          </Flex>
        </Box>
  
        
  
        <Box h={100} display='block'>
        <Button left={0} mt={60}>
              Go Back
          </Button>  
          <Button position='fixed' mr={30} right={40} mt={60}>
              Save & Next
          </Button>
        </Box>
        
  
      </>
    )
  }
  
  export default Step7
  