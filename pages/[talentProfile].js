import React, {useState,useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "../components/material-ui-component/Grid/GridItem.js";
import GridContainer from "../components/material-ui-component/Grid/GridContainer.js";
import Button from "../components/material-ui-component/CustomButtons/Button.js";
import Card from "../components/material-ui-component/Card/Card.js";
import CardHeader from "../components/material-ui-component/Card/CardHeader.js";
import CardAvatar from "../components/material-ui-component/Card/CardAvatar.js";
import CardBody from "../components/material-ui-component/Card/CardBody.js";
import CardFooter from "../components/material-ui-component/Card/CardFooter.js";
import TalentAbout from '../components/Talent/TalenAbout'
import TalentRoles from '../components/Talent/TalentRoles'
import TalentSkills from '../components/Talent/TalentSkills'
import TalentSummary from '../components/Talent/TalentSummary'
import TalentWorkExperience from '../components/Talent/TalentWorkExperience'
import TalentEducation from '../components/Talent/TalentEducation'
import { Icon, Uploader } from 'rsuite'
import { getTalentById } from '../api/talentApi'
import { ID } from "../constants/header.js";
const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function TalenProfile() {
  const classes = useStyles();
  const [user, setUser] = useState([])
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    setIsLogin(false)
    //const userData = await getTalentById()
    const userInfos = await JSON.parse(localStorage.getItem('userInformations'))
    setUser(userInfos)
    console.log('dadssss', user)
    setIsLogin(true)
  }
  if (isLogin === false) {
    return (
      <button style={{ width: '100px', height: '100px' }}>
      <Icon icon="avatar" size="5x" />
    </button>
    )
  } else {
  return (
    <div style={{margin:30}}>
      <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
            <button style={{ width: '100px', height: '100px' }}>
              <Icon icon="avatar" size="5x" />
            </button>
            </CardAvatar>
            <CardBody profile>
              <TalentAbout user={user}  />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Profile</h4>
              <p className={classes.cardCategoryWhite}>Information</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                <TalentRoles user={user}  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                <TalentSummary  user={user} />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                <TalentSkills user={user}  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                <TalentWorkExperience user={user}  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                <TalentEducation user={user}  />
                </GridItem>
              </GridContainer>
              <GridContainer>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
   
      </GridContainer>
    </div>
  );
  }
}

