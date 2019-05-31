import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import './UserProfile.css';
import NavBar from '../../Components/UserProfile/NavBar';
import UserProfileDrawer from '../../Components/UserProfile/Drawer'
import MainContent from '../../Components/UserProfile/MainContent';
import { Redirect } from 'react-router-dom';

const drawerWidth = 240;

const styles = theme => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		marginLeft: drawerWidth,
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
		},
	},
	menuButton: {
		marginRight: 20,
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	nested: {
		paddingLeft: theme.spacing.unit * 4,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
	},
});

class UserProfile extends React.Component {
	state = {
		mobileOpen: false,
		assets: false,
		logout: false,
	};

	handleAssets = () => {
		this.setState(state => ({ assets: !state.assets }));
	};

	handleDrawerToggle = () => {
		this.setState(state => ({ mobileOpen: !state.mobileOpen }));
	};

	LogoutHandler = () => {
		this.setState({logout: true})
		localStorage.removeItem("token")
	}

	render() {

		if(this.state.logout) {
			return <Redirect to="/login" />
		}

		const { classes, theme } = this.props;

		return (
			<div className={classes.root}>
				<CssBaseline />

				<NavBar handleDrawerToggle={this.handleDrawerToggle} />

				<UserProfileDrawer
					mobileOpen={this.state.mobileOpen}
					handleDrawerToggle={this.handleDrawerToggle}
					handleAssets={this.handleAssets}
					assets={this.state.assets}
					LogoutHandler={this.LogoutHandler}
				/>

				<MainContent />
				
			</div>
		);
	}
}

UserProfile.propTypes = {
	classes: PropTypes.object.isRequired,
	// Injected by the documentation to work in an iframe.
	// You won't need it on your project.
	container: PropTypes.object,
	theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(UserProfile);
