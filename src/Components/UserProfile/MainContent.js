import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import NavDrawer from '../../Components/UserProfile/Drawer';
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
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
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

class MainContent extends React.Component {

render() {
	const { classes, theme } = this.props;

	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />
            <h1>hello</h1>
			{/* <Typography paragraph>
			</Typography>
			<Typography paragraph>
			</Typography> */}
		</main>
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
