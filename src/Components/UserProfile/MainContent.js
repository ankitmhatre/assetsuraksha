import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import NSCmain from '../Assets/NSC/NSCmain/NSCmain';
import KVPmain from '../Assets/KVP/KVPmain/KVPmain';
import MFmain from "../Assets/MF/MFmain/MFmain";
import PhysicalSharemain from "../Assets/PhysicalShare/PhysicalSharemain/PhysicalSharemain";
import RealEstatemain from "../Assets/RealEstate/RealEstatemain/RealEstatemain";
import DPStockmain from "../Assets/DP_Stock/DPStockmain/DPStockmain";
import PDetails from '../Forms/PDetails/PDetails';
import KVPForm from '../Assets/KVP/KVPform/KVPform';
import MFForm from '../Assets/MF/MFform/MFform';
import NSCForm from '../Assets/NSC/NSCform/NSCform';
import PhysicalShareForm from '../Assets/PhysicalShare/PhysicalShareform/PhysicalShareform';
import RealEstateForm from '../Assets/RealEstate/RealEstateform/RealEstateform';
import DPStockForm from '../Assets/DP_Stock/DPStockform/DPStockform';
import Home from './Home/Home';

const drawerWidth = 240;

const styles = theme => ({
	root: {
		display: 'flex',
	},
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
	},
});

class MainContent extends React.Component {

	state = {

	}

	// GetCertificateDetails = (number, faceValue, period, maturityAmount) => {
		
	// }

	render() {
		const { classes, theme } = this.props;

		return (
			<div className={classes.root}>
				<main className={classes.content}>
					<div className={classes.toolbar} />

					<Route path="/user_profile" exact component={Home} />

					<Route path="/user_profile/personal_details" 
						render={() => <PDetails style={{ marginLeft: '30px' }} />} 
					/>

					<Route path="/user_profile/NSC" 
						render={() => <NSCmain DisplayNSCForm={this.props.DisplayNSCForm} />} 
					/>
					<Route path="/user_profile/NSC_form" 
						render={() => <NSCForm GetCertificateDetails={this.GetCertificateDetails} />} />

					<Route path="/user_profile/KVP" 
						render={() => <KVPmain DisplayKVPForm={this.props.DisplayKVPForm} />} 
					/>
					<Route path="/user_profile/KVP_form" component={KVPForm} />

					<Route path="/user_profile/MF" 
						render={() => <MFmain DisplayMFForm={this.props.DisplayMFForm} />} 
					/>
					<Route path="/user_profile/MFform" component={MFForm} />

					<Route path="/user_profile/physical_share" 
						render={() => <PhysicalSharemain DisplayPhysicalShareForm={this.props.DisplayPhysicalShareForm} />} 
					/>
					<Route path="/user_profile/physical_share_form" component={PhysicalShareForm} />

					<Route path="/user_profile/real_estate" 
						render={() => <RealEstatemain DisplayRealEstateForm={this.props.DisplayRealEstateForm} />} 
					/>
					<Route path="/user_profile/real_estate_form" component={RealEstateForm} />

					<Route path="/user_profile/dp_stock" 
						render={() => <DPStockmain DisplayDPStockForm={this.props.DisplayDPStockForm} />} 
					/>
					<Route path="/user_profile/dp_stock_form" component={DPStockForm} />
				</main>
			</div>
		);
	}
}

MainContent.propTypes = {
	classes: PropTypes.object.isRequired,
	// Injected by the documentation to work in an iframe.
	// You won't need it on your project.
	container: PropTypes.object,
	theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MainContent);
