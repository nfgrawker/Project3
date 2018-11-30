import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AdminMain from "../AdminMain/AdminMain";
import MenuList from "./MenuList";
import { Grid } from "@material-ui/core";
import ImageAvatars from "./Avatar";
import Test from "./Test";

class SideBar extends Component {
  render() {
    return (
        <div>
          <h3>SideBar</h3>

          <List >
            <ListItem button={true} name="dashboard" value="dashboard" onClick={this.props.showContent}>
             Dashboard
              {/* <ListItemIcon value="dashboard">
                <SendIcon value="dashboard"/>
              </ListItemIcon>
              <ListItemText value="dashboard" inset primary="Dashboard" /> */}
            </ListItem>

            <ListItem
              button={true}
              name="test"
              value="test"
              onClick={this.props.showContent}
            > 
            Test
              {/* <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText inset primary="Test" /> */}
            </ListItem>
          </List>

          
        </div>
   
    );
  }
}
export default SideBar;

// const drawerWidth = 240;

// const styles = theme => ({
//   root: {
//     display: "flex"
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen
//     })
//   },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen
//     })
//   },
//   menuButton: {
//     marginLeft: 12,
//     marginRight: 36
//   },
//   hide: {
//     display: "none"
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: "nowrap"
//   },
//   drawerOpen: {
//     width: drawerWidth,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen
//     })
//   },
//   drawerClose: {
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen
//     }),
//     overflowX: "hidden",
//     width: theme.spacing.unit * 7 + 1,
//     [theme.breakpoints.up("sm")]: {
//       width: theme.spacing.unit * 9 + 1
//     }
//   },
//   toolbar: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     padding: "0 8px",
//     ...theme.mixins.toolbar
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing.unit * 3
//   }
// });

// class AdminSideBar extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//     open: true,
//     listname: ""
//   };
//   }

//   handleDrawerOpen = () => {
//     this.setState({ open: true });
//   };

//   handleDrawerClose = () => {
//     this.setState({ open: false });
//   };

//   handleSideBarClick = event => {
//     console.log("click");
//     const listValue = event.target.attributes.getNamedItem("listname").value;
//     console.log(listValue);
//     this.setState({
//       listname: this.listValue
//     });

//   };

//   render() {
//     const { classes, theme } = this.props;

//     return (
//       <div className={classes.root}>
//         <CssBaseline />
//         <AppBar
//           position="fixed"
//           className={classNames(classes.appBar, {
//             [classes.appBarShift]: this.state.open
//           })}
//         >
//           <Toolbar disableGutters={!this.state.open}>
//             <IconButton
//               color="inherit"
//               aria-label="Open drawer"
//               onClick={this.handleDrawerOpen}
//               className={classNames(classes.menuButton, {
//                 [classes.hide]: this.state.open
//               })}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" color="inherit" noWrap>
//               Fundtastic Admin Page
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Drawer
//           variant="permanent"
//           className={classNames(classes.drawer, {
//             [classes.drawerOpen]: this.state.open,
//             [classes.drawerClose]: !this.state.open
//           })}
//           classes={{
//             paper: classNames({
//               [classes.drawerOpen]: this.state.open,
//               [classes.drawerClose]: !this.state.open
//             })
//           }}
//           open={this.state.open}
//         >
//           <div className={classes.toolbar}>
//             <IconButton onClick={this.handleDrawerClose}>
//               {theme.direction === "rtl" ? (
//                 <ChevronRightIcon />
//               ) : (
//                 <ChevronLeftIcon />
//               )}
//             </IconButton>
//           </div>

//           {/* User Avatar Image */}
//           <ImageAvatars
//             userImage="https://via.placeholder.com/80"
//             userName="NonProfit Name"
//           />
//           {/* Menu List Items */}
//           <Divider />

//           <MenuList  >
//             <ListItem value="works" onClick={this.value} />
//           </MenuList>

//           <Divider />
//         </Drawer>

//         <AdminMain />
//       </div>
//     );
//   }
// }

// AdminSideBar.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired
// };

// export default withStyles(styles, { withTheme: true })(AdminSideBar);
