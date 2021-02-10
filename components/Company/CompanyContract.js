import { Text } from '@chakra-ui/react'
import moment from 'moment';
import CardHeader from '../material-ui-component/Card/CardHeader';
import GridItem from '../material-ui-component/Grid/GridItem';
import '../Talent/talent.less'
function CompanyContract({user}) {
  return (
    <div className={"back"}>
    <CardHeader>
    <GridItem>
      <Text ml={2} justifySelf="center" fontSize="2xl">
        Open Contracts
      </Text>
      {
        (user.contract || []).map((contract,index) =>{
          return (
            <div key={index} className={'main-item-div'}>
            <Text mt={10} fontSize="md">{contract.companyInfo.jobTitle} ({contract.companyInfo.jobTime}) </Text>
            <Text fontSize="sm"> - {contract.companyInfo.jobTitle}  </Text>
            <Text fontSize="sm"> - Experience: {contract.companyInfo.experience} years </Text>
            <Text fontSize="sm"> - Salary: ${contract.companyInfo.salary}</Text>
            <Text fontSize="sm"> - Role Description: {contract.companyInfo.roleDescription}</Text>
          </div>
          )
        })
      }
      
    </GridItem>
    </CardHeader>
    </div>
  )
}

export default CompanyContract
