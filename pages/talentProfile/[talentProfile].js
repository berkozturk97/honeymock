import React, {useState,useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "../../components/material-ui-component/Grid/GridItem.js";
import GridContainer from "../../components/material-ui-component/Grid/GridContainer.js";
import Card from "../../components/material-ui-component/Card/Card.js";
import CardHeader from "../../components/material-ui-component/Card/CardHeader.js";
import CardAvatar from "../../components/material-ui-component/Card/CardAvatar.js";
import CardBody from "../../components/material-ui-component/Card/CardBody.js";
import TalentAbout from '../../components/Talent/TalenAbout'
import TalentRoles from '../../components/Talent/TalentRoles'
import TalentSkills from '../../components/Talent/TalentSkills'
import TalentSummary from '../../components/Talent/TalentSummary'
import TalentWorkExperience from '../../components/Talent/TalentWorkExperience'
import TalentEducation from '../../components/Talent/TalentEducation'
import { Icon, Uploader } from 'rsuite';
import { useRouter } from "next/router";
import { getTalentById } from "../../api/talentApi.js";
import { Avatar, NoSsr } from "@material-ui/core";
import Loading from "../../components/Loading/Loading.js";
import EditTalent from "../../components/EditProfile/EditTalent.js";

export default function TalenProfile() {
  const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(13),
      height: theme.spacing(13),
    },
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
  }));
  const classes = useStyles();
  const [user, setUser] = useState([]);
  const [mainUser, setMainUser] = useState();
  const [isLogin, setIsLogin] = useState(false)
  const router = useRouter()
  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    setIsLogin(false);
    console.log(router)
    const mainUsers = await JSON.parse(localStorage.getItem('userInformations'));
    const userInfos = await getTalentById({_id: router.query.id, token: mainUsers.tokenCode })
    setMainUser(mainUsers)
    setUser(userInfos[0])
    setIsLogin(true)
  }

  const renderEdit = () => {
    if(mainUser && router.query.id === mainUser._id ){
      return  <EditTalent user={user} />
    }
  }

  if (isLogin === false) {
    return (
      <div>
      <Loading/>
    </div>
    )
  } else {
  return (
    <NoSsr>
    <div style={{margin:30}}>
      <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
             <Avatar alt="Cindy Baker" src={user.proilePhoto} className={classes.large} />
            </CardAvatar>
            <CardBody profile>
              <TalentAbout user={user}  />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader  color="primary">
              <h4 className={classes.cardTitleWhite}>Profile</h4>
              <p className={classes.cardCategoryWhite}>Information</p>
              {renderEdit()}
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
    </NoSsr>
  );
  }
}

