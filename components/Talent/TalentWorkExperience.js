import { Text } from '@chakra-ui/react'
import moment from 'moment';
import CardHeader from '../material-ui-component/Card/CardHeader';
import GridItem from '../material-ui-component/Grid/GridItem';
import './talent.less'
function TalentWorkExperience({user}) {
  return (
    <div className={"back"}>
    <CardHeader>
    <GridItem>
      <Text ml={2} justifySelf="center" fontSize="2xl">
        Work Experience
      </Text>
      {
        (user.workedCompanies || []).map((company,index) =>{
          return (
            <div key={index} className={'main-item-div'}>
            <Text fontSize="md"> {company.position} ({company.company}) ({moment(company.startDate).format('YYYY')} - {moment(company.endDate).format('YYYY')}) </Text>
            <Text fontSize='sm' > - {company.description}  </Text>
          </div>
          )
        })
      }
      
    </GridItem>
    </CardHeader>
    </div>
  )
}

export default TalentWorkExperience
