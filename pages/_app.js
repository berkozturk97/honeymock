import { ThemeProvider, theme , CSSReset} from '@chakra-ui/react'
import MasterPage from '../components/master-page/masterpage'

import '../style/app.less';
import 'rsuite/lib/styles/index.less';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <MasterPage/>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
