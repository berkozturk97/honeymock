import { Box } from '@chakra-ui/react';
import Step1 from '../../components/CompanyLoginSteps/CompanyStep1';

function CompanyStep1() {
    return (
        <Box w={[400,500,600,1000]} backgroundColor='#fff' h={'auto'} p={10} m={(0, 'auto')} mt={10}>
          <Step1 />
      </Box>
    )
}

export default CompanyStep1;