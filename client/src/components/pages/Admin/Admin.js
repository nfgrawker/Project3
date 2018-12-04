import React, { Component } from "react";
import axios from "axios";
import AdminMain from "../../AdminMain";
import "./index.css";
import MenuList from "../../AdminMenu/MenuList";
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import StatBoxes from "../../AdminDashboard/StatBoxes";
import CurrentRaffle from "../../AdminDashboard/CurrentRaffle";
import RaffleForm from "../../AdminRaffle/RaffleForm";
import CountUp from "react-countup";


// sidebar style
const drawerWidth = 170;
const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    top: "64px"
  },
  drawerPaper: {
    width: drawerWidth,
    top: "64px"
  },
  content: {
    minHeight: "-webkit-fill-available",
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  toolbar: theme.mixins.toolbar
});

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maincontent: "Main Content",
      linkValue: "",
      username: "",
      image: "",
      website: "",
      description: ""
    };
    this.showContent = this.showContent.bind(this);
  }

  //get nonprofit info when component loads
  componentDidMount() {
    console.log(this.props.match.params.id);
    axios.get("/api/nonprofit/" + this.props.match.params.id).then(res => {
      console.log(res.data);
      this.setState({
        username: res.data.name,
        image: res.data.imageLink,
        website: res.data.website,
        description: res.data.description
      });
    });
  }

  // switch case to set main content
  renderMainContent() {
    const userInfo = {
      user: this.state.username,
      website: this.state.website,
      image: this.state.image,
      description: this.state.description
    }
    switch (this.state.linkValue) {
      case "dashboard":
        return <Dashboard {...userInfo}/>;
      case "settings":
        return <Settings />;
      case "raffles":
        return <Raffles />;
      default:
        return <Dashboard {...userInfo}/>;
    }
  }
  // On sidebar link click... set the maincontent = button name 
  showContent = event => {
    const linkName = event.target.getAttribute("value");
    console.log(linkName);
    this.setState({ linkValue: linkName });
  };
  render() {
    const { classes } = this.props;
    const userInfo = {
      user: this.state.username,
      website: this.state.website,
      image: this.state.image,
      description: this.state.description
    }
    return (
      <div className={classes.root}>
       <Hidden xsDown>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar} />
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.toolbar} />
          {/* Sidebar Menu List */}
          <h5>{this.state.username}</h5>
          <Divider />
          <MenuList showContent={this.showContent} />
          <Divider />
        </Drawer>
        </Hidden>

 

        {/* Main Content */}
        <main className={classes.content}>
        <h4 >{this.state.username} | {this.state.website}</h4>
          <AdminMain {...userInfo}  >
          
            {this.renderMainContent(this.props)}
          </AdminMain>
        </main>
      </div>
    );
  }
}
// test admin user -----------------------
const adminUser = {
  statistics: {
    moneyraised: 3000,
    followers: 246,
    daysJoined: 8
  },
  raffles: {
    itemName: "Item Title",
    description: "description goes here",
    image:
      "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12193133/German-Shepherd-Puppy-Fetch.jpg",
    raffleTime: "",
    bidders: 20
  }
};
// ---------------------------------------------------------------------

// Components for main content section
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyraised: 0,
      followers: 0,
      daysJoined: 0,
    };
  }
  componentDidMount() {
    let moneyraised = adminUser.statistics.moneyraised;
    let followers = adminUser.statistics.followers;
    let daysJoined = adminUser.statistics.daysJoined;

    this.setState({
      moneyraised: moneyraised,
      followers: followers,
      daysJoined: daysJoined,

    });
  }
  render() {
    return (
      <div>
        <StatBoxes
          
          daysJoined={this.state.daysJoined}
          moneyraised={this.state.moneyraised}
          followers={this.state.followers}
        />
        <CurrentRaffle
          user={this.props.user}
          about={this.props.description}
          image={this.props.image}
          itemName={this.state.itemName}
        />
      </div>
    );
  }
}
class Settings extends Component {
  render() {
    return <div>from settings</div>;
  }
}
// Raffle Form
class Raffles extends Component {
  render() {
    return (
      <div>
        <h3>Create New Raffle</h3>
        <RaffleForm />
      </div>
    );
  }
}

export default withStyles(styles)(AdminPage);
