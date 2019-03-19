import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import './UserProfile.css';
import PDetails from '../../Components/Forms/PDetails/PDetails';
import NavBar from '../../Components/UserProfile/NavBar';
import UserProfileDrawer from '../../Components/UserProfile/Drawer'
import MainContent from '../../Components/UserProfile/MainContent';

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
	open: false,
	openRealEstate: false,
	valuables: false,
	bank: false,
	lifeInsuarance: false,
	nonLifeInsuarance: false,
};

handleClick = () => {
	this.setState(state => ({ open: !state.open }));
};

handleBank = () => {
	this.setState(state => ({ bank: !state.bank }));
};

handleValuables = () => {
	this.setState(state => ({ valuables: !state.valuables }));
};

handleLifeInsuarance = () => {
	this.setState(state => ({ lifeInsuarance: !state.lifeInsuarance }));
};

handleNonLifeInsuarance = () => {
	this.setState(state => ({ nonLifeInsuarance: !state.nonLifeInsuarance }));
};

handleRealEstate = () => {
	this.setState(state => ({ openRealEstate: !state.openRealEstate }));
};

handleDrawerToggle = () => {
	this.setState(state => ({ mobileOpen: !state.mobileOpen }));
};

render() {
	const { classes, theme } = this.props;

	return (
		<div className={classes.root}>
		<CssBaseline />
		
		<NavBar handleDrawerToggle={this.handleDrawerToggle}/>

		<UserProfileDrawer
			mobileOpen={this.state.mobileOpen}
			handleDrawerToggle={this.handleDrawerToggle}
			handleBank={this.handleBank}
			bank={this.state.bank}
			handleValuables={this.handleValuables}
			valuables={this.state.valuables}
			handleLifeInsuarance={this.handleLifeInsuarance}
			lifeInsuarance={this.state.lifeInsuarance}
			handleNonLifeInsuarance={this.handleNonLifeInsuarance}
			nonLifeInsuarance={this.state.nonLifeInsuarance}
			handleClick={this.handleClick}
			open={this.state.open}
			handleRealEstate={this.handleRealEstate}
			openRealEstate={this.state.openRealEstate}
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
