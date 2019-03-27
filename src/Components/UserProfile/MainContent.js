import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import NSCmain from '../Assets/NSC/NSCmain/NSCmain';
import KVP from "../Assets/KVP/KVP";
import MF from "../Assets/MF/MF";
import PhysicalShare from "../Assets/PhysicalShare/PhysicalShare";
import RealEstate from "../Assets/RealEstate/RealEstate";
import DP_Stock from "../Assets/DP_Stock/DP_Stock";
import PDetails from '../Forms/PDetails/PDetails';
import NSCform from '../Assets/NSC/NSCform/NSCform';

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

				{this.props.displayNSCForm && <NSCform />}

				{this.props.pDetails && <PDetails style={{marginLeft: '30px'}}/>}
				{this.props.NSC && <NSCmain DisplayNSCForm={this.props.DisplayNSCForm} />}
				{this.props.KVP && <KVP />}
				{this.props.MF && <MF />}
				{this.props.physicalShare && <PhysicalShare />}
				{this.props.realEstate && <RealEstate />}
				{this.props.dp_stock && <DP_Stock />}
				
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
