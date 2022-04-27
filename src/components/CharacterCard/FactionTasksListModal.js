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
import faction from './img/factioncolor4.png'
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

function FactionTasksList( {tasks= []}) {
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
      filtered = compared.filter(row => row.diff < 10000),
      sorted = filtered.sort((a, b) => a.diff - b.diff)
    
    return (

    <div>
      <div className="ba bw1 b--dark-gray grow">
        <Button color="primary" onClick={handleClickOpen}>
        <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"Faction Task Progress"}</span>}>
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
          Faction Task Progress                               
        </span>  
        </DialogTitle>
        <DialogContent dividers>

          <div>
                
                <div className="flex center ma2"><img className="ma2" width="40px" height="40px" alt='demonfaction' src="https://wiki.mediviastats.info/images/8/89/Ashlord.png"></img><a href='https://wiki.mediviastats.info/Demonic_Faction' target="_blank" rel="noopener noreferrer"><h3 className="gold fw6"> Demonic Faction </h3></a><img className="ma2" width="40px" height="40px" alt='demonfaction' src="https://wiki.mediviastats.info/images/a/ac/Corruptor.png"></img></div>
                
                <div className="pa1">
                      
                      {sorted.filter(sorted => sorted.monstername.includes("blood witch")).map(filteredTasks => (                                                                            
                        <div>
                        <h1 className="f5 fw8 gray"><span className="light-red fw6">Blood Witches</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                        {/* <hr className=""></hr> */}
                        </div>       
                      ))}

                      {sorted.filter(sorted => sorted.monstername.includes("ashlord")).map(filteredTasks => (                                                                            
                        <div>
                        <h1 className="f5 fw8 gray"><span className="light-red fw6">Ashlords</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                        {/* <hr className=""></hr> */}
                        </div>       
                      ))}

                      {sorted.filter(sorted => sorted.monstername.includes("blasphemer")).map(filteredTasks => (                                                                            
                        <div>
                        <h1 className="f5 fw8 gray"><span className="light-red fw6">Blasphemers</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                        {/* <hr className=""></hr> */}
                        </div>       
                      ))}

                      {sorted.filter(sorted => sorted.monstername.includes("demorc ")).map(filteredTasks => (                                                                            
                        <div>
                        <h1 className="f5 fw8 gray"><span className="light-red fw6">Demorcs</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                        {/* <hr className=""></hr> */}
                        </div>       
                      ))}

                      {sorted.filter(sorted => sorted.monstername.includes("demorc warchief")).map(filteredTasks => (                                                                            
                        <div>
                        <h1 className="f5 fw8 gray"><span className="light-red fw6">Demorc Warchiefs</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                        {/* <hr className=""></hr> */}
                        </div>       
                      ))}

                      {sorted.filter(sorted => sorted.monstername.includes("cerberus")).map(filteredTasks => (                                                                            
                        <div>
                        <h1 className="f5 fw8 gray"><span className="light-red fw6">Cerberus</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                        {/* <hr className=""></hr> */}
                        </div>       
                      ))}

                      {sorted.filter(sorted => sorted.monstername.includes("flamebringer")).map(filteredTasks => (                                                                            
                        <div>
                        <h1 className="f5 fw8 gray"><span className="light-red fw6">Flamebringers</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                        {/* <hr className=""></hr> */}
                        </div>       
                      ))}

                      {sorted.filter(sorted => sorted.monstername.includes("typhon")).map(filteredTasks => (                                                                            
                        <div>
                        <h1 className="f5 fw8 gray"><span className="light-red fw6">Typhons</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                        {/* <hr className=""></hr> */}
                        </div>       
                      ))}

                      {sorted.filter(sorted => sorted.monstername.includes("corruptor")).map(filteredTasks => (                                                                            
                        <div>
                        <h1 className="f5 fw8 gray"><span className="light-red fw6">Corruptors</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                        {/* <hr className=""></hr> */}
                        </div>       
                      ))}

                      {sorted.filter(sorted => sorted.monstername.includes("succubus")).map(filteredTasks => (                                                                            
                        <div>
                        <h1 className="f5 fw8 gray"><span className="light-red fw6">Succubi</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                        {/* <hr className=""></hr> */}
                        </div>       
                      ))}

                      {sorted.filter(sorted => sorted.monstername.includes("dreadlord")).map(filteredTasks => (                                                                            
                        <div>
                        <h1 className="f5 fw8 gray"><span className="light-red fw6">Dreadlords</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                        {/* <hr className=""></hr> */}
                        </div>       
                      ))}

                </div>

                <div className="flex center ma2">
                  <img className ="ma2" width="40px" height="40px" alt='whitelight' src="https://wiki.mediviastats.info/images/c/cb/Ritualist.png">
                  </img>
                    <a href='https://wiki.mediviastats.info/White_Light_Faction' target="_blank" rel="noopener noreferrer">
                      <h3 className="gold fw6"> White Light Faction </h3>
                    </a>
                  <img className ="ma2" width="40px" height="40px" alt='demonfaction' src="https://wiki.mediviastats.info/images/5/5a/Holy_Sentinel.png">
                  </img>
                </div>
                
                <div className="pa1">

                      {sorted.filter(sorted => sorted.monstername.includes("priestess of light")).map(filteredTasks => (                                                                            
                        <div>
                        <h1 className="f5 fw8 gray"><span className="light-red fw6">Priests of Light</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                        {/* <hr className=""></hr> */}
                        </div>       
                      ))}

                      {sorted.filter(sorted => sorted.monstername.includes("holy sentinel")).map(filteredTasks => (                                                                            
                        <div>
                        <h1 className="f5 fw8 gray"><span className="light-red fw6">Holy Sentinels</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                        {/* <hr className=""></hr> */}
                        </div>       
                      ))}

                      {sorted.filter(sorted => sorted.monstername.includes("icon of light")).map(filteredTasks => (                                                                            
                        <div>
                        <h1 className="f5 fw8 gray"><span className="light-red fw6">Icons of Light</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                        {/* <hr className=""></hr> */}
                        </div>       
                      ))}

                      {sorted.filter(sorted => sorted.monstername.includes("chaos worshiper")).map(filteredTasks => (                                                                            
                        <div>
                        <h1 className="f5 fw8 gray"><span className="light-red fw6">Chaos Worshipers</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                        {/* <hr className=""></hr> */}
                        </div>       
                      ))}

                      {sorted.filter(sorted => sorted.monstername.includes("shadow guard")).map(filteredTasks => (                                                                            
                        <div>
                        <h1 className="f5 fw8 gray"><span className="light-red fw6">Shadow Guards</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                        {/* <hr className=""></hr> */}
                        </div>       
                      ))}

                      {sorted.filter(sorted => sorted.monstername.includes("ritualist")).map(filteredTasks => (                                                                            
                        <div>
                        <h1 className="f5 fw8 gray"><span className="light-red fw6">Ritualists</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                        {/* <hr className=""></hr> */}
                        </div>       
                      ))}

                </div>

                <div className="flex center ma2"><img className ="ma2" width="40px" height="40px" alt='whitelight' src="https://wiki.mediviastats.info/images/7/7e/Archini.png"></img><a href='https://wiki.mediviastats.info/Archini_Faction' target="_blank" rel="noopener noreferrer"><h3 className="gold fw6"> Archini Faction </h3></a><img className ="ma2" width="40px" height="40px" alt='demonfaction' src="https://wiki.mediviastats.info/images/7/7e/Archini.png"></img></div>

                
                <div className="pa1">
                      {sorted.filter(sorted => sorted.monstername.includes("jothun")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Jothuns</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))} 

                      {sorted.filter(sorted => sorted.monstername.includes("swamp demon")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Swamp Demons</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))} 

                      {sorted.filter(sorted => sorted.monstername.includes("nightmare")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Nightmares</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                      {sorted.filter(sorted => sorted.monstername.includes("ancient watcher")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Ancient Watchers</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                </div>

                <div className="flex center ma2"><img className ="ma2" width="40px" height="40px" alt='whitelight' src="https://wiki.mediviastats.info/images/6/6b/Grim_Adept.png"></img><a href='https://wiki.mediviastats.info/Grim_Faction' target="_blank" rel="noopener noreferrer"><h3 className="gold fw6"> Grim Faction </h3></a><img className ="ma2" width="40px" height="40px" alt='demonfaction' src="https://wiki.mediviastats.info/images/a/ab/Dark_Grim.png"></img></div>

                <div className="pa1">

                {sorted.filter(sorted => sorted.monstername.includes("fire devil")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Fire Devils</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("crystal beetle")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Crystal Beetles</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}            

                {sorted.filter(sorted => sorted.monstername.includes("grim adept")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Grim Adepts</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("dark grim")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Dark Grims</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}              
                </div>

                <div className="flex center ma2"><img className ="ma2" width="40px" height="40px" alt='whitelight' src="https://wiki.mediviastats.info/images/6/64/Lightbringer_Knight_Creature.gif"></img><a href='https://wiki.mediviastats.info/Imperial_Faction' target="_blank" rel="noopener noreferrer"><h3 className="gold fw6"> Imperial Faction </h3></a><img className ="ma2" width="40px" height="40px" alt='demonfaction' src="https://wiki.mediviastats.info/images/0/0d/Lightbringer_Hero.gif"></img></div>
                
                <div className="pa1">
                
                {sorted.filter(sorted => sorted.monstername.includes("war wolf")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">War Wolves</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}
                
                {sorted.filter(sorted => sorted.monstername.includes("alpha Wolf")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Alpha Wolves</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}
                
                {sorted.filter(sorted => sorted.monstername.includes("cyclops warrior")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Cyclops Warriors</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("imperial soldier")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Imperial Soldiers</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("Lightbringer Knight")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Lightbringer Knights</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("lightbringer knight")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Lightbringer Knights</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("royalist")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Royalists</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("Royalist")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Royalists</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("lightbringer hero")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Lightbringer Heroes</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                </div>

                <div className="flex center ma2"><img className ="ma2" width="40px" height="40px" alt='whitelight' src="https://wiki.mediviastats.info/images/0/0d/Necromantica.gif"></img><a href='https://wiki.mediviastats.info/Order_of_the_Holy_Rose' target="_blank" rel="noopener noreferrer"><h3 className="gold fw6"> Holy Rose Faction </h3></a><img className ="ma2" width="40px" height="40px" alt='demonfaction' src="https://wiki.mediviastats.info/images/0/0d/Necromantica.gif"></img></div>


                <div className="pa1">

                {sorted.filter(sorted => sorted.monstername.includes("waterblob")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Waterblobs</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("crystal beast")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Crystal Beasts</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("wendigo")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Wendigos</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("snow ravager")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Snow Ravager</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("frost drake")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Frost Drakes</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("nether spider")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Nether Spiders</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("agaltha")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Agaltha</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("frost dragon")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Frost Dragons</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("azure mercenary")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Azure Mercenaries</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                </div>

                <div className="flex center ma2"><img className ="ma2" width="40px" height="40px" alt='whitelight' src="https://wiki.mediviastats.info/images/a/a7/Shadow_drake.png"></img><a href='https://wiki.mediviastats.info/Lightbringer_Faction' target="_blank" rel="noopener noreferrer"><h3 className="gold fw6"> Lightbringer Faction </h3></a><img className ="ma2" width="40px" height="40px" alt='demonfaction' src="https://wiki.mediviastats.info/images/b/bb/Undead_Dragon_1_Blue.gif"></img></div>

                <div className="pa1">

                {sorted.filter(sorted => sorted.monstername.includes("mummy")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Mummies</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("skeleton archer")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Skeleton Archers</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("skeleton sharpshooter")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Skeleton Sharpshooters</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("commodore")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Commodores</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("swashbuckler")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Swashbucklers</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("crewman")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Crewmen</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("skeleton plaguespreader")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Skeleton Plaguespreaders</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("deathkiss watcher")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Deathkiss Watchers</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("anubis")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Anubis</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("restless skeleton")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Restless Skeletons</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("wight")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Wights</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("skull reaper")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Skull Reapers</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("Goshnir")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Goshnir</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("wraith")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Wraiths</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("abomination")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Abominations</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("undead behemoth")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Undead Behemoth</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("shadow drake")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Shadow Drakes</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("undead dragon")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Undead Dragons</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                <div className="flex center ma2"><img className ="ma2" width="40px" height="40px" alt='whitelight' src="https://wiki.mediviastats.info/images/1/16/Orc_Berserker.gif"></img><a href='https://wiki.mediviastats.info/Orc_Faction' target="_blank" rel="noopener noreferrer"><h3 className="gold fw6"> Orc Faction </h3></a><img className ="ma2" width="40px" height="40px" alt='demonfaction' src="https://wiki.mediviastats.info/images/4/44/Orc_Warlord.gif"></img></div>
                                
                <div className="pa1">
                
                {sorted.filter(sorted => sorted.monstername.includes("elf g")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Elves</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}
                
                {sorted.filter(sorted => sorted.monstername.includes("elf guardian")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Elf Guardians</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}
                
                {sorted.filter(sorted => sorted.monstername.includes("elf sharpshooter")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Elf Sharpshooters</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("elf swordmaster")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Elf Swordmasters</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}


              </div>

              <div className="flex center ma2"><img className ="ma2" width="40px" height="40px" alt='whitelight' src="https://wiki.mediviastats.info/images/5/5b/Elf_Guardian.gif"></img><a href='https://wiki.mediviastats.info/Elf_Faction' target="_blank" rel="noopener noreferrer"><h3 className="gold fw6"> Elf Faction </h3></a><img className ="ma2" width="40px" height="40px" alt='demonfaction' src="https://wiki.mediviastats.info/images/8/8c/Elf_Swordmaster.gif"></img></div>
                
                <div className="pa1">
                
                {sorted.filter(sorted => sorted.monstername.includes("dwarf guard")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Dwarf Guards</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}
                
                {sorted.filter(sorted => sorted.monstername.includes("dwarf slayer")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Dwarf Slayers</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}
                
                {sorted.filter(sorted => sorted.monstername.includes("Hadrian the Crusher")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Hadrian the Crusher</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("hadrian the crusher")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Hadrian the Crusher</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}    

                {sorted.filter(sorted => sorted.monstername.includes("dwarf dragoneater")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Dwarf Dragoneaters</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                </div>

                <div className="flex center ma2"><img className ="ma2" width="40px" height="40px" alt='whitelight' src="https://wiki.mediviastats.info/images/5/58/Dwarf_dragoneater.png"></img><a href='https://wiki.mediviastats.info/Dwarf_Faction' target="_blank" rel="noopener noreferrer"><h3 className="gold fw6"> Dwarf Faction </h3></a><img className ="ma2" width="40px" height="40px" alt='demonfaction' src="https://wiki.mediviastats.info/images/3/34/Dwarf_Slayer.gif"></img></div>
                
                <div className="pa1">
                
                {sorted.filter(sorted => sorted.monstername.includes("mutated rat")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Mutated Rats</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}
                
                {sorted.filter(sorted => sorted.monstername.includes("minotaur archer")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Minotaur Archers</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}
                
                {sorted.filter(sorted => sorted.monstername.includes("minotaur guard")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Minotaur Guards</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("Dwarf Renegade")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Dwarf Renegade</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("dwarf renegade")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Dwarf Renegade</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}           

                {sorted.filter(sorted => sorted.monstername.includes("Hirnus Bloodhoof")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Hirnus Bloodhoof</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("hirnus bloodhoof")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Hirnus Bloodhoof</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}            

                {sorted.filter(sorted => sorted.monstername.includes("corrupted watcher")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Corrupted Watchers</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                </div>

                <div className="flex center ma2"><img className ="ma2" width="40px" height="40px" alt='whitelight' src="https://wiki.mediviastats.info/images/9/95/Minotaur.gif"></img><a href='https://wiki.mediviastats.info/Minotaur_Faction' target="_blank" rel="noopener noreferrer"><h3 className="gold fw6"> Minotaur Faction </h3></a><img className ="ma2" width="40px" height="40px" alt='demonfaction' src="https://wiki.mediviastats.info/images/e/e9/Minotaur_Guard.gif"></img></div>
                
                <div className="pa1">
                
                {sorted.filter(sorted => sorted.monstername.includes("orc warrior")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Orc Warriors</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}
                
                {sorted.filter(sorted => sorted.monstername.includes("orc bowman")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Orc Bowmen</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}
                
                {sorted.filter(sorted => sorted.monstername.includes("orc berserker")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Orc Berserkers</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("orc leader")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Orc Leaders</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("general manos")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">General Manos</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("General Manos")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">General Manos</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                </div>

                <div className="flex center ma2"><img className ="ma2" width="40px" height="40px" alt='whitelight' src="https://wiki.mediviastats.info/images/d/da/Slave_Guard.gif"></img><a href='https://wiki.mediviastats.info/Osaris_Faction' target="_blank" rel="noopener noreferrer"><h3 className="gold fw6"> Osaris Faction </h3></a><img className ="ma2" width="40px" height="40px" alt='demonfaction' src="https://wiki.mediviastats.info/images/d/de/Shakirian_Prayer.gif"></img></div>
                
                <div className="pa1">
                
                {sorted.filter(sorted => sorted.monstername.includes("larva")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Larvas</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}
                
                {sorted.filter(sorted => sorted.monstername.includes("scarab")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Scarabs</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}
                
                {sorted.filter(sorted => sorted.monstername.includes("slave hunter")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Slave Hunters</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("slave guard")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Slave Guards</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("shakirian prayer")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Shakirian Prayers</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("honou")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Honou</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}

                {sorted.filter(sorted => sorted.monstername.includes("Honou")).map(filteredTasks => (                                                                            
                              <div>
                              <h1 className="f5 fw8 gray"><span className="light-red fw6">Honou</span> - <span className="fw5 light-blue"> Date: {filteredTasks.date.replace(/(?<=\s).*/g,'')} </span></h1>
                              {/* <hr className=""></hr> */}
                              </div>       
                            ))}
                </div>
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
export default FactionTasksList;