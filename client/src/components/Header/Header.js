import React, { Component } from "react";
import { Route, Redirect } from 'react-router'
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import ReactImageFallback from "react-image-fallback";
require("./style.js");
require("../../App.css");

const styles = theme => ({
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
                this.setState({ thumbnail: response.data.thumbnail, auth: true });
            } else if (!response.data) {
                this.setState({ auth: false });
            }
        });
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
                            <a href="http://localhost:3001/auth/google">Login</a>
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

                <AppBar position="static">
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
                            Fundtastix
                        </Typography>

                        <Tabs
                            // value={2}
                            onChange={this.handleChange}
                            scrollable
                            scrollButtons="on"
                            indicatorColor="primary"
                            color="inherit"
                        >
                            <Tab label="Item One"  />
                            <Tab label="Item Two"  />
                            <Tab label="Item Three"  />
                            <Tab label="Item Four"  />
                        </Tabs>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
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
