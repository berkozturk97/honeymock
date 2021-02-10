import React from 'react';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from '../../redux/actions/userAction'
import Button from '@material-ui/core/Button';
import { blue, purple } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

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

export default function Navigation() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const router = useRouter()
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.user)
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);



  const logOut = async () => {
    await localStorage.setItem('userInformations', null)
    await dispatch(setUserData(null))
    router.push('/');
  }

  const goProfile = () => {
    if (JSON.parse(userData) !== null) {
      if (JSON.parse(userData).type === 1) {
        return `/talentProfile?id=${JSON.parse(userData) ? JSON.parse(userData)._id : null}`;
      }
      return `/company/companyProfile?id=${JSON.parse(userData) ? JSON.parse(userData)._id : null}`;
    }
    return '/';

  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const renderNav = () => {
    if (!JSON.parse(userData)) {
      return (
        <div>
          <Button href="/" color="inherit">For Talent</Button>
          <Button href="/" color="inherit">For Employers</Button>
          <Button href="/" color="inherit">About Us</Button>
          <Button href="/loginTalent" color="inherit">Login</Button>
          <ColorButton href="/signUpTalent" variant="contained" color= "primary" >Find Me a Job</ColorButton>
        </div>
      )
    } else {
      return (
        <>
          <Button href={goProfile()} color="inherit">{`${JSON.parse(userData) ? JSON.parse(userData).name : null} ${JSON.parse(userData) ? JSON.parse(userData).surname : ''}`}</Button>
          <Button onClick={logOut} color="inherit">Logout</Button>
        </>
      )
    }
  }

  const renderNavMobile = () => {
    if (!JSON.parse(userData)) {
      return (
        <div>
          <MenuItem>
            <Button href="/" color="inherit">For Talent</Button>
          </MenuItem>
          <MenuItem>
            <Button href="/" color="inherit">For Employers</Button>
          </MenuItem>
          <MenuItem >
            <Button href="/" color="inherit">About Us</Button>
          </MenuItem>
          <MenuItem>
            <Button href="/loginTalent" color="inherit">Login</Button>
          </MenuItem>
          <MenuItem >
            <ColorButton href="/signUpTalent" variant="contained" color= "primary" >Find Me a Job</ColorButton>
          </MenuItem>
        </div>
      )
    } else {
      return (
        <>
          <MenuItem>
          <Button href={goProfile()} color="inherit">{`${JSON.parse(userData) ? JSON.parse(userData).name : null} ${JSON.parse(userData) ? JSON.parse(userData).surname : ''}`}</Button>
          </MenuItem>
          <MenuItem>
          <Button onClick={logOut} color="inherit">Logout</Button>
          </MenuItem>
        </>
      )
    }
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
     {renderNavMobile()}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar color="white" position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
           TalentZoom
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          {renderNav()}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
