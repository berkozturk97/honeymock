import { Box } from '@chakra-ui/react';
import Step2 from '../../components/CompanyLoginSteps/CompanyStep2';

function CompanyStep2() {
    return (
        <Box w={[400,500,600,1000]} backgroundColor='#fff' h={'auto'} p={10} m={(0, 'auto')} mt={10}>
          <Step2 />
      </Box>
    )
}

export default CompanyStep2;