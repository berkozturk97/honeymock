import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  Input,
  Select,
  Stack,
  Text
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Constants } from '../../constants/index'
import { addUserData } from '../../redux/actions/stepOneAction'

const { INDUSTRIES} = Constants

function Step2() {
    const [companyInfo, setCompanyInfo] = useState({
        companyName: '',
        hqAddress: '',
        companyUrl: '',
        employee: '',
        industry: '',
    })
    const [isVisible, setIsVisible] = useState(true);

  const router = useRouter()
  const dispatch = useDispatch()

 

  const handleInputChange = e => {
    const { name, value } = e.target
    setCompanyInfo({ ...companyInfo, [name]: value })
    console.log(companyInfo)
}
    const handleEmployeeNumber = e => {
        setCompanyInfo({...companyInfo, employee: e.target.value})
        console.log(companyInfo)
    } 

    const handleIndustry = e => {
        if(e.target.value === 'Other'){
            setIsVisible(false)
        } else{
            setIsVisible(true);
            setCompanyInfo({...companyInfo, industry: e.target.value})
        }
        
    }

  const goNextPage = () => {
    // let updatedData = {
    //   wantedRoles: jobs,
    //   wantedWorkCity: workingCities
    // }
    // dispatch(addUserData(updatedData))
    router.push('/company/terms')
  }
  return (
    <>
      <Text ml={5} color="#979EA7" fontSize="3xl">
        Let's get to know your company closer{' '}
      </Text>
      <hr />
      <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
        Tell us about your company
      </Text>
      <Text ml={5} mt={2} fontSize="md">
       This will help candidates learn if your company aligns with what they are looking for.
      </Text>

      <Box w={[300,300,400,400]} ml={5}>
 
          <FormControl id="companyName" mt={[6,6,5,4]}>
            <Input 
             isDisabled
             name="companyName"
             type="text" 
             placeholder="Company Name" 
             value={companyInfo.companyName} 
             onChange={handleInputChange}/>
          </FormControl>
  
          <FormControl id="hqAddress" mt={4}>
            <Input
              name="hqAddress"
              type="text"
              placeholder="Headquarters Address "
              value={companyInfo.hqAddress}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl id="companyUrl" mt={4}>
            <Input
              name="companyUrl"
              type="text"
              placeholder="Company Url"
              value={companyInfo.companyUrl}
              onChange={handleInputChange}
            />
          </FormControl>
  
          <FormControl id="companySize" mt={4}>
          <Select placeholder="Select a number of employees" onChange={handleEmployeeNumber}   mt={4}>
              <option key='1' value='1-5'>1-5</option>
              <option key='2' value='5-10'>5-10</option>
              <option key='3' value='10-50'>10-50</option>
              <option key='4' value='50-100'>50-100</option>
              <option key='5' value='100-200'>100-200</option>
              <option key='6' value='200+'>200+</option>
            </Select>
          </FormControl>
        
          <Text  fontWeight="bold" mt={10} fontSize="xl">
        Industry
      </Text>
      <Text mt={2} fontSize="md">
       Knowing your company's industry helps our algorithm make better recommendations that align to candidate preferences.
      </Text>

      <FormControl id="industry" mt={4}>
          <Select placeholder="Select an industry" onChange={handleIndustry}   mt={4}>
                {
                    Object.values(INDUSTRIES).map((industry,index) => <option key={index} value={industry.key} >{industry.key}</option>)
                }
            </Select>
          </FormControl>

          <FormControl id="other" mt={[6,6,5,4]}>
            <Input 
             isDisabled={isVisible}
             name="industry"
             type="text" 
             placeholder="Type Your Industry" 
             value={companyInfo.industry} 
             onChange={handleInputChange}/>
          </FormControl>

      </Box>


      <Button
        bg="#7DB0E4"
        color="white"
        _hover="none"
        onClick={goNextPage}
        ml={5}
        mt={5}
      >
        Click And Save
      </Button>
    </>
  )
}

export default Step2
