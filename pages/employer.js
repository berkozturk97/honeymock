import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import AppFooter from '../components/Nav/footer'
import '../components/employer.less'
import { Button, Grid, NoSsr } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles'
import { blue, purple } from '@material-ui/core/colors'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
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

function createData(features, talentZoom, others) {
  return { features, talentZoom, others};
}

const rows = [
  createData('lorem', <CheckCircleOutlineIcon style={{color: 'green'}} />, <CheckCircleOutlineIcon style={{color: 'green'}} />),
  createData('lorem', 'Cooming soon', 'Cooming soon'),
  createData('lorem', <CheckCircleOutlineIcon style={{color: 'green'}} />, <CheckCircleOutlineIcon style={{color: 'green'}} />),
  createData('lorem', <CheckCircleOutlineIcon style={{color: 'green'}} />, <CheckCircleOutlineIcon style={{color: 'green'}} />),
  createData('lorem', <CheckCircleOutlineIcon style={{color: 'green'}} />, <CheckCircleOutlineIcon style={{color: 'green'}} />),
  createData('lorem', <CheckCircleOutlineIcon style={{color: 'green'}} />, <CheckCircleOutlineIcon style={{color: 'green'}} />),
  createData('lorem', <CheckCircleOutlineIcon style={{color: 'green'}} />, <CheckCircleOutlineIcon style={{color: 'green'}} />),
  createData('lorem', <CheckCircleOutlineIcon style={{color: 'green'}} />, <CheckCircleOutlineIcon style={{color: 'green'}} />),
  createData('lorem', <CheckCircleOutlineIcon style={{color: 'green'}} />, <CheckCircleOutlineIcon style={{color: 'green'}} />),
  createData('lorem', <CheckCircleOutlineIcon style={{color: 'green'}} />, <CheckCircleOutlineIcon style={{color: 'green'}} />),
  createData('lorem', <CheckCircleOutlineIcon style={{color: 'green'}} />, <CheckCircleOutlineIcon style={{color: 'green'}} />),
 
  
  
];

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
          <div className="subtitle-container">
            <h3 className="background-subtitle-v1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              laudantium nemo quo ipsa laboriosam, debitis nesciunt blanditiis
              sapiente officiis placeat. Nobis et corrupti rerum cum libero
              aspernatur eveniet quisquam consectetur!
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
              <Grid item sm={6} xs={12}>
                <div className={'card-box'}>
                  <h1 className={'card-title-text'}>
                    {' '}
                    Get matched with the best talent lorem
                  </h1>
                  <h2 className={'desc'}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Cupiditate qui ut ipsum quia incidunt dicta corrupti, quam
                    possimus ratione consectetur! Necessitatibus suscipit facere
                    sunt cumque? Veniam illum libero illo pariatur distinctio,
                    molestiae ducimus vitae accusantium quam necessitatibus
                    repellat voluptatem, mollitia aut voluptatum veritatis fuga
                    dolorem, officia nulla accusamus voluptatibus velit.
                  </h2>
                  <h2 onClick className={'link-text'}>
                    Join Now >
                  </h2>
                </div>
              </Grid>
              <Grid item sm={6} xs={12}>
                {/* <img src="/letters.png" object-fit="cover" /> */}
                <div className="card-between-image"></div>
              </Grid>
            </Grid>

            <Grid container spacing={24}>
              <Grid item sm={6} xs={12}>
                {/* <img src="/letters.png" object-fit="cover" /> */}
                <div className="card-between-image-left"></div>
              </Grid>
              <Grid item sm={6} xs={12}>
                <div className={'card-box-right'}>
                  <h1 className={'card-title-text'}>
                    Looking for a custom plan?
                  </h1>
                  <h2 className={'desc'}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Cupiditate qui ut ipsum quia incidunt dicta corrupti, quam
                    possimus ratione consectetur! Necessitatibus suscipit facere
                    sunt cumque? Veniam illum libero illo pariatur distinctio,
                    molestiae ducimus vitae accusantium quam necessitatibus
                    repellat voluptatem, mollitia aut voluptatum veritatis fuga
                    dolorem, officia nulla accusamus voluptatibus velit.
                  </h2>
                  <h2 onClick className={'link-text'}>
                    Get in touch with Talent Zoom >
                  </h2>
                </div>
              </Grid>
            </Grid>

            <Grid container spacing={24}>
            <Grid item sm={3} xs={12}>
            <h2 className={'desc-table'}>
                    Compare you verse others
                  </h2>
              </Grid>
              <Grid item sm={7} xs={12}>
              <h1 className={'card-title-text'}>
                    {' '}
                    Comparison Chart Module
                  </h1>
                  <h2 className={'desc'}>
                    Lorem ipsum dolor sit amet.
                  </h2>
                  <h2 onClick className={'link-text'}>
                    Join Now >
                  </h2>
              <TableContainer className='feature-table-container' component={Paper}>
                <Table className='feature-table' aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Features</TableCell>
                      <TableCell className='talent-zoom-header' align="center">Talentzoom</TableCell>
                      <TableCell align="center">Others</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className='feature-table-body'>
                    {rows.map((row) => (
                      <TableRow key={row.features}>
                        <TableCell align='center' component="th" scope='row' >
                          {row.features}
                        </TableCell>
                        <TableCell className='talent-zoom-body' align="center">{row.talentZoom}</TableCell>
                        <TableCell align="center">{row.others}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              </Grid>
             
            </Grid>

            <Grid container spacing={24}>
              <Grid item sm={6} xs={12}>
                {/* <img src="/letters.png" object-fit="cover" /> */}
                <div className="card-between-image-left"></div>
              </Grid>
              <Grid item sm={6} xs={12}>
                <div className={'card-box-right'}>
                  <h1 className={'card-title-text'}>
                    Hire Quicker Lorem Ipsum
                  </h1>
                  <h2 className={'desc'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus maxime repellat enim nulla explicabo dolore. Quaerat ipsam, enim illo incidunt ab tempore hic obcaecati voluptas amet nobis natus praesentium. Vitae doloremque magnam dicta porro atque sequi deleniti possimus aliquam quasi.
                  </h2>
                  <h1 className={'card-title-text'}>
                    Hire Quicker Lorem Ipsum
                  </h1>
                  <h2 className={'desc'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus maxime repellat enim nulla explicabo dolore. Quaerat ipsam, enim illo incidunt ab tempore hic obcaecati voluptas amet nobis natus praesentium. Vitae doloremque magnam dicta porro atque sequi deleniti possimus aliquam quasi.
                  </h2>
                  <h2 onClick className={'link-text'}>
                    Get in touch with Talent Zoom >
                  </h2>
                </div>
              </Grid>
            </Grid>

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


          </div>
        </div>
        <AppFooter></AppFooter>
      </div>
    </NoSsr>
  )
}

export default Employer
