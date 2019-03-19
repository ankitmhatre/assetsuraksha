import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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
				{/* <Typography paragraph>
				</Typography>
				<Typography paragraph>
				</Typography> */}
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
