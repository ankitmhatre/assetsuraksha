import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
root: {
    marginTop: '10px',
    width: '100%',
},
heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
},
});

function AssetExpansionPanel(props) {
const { classes } = props;
return (
    <div className={classes.root}>
    <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
                Certificate Number: {props.CertificateNumber}
            </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Typography>
                <p>Face Value: {props.FaceValue}</p> 
                <p>Maturity Period: April 2022{props.MaturityPeriod}</p>     
                <p>Maturity Amount: {props.MaturityAmount}</p>
            </Typography>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions style={{marginRight: "40px"}}>
          <Button size="small">View</Button>
          <Button size="small">Replicate</Button>
          <Button size="small">Edit</Button>
          <Button onClick={props.DeleteAsset} size="small">Delete</Button>
        </ExpansionPanelActions>
    </ExpansionPanel>
    </div>
);
}

AssetExpansionPanel.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AssetExpansionPanel);