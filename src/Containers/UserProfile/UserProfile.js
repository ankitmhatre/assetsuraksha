import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import MailIcon from '@material-ui/icons/Mail';
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

class NavDrawer extends React.Component {
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

	const drawer = (
		<div>
		<div className={classes.toolbar} />
		<div className="ProfileName">Hi, <span className="Name">Siddesh</span></div>
		<Divider />
		<List>
			<ListItem button>
				<ListItemText primary="Home" />
			</ListItem>
			
			<ListItem button onClick={this.handleBank}>
				<ListItemText primary="Bank" />
					{this.state.bank ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
			<Collapse in={this.state.bank} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItem button className={classes.nested}>
						<ListItemText primary="Bank Fixed Deposits(FDs)" />
					</ListItem>
					<ListItem button className={classes.nested}>
						<ListItemText primary="Public Provident Fund(PPF)" />
					</ListItem>
					<ListItem button className={classes.nested}>
						<ListItemText primary="Recurring Deposits(RDs)" />
					</ListItem>
					<ListItem button className={classes.nested}>
						<ListItemText primary="Sukanya Savings Deposit Scheme" />
					</ListItem>
				</List>
			</Collapse>	

			<ListItem button onClick={this.handleValuables}>
				<ListItemText primary="Gold, Silver and other Valuables" />
					{this.state.valuables ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
			<Collapse in={this.state.valuables} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItem button className={classes.nested}>
						<ListItemText primary="Gold Bars And Coins" />
					</ListItem>
					<ListItem button className={classes.nested}>
						<ListItemText primary="Gold Deposit Scheme" />
					</ListItem>
					<ListItem button className={classes.nested}>
						<ListItemText primary="Gold Exchange Traded Fund" />
					</ListItem>
					<ListItem button className={classes.nested}>
						<ListItemText primary="Jewellery" />
					</ListItem>
					<ListItem button className={classes.nested}>
						<ListItemText primary="Sovereign Gold Bonds" />
					</ListItem>
				</List>
			</Collapse>	
			
			<ListItem button onClick={this.handleLifeInsuarance}>
					<ListItemText primary="Life Insuarance" />
						{this.state.lifeInsuarance ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
			<Collapse in={this.state.lifeInsuarance} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItem button className={classes.nested}>
						<ListItemText primary="Health/Mediclaim" />
					</ListItem>
					<ListItem button className={classes.nested}>
						<ListItemText primary="Endowment Plans" />
					</ListItem>
					<ListItem button className={classes.nested}>
						<ListItemText primary="Money-Back Plans" />
					</ListItem>
					<ListItem button className={classes.nested}>
						<ListItemText primary="Pension Plans" />
					</ListItem>
					<ListItem button className={classes.nested}>
						<ListItemText primary="Personal Accident" />
					</ListItem>
					<ListItem button className={classes.nested}>
						<ListItemText primary="Unit Linked Insuarance Plans" />
					</ListItem>
				</List>
			</Collapse>

			<ListItem button onClick={this.handleNonLifeInsuarance}>
				<ListItemText primary="Non-Life Insuarance" />
					{this.state.nonLifeInsuarance ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
			<Collapse in={this.state.nonLifeInsuarance} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItem button className={classes.nested}>
						<ListItemText primary="Motor Insuarance" />
					</ListItem>
					<ListItem button className={classes.nested}>
						<ListItemText primary="Property Insuarance" />
					</ListItem>
					<ListItem button className={classes.nested}>
						<ListItemText primary="Keyman Insuarance" />
					</ListItem>
					<ListItem button className={classes.nested}>
						<ListItemText primary="Professional Liabilty" />
					</ListItem>
				</List>
			</Collapse>

			<ListItem button onClick={this.handleClick}>
				<ListItemText primary="Post Office Schemes" />
				{this.state.open ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
			<Collapse in={this.state.open} timeout="auto" unmountOnExit>
			<List component="div" disablePadding>
				<ListItem button className={classes.nested}>
					<ListItemText primary="Kisan Vikas Patra(KVP)" />
				</ListItem>
				<ListItem button className={classes.nested}>
					<ListItemText primary="Monthly Income Scheme" />
				</ListItem>
				<ListItem button className={classes.nested}>
					<ListItemText primary="National Savings Certificate(NSC)" />
				</ListItem>
				<ListItem button className={classes.nested}>
					<ListItemText primary="Public Provident Fund(PPF)" />
				</ListItem>
				<ListItem button className={classes.nested}>
					<ListItemText primary="Recurring Deposits" />
				</ListItem>
				<ListItem button className={classes.nested}>
					<ListItemText primary="Senior Citizens Savings Scheme(SCSS)" />
				</ListItem>
				<ListItem button className={classes.nested}>
					<ListItemText primary="Sukanya, Samruddhi Savings Deposit Scheme" />
				</ListItem>
				<ListItem button className={classes.nested}>
					<ListItemText primary="Term Deposits" />
				</ListItem>
			</List>
		</Collapse>

		<ListItem button onClick={this.handleRealEstate}>
				<ListItemText primary="Real Estate" />
					{this.state.openRealEstate ? <ExpandLess /> : <ExpandMore />}
		</ListItem>
		<Collapse in={this.state.openRealEstate} timeout="auto" unmountOnExit>
			<List component="div" disablePadding>
				<ListItem button className={classes.nested}>
					<ListItemText primary="Agriculture Land" />
				</ListItem>
				<ListItem button className={classes.nested}>
					<ListItemText primary="Bonds u/s 54EC" />
				</ListItem>
				<ListItem button className={classes.nested}>
					<ListItemText primary="Commercial Property" />
				</ListItem>
				<ListItem button className={classes.nested}>
					<ListItemText primary="Real Estate Investments Trust(REITS)" />
				</ListItem>
				<ListItem button className={classes.nested}>
					<ListItemText primary="Residential Property" />
				</ListItem>
				<ListItem button className={classes.nested}>
					<ListItemText primary="Reverse Mortgage" />
				</ListItem>
			</List>
		</Collapse>

		



			{/* {['NSC', 'KVP', 'Equity', 'Real Estate', 'Mutual Funds'].map((text, index) => (
				<ListItem button key={text}>
					{/* {index === 0 ? <InboxIcon /> : <MailIcon />} */}
					{/* <ListItemText primary={text} />
				</ListItem> 
			))}  */}
		</List> 
		</div>
	);

	return (
		<div className={classes.root}>
		<CssBaseline />
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				<IconButton
				color="inherit"
				aria-label="Open drawer"
				onClick={this.handleDrawerToggle}
				className={classes.menuButton}
				>
				<MenuIcon />
				</IconButton>
				<Typography variant="h6" color="inherit" noWrap>
				Asset Suraksha
				</Typography>
			</Toolbar>
		</AppBar>
		<nav className={classes.drawer}>
			{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
			<Hidden smUp implementation="css">
				<Drawer
				container={this.props.container}
				variant="temporary"
				anchor={theme.direction === 'rtl' ? 'right' : 'left'}
				open={this.state.mobileOpen}
				onClose={this.handleDrawerToggle}
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
		<main className={classes.content}>
			<div className={classes.toolbar} />
			
			{/* <Typography paragraph>
			</Typography>
			<Typography paragraph>
			</Typography> */}
		</main>
		</div>
	);
}
}

NavDrawer.propTypes = {
classes: PropTypes.object.isRequired,
// Injected by the documentation to work in an iframe.
// You won't need it on your project.
container: PropTypes.object,
theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NavDrawer);
