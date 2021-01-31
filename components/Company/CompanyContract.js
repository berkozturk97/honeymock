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
        (user.workedCompanies || []).map((company,index) =>{
          return (
            <div class={'main-item-div'}>
            <a class={'title'}> <a class={'dot'}>•</a> {company.position} ({company.company}) ({moment(company.startDate).format('YYYY')} - {moment(company.endDate).format('YYYY')}) </a>
            <a class={'subtitle'}> - {company.description}  </a>
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
