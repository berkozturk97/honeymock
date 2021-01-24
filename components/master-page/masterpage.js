import Navigation from '../Nav/navigation'

import Head from 'next/head'

function MasterPage({ children }) {
  return (
    <div>
      <Head>
        <title>HR Web Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <main>{children}</main>
    </div>
  )
}

export default MasterPage
