import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import AppFooter from '../components/Nav/footer'
import '../components/employer.less'
import { Button, Grid, NoSsr } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'
import { blue, purple } from '@material-ui/core/colors'
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    textDecoration: 'none',
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: blue[700]
    },
    '&:a': {
      color: 'white',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }
}))(Button)

function Employer() {
  return (
    <NoSsr>
      <div>
        <div className={'firstContainer'}>
          <div className="mainHeading">
            <h1 className="background-title-v1">
              Build you Tech Team lorem ipsum
            </h1>
          </div>
          <div className='subtitle-container'>
          <h3 className="background-subtitle-v1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis laudantium nemo quo ipsa laboriosam, debitis nesciunt blanditiis sapiente officiis placeat. Nobis et corrupti rerum cum libero aspernatur eveniet quisquam consectetur!
            </h3>
          </div>
          <div className="button-group">
            <ColorButton
              href="/signUpTalent"
              variant="contained"
              color="primary"
              style={{ marginTop: 30 }}
            >
              Find Me a Job
            </ColorButton>
            <Button
              style={{ marginLeft: 30, marginTop: 30 }}
              variant="outlined"
            >
              I'm hiring
            </Button>
          </div>
        </div>

        <div>
          <div>
          <Grid container spacing={24}>
              <Grid  item sm={6} xs={12}>
                <div className={'card-box'}>
                  <h1 className={'card-title-text'}> Get matched with the best talent lorem</h1>
                  <h2 className={'desc'}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate qui ut ipsum quia incidunt dicta corrupti, quam possimus ratione consectetur! Necessitatibus suscipit facere sunt cumque? Veniam illum libero illo pariatur distinctio, molestiae ducimus vitae accusantium quam necessitatibus repellat voluptatem, mollitia aut voluptatum veritatis fuga dolorem, officia nulla accusamus voluptatibus velit.
                  </h2>
                  <h2 onClick className={'link-text'}>Join Now ></h2>
                </div>
              </Grid>
              <Grid item sm={6} xs={12}>
                {/* <img src="/letters.png" object-fit="cover" /> */}
                <div className='card-between-image'></div>
              </Grid>
            </Grid>

            <Grid container spacing={24}>
            <Grid item sm={6} xs={12}>
                {/* <img src="/letters.png" object-fit="cover" /> */}
                <div className='card-between-image-left'></div>
              </Grid>
              <Grid  item sm={6} xs={12}>
                <div className={'card-box-right'}>
                  <h1 className={'card-title-text'}>Looking for a custom plan?</h1>
                  <h2 className={'desc'}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate qui ut ipsum quia incidunt dicta corrupti, quam possimus ratione consectetur! Necessitatibus suscipit facere sunt cumque? Veniam illum libero illo pariatur distinctio, molestiae ducimus vitae accusantium quam necessitatibus repellat voluptatem, mollitia aut voluptatum veritatis fuga dolorem, officia nulla accusamus voluptatibus velit.
                  </h2>
                  <h2 onClick className={'link-text'}>Get in touch with Talent Zoom ></h2>
                </div>
              </Grid>
            </Grid>

            <Grid container spacing={24}>
              <Grid item sm={6} xs={12}>
                <div className={'right-box'}>
                  <h1 className={'link-title-text'}>Want to work from home</h1>
                  <h2 className={'desc'}>
                    As workplaces evolve, so do we. Find flexible remote,
                    contract, and full time employment opportunities – all in
                    one place.
                  </h2>
                  <h2 className={'link-text'}>Create a free profile </h2>
                  <h2 className={'link-text'}>Learn more</h2>
                </div>
              </Grid>
              <Grid item sm={6} xs={12}>
                <img src="/letters.png" object-fit="cover" />
              </Grid>
            </Grid>

            <Grid container spacing={24}>
              <Grid item sm={6} xs={12}>
                <div className={'right-box'}>
                  <h1 className={'link-title-text'}>You’re in full control</h1>
                  <h2 className={'desc'}>
                    No more guessing games. Say goodbye to commissioned
                    recruiters and ambiguous pay and get matched with companies
                    that fit your needs. Receive real-time alerts for
                    opportunities that you’re free to accept or decline.
                  </h2>
                  <h2 className={'link-text'}>Create a free profile </h2>
                </div>
              </Grid>
              <Grid item sm={6} xs={12}>
                <img src="/people.png" object-fit="cover" />
              </Grid>
            </Grid>
          </div>
        </div>
        <AppFooter></AppFooter>
      </div>
    </NoSsr>
  )
}

export default Employer
