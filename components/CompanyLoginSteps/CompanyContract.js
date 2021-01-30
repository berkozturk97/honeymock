import { Box, Select, Text, Textarea, FormControl, Input, Flex, Button } from '@chakra-ui/react'
import { useState } from 'react';
import { Constants } from '../../constants/index';

const { JOB_TITLES, JOB_TIME } = Constants

function CompanyContract() {
    const [companyInfo, setCompanyInfo] = useState({
        jobTitle: '',
        jobTime: '',
        experience: 0,
        salary: 0,
        roleDescription: ''
       
      })
      const handleTitle = (e) => {
           const { name, value } = e.target
          setCompanyInfo({...companyInfo, [name]: value})
          console.log(companyInfo)
      }
  return (
    <Box h={'auto'}>
      <Text ml={5} color="#979EA7" fontSize="3xl">
        Let's create company's first contract!{' '}
      </Text>
      <hr />
      <Box w={[300,400,600,900]} h={20} display='flex' float='left' mt={10}>
      <Select
        placeholder="Select position"
        onChange={handleTitle}
        name='jobTitle'
        mt={4} ml={5}
      >
        {
            Object.values(JOB_TITLES).map((job, index) => (
                <option key={index} value={job.key}>
                  {job.key}
                </option>
              ))
        }
      </Select>
      <Select
        placeholder="Select contract"
        onChange={handleTitle}
        name='jobTime'
        mt={4} ml={5}
      >
          {
            Object.values(JOB_TIME).map((job, index) => (
                <option key={index} value={job.key}>
                  {job.key}
                </option>
              ))
        }
      </Select>
      <Select
        placeholder="Select experience"
        onChange={handleTitle}
        name='experience'
        mt={4} ml={5}
      >
        <option key="1" value={1}>
          1
        </option>
        <option key="2" value={2}>
          2
        </option>
        <option key="3" value={3}>
            3
        </option>
        <option key="4" value={4}>
          4
        </option>
        <option key="5" value={5}>
          5
        </option>
      </Select>
      </Box>
      
            <Input
              ml={5}
              w={100}
              onChange={handleTitle}
              name="salary"
              type="text"
              placeholder="Salary"
              value={companyInfo.salary}
            />
       
      <Textarea name='roleDescription' onChange={handleTitle} placeholder='What employers need to do?' ml={5} mt={2} h={'auto'} />

      <Flex float='left'>
        <FormControl id="skill" mt={4}>
            <Input
              ml={5}
              w={300}
              
              name="skill"
              type="text"
              placeholder="Add skill "
              //value={skill}
              //onChange={handleInputChange}
            />
          </FormControl>

          <Button ml={5} mt={4} >
            Add
        </Button>
        </Flex>
    </Box>
  )
}

export default CompanyContract
