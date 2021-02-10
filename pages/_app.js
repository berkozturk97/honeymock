import { ThemeProvider, theme , CSSReset} from '@chakra-ui/react'

import App from 'next/app';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../redux/store';
import dynamic from 'next/dynamic'



import '../style/app.less';
// import Navigation from '../components/Nav/navigation';

const Navigation = dynamic(
  () => import('../components/Nav/navigation'),
  { ssr: false }
)


class MyApp extends App {
  render(){
    const { Component, pageProps} = this.props;
    return (
    <Provider store={store}>
     
    <ThemeProvider theme={theme}>
      {typeof window !== 'undefined' && <Navigation/>}
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  
    </Provider>
  )
  }
  
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
