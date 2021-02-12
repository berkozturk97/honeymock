import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import AppFooter from '../components/Nav/footer'
import '../components/about.less'
import { Button, Grid, NoSsr, Paper } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

function AboutUs() {
  return (
    <NoSsr>
      <div>
        <div className="about-firstContainer">
          <div className="about-mainHeading">
            <h1 className="about-title">
              Our company Lorem ipsum dolor sit amet.
            </h1>
          </div>
        </div>

        <div>
          <div>
            <Grid container spacing={24}>
              <Grid item sm={3} xs={12}>
                <h2 className={'about-second-title'}>Who we are</h2>
              </Grid>
              <Grid item sm={7} xs={12}>
                <h1 className={'about-main-title'}>
                  Talent zoom info and our values
                </h1>
                <h2 className={'about-first-description'}>
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  sapiente obcaecati impedit labore autem quasi, deleniti
                  mollitia debitis illo, blanditiis quas, error ex perferendis
                  cumque enim nemo beatae consequatur soluta! Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Deleniti, totam
                  praesentium illum amet modi voluptatem culpa, sequi ullam
                  nostrum ea doloribus cupiditate quam ipsam reprehenderit.
                  Assumenda iusto beatae eligendi alias.{' '}
                </h2>
                <h2 onClick className={'link-text'}>
                  {`Join Now >`}
                </h2>

                <div style={{ display: 'flex' }}>
                  <Grid item sm={6} xs={6}>
                    <div className={'small-desc-container'}>
                      <h2 className={'about-submain-title'}>
                        This is a required headline that spans the multiple
                        lines
                      </h2>
                      <h2 className={'about-small-description'}>
                        {' '}
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Labore at accusantium magni, ex porro, eos
                        consectetur eum nemo numquam doloribus deleniti quasi,
                        omnis magnam aliquam repudiandae dolorum tempore
                        possimus. Incidunt.{' '}
                      </h2>
                    </div>
                  </Grid>

                  <Grid item sm={6} xs={6}>
                    <div className={'small-desc-container'}>
                      <h2 className={'about-submain-title'}>
                        This is a required headline that spans the multiple
                        lines
                      </h2>
                      <h2 className={'about-small-description'}>
                        {' '}
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Labore at accusantium magni, ex porro, eos
                        consectetur eum nemo numquam doloribus deleniti quasi,
                        omnis magnam aliquam repudiandae dolorum tempore
                        possimus. Incidunt.{' '}
                      </h2>
                    </div>
                  </Grid>

                  <Grid item sm={6} xs={6}>
                    <div className={'small-desc-container'}>
                      <h2 className={'about-submain-title'}>
                        This is a required headline that spans the multiple
                        lines
                      </h2>
                      <h2 className={'about-small-description'}>
                        {' '}
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Labore at accusantium magni, ex porro, eos
                        consectetur eum nemo numquam doloribus deleniti quasi,
                        omnis magnam aliquam repudiandae dolorum tempore
                        possimus.
                      </h2>
                    </div>
                  </Grid>
                </div>
              </Grid>
            </Grid>

            <div className="about-firstContainer">
              <div className="about-mainHeading">
                <h1 className="about-title">Still looking for carousel</h1>
              </div>
            </div>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={3}>
                <h2 className={'about-second-title'}>
                  Meet the team
                </h2>
                <h2 className={'last-small-description'}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat vero neque architecto quas reiciendis suscipit numquam in ab ratione doloremque!
                </h2>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Card className='card-root'>
                  <CardActionArea>
                    <CardMedia
                      className='card-media'
                      image="/static/images/cards/contemplative-reptile.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                    <h2>Lizard</h2>
                      <p>
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </p>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Card className='card-root'>
                  <CardActionArea>
                    <CardMedia
                      className='card-media'
                      image="/static/images/cards/contemplative-reptile.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                    <h2>Lizard</h2>
                      <p>
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </p>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Card className='card-root'>
                  <CardActionArea>
                    <CardMedia
                      className='card-media'
                      image="/static/images/cards/contemplative-reptile.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <h2>Lizard</h2>
                      <p>
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </p>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
        <AppFooter></AppFooter>
      </div>
    </NoSsr>
  )
}

export default AboutUs
