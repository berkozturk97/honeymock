import { Box } from '@chakra-ui/react'
import React from 'react'

import CompanyContract from '../../components/CompanyLoginSteps/CompanyContract'


function Contract() {
  return (
    
    <Box
      width={[400,500,600,1000]}
      bgcolor="#fff"
      height={'auto'}
      p={10}
      m={(0, 'auto')}
      mt={10}
    >
        <CompanyContract />
    </Box>

  )
}

export default Contract
