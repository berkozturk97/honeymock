import { Text } from '@chakra-ui/react'
import moment from 'moment';
import CardHeader from '../material-ui-component/Card/CardHeader';
import GridItem from '../material-ui-component/Grid/GridItem';
import '../Talent/talent.less'
function CompanyContract({user}) {
  return (
    <div class={"back"}>
    <CardHeader>
    <GridItem>
      <Text ml={2} justifySelf="center" fontSize="2xl">
        Open Contracts
      </Text>
      {
        (user.contract || []).map((contract,index) =>{
          return (
            <div class={'main-item-div'}>
            <a class={'title'}> <a class={'dot'}>•</a> {contract.companyInfo.jobTitle} ({contract.companyInfo.jobTime}) </a>
            <a class={'subtitle'}> - {contract.companyInfo.jobTitle}  </a>
            <a class={'subtitle'}> - Experience: {contract.companyInfo.experience} years </a>
            <a class={'subtitle'}> - Salary: ${contract.companyInfo.salary}</a>
            <a class={'subtitle'}> - Role Description: {contract.companyInfo.roleDescription}</a>
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
