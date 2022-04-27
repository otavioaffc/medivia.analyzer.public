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
import faction from './img/factioncolor.png'
import { Tooltip } from '@material-ui/core';
import minofaction from './img/FactionProgress/minotaur faction.png'
import orcfaction from './img/FactionProgress/orcfaction2.png'
import elffaction from './img/FactionProgress/elf faction.png'
import osarisfaction from './img/FactionProgress/osarisfaction.png'
import dwarffaction from './img/FactionProgress/dwarf faction.png'
import lbfaction from './img/FactionProgress/lbfaction.png'
import holyrosefaction from './img/FactionProgress/holyrosefaction2.png'
import empirefaction from './img/FactionProgress/empire faction.png'
import archinifaction from './img/FactionProgress/archini faction.png'
import grimfaction from './img/FactionProgress/grim faction.png'
import whitelightfaction from './img/FactionProgress/white light.png'

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

function FactionProgress( {tasks= []}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  if (typeof tasks[0]["monstername"] !== 'undefined' ) {
    
    return (

    <div>
      <div className="ba bw1 b--dark-gray grow">
        <Button color="primary" onClick={handleClickOpen}>
        <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"Faction Progress"}</span>}>
            <img src={faction} alt="faction" width="48px" height="48px"/>
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
          Faction Progress                               
        </span>  
        </DialogTitle>
        <DialogContent dividers>

          <div>
                
                <h3 className="center gold fw6"> Finished Sub Factions </h3>
                
                <div className="flex flex-row flex-wrap center">
                      
                      {tasks.filter(tasks => tasks.monstername.includes("general manos")).map(filteredTasks => (               
                      <div className="grow ph1">
                      <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"This character has slain General Manos and is very likely to have finished the Minotaur Faction."}</span>}>     
                      <img src={minofaction} alt='minofaction' width='125px' height='125px'/>
                      </Tooltip>
                      </div>       
                      ))}

                      {tasks.filter(tasks => tasks.monstername.includes("General Manos")).map(filteredTasks => (               
                      <div className="grow ph1">
                      <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"This character has slain General Manos and is very likely to have finished the Minotaur Faction."}</span>}>     
                      <img src={minofaction} alt='minofaction' width='125px' height='125px'/>
                      </Tooltip>
                      </div>       
                      ))}

                      {tasks.filter(tasks => tasks.monstername.includes("elf swordmaster")).map(filteredTasks => (               
                      <div className="grow ph1">
                      <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"This character has slain 250 Elf Swordmasters and is very likely to have finished the Orc Faction."}</span>}>     
                      <img src={orcfaction} alt='orcfaction' width='125px' height='125px'/>
                      </Tooltip>
                      </div>       
                      ))}

                      {tasks.filter(tasks => tasks.monstername.includes("dwarf dragoneater")).map(filteredTasks => (               
                      <div className="grow ph1">
                      <Tooltip enterTouchDelay="50"title={<span style={{ fontSize: "0.7rem" }}>{"This character has slain 400 Dwarf Dragoneaters and is very likely to have finished the Elf Faction."}</span>}>     
                      <img src={elffaction} alt='elffaction' width='125px' height='125px'/>
                      </Tooltip>
                      </div>       
                      ))}       
                      
                      {tasks.filter(tasks => tasks.monstername.includes("corrupted watcher")).map(filteredTasks => (               
                      <div className="grow ph1">
                      <Tooltip enterTouchDelay="50"title={<span style={{ fontSize: "0.7rem" }}>{"This character has slain 250 Corrupted Watchers and has finished the Dwarf Faction."}</span>}>     
                      <img src={dwarffaction} alt='dwarffaction' width='125px' height='125px'/>
                      </Tooltip>
                      </div>       
                      ))}     

                      {tasks.filter(tasks => tasks.monstername.includes("honou")).map(filteredTasks => (               
                      <div className="grow ph1">
                      <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"This character has slain Honou and has finished the Osaris Faction."}</span>}>     
                      <img src={osarisfaction} alt='osarisfaction' width='125px' height='125px'/>
                      </Tooltip>
                      </div>       
                      ))}

                      {tasks.filter(tasks => tasks.monstername.includes("Honou")).map(filteredTasks => (               
                      <div className="grow ph1">
                      <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"This character has slain Honou and has finished the Osaris Faction."}</span>}>     
                      <img src={osarisfaction} alt='osarisfaction' width='125px' height='125px'/>
                      </Tooltip>
                      </div>       
                      ))}

                </div>

                  <h3 className="center gold fw6"> Finished Main Factions </h3>
                
                <div className="flex flex-row flex-wrap center">

                      {tasks.filter(tasks => tasks.monstername.includes("lightbringer hero")).map(filteredTasks => (               
                      <div className="grow ph1">
                      <Tooltip enterTouchDelay="50"title={<span style={{ fontSize: "0.7rem" }}>{"This character has slain 250 Lightbringer Heroes and is very likely to have finished the Maritsaian Empire Faction."}</span>}>     
                      <img src={empirefaction} alt='empirefaction' width='125px' height='125px'/>
                      </Tooltip>
                      </div>       
                      ))}

                      {tasks.filter(tasks => tasks.monstername.includes("undead dragon")).map(filteredTasks => (               
                      <div className="grow ph1">
                      <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"This character has slain 100 Undead Dragons and has finished the Lightbringer Faction."}</span>}>     
                      <img src={lbfaction} alt='lbfaction' width='125px' height='125px'/>
                      </Tooltip>
                      </div>       
                      ))}          

                      {tasks.filter(tasks => tasks.monstername.includes("azure mercenary")).map(filteredTasks => (               
                      <div className="grow ph1">
                      <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"This character has slain 250 Azure Mercenaries and has finished the Order of the Holy Rose Faction."}</span>}>     
                      <img src={holyrosefaction} alt='holyrosefaction' width='125px' height='125px'/>
                      </Tooltip>
                      </div>       
                      ))}

                      {tasks.filter(tasks => tasks.monstername.includes("dark grim")).map(filteredTasks => (               
                      <div className="grow ph1">
                      <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"This character has slain 1500 Dark Grims and has finished the Grim Faction."}</span>}>     
                      <img src={grimfaction} alt='grim faction' width='125px' height='125px'/>
                      </Tooltip>
                      </div>       
                      ))}

                      {tasks.filter(tasks => tasks.monstername.includes("ancient watcher")).map(filteredTasks => (               
                      <div className="grow ph1">
                      <Tooltip enterTouchDelay="50"title={<span style={{ fontSize: "0.7rem" }}>{"This character has slain 1000 Ancient Watchers and has finished the Archini Faction."}</span>}>     
                      <img src={archinifaction} alt='archini faction' width='125px' height='125px'/>
                      </Tooltip>
                      </div>       
                      ))}


                      {tasks.filter(tasks => tasks.monstername.includes("ritualist")).map(filteredTasks => (               
                      <div className="grow ph1">
                      <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"This character has slain 350 Ritualists and is likely to have finished the White Light Faction."}</span>}>     
                      <img src={whitelightfaction} alt='whitelightfaction' width='125px' height='125px'/>
                      </Tooltip>
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
else {
    return (
                <div>
                </div>
            )
     }   
}
export default FactionProgress;