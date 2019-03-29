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
		PhysicalShare: false,
		MF: false,
		RealEstate: false,
		dP_Stock: false,
		displayMFFrom: false,
		displayPhysicalShare: false,
		displayRealEstate: false,
		displayNSCForm: false,
		displayKVPForm: false,
		displayDPStockForm: false
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
			PhysicalShare: false,
			MF: false,
			RealEstate: false,
			DP_Stock: false,
			displayKVPForm: false,
			displayMFFrom: false,
			displayPhysicalShare: false,
			displayRealEstate: false,
			displayNSCForm: false,
			displayDPStockForm: false
		})
	}

	displayKVP = () => {
		this.setState({
			pDetails: false,
			KVP: true,
			NSC: false,
			physicalShare: false,
			MF: false,
			RealEstate: false,
			DP_Stock: false,
			displayKVPForm: false,
			displayMFFrom: false,
			displayPhysicalShare: false,
			displayRealEstate: false,
			displayNSCForm: false,
			displayDPStockForm: false
		})
	}

	displayNSC = () => {
		this.setState({
			pDetails: false,
			KVP: false,
			NSC: true,
			PhysicalShare: false,
			MF: false,
			RealEstate: false,
			DP_Stock: false,
			displayNSCForm: false,
			displayMFFrom: false,
			displayPhysicalShare: false,
			displayRealEstate: false,
			displayKVPForm: false,
			DisplayDPStockForm: false
		})
	}

	displayMP = () => {
		this.setState({
			pDetails: false,
			KVP: false,
			NSC: false,
			PhysicalShare: false,
			MF: true,
			RealEstate: false,
			DP_Stock: false,
			displayNSCForm: false,
			displayMFFrom: false,
			displayPhysicalShare: false,
			displayRealEstate: false,
			displayKVPForm: false,
			displayDPStockForm: false
		})
	}

	displayRealEstate = () => {
		this.setState({
			pDetails: false,
			KVP: false,
			NSC: false,
			PhysicalShare: false,
			MF: false,
			RealEstate: true,
			DP_Stock: false,
			displayMFFrom: false,
			displayPhysicalShare: false,
			displayRealEstate: false,
			displayKVPForm: false,
			displayNSCForm: false,
			displayDPStockForm: false
		})
	}

	displayPhysicalShare = () => {
		this.setState({
			pDetails: false,
			KVP: false,
			NSC: false,
			PhysicalShare: true,
			MF: false,
			RealEstate: false,
			DP_Stock: false,
			displayMFFrom: false,
			displayPhysicalShare: false,
			displayRealEstate: false,
			displayNSCForm: false,
			displayKVPForm: false,
			displayDPStockForm: false
		})
	}

	displayDPStock = () => {
		this.setState({
			pDetails: false,
			KVP: false,
			NSC: false,
			PhysicalShare: false,
			MF: false,
			RealEstate: false,
			DP_Stock: true,
			displayNSCForm: false,
			displayMFFrom: false,
			displayPhysicalShare: false,
			displayRealEstate: false,
			displayKVPForm: false,
			displayDPStockForm: false
		})
	}

	DisplayMFForm = () => {
		this.setState({
			MF: false,
			displayMFForm: true,
		})
	}


	DisplayPhysicalShareForm = () => {
		this.setState({
			PhysicalShare: false,
			displayPhysicalShareForm: true,
		})
	}


	DisplayRealEstateForm = () => {
		this.setState({
			RealEstate: false,
			displayRealEstateForm: true,
		})
	}

	DisplayDPStockForm = () => {
		this.setState({
			DP_Stock: false,
			displayDPStockForm: true,
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
					displayMF={this.displayMF}
					displayRealEstate={this.displayRealEstate}
					displayPhysicalShare={this.displayPhysicalShare}
					displayDPStock={this.displayDPStock}
					displayPDetails={this.displayPDetails}
				/>

				<MainContent
					KVP={this.state.KVP}
					NSC={this.state.NSC}
					PhysicalShare={this.state.PhysicalShare}
					MF={this.state.MF}
					RealEstate={this.state.RealEstate}
					DP_Stock={this.state.DP_Stock}
					pDetails={this.state.pDetails}

					DisplayPhysicalShareForm={this.DisplayPhysicalShareForm}
					DisplayPhysicalShareForm={this.state.DisplayPhysicalShareForm}

					DisplayMFForm={this.DisplayMFForm}
					DisplayMFForm={this.state.DisplayMFForm}

					DisplayRealEstateForm={this.DisplayRealEstateForm}
					DisplayRealEstateForm={this.state.DisplayRealEstateForm}

					DisplayDPStockForm={this.DisplayDPStockForm}
					DisplayDPStockForm={this.state.DisplayDPStockForm}

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
