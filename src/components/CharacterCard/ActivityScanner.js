import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import eye from './img/eye2.png'
import { Tooltip } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1.5),
    backgroundColor: '#1A1A30',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(2),
    top: theme.spacing(3),
    color: theme.palette.grey[500],
    background: '#232350',
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h5">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    backgroundColor: '#2C2C3D',
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    backgroundColor: '#1A1A30',
  },
}))(MuiDialogActions);

////////////// Function starts here /////////////////

function ActivityScanner ( { tasks=[] }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  

  if (typeof tasks[0]["monstername"] !== 'undefined' ) {

      const today = new Date();
      const compared = tasks.map(row => ({...row, diff: (today - new Date(row.date)) / 8.64e+7})),
      filtered = compared.filter(row => row.diff < 30),
      sorted = filtered.sort((a, b) => a.diff - b.diff)

    if (sorted.length > 0) {
    
    return (

    <div>
      <div className="ba bw1 b--dark-gray grow">
        <Button color="primary" onClick={handleClickOpen}>
        <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"Activity Scanner"}</span>}>
            <img src={eye} alt="faction" width="48px" height="48px"/>
          </Tooltip>  
        </Button>
      </div>

      <Dialog 
      onClose={handleClose} 
      aria-labelledby="customized-dialog-title" 
      open={open} 
      PaperProps={{ 
          elevation: 0, 
          style: { 
            backgroundColor: "transparent"
           },           
        }}>

        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        <span className="gray fw6">
          Activity Scanner                               
        </span>  
        </DialogTitle>
        <DialogContent dividers>

          <div>
                
              <div className="">
              <div className="pa2"></div>
              <h1 className="f5 fw8 green ma0">Tasks this character completed in the last 30 days:</h1>
              <div className="pa2"></div>
                {sorted.map(sorted => (          
                  <div>
                    <h1 className="f5 fw7 gray">Task Completed: <span className="light-red fw6">{sorted.monstername.replace(/^(\w)(.+)/, (match, p1, p2) => p1.toUpperCase() + p2.toLowerCase())}</span> -
                      <span className="fw5 light-blue"> Date: {sorted.date.replace(/(?<=\s).*/g,'')} </span> - <span className="light-green fw5">{sorted.diff.toLocaleString(undefined,{'minimumFractionDigits':0,'maximumFractionDigits':1})} days ago </span>
                    </h1>
                  {/* <hr className=""></hr> */}
                </div>
              ))}
                      
            </div>

          </div>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}


else if (sorted.length === 0) {
  
  return (
    <div>
      <div className="ba bw1 b--dark-gray grow">
        <Button color="primary" onClick={handleClickOpen}>
        <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"Activity Scanner"}</span>}>
            <img src={eye} alt="faction" width="48px" height="48px"/>
          </Tooltip>  
        </Button>
      </div>

      <Dialog 
      onClose={handleClose} 
      aria-labelledby="customized-dialog-title" 
      open={open} 
      PaperProps={{ 
          elevation: 0, 
          style: { 
            backgroundColor: "transparent"
           },           
        }}>

        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        <span className="gray fw6">
          Activity Scanner                               
        </span>  
        </DialogTitle>
        <DialogContent dividers>

          <div>
                
                <div className="">                     
                  <div>
                    <h1 className="pa3 f5 fw8 light-red">This character hasn't completed any tasks recently.</h1>
                  </div>               
                </div>

          </div>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>

  )
}
}

else {
    return (
                <div>
                </div>
            )
     }   
}
export default ActivityScanner;