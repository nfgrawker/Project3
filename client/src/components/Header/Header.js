import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import axios from "axios";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import ReactImageFallback from "react-image-fallback";
import NavLinks from './NavLinks/NavLinks'

import logo from '../../logo.svg'
require("./Header.css");

const styles = theme => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    
    root: {
        width: "100%"
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    toolbar: theme.mixins.toolbar,
    inputRoot: {
        color: "inherit",
        width: "100%" 
    },

    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: 200
        }
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    }
});

class Header extends React.Component {
    constructor() {
        super();
        this.style = {
            listStyle: "none",
            color: "white"
        };
    }

    state = {
        auth: null,
        anchorEl: null,
        mobileMoreAnchorEl: null
    };
    getUser = () => {
        axios.get("/api/currentuser").then(response => {
            if (response.data) {
                this.setState({ thumbnail: response.data.thumbnail, auth: true, googleid: response.data.googleId, username: response.data.username});
            } else if (!response.data) {
                this.setState({ auth: false });
            }
        });
    };
    renderRedirect = () => {
        if (this.state.auth === false) {
            return <Redirect to='/' />
        }
    };
    componentDidMount() {
        this.getUser();
    }


    renderContent = () => {
        switch (this.state.auth) {
            case null:
                return;
            case false:
                return (
                    <li style={this.style}>
                        <h6 style={this.style}>
                            <a href="/auth/google">Login</a>
                        </h6>
                    </li>
                );
            default:
                return (
                    <li style={this.style}>
                        <ReactImageFallback
                            src={this.state.thumbnail}
                            fallbackImage="https://discourse-cdn-sjc1.com/gethopscotch/uploads/default/original/2X/f/f13c9f277b7bebe1ad79f92012d664edec5f6b08.png"
                            initialImage="http://profilepicturesdp.com/wp-content/uploads/2018/06/default-facebook-dp-9.jpg"
                            alt="cool image should be here"
                            className="rounded"
                        />
                    </li>
                );
        }
    };

    handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
    };

    handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
    };

    render() {
        const { anchorEl, mobileMoreAnchorEl } = this.state;
        const { classes } = this.props;
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

        const renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
                
                <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
                <MenuItem onClick={this.handleMenuClose}>
                    <a href="/api/logout">Logout</a>
                </MenuItem>
            </Menu>
        );

        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={isMobileMenuOpen}
                onClose={this.handleMobileMenuClose}
            >
                <MenuItem onClick={this.handleMenuClose}><NavLinks /></MenuItem>
                <MenuItem>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <p>Messages</p>
                </MenuItem>
                <MenuItem>
                    <IconButton color="inherit">
                        <Badge badgeContent={11} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <p>Notifications</p>
                </MenuItem>
                <MenuItem onClick={this.handleProfileMenuOpen}>
                    <IconButton color="inherit">
                        <ReactImageFallback
                            src={this.state.thumbnail}
                            fallbackImage="https://discourse-cdn-sjc1.com/gethopscotch/uploads/default/original/2X/f/f13c9f277b7bebe1ad79f92012d664edec5f6b08.png"
                            initialImage="http://profilepicturesdp.com/wp-content/uploads/2018/06/default-facebook-dp-9.jpg"
                            alt="cool image should be here"
                            className="rounded"
                        />
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            </Menu>
        );

        return (
            <div className={classes.root}>
                {this.renderRedirect()}
                <Paper>
  <div className={classes.toolbar} />
 
</Paper>
                <AppBar position="fixed" style={{
                backgroundColor: "#212121"
              }}>
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Open drawer"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            className={classes.title}
                            variant="h6"
                            color="inherit"
                            noWrap
                        >
                           WonderFund
                        </Typography>
                        

                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                        <NavLinks id="headerList" />
                            <IconButton color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton color="inherit">
                                <Badge badgeContent={17} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            
                            <IconButton
                                aria-owns={isMenuOpen ? "material-appbar" : undefined}
                                aria-haspopup="true"
                                onClick={this.handleProfileMenuOpen}
                                color="inherit"
                            >
                                {this.renderContent()}
                            </IconButton>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-haspopup="true"
                                onClick={this.handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>

                </AppBar>

                {renderMenu}
                {renderMobileMenu}
            </div>
        );
    }
}

export default withStyles(styles)(Header);
