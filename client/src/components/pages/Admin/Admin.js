import React, { Component } from "react";
import AdminMain from "../../AdminMain";
import "./index.css";
import MenuList from "../../AdminMenu/MenuList";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import StatBoxes from "../../AdminDashboard/StatBoxes";
import RaffleForm from "../../AdminRaffle/RaffleForm";

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
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
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
      linkValue: ""
    };
    this.showContent = this.showContent.bind(this);
  }

  // switch case to set main content
  renderMainContent() {
    switch (this.state.linkValue) {
      case "dashboard":
        return <Dashboard />;
      case "settings":
        return <Settings />;
      case "raffles":
        return <Raffles />;
      default:
        return <Dashboard />;
    }
  }
  // On sidebar link click... set the maincontent = button name attribute.getAttribute("name")
  showContent = event => {
    const linkName = event.target.getAttribute("value");
    //const linkName = event.target;
    console.log(linkName);
    this.setState({ linkValue: linkName });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
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
          <Divider />
          <MenuList showContent={this.showContent} />
          <Divider />
        </Drawer>

        {/* Main Content */}
        <main className={classes.content}>
          <AdminMain content={this.state.maincontent}>
            {this.renderMainContent()}
          </AdminMain>
        </main>
      </div>
    );
  }
}
// Components for main content section
class Dashboard extends Component {
  render() {
    return (
      <div>
        from dashboard
        <StatBoxes />
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
