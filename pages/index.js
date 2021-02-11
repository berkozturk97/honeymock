import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import AppFooter from '../components/Nav/footer'
import '../components/home.less'
import { Button, Grid, NoSsr, Paper } from '@material-ui/core'
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import { blue, purple } from '@material-ui/core/colors'
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    textDecoration:'none',
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: blue[700],
    },
    '&:a': {
      color: "white",
      textDecoration:"none",
      cursor:"pointer",
    },
  },
}))(Button);


function HomePage() {

  return (
    <NoSsr>
    <div>
      <div className={'bg'}>
        <div className="initialText">
          <h1 className="background-title" >Choose a job love</h1>
          <h1 className="background-subtitle" >Join the employment marketplace for tech professionals where you're matched with companies that apply to you. </h1>
        </div>
        <div className="buttons">   
            <ColorButton href="/signUpTalent" variant="contained" color= "primary" >Find Me a Job</ColorButton>
            <Button style={{marginLeft:30}} variant="outlined">I'm hiring</Button>
        </div>
      </div>
      <div>
        <div>
        <Grid container spacing={24}>
          <Grid item sm={6} xs={12} >
            <Grid container spacing={12} alignContent={'stretch'}>
              <Grid item sm={12} xs={12} >
               <h1 className={'descMainTitle'}>How it works</h1>
              </Grid>
              <Grid item sm={6} xs={12} >
              <div className={'paper'}>
                <h2 className={'descTitle'}>01</h2>
                <h2 className={'descSubTitle'}>Create a profile</h2>
                <h2 className={'desc'}>Sign up for free and tell us what metters to you "\n" - we're all ears</h2>
              </div>
              </Grid>
              
              <Grid item sm={6} xs={12} >
              <div className={'paper'}>
                <h2 className={'descTitle'}>02</h2>
                <h2 className={'descSubTitle'}>Get Matched</h2>
                <h2 className={'desc'}>We'll take it from here. Our matchmaking platform pairs you with companies.</h2>
              </div>
              </Grid>
            </Grid>

            <Grid container spacing={12}>
              <Grid item sm={6} xs={12} >
              <div className={'paper'}>
                <h2 className={'descTitle'}>03</h2>
                <h2 className={'descSubTitle'}>Meet your dedicated Talent Advocate</h2>
                <h2 className={'desc'}>Sign up for free and tell us what matters to you - we're all ears</h2>
              </div>
              </Grid>
              <Grid item sm={6} xs={12} >
              <div className={'paper'}>
                <h2 className={'descTitle'}>04</h2>
                <h2 className={'descSubTitle'}>Get Hired</h2>
                <h2 className={'desc'}>Sign up for free and tell us what metters to you "\n" - we're all ears</h2>
              </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={6} xs={12}>
            <img src="/letters.png" object-fit ="cover"/>
          </Grid>
        </Grid>

        <Grid container spacing={24}>
          <Grid item sm={6} xs={12} >
          <img src="/letters.png" object-fit ="cover"/>
          </Grid>
          <Grid item sm={6} xs={12} >
              <div className={'right-box'}>
                <h1 className={'link-title-text'}>Join a team you love</h1>
                <h2 className={'desc'}>Create a free profile to get matched with your dream company. Discover a new way to explore opportunities and grow professionally.</h2>
                <h2 className={'link-text'}>Sign up to get matched </h2>
                <h2 className={'link-text'}>Hiring? Build a team </h2>
              </div>
          </Grid>
        </Grid>

        <Grid container spacing={24}>
          <Grid item sm={6} xs={12} >
              <div className={'right-box'}>
                <h1 className={'link-title-text'}>Want to work from home</h1>
                <h2 className={'desc'}>As workplaces evolve, so do we. Find flexible remote, contract, and full time employment opportunities – all in one place.</h2>
                <h2 className={'link-text'}>Create a free profile </h2>
                <h2 className={'link-text'}>Learn more</h2>
              </div>
          </Grid>
          <Grid item sm={6} xs={12} >
          <img src="/letters.png" object-fit ="cover"/>
          </Grid>
        </Grid>

        <Grid container spacing={24}>
          <Grid item sm={6} xs={12} >
              <div className={'right-box'}>
                <h1 className={'link-title-text'}>You’re in full control</h1>
                <h2 className={'desc'}>No more guessing games. Say goodbye to commissioned recruiters and ambiguous pay and get matched with companies that fit your needs. Receive real-time alerts for opportunities that you’re free to accept or decline.</h2>
                <h2 className={'link-text'}>Create a free profile </h2>
              </div>
          </Grid>
          <Grid item sm={6} xs={12} >
            <img src="/people.png" object-fit ="cover"/>
          </Grid>
        </Grid>
      </div>
    </div>
      <AppFooter></AppFooter>
    </div>
    </NoSsr>
  )
}

export default HomePage;