import React, { Component } from "react";
import axios from "axios";
import AdminMain from "../../AdminMain";
import "./index.css";
import MenuList from "../../AdminMenu/MenuList";
import ImageAvatars from "../../AdminMenu/Avatar";
import Hidden from "@material-ui/core/Hidden";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import StatBoxes from "../../AdminDashboard/StatBoxes";
import UserSetting from "../../AdminSettings/AdminSettings";
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
      userinfo: [],
      username: "",
      image: "",
      website: "",
      description: "",
      followers: 0
    };
    this.showContent = this.showContent.bind(this);
  }

  //get nonprofit info when admin page loads
  componentDidMount() {
    console.log(this.props.match.params.id);
    axios.get("/api/nonprofit/" + this.props.match.params.id).then(res => {
      this.setState({
        userinfo: res.data,
        username: res.data.name,
        image: res.data.imageLink,
        website: res.data.website,
        description: res.data.description,
        followers: res.data.followers
      });
    });
  }
  // // Save Userinfo
  // saveUserInfo() {
  //   if (this.state.userinfo.length) {
  //     const userinfo = this.state.userinfo;
  //     console.log(userinfo);
  //     const userData = userinfo.map(user => (
  //       <ul key={user._id}>
  //         <li> {user.name} </li>
  //         <li> {user.dateJoined} </li>
  //       </ul>
  //     ));
  //     return <div>{userData}</div>;
  //   }
  // }

  // switch case to set main content
  renderMainContent() {
    const userInfo = {
      userinfo: this.state.userinfo
    };
    switch (this.state.linkValue) {
      case "dashboard":
        return <Dashboard {...userInfo} />;
      case "settings":
        return <Settings {...userInfo} />;
      case "raffles":
        return <Raffles />;
      case "view":
        return <AllRaffles {...userInfo} />;
      default:
        return <Dashboard {...userInfo} />;
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
            <ImageAvatars image={this.state.image} />
            <Divider />
            <MenuList showContent={this.showContent} />
            <Divider />
          </Drawer>
        </Hidden>

        {/* Main Content */}
        <main className={classes.content}>
          <h4>Welcome Back {this.state.username}</h4>
          <AdminMain {...this.props}>
            {this.renderMainContent(this.props)}
          </AdminMain>
        </main>
      </div>
    );
  }
}

// Components for main content section
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyraised: 0,
      followers: 0,
      totalraffles: 0
    };
  }
  componentDidMount() {
    let followers = this.props.userinfo.followers;
    this.setState({
      moneyraised: 3000,
      totalraffles: 8
    });
  }
  render() {
    return (
      <div>
        <StatBoxes
          {...this.props}
          totalraffles={this.state.totalraffles}
          moneyraised={this.state.moneyraised}
          followers={this.props.userinfo.followers}
        />
        <CurrentRaffle
          user={this.props.userinfo.name}
          about={this.props.userinfo.description}
          image={this.props.userinfo.imageLink}
          followers={this.props.userinfo.followers}
        />
      </div>
    );
  }
}

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: this.props.userinfo
    };
  }
  render() {
    return <div> 
      <UserSetting {...this.props}/>
      </div>
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
// View Raffles
class AllRaffles extends Component {
  render() {
    return (
      <div>
        <h3>View Raffle</h3>
      </div>
    );
  }
}

export default withStyles(styles)(AdminPage);
