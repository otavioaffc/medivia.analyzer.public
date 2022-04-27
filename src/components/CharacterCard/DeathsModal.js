// import React from 'react';

// function DeathsModal( {playerdeaths= []}) {
    // if (typeof playerdeaths[0]["cause"] !== 'undefined' ) {
//         return (
//                 <div>
//                     {playerdeaths.map(playerdeaths => (
//                         <div>
//                             <h1 className='f4 gray'>{playerdeaths.time} - {playerdeaths.cause.replace( /(<([^>]+)>)/ig, '')}</h1>
//                         </div>
//                     ))}
//                 </div>
     
//                 )
//     }
//     else {
//             return (
//                         <div><h1>Character has no deaths to be shown.</h1></div>
//                     )
//         }
// }
// export default DeathsModal;

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
import rip from './img/gravecolor.png'
import { Tooltip } from "@material-ui/core";

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
    background: '#232350'
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon/>
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

function DeathsModal( { playerdeaths=[], charinfo=[] }) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  if (typeof playerdeaths[0]["cause"] !== 'undefined' ) {
  return (
    <div>
      <div className="ba bw1 b--dark-gray grow">
          <Button color="primary" onClick={handleClickOpen}>
            <Tooltip title={<span style={{ fontSize: "0.7rem" }}>{"Character Deaths"}</span>}>
              <img src={rip} alt="rip" width="48" height="48"/>
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
          Character Deaths
          </span>
        </DialogTitle>
        <DialogContent dividers>
        <div>
                    {playerdeaths.map(playerdeaths => (
                        <div>
                            <h1 className='f5 gray'>{playerdeaths.time} - {playerdeaths.cause.replace( /(<([^>]+)>)/ig, '')}</h1>
                        </div>
                    ))}
                </div> 
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}
else if  (typeof charinfo[0]["playername"] !== 'undefined' && typeof playerdeaths[0]["cause"] === 'undefined' ){
  return ( 

    <div>
    <div className="ba bw1 b--dark-gray grow">
      <Button color="primary" onClick={handleClickOpen}>
        <Tooltip enterTouchDelay="50" title="Character Frags">
          <img src={rip} alt="skull" width="48px" height="48px"/>
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
        Frags List
      </span>  
      </DialogTitle>
      <DialogContent dividers>
              <div className="f5 gray pa3 fw6">
              There are no deaths to be shown for this character.
              </div>
      </DialogContent>        
      <DialogActions>             
      </DialogActions>
      
    </Dialog>
  </div>  

          )
   }
else {
  return (
    null
  )
}   
}
export default DeathsModal;