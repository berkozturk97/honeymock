import React,{useEffect} from 'react';
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
  button: {
    textTransform: 'none'
  },
  title: {
    display: 'none',
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
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
  const [user, setUser] = React.useState(null);
  const [logOuts, setLogOuts] = React.useState(false);
  const router = useRouter()
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.user)
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  useEffect(() => {
    if(userData){
      setUser(JSON.parse(userData))
    } else {
      setUser(null);
    }
  },[userData])



  const logOut = async () => {
    await localStorage.setItem('userInformations', null)
    await dispatch(setUserData(null))
    setLogOuts(!logOuts);
    router.push('/');
  }

  const goProfile = () => {
    if (user !== null) {
      if (user.type === 1) {
        router.push({
          pathname: '/talentProfile/[id]',
          query: {
            id: user ? user._id : null,
          }
        });
      }else{
        router.push({
        pathname: '/company/companyProfile/[id]',
        query: {
          id: user ? user._id : null,
        }
       }); 
      }
   
      // return `/talentProfile/?id=${user ? user._id : null}`;
      // return `/company/companyProfile/?id=${user ? user._id : null}`;
    }
    return '/';

  }


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
    if (!user) {
      return (
        <div>
          <Button className={classes.button} href="/" color="inherit">For Talent</Button>
          <Button className={classes.button} href="/employer" color="inherit">For Employers</Button>
          <Button className={classes.button} href="/aboutus" color="inherit">About Us</Button>
          <Button className={classes.button} href="/loginTalent" color="inherit">Login</Button>
          <ColorButton href="/signUpTalent" variant="contained" color= "primary" >Find Me a Job</ColorButton>
        </div>
      )
    } else {
      return (
        <>
          <Button className={classes.button} href="/" color="inherit">For Talent</Button>
          <Button className={classes.button} href="/employer" color="inherit">For Employers</Button>
          <Button className={classes.button} href="/aboutus" color="inherit">About Us</Button>
          <Button onClick={()=> goProfile()} color="inherit">{`${user ? user.name : null} ${user ? user.surname : ''}`}</Button>
          <Button onClick={logOut} color="inherit">Logout</Button>
        </>
      )
    }
  }

  const renderNavMobile = () => {
    if (!user) {
      return (
        <div>
          <MenuItem>
            <Button className={classes.button} href="/" color="inherit">For Talent</Button>
          </MenuItem>
          <MenuItem>
            <Button className={classes.button} href="/employer" color="inherit">For Employers</Button>
          </MenuItem>
          <MenuItem >
            <Button className={classes.button} href="/aboutus" color="inherit">About Us</Button>
          </MenuItem>
          <MenuItem>
            <Button className={classes.button} href="/loginTalent" color="inherit">Login</Button>
          </MenuItem>
          <MenuItem >
            <ColorButton href="/signUpTalent" variant="contained" color= "primary" >Find Me a Job</ColorButton>
          </MenuItem>
        </div>
      )
    } else {
      return (
        <div>
          <MenuItem>
            <Button className={classes.button} href="/" color="inherit">For Talent</Button>
          </MenuItem>
          <MenuItem>
            <Button className={classes.button} href="/employer" color="inherit">For Employers</Button>
          </MenuItem>
          <MenuItem >
            <Button className={classes.button} href="/aboutus" color="inherit">About Us</Button>
          </MenuItem>
          <MenuItem>
            <Button className={classes.button} onClick={()=> goProfile()} color="inherit">{`${user? user.name : null} ${user ? user.surname : ''}`}</Button>
          </MenuItem>
          <MenuItem>
            <Button className={classes.button} onClick={logOut} color="inherit">Logout</Button>
          </MenuItem>
        </div>
      )
    }
  }

  const menuId = 'primary-search-account-menu';

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
      <AppBar color="default" position="static">
        <Toolbar>
        <svg width="150" height="50"
           xmlns="http://www.w3.org/2000/svg">
            <image href="/tz-logo-nav.svg" height="50" width="150"/>
          </svg>

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
    </div>
  );
}
