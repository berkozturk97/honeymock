import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import Divider from '@material-ui/core/Divider'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary
} from '@material-ui/core'
import CompanyContract from '../Company/CompanyContract'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Box, Text } from '@chakra-ui/react'

import { useDispatch, useSelector } from 'react-redux'
import { updateUserData } from '../../redux/actions/updateAction'
import Contract from '../UpdateComponents/Company/Contract'
import Vision from '../UpdateComponents/Company/Vision'
import CityAndJob from '../UpdateComponents/Company/CityAndJob'
import CompanyInformations from '../UpdateComponents/Company/CompanyInformations'
import { updateCompany } from '../../api/companyApi'
import { useRouter } from 'next/router'
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  summary: {
    backgroundColor: '#f2f2f2'
  }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function EditCompany({ user }) {
  const { updatedData } = useSelector((state) => state.update)
  const router = useRouter()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(updateUserData(user))
  }, [])
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = async () => {
    var revisedObject = updatedData
    delete revisedObject._id
    delete revisedObject.type
    delete revisedObject.password
    delete revisedObject.createdAt
    delete revisedObject.updatedAt
    delete revisedObject.__v
    await updateCompany({
      body: revisedObject,
      _id: user._id,
      token: user.tokenCode
    })
    router.reload()
    setOpen(false)
  }
  const handleNormalClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <IconButton
      color='inherit'
      edge='end'
      onClick={handleClickOpen}>
      <EditIcon  />
      </IconButton>

      <Dialog
        PaperProps={{
          style: {
            backgroundColor: '#f6f6f6',
            boxShadow: 'none'
          }
        }}
        fullScreen
        open={open}
        onClose={handleNormalClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleNormalClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Start the edit your profile
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Box
          w={[400, 500, 600, 1000]}
          backgroundColor="#fff"
          h={'auto'}
          p={10}
          m={(0, 'auto')}
          mt={10}
        >
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              classes={{ root: classes.summary }}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Text ml={2} justifySelf="center" fontSize="2xl">
                Open Contracts
              </Text>
            </AccordionSummary>

            <AccordionDetails>
              <Contract contracts={user.contract} />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              classes={{ root: classes.summary }}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Text ml={2} justifySelf="center" fontSize="2xl">
                Vision / Photo / TechStack
              </Text>
            </AccordionSummary>

            <AccordionDetails>
              <Vision
                vision={user.visionMission}
                photo={user.companyLogoUrl}
                wantedSkills={user.wantedSkills}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              classes={{ root: classes.summary }}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Text ml={2} justifySelf="center" fontSize="2xl">
                City / Roles
              </Text>
            </AccordionSummary>

            <AccordionDetails>
              <CityAndJob
                wantedWorkCities={user.wantedWorkCity}
                wantedRoles={user.wantedRoles}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              classes={{ root: classes.summary }}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Text ml={2} justifySelf="center" fontSize="2xl">
                General Informations
              </Text>
            </AccordionSummary>
            <AccordionDetails>
              <CompanyInformations infos={user} />
            </AccordionDetails>
          </Accordion>
        </Box>
      </Dialog>
    </div>
  )
}
