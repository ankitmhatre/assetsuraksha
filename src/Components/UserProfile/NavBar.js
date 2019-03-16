import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


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

class NavBar extends React.Component {

render() {
	const { classes, theme } = this.props;
	return (
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
	);
}
}

NavBar.propTypes = {
classes: PropTypes.object.isRequired,
// Injected by the documentation to work in an iframe.
// You won't need it on your project.
container: PropTypes.object,
theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NavBar);
