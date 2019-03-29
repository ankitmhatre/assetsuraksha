import React from 'react';
import PropTypes from 'prop-types';
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

	render() {
		const { classes, theme } = this.props;

		return (
			<div className={classes.root}>
				<main className={classes.content}>
					<div className={classes.toolbar} />

					{this.props.displayNSCForm && <NSCForm />}
					{this.props.displayKVPForm && <KVPForm />}
					{this.props.displayMFForm && <MFForm />}
					{this.props.displayPhysicalShareForm && <PhysicalShareForm />}
					{this.props.displayRealEstateForm && <RealEstateForm />}
					{this.props.displayDPStockForm && <DPStockForm />}

					{this.props.pDetails && <PDetails style={{ marginLeft: '30px' }} />}
					{this.props.NSC && <NSCmain DisplayNSCForm={this.props.DisplayNSCForm} />}
					{this.props.KVP && <KVPmain DisplayKVPForm={this.props.DisplayKVPForm} />}
					{this.props.MF && <MFmain DisplayMFForm={this.props.DisplayMFForm} />}
					{this.props.PhysicalShare && <PhysicalSharemain DisplayPhysicalShareForm={this.props.DisplayPhysicalShareForm} />}
					{this.props.RealEstate && <RealEstatemain DisplayRealEstateForm={this.props.DisplayRealEstateForm} />}
					{this.props.DP_Stock && <DPStockmain DisplayDPStockForm={this.props.DisplayDPStockForm} />}

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
