import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import { NoSsr, TextField, Typography } from '@material-ui/core';
import GridItem from '../material-ui-component/Grid/GridItem';
import Image from 'next/image'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: "#262626",
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    color:'white',
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  listTitle: {
    color:'white',
    fontSize: 13,
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
  socialIcon:{
    marginLeft: 10,
  }
}));

export default function AppFooter() {
  const classes = useStyles();

  return (
    <NoSsr>
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={10} md={4}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
              <svg width="150" height="50"
                xmlns="http://www.w3.org/2000/svg">
                <image href="/tz-logo-footer.svg" height="50" width="150"/>
              </svg>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8} sm={10} md={2}>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link className={classes.listTitle} href="/">For talent link</Link>
              </li>
              <li className={classes.listItem}>
                <Link className={classes.listTitle} href="/">Talent FAQ</Link>
              </li>
              <li className={classes.listItem}>
                <Link className={classes.listTitle} href="/">Talent Terms</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={8} sm={10} md={2}>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link className={classes.listTitle} href="/">For Employer Link</Link>
              </li>
              <li className={classes.listItem}>
                <Link className={classes.listTitle} href="/">Employer FAQ</Link>
              </li>
              <li className={classes.listItem}>
                <Link className={classes.listTitle} href="/">Employer Terms</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={8} sm={10} md={2}>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link className={classes.listTitle} href="/">We're social</Link>
              </li>
              <li className={classes.listItem}>
                  <a target="_blank" href={"https://www.google.com"}>
                    <Image
                      src="/facebook-white.png"
                      width={20}
                      height={20}
                      layout="fixed"
                      alt="Git Hub"
                    />
                  </a>

                  <a target="_blank" href={"https://www.google.com"}>
                    <Image
                      src="/linkedn-white.png"
                      width={20}
                      height={20}
                      layout="fixed"
                      alt="Git Hub"
                    />
                  </a>
                  <a className={classes.socialIcon} target="_blank" href={"https://www.google.com"}>
                    <Image
                      src="/twitter-white.png"
                      width={20}
                      height={20}
                      className={classes.socialIcon}
                      layout="fixed"
                      alt="Git Hub"
                    />
                  </a>
              </li>
              <li className={classes.listItem}>
                <Link className={classes.listTitle} href="/">About us</Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Typography>
    </NoSsr>
  );
}