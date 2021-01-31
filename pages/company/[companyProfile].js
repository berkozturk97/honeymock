import React, {useState,useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "../../components/material-ui-component/Grid/GridItem.js";
import GridContainer from "../../components/material-ui-component/Grid/GridContainer.js";
import Card from "../../components/material-ui-component/Card/Card.js";
import CardHeader from "../../components/material-ui-component/Card/CardHeader.js";
import CardAvatar from "../../components/material-ui-component/Card/CardAvatar.js";
import CardBody from "../../components/material-ui-component/Card/CardBody.js";
import { Icon, Uploader } from 'rsuite';
import { useRouter } from "next/router";
import { getEmployerById } from "../../api/companyApi.js";
import CompanyAbout from "../../components/Company/CompanyAbout.js";
import CompanyVision from "../../components/Company/CompanyVision.js";
import CompanyContract from "../../components/Company/CompanyContract.js";
import { Avatar } from "@material-ui/core";
import Loading from "../../components/Loading/Loading.js";
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

export default function CompanyProfile() {
  const [user, setUser] = useState([])
  const [isLogin, setIsLogin] = useState(false)
  const router = useRouter()
  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    setIsLogin(false);
    const mainUser = await JSON.parse(localStorage.getItem('userInformations'));
    const userInfos = await getEmployerById({_id: router.query.id, token: mainUser.tokenCode })
    console.log(userInfos)
    setUser(userInfos[0])
    setIsLogin(true)
  }

  const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(13),
      height: theme.spacing(13),
    },
  }));
  const classes = useStyles();
  
  if (isLogin === false) {
    return (
      <div>
        <Loading/>
      </div>
    )
  } else {
  return (
    <div style={{margin:30}}>
      <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <Avatar alt="Cindy Baker" src={user.companyLogoUrl} className={classes.large} />
            </CardAvatar>
            <CardBody profile>
             <CompanyAbout user={user}  />
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
                 <CompanyVision  user={user} />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                 <CompanyContract user={user}  />
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

