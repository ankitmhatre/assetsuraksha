import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import './UserProfile.css';
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
		pDetails: false,
		assets: false,
		KVP: false,
		NSC: false,
		physicalShare: false,
		MF: false,
		realEstate: false,
		dp_stock: false,
		displayNSCForm: false,
		displayKVPform: false
	};

	handleAssets = () => {
		this.setState(state => ({ assets: !state.assets }));
	};

	handleDrawerToggle = () => {
		this.setState(state => ({ mobileOpen: !state.mobileOpen }));
	};

	displayPDetails = () => {
		this.setState({
			KVP: false,
			pDetails: true,
			NSC: false,
			physicalShare: false,
			MF: false,
			realEstate: false,
			dp_stock: false,
			displayKVPForm: false,
			displayNSCForm: false,
		})
	}

	displayKVP = () => {
		this.setState({
			pDetails: false,
			KVP: true,
			NSC: false,
			physicalShare: false,
			MF: false,
			realEstate: false,
			dp_stock: false,
			displayKVPForm: false,
			displayNSCForm: false,
		})
	}

	displayNSC = () => {
		this.setState({
			pDetails: false,
			KVP: false,
			NSC: true,
			physicalShare: false,
			MF: false,
			realEstate: false,
			dp_stock: false,
			displayNSCForm: false,
			displayKVPForm: false,
		})
	}

	displayMP = () => {
		this.setState({
			pDetails: false,
			KVP: false,
			NSC: false,
			physicalShare: false,
			MF: true,
			realEstate: false,
			dp_stock: false,
			displayNSCForm: false,
			displayKVPForm: false,
		})
	}

	displayRealEstate = () => {
		this.setState({
			pDetails: false,
			KVP: false,
			NSC: false,
			physicalShare: false,
			MF: false,
			realEstate: true,
			dp_stock: false,
			displayKVPForm: false,
			displayNSCForm: false,
		})
	}

	displayPhysicalShare = () => {
		this.setState({
			pDetails: false,
			KVP: false,
			NSC: false,
			physicalShare: true,
			MF: false,
			realEstate: false,
			dp_stock: false,
			displayNSCForm: false,
			displayKVPForm: false,
		})
	}

	displayDP_Stock = () => {
		this.setState({
			pDetails: false,
			KVP: false,
			NSC: false,
			physicalShare: false,
			MF: false,
			realEstate: false,
			dp_stock: true,
			displayNSCForm: false,
			displayKVPForm: false,
		})
	}

	DisplayNSCForm = () => {
		this.setState({
			NSC: false,
			displayNSCForm: true,
		})
	}

	DisplayKVPForm = () => {
		this.setState({
			KVP: false,
			displayKVPForm: true,
		})
	}



	render() {
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
					displayKVP={this.displayKVP}
					displayNSC={this.displayNSC}
					displayMP={this.displayMP}
					displayRealEstate={this.displayRealEstate}
					displayPhysicalShare={this.displayPhysicalShare}
					displayDP_Stock={this.displayDP_Stock}
					displayPDetails={this.displayPDetails}
				/>

				<MainContent
					KVP={this.state.KVP}
					NSC={this.state.NSC}
					physicalShare={this.state.physicalShare}
					MF={this.state.MF}
					realEstate={this.state.realEstate}
					dp_stock={this.state.dp_stock}
					pDetails={this.state.pDetails}
					DisplayKVPForm={this.DisplayKVPForm}
					displayKVPForm={this.state.displayKVPForm}
					DisplayNSCForm={this.DisplayNSCForm}
					displayNSCForm={this.state.displayNSCForm} />
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
