// import React from 'react';

// function FragsModal( {playerfrags= []}) {
//     if (typeof playerfrags[0]["cause"] !== 'undefined' ) {
//         return (
//                 <div>
//                     {playerfrags.map(playerfrags => (
//                         <div>
//                             <h1 className='f4 gray'>{playerfrags.time} - {playerfrags.playername} {playerfrags.cause.replace( /(<([^>]+)>)/ig, '')}</h1>
//                         </div>
//                     ))}
//                 </div>
//          )
//     }
  
//     else {
//         return (
//                     <div><h1>Character has no frags to be shown.</h1></div>
//                 )
//          }   
// }

// export default FragsModal;

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
import skull from './img/skullcolor.png'
import { Tooltip } from '@material-ui/core';
import './fragstyle.css'

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

function FragsModal( {playerfrags= [], charinfo=[] } ) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  if (typeof playerfrags[0]["cause"] !== 'undefined') {

  const today = new Date(); 
  
  const allFragsCompared = playerfrags.map(row => ({...row, diff: (today - new Date(row.time)) / 8.64e+7})),
        allFragsfiltered = allFragsCompared.filter(row => row.diff < 5000),
        allFragsSorted = allFragsfiltered.sort((a, b) => a.diff - b.diff),
        AllFragsCount = allFragsSorted.length;
          
  const monthFragsCompared = playerfrags.map(row => ({...row, diff: (today - new Date(row.time)) / 8.64e+7})),
        monthFragsfiltered = monthFragsCompared.filter(row => row.diff < 31),
        monthFragsSorted = monthFragsfiltered.sort((a, b) => a.diff - b.diff),
        monthFragsCount = monthFragsSorted.length;

  // const halfmonthFragsCompared = playerfrags.map(row => ({...row, diff: (today - new Date(row.time)) / 8.64e+7})),
  //       halfmonthFragsfiltered = halfmonthFragsCompared.filter(row => row.diff < 16),
  //       halfmonthFragsSorted = halfmonthFragsfiltered.sort((a, b) => a.diff - b.diff),
  //       halfmonthFragsCount = halfmonthFragsSorted.length;
  
  const sevendaysFragsCompared = playerfrags.map(row => ({...row, diff: (today - new Date(row.time)) / 8.64e+7})),
        sevendaysFragsfiltered = sevendaysFragsCompared.filter(row => row.diff < 8),
        sevendaysFragsSorted = sevendaysFragsfiltered.sort((a, b) => a.diff - b.diff),
        sevendaysFragsCount = sevendaysFragsSorted.length;
  
  

  return (
    <div>
      <div className="ba bw1 b--dark-gray grow">
        <Button color="primary" onClick={handleClickOpen}>
          <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"Character Frags"}</span>}>
            <img src={skull} alt="skull" width="48px" height="48px"/>
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
                <div>
                    {playerfrags.map(playerfrags => (
                        <div>
                            <h1 className='f5 gray'><span className="b ">{playerfrags.time}</span> - <a target="_blank" rel="noopener noreferrer" href={'https://medivia.online/community/character/' + playerfrags.playername }><span className="light-red f5">{playerfrags.playername}</span></a> - {playerfrags.cause.replace( /(<([^>]+)>)/ig, '')}</h1>
                        </div>
                    ))}
                </div>
        </DialogContent>        
        <div class="FragCount">
        <div className="pa1"></div>
        <div> Players killed last week: {sevendaysFragsCount}</div>
        <div> Players killed last month: {monthFragsCount}</div>      
        <div> Total frags: {AllFragsCount}</div>   
        </div>
        <DialogActions>             
        </DialogActions>
        
      </Dialog>
    </div>
  );
}
else if  (typeof charinfo[0]["playername"] !== 'undefined' && typeof playerfrags[0]["cause"] === 'undefined' ){
    return ( 
 
      <div>
      <div className="ba bw1 b--dark-gray grow">
        <Button color="primary" onClick={handleClickOpen}>
          <Tooltip title="Character Frags">
            <img src={skull} alt="skull" width="48px" height="48px"/>
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
                There are no frags to be shown for this character.
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

export default FragsModal;
