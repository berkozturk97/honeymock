import { ThemeProvider, theme , CSSReset} from '@chakra-ui/react'
import MasterPage from '../components/master-page/masterpage'
import App from 'next/app';

import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../redux/store';

import '../style/app.less';


class MyApp extends App {
  render(){
    const { Component, pageProps} = this.props;
    return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      {typeof window !== 'undefined' && <MasterPage/>}
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
