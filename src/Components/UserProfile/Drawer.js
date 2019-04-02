import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { Link } from 'react-router-dom';

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

class UserProfileDrawer extends React.Component {

render() {
	const { classes, theme } = this.props;

	const drawer = (
		<div>
		<div className={classes.toolbar} />
		<div className="ProfileName">Hi, <span className="Name">Siddesh</span></div>
		<Divider />
		<List>
			<ListItem active="true" button>
				<ListItemText primary="Home" />
			</ListItem>

			<ListItem onClick={this.props.displayPDetails} button>
				<ListItemText primary="Personal Details" />
			</ListItem>
			
			<ListItem button onClick={this.props.handleAssets}>
				<ListItemText primary="Assets" />
					{this.props.assets ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
			<Collapse in={this.props.assets} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>

					<ListItem 
						button 
						onClick={this.props.displayDPStock} 
						className={classes.nested}
						component={Link}
						to="/user_profile/dp_stock">
						<ListItemText primary="DP & Stock" />
					</ListItem>

					<ListItem 
						button 
						onClick={this.props.displayKVP} 
						className={classes.nested}
						component={Link}
						to="/user_profile/KVP">
						<ListItemText primary="Kisan Vikas Patra(KVP)" />
					</ListItem>

					<ListItem 
						button 
						onClick={this.props.displayMF} 
						className={classes.nested}
						component={Link}
						to="/user_profile/MF">
						<ListItemText primary="Mutual Funds" />
					</ListItem>

					<ListItem 
						button 
						onClick={this.props.displayNSC} 
						className={classes.nested}
						component={Link}
						to="/user_profile/NSC">
						<ListItemText primary="National Savings Certificate(NSC)" />
					</ListItem>

					<ListItem 
						button 
						onClick={this.props.displayPhysicalShare} 
						className={classes.nested}
						component={Link}
						to="/user_profile/physical_share">
						<ListItemText primary="Physical Share" />
					</ListItem>

					<ListItem 
						button 
						onClick={this.props.displayRealEstate} 
						className={classes.nested}
						component={Link}
						to="/user_profile/real_estate">
						<ListItemText primary="Real Estate" />
					</ListItem>
				</List>
			</Collapse>	
		</List> 
		</div>
	);

	return (
		<div className={classes.root}>
			<nav className={classes.drawer}>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation="css">
					<Drawer
					container={this.props.container}
					variant="temporary"
					anchor={theme.direction === 'rtl' ? 'right' : 'left'}
					open={this.props.mobileOpen}
					onClose={this.props.handleDrawerToggle}
					classes={{
						paper: classes.drawerPaper,
					}}
					>
					{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
					classes={{
						paper: classes.drawerPaper,
					}}
					variant="permanent"
					open
					>
					{drawer}
					</Drawer>
				</Hidden>
			</nav>
		</div>
	);
}
}

UserProfileDrawer.propTypes = {
classes: PropTypes.object.isRequired,
// Injected by the documentation to work in an iframe.
// You won't need it on your project.
container: PropTypes.object,
theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(UserProfileDrawer);
















// import React from 'react';
// import PropTypes from 'prop-types';
// import Divider from '@material-ui/core/Divider';
// import Drawer from '@material-ui/core/Drawer';
// import Hidden from '@material-ui/core/Hidden';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import { withStyles } from '@material-ui/core/styles';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
// import Collapse from '@material-ui/core/Collapse';

// const drawerWidth = 240;

// const styles = theme => ({
// root: {
// 	display: 'flex',
// },
// drawer: {
// 	[theme.breakpoints.up('sm')]: {
// 		width: drawerWidth,
// 		flexShrink: 0,
// 	},
// },
// toolbar: theme.mixins.toolbar,
// drawerPaper: {
// 	width: drawerWidth,
// },
// nested: {
// 	paddingLeft: theme.spacing.unit * 4,
// },
// content: {
// 	flexGrow: 1,
// 	padding: theme.spacing.unit * 3,
// },
// });

// class UserProfileDrawer extends React.Component {

// render() {
// 	const { classes, theme } = this.props;

// 	const drawer = (
// 		<div>
// 		<div className={classes.toolbar} />
// 		<div className="ProfileName">Hi, <span className="Name">Siddesh</span></div>
// 		<Divider />
// 		<List>
// 			<ListItem button>
// 				<ListItemText primary="Home" />
// 			</ListItem>
			
// 			<ListItem button onClick={this.props.handleBank}>
// 				<ListItemText primary="Bank" />
// 					{this.props.bank ? <ExpandLess /> : <ExpandMore />}
// 			</ListItem>
// 			<Collapse in={this.props.bank} timeout="auto" unmountOnExit>
// 				<List component="div" disablePadding>
// 					<ListItem button className={classes.nested}>
// 						<ListItemText primary="Bank Fixed Deposits(FDs)" />
// 					</ListItem>
// 					<ListItem button className={classes.nested}>
// 						<ListItemText primary="Public Provident Fund(PPF)" />
// 					</ListItem>
// 					<ListItem button className={classes.nested}>
// 						<ListItemText primary="Recurring Deposits(RDs)" />
// 					</ListItem>
// 					<ListItem button className={classes.nested}>
// 						<ListItemText primary="Sukanya Savings Deposit Scheme" />
// 					</ListItem>
// 				</List>
// 			</Collapse>	

// 			<ListItem button onClick={this.props.handleValuables}>
// 				<ListItemText primary="Gold, Silver and other Valuables" />
// 					{this.props.valuables ? <ExpandLess /> : <ExpandMore />}
// 			</ListItem>
// 			<Collapse in={this.props.valuables} timeout="auto" unmountOnExit>
// 				<List component="div" disablePadding>
// 					<ListItem button className={classes.nested}>
// 						<ListItemText primary="Gold Bars And Coins" />
// 					</ListItem>
// 					<ListItem button className={classes.nested}>
// 						<ListItemText primary="Gold Deposit Scheme" />
// 					</ListItem>
// 					<ListItem button className={classes.nested}>
// 						<ListItemText primary="Gold Exchange Traded Fund" />
// 					</ListItem>
// 					<ListItem button className={classes.nested}>
// 						<ListItemText primary="Jewellery" />
// 					</ListItem>
// 					<ListItem button className={classes.nested}>
// 						<ListItemText primary="Sovereign Gold Bonds" />
// 					</ListItem>
// 				</List>
// 			</Collapse>	
			
// 			<ListItem button onClick={this.props.handleLifeInsuarance}>
// 					<ListItemText primary="Life Insuarance" />
// 						{this.props.lifeInsuarance ? <ExpandLess /> : <ExpandMore />}
// 			</ListItem>
// 			<Collapse in={this.props.lifeInsuarance} timeout="auto" unmountOnExit>
// 				<List component="div" disablePadding>
// 					<ListItem button className={classes.nested}>
// 						<ListItemText primary="Health/Mediclaim" />
// 					</ListItem>
// 					<ListItem button className={classes.nested}>
// 						<ListItemText primary="Endowment Plans" />
// 					</ListItem>
// 					<ListItem button className={classes.nested}>
// 						<ListItemText primary="Money-Back Plans" />
// 					</ListItem>
// 					<ListItem button className={classes.nested}>
// 						<ListItemText primary="Pension Plans" />
// 					</ListItem>
// 					<ListItem button className={classes.nested}>
// 						<ListItemText primary="Personal Accident" />
// 					</ListItem>
// 					<ListItem button className={classes.nested}>
// 						<ListItemText primary="Unit Linked Insuarance Plans" />
// 					</ListItem>
// 				</List>
// 			</Collapse>

// 			<ListItem button onClick={this.props.handleNonLifeInsuarance}>
// 				<ListItemText primary="Non-Life Insuarance" />
// 					{this.props.nonLifeInsuarance ? <ExpandLess /> : <ExpandMore />}
// 			</ListItem>
// 			<Collapse in={this.props.nonLifeInsuarance} timeout="auto" unmountOnExit>
// 				<List component="div" disablePadding>
// 					<ListItem button className={classes.nested}>
// 						<ListItemText primary="Motor Insuarance" />
// 					</ListItem>
// 					<ListItem button className={classes.nested}>
// 						<ListItemText primary="Property Insuarance" />
// 					</ListItem>
// 					<ListItem button className={classes.nested}>
// 						<ListItemText primary="Keyman Insuarance" />
// 					</ListItem>
// 					<ListItem button className={classes.nested}>
// 						<ListItemText primary="Professional Liabilty" />
// 					</ListItem>
// 				</List>
// 			</Collapse>

// 			<ListItem button onClick={this.props.handleClick}>
// 				<ListItemText primary="Post Office Schemes" />
// 				{this.props.open ? <ExpandLess /> : <ExpandMore />}
// 			</ListItem>
// 			<Collapse in={this.props.open} timeout="auto" unmountOnExit>
// 			<List component="div" disablePadding>
// 				<ListItem button className={classes.nested} onClick={this.props.displayKVP}>
// 					<ListItemText primary="Kisan Vikas Patra(KVP)" />
// 				</ListItem>
// 				<ListItem button className={classes.nested}>
// 					<ListItemText primary="Monthly Income Scheme" />
// 				</ListItem>
// 				<ListItem button className={classes.nested} onClick={this.props.displayNSC}>
// 					<ListItemText primary="National Savings Certificate(NSC)" />
// 				</ListItem>
// 				<ListItem button className={classes.nested}>
// 					<ListItemText primary="Public Provident Fund(PPF)" />
// 				</ListItem>
// 				<ListItem button className={classes.nested}>
// 					<ListItemText primary="Recurring Deposits" />
// 				</ListItem>
// 				<ListItem button className={classes.nested}>
// 					<ListItemText primary="Senior Citizens Savings Scheme(SCSS)" />
// 				</ListItem>
// 				<ListItem button className={classes.nested}>
// 					<ListItemText primary="Sukanya, Samruddhi Savings Deposit Scheme" />
// 				</ListItem>
// 				<ListItem button className={classes.nested}>
// 					<ListItemText primary="Term Deposits" />
// 				</ListItem>
// 			</List>
// 		</Collapse>

// 		<ListItem button onClick={this.props.handleRealEstate}>
// 				<ListItemText primary="Real Estate" />
// 					{this.props.openRealEstate ? <ExpandLess /> : <ExpandMore />}
// 		</ListItem>
// 		<Collapse in={this.props.openRealEstate} timeout="auto" unmountOnExit>
// 			<List component="div" disablePadding>
// 				<ListItem button className={classes.nested}>
// 					<ListItemText primary="Agriculture Land" />
// 				</ListItem>
// 				<ListItem button className={classes.nested}>
// 					<ListItemText primary="Bonds u/s 54EC" />
// 				</ListItem>
// 				<ListItem button className={classes.nested}>
// 					<ListItemText primary="Commercial Property" />
// 				</ListItem>
// 				<ListItem button className={classes.nested}>
// 					<ListItemText primary="Real Estate Investments Trust(REITS)" />
// 				</ListItem>
// 				<ListItem button className={classes.nested}>
// 					<ListItemText primary="Residential Property" />
// 				</ListItem>
// 				<ListItem button className={classes.nested}>
// 					<ListItemText primary="Reverse Mortgage" />
// 				</ListItem>
// 			</List>
// 		</Collapse>

// 		</List> 
// 		</div>
// 	);

// 	return (
// 		<div className={classes.root}>
// 			<nav className={classes.drawer}>
// 				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
// 				<Hidden smUp implementation="css">
// 					<Drawer
// 					container={this.props.container}
// 					variant="temporary"
// 					anchor={theme.direction === 'rtl' ? 'right' : 'left'}
// 					open={this.props.mobileOpen}
// 					onClose={this.props.handleDrawerToggle}
// 					classes={{
// 						paper: classes.drawerPaper,
// 					}}
// 					>
// 					{drawer}
// 					</Drawer>
// 				</Hidden>
// 				<Hidden xsDown implementation="css">
// 					<Drawer
// 					classes={{
// 						paper: classes.drawerPaper,
// 					}}
// 					variant="permanent"
// 					open
// 					>
// 					{drawer}
// 					</Drawer>
// 				</Hidden>
// 			</nav>
// 		</div>
// 	);
// }
// }

// UserProfileDrawer.propTypes = {
// classes: PropTypes.object.isRequired,
// // Injected by the documentation to work in an iframe.
// // You won't need it on your project.
// container: PropTypes.object,
// theme: PropTypes.object.isRequired,
// };

// export default withStyles(styles, { withTheme: true })(UserProfileDrawer);
