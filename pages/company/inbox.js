import React, { useState } from 'react'
import moment from 'moment'
import {
    Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  NoSsr
} from '@material-ui/core'
import { Check, Close } from '@material-ui/icons'

import '../../components/style/inbox.less'

const data = [
  {
    id: 1,
    name: 'Dropbox',
    imageUrl: '/github.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: 2,
    name: 'Medium Corporation',
    imageUrl: '/github.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: 3,
    name: 'Slack',
    imageUrl: '/github.png',
    updatedAt: moment().subtract(3, 'hours')
  },
  {
    id: 4,
    name: 'Lyft',
    imageUrl: '/github.png',
    updatedAt: moment().subtract(5, 'hours')
  },
  {
    id: 5,
    name: 'GitHub',
    imageUrl: '/github.png',
    updatedAt: moment().subtract(9, 'hours')
  }
]

const useStyles = makeStyles({
  root: {
    height: '100%'
  },
  image: {
    height: 48,
    width: 48
  }
})

const LatestProducts = ({ className, ...rest }) => {
  const classes = useStyles()
  const [candidatesFromAdmin,setCandidatesFromAdmin] = useState(data)
  const [selectedCandidates,setSelectedCandidates] = useState([])

  const addTalent = (talent, index) => {
    // setIsLoadingTalent(true);
    const newTalent = candidatesFromAdmin.filter((item, i) => i !== index);
    setCandidatesFromAdmin(newTalent);
    // setIsLoadingTalent(false);
    setSelectedCandidates([...selectedCandidates, talent]);
  };

  const deleteTalent = (talent, index) => {
    // setIsLoadingTalent(true);
    const newTalent = candidatesFromAdmin.filter((item, i) => i !== index);
    setCandidatesFromAdmin(newTalent);
    // setIsLoadingTalent(false);
  };

  const deleteSelectedTalent = (talent, index) => {
    // setIsLoadingTalent(true);
    const newTalent = selectedCandidates.filter((item, i) => i !== index);
    setSelectedCandidates(newTalent);
    // setIsLoadingTalent(false);
  };


  return (
    <NoSsr>
      <Card className="candidate-container" {...rest}>
        <CardHeader
        
          subtitle={`${candidatesFromAdmin.length} in total`}
          title="Latest Candidates"
        />
        <Divider />
        <List>
          {candidatesFromAdmin.map((candidate, index) => (
            <ListItem divider={index < candidate.length - 1} key={candidate.id}>
              <ListItemAvatar>
                <img
                  alt="Product"
                  className={classes.image}
                  src={candidate.imageUrl}
                />
              </ListItemAvatar>
              <ListItemText
                  onClick={() =>
                    window.open(
                      "https://honeymock.vercel.app/talentProfile?id=" + "601c7efd207014001534a196"
                    )
                  }
                primary={candidate.name}
                secondary={`Updated ${candidate.updatedAt.fromNow()}`}
              />
              <IconButton onClick={() => deleteTalent(candidate,index)} edge="end" size="small" color="secondary">
                <Close />
              </IconButton>
              <IconButton onClick={() => addTalent(candidate,index)} edge="end" size="small">
                <Check className="candidate-check" />
              </IconButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box height='auto' width='300px' display="flex" justifyContent="flex-start" p={2}>
            {(selectedCandidates || []).map((candidate,index) => (
                 <Chip
                 avatar={<Avatar alt="Natacha" src='/github.png' />}
                 label={'Berk' + ' ' + 'Ozturk'}
                 onDelete={() => deleteSelectedTalent(candidate,index)}   
               />
            ))}
         
          
        </Box>
      </Card>
    </NoSsr>
  )
}

export default LatestProducts
