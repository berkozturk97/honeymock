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
  import { Constants } from '../../../constants/index'
import { updateUserData } from '../../../redux/actions/updateAction'
  
  
  const { INDUSTRIES, COMPANY_SIZE } = Constants
  
  function CompanyInformations({infos}) {
    const [companyInfo, setCompanyInfo] = useState({
      companyName: infos.companyName,
      hqAddress: infos.headquartersAddress,
      companyUrl: infos.companyUrl,
      employee: infos.companyEmployeeNumber,
      industry: infos.companyIndustry,
      city: infos.companyCity,
      phone: infos.phone
    })
    const [isVisible, setIsVisible] = useState(true)
  
    const dispatch = useDispatch()
  
    const handleInputChange = (e) => {
      const { name, value } = e.target
      setCompanyInfo({ ...companyInfo, [name]: value })
      console.log(companyInfo)
    }
    const handleOnblur = (e) => {
        let updatedData = {
            companyUrl: companyInfo.companyUrl,
            headquartersAddress: companyInfo.hqAddress,
            companyName: companyInfo.companyName,
            companyCity: companyInfo.city,
            phone: companyInfo.phone,
            companyIndustry: {key: companyInfo.industry, value: 19}
          }
          dispatch(updateUserData(updatedData))
        
    }
    const handleEmployeeNumber = (e) => {
      setCompanyInfo({ ...companyInfo, employee: JSON.parse(e.target.value) })
      console.log(companyInfo)
    }
    const updateEmployee = () => {
        let updatedData = {
            companyEmployeeNumber: companyInfo.employee
          }
          dispatch(updateUserData(updatedData))
    }
  
    const handleIndustry = (e) => {
      if (JSON.parse(e.target.value).key === "Other") {
        setIsVisible(false)
        console.log(companyInfo)
      } else {
        setIsVisible(true)
        setCompanyInfo({ ...companyInfo, industry: JSON.parse(e.target.value )})
        console.log(companyInfo)
      }
    }

    const updateIndustry = () => {
        let updatedData = {
            companyIndustry: companyInfo.industry
          }
          dispatch(updateUserData(updatedData))
    }
  
    
    return (
      <Box>
        
        <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
          Update your company informations
        </Text>
        
        <Box w={[300, 300, 400, 400]} ml={5}>
          <FormControl id="companyName" mt={[6, 6, 5, 4]}>
            <Input
              name="companyName"
              type="text"
              placeholder="Company Name"
              onBlur={handleOnblur}
              value={companyInfo.companyName}
              onChange={handleInputChange}
            />
          </FormControl>


        <FormControl id="phoneAndCity" mt={4}>
          <Input
            w={[140, 140, 190, 190]}
            onBlur={handleOnblur}
            name="phone"
            type="tel"
            value={companyInfo.phone}
            onChange={handleInputChange}
            placeholder="Phone"
          />

          <Input
            ml={5}
            w={[140, 140, 190, 190]}
            onBlur={handleOnblur}
            type="text"
            name="city"
            value={companyInfo.city}
            onChange={handleInputChange}
            placeholder="City"
          />
        </FormControl>
  
          <FormControl id="hqAddress" mt={4}>
            <Input
              name="hqAddress"
              onBlur={handleOnblur}
              type="text"
              placeholder="Headquarters Address "
              value={companyInfo.hqAddress}
              onChange={handleInputChange}
            />
          </FormControl>
  
          <FormControl id="companyUrl" mt={4}>
            <Input
              name="companyUrl"
              onBlur={handleOnblur}
              type="text"
              placeholder="Company Url"
              value={companyInfo.companyUrl}
              onChange={handleInputChange}
            />
          </FormControl>
  
          <FormControl id="companySize" mt={4}>
            <Select
              placeholder="Select a number of employees"
              onChange={handleEmployeeNumber}
              onBlur={updateEmployee}
              mt={4}
            >
              {Object.values(COMPANY_SIZE).map((size, index) => (
                <option value={JSON.stringify(size)} key={index}>
                  {size.key}
                </option>
              ))}
            </Select>
          </FormControl>
  
          <Text fontWeight="bold" mt={10} fontSize="xl">
            Industry
          </Text>
          <Text mt={2} fontSize="md">
            Knowing your company's industry helps our algorithm make better
            recommendations that align to candidate preferences.
          </Text>
  
          <FormControl id="industry" mt={4}>
            <Select
              placeholder="Select an industry"
              onChange={handleIndustry}
              onBlur={updateIndustry}
              mt={4}
            >
              {Object.values(INDUSTRIES).map((industry, index) => (
                <option key={index} value={JSON.stringify(industry)}>
                  {industry.key}
                </option>
              ))}
            </Select>
          </FormControl>
  
          <FormControl id="other" mt={[6, 6, 5, 4]}>
            <Input
              isDisabled={isVisible}
              onBlur={handleOnblur}
              name="industry"
              type="text"
              placeholder="Type Your Industry"
              onChange={handleInputChange}
            />
          </FormControl>
        </Box>
  
       
      </Box>
    )
  }
  
  export default CompanyInformations
  