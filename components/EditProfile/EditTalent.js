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
import Social from '../UpdateComponents/Talent/Social'
import WorkingConditions from '../UpdateComponents/Talent/WorkingConditions'
import TalentExperience from '../UpdateComponents/Talent/TalentExperience'
import WorkExperience from '../UpdateComponents/Talent/WorkExperience'
import Education from '../UpdateComponents/Talent/Education'
import LanguageSkill from '../UpdateComponents/Talent/LanguageSkill'
import Salary from '../UpdateComponents/Talent/Salary'
import SummaryAndPhoto from '../UpdateComponents/Talent/SummaryAndPhoto'
import { updateTalent } from '../../api/talentApi'
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

export default function EditTalent({ user }) {
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
    var revisedObject = updatedData;
    delete revisedObject._id;
    delete revisedObject.type;
    delete revisedObject.password;
    delete revisedObject.createdAt;
    delete revisedObject.updatedAt;
    delete revisedObject.tokenCode;
    delete revisedObject.__v;
    await updateTalent({ body: revisedObject, _id: user._id , token: user.tokenCode})
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
                Social Media / CV
              </Text>
            </AccordionSummary>

            <AccordionDetails>
              <Social user={user} />
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
                Preferred Cities / Employment Type / Start Time / USA Work
                Permit
              </Text>
            </AccordionSummary>

            <AccordionDetails>
              <WorkingConditions user={user} />
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
                Roles
              </Text>
            </AccordionSummary>

            <AccordionDetails>
              <TalentExperience user={user} />
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
                Work Experience
              </Text>
            </AccordionSummary>

            <AccordionDetails>
              <WorkExperience user={user} />
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
                Education
              </Text>
            </AccordionSummary>

            <AccordionDetails>
              <Education user={user} />
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
                Languages and Skills
              </Text>
            </AccordionSummary>

            <AccordionDetails>
              <LanguageSkill user={user} />
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
                Salary
              </Text>
            </AccordionSummary>

            <AccordionDetails>
              <Salary user={user} />
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
                Summary and Profile Photo
              </Text>
            </AccordionSummary>

            <AccordionDetails>
              <SummaryAndPhoto user={user} />
            </AccordionDetails>
          </Accordion>
        </Box>
      </Dialog>
    </div>
  )
}
