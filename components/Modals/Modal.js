import React from 'react'

import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import CancelIcon from '@material-ui/icons/Cancel'

import { makeStyles } from '@material-ui/core/styles'
import { Text } from '@chakra-ui/react'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center'
  },
  paperModal: {
    width: 400,
    borderRadius: 10,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid 4F34A3',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  alertButton: {
    backgroundColor: '#5D3DBD',
    color: '#FFD10D'
  },
  helperText: {
    color: 'red'
  }
}))

export default function SuccessModal({ value, close }) {
  const classes = useStyles()
  const rootRef = React.useRef(null)

  const renderIcon = () => {
    if (value.isSuccess) {
      return (
        <CheckCircleOutlineIcon
          style={{
            alignSelf: 'center',
            marginTop: 0,
            fontSize: 60,
            marginBottom: 20,
            color: '#4bb543'
          }}
        />
      )
    } else {
      return (
        <CancelIcon
          style={{
            alignSelf: 'center',
            marginTop: 0,
            fontSize: 60,
            marginBottom: 20,
            color: '#ff0033'
          }}
        />
      )
    }
  }
  return (
    <Modal
      disablePortal
      disableEnforceFocus
      disableAutoFocus
      open={value.open}
      onClose={close}
      aria-labelledby="server-modal-title"
      aria-describedby="server-modal-description"
      className={classes.modal}
      container={() => rootRef.current}
    >
      <div className={classes.paperModal}>
        <div className={classes.paper} style={{ marginTop: 0 }}>
          {renderIcon()}
          <Text fontWeight="bold" fontSize="xl">
            {value.title}
          </Text>
          <Text fontSize="md">{value.message}</Text>
          {}
        </div>
        {value.yesButton && (
          <Button
            onClick={close}
            fullWidth
            variant="outlined"
            className={classes.alertButton}
          >
            Okay
          </Button>
        )}
      </div>
    </Modal>
  )
}
