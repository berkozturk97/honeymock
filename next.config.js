const withLess = require('@zeit/next-less')


module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true
  }
}),{
  env: {
    LINKEDIN_STATE: process.env.NEXT_PUBLIC_LINKEDIN_STATE,
    LINKEDIN_SCOPE: process.env.NEXT_PUBLIC_LINKEDIN_SCOPE,
    LINKEDIN_REDIRECT: process.env.NEXT_PUBLIC_LINKEDIN_REDIRECT,
    LINKEDIN_CLIENT_ID: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID,
    LINKEDIN_CLIENT_SECRET: process.env.LINKEDIN_CLIENT_SECRET,
  }
}



LINKEDIN_STATE="gfdfgjnfdgnjds842394sdhsjkhfkdjs838hdfhs8dfsdh"
LINKEDIN_SCOPE="r_liteprofile r_emailaddress"
LINKEDIN_REDIRECT="http://localhost:3000/"
LINKEDIN_CLIENT_ID="78dk4hnmv0ey5o"
LINKEDIN_CLIENT_SECRET="VVV0rYuYTdWrcMYa"