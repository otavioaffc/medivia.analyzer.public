// import React from 'react';
// import { Line } from 'react-chartjs-2'

// function LevelHistoryChartModal( { levelhistory =[] }) {

    // if (typeof levelhistory[0]["level"] !== 'undefined' ) {

//         return (
        
        // <div>
        //     <Line
        //     data={{
        //         labels: levelhistory.map((levelhistory) => levelhistory.date),
        //         datasets: [
        //         {
        //             label: 'level',
        //             data: levelhistory.map((levelhistory) => levelhistory.level),
        //         }
        //         ]

        //     }}
        //     height={400}
        //     width={600}
        //     options={{
        //         maintainAspectRatio: false,
        //         scales: {
        //             yAxes: [
        //                 {
        //                     ticks: {
        //                         beginAtZero: true
        //                     },
        //                 }
        //             ]
        //         }
        //     }}
        //     /> 
        // </div>            
    
                  
//     )
// }
// else {
//     return (
//         <div></div>
//     )
// }
// }
// export default LevelHistoryChartModal;

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Line } from 'react-chartjs-2';
import graphicon from './img/diagram2.png'
import { Tooltip } from "@material-ui/core";
import grey from '@material-ui/core/colors/grey';
// import './chartstyle.css'


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1.4),
    backgroundColor: '#1A1A30',
    borderRadius: 1,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(2),
    top: theme.spacing(3),
    color: grey[500],
    background: '#232350',
  }
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
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
    borderRadius: 1,
  }
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    backgroundColor: '#1A1A30'
  }
}))(MuiDialogActions);

function LevelHistoryChartModal( { levelhistory =[] }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

                      if (typeof levelhistory[0]["date"] !== 'undefined' ) {

                        const today = new Date();
                      
                      const compared = levelhistory.map(row => ({...row, diff: (today - new Date(row.date)) / 8.64e+7})),
                            filtered = compared.filter(row => row.diff < 8),
                            sorted = filtered.sort((a, b) => a.diff - b.diff),
                            diff = sorted.length ? +sorted[0].level - +sorted[sorted.length - 1].level : null;
                            
                      const compared15days = levelhistory.map(row => ({...row, diff: (today - new Date(row.date)) / 8.64e+7})),
                            filtered15days = compared15days.filter(row => row.diff < 16),
                            sorted15days = filtered15days.sort((a, b) => a.diff - b.diff),
                            diff15days = sorted15days.length ? +sorted15days[0].level - +sorted15days[sorted15days.length - 1].level : null;
                      
                      const comparedmonth = levelhistory.map(row => ({...row, diff: (today - new Date(row.date)) / 8.64e+7})),
                            filteredmonth = comparedmonth.filter(row => row.diff < 31),
                            sortedmonth = filteredmonth.sort((a, b) => a.diff - b.diff),
                            diffmonth = sortedmonth.length ? +sortedmonth[0].level - +sortedmonth[sortedmonth.length - 1].level : null;

  return (
    <div>
        <div className="ba bw1 b--dark-gray grow">
            <Button color="primary" onClick={handleClickOpen}>
              <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"Level History"}</span>}>
                <img src={graphicon} alt="graphicon" width="48px" height="48px"/>
              </Tooltip>  
            </Button>
        </div> 
        <div></div> 
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{ 
          elevation: 0, 
          style: { 
            backgroundColor: "transparent"
           },           
        }}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <span className="gray fw6">
            Level History 
          </span>
       </DialogTitle>
        <DialogContent dividers >
        <div>
            <Line
            data={{
                labels: levelhistory.map((levelhistory) => levelhistory.date.split(' ')[0]),
                datasets: [
                {
                    label: 'Level',
                    data: levelhistory.map((levelhistory) => levelhistory.level),
                    radius: 1,
                    backgroundColor: "#1A1A30",
                    borderColor: "#1A1A30",
                    borderWidth: 2,
                    fill: false,
                    lineWidth: 2500,
                    
                }
                ]

            }}
            height={400}
            width={600}
            options={{
              aspectRatio: 1.3,
              scales: {
                yAxes: [
                  {
                    gridLines: {
                      display: false,                      
                    },
                    ticks: {
                      beginAtZero: true,
                      padding: 12,                      
                      stepSize: 1,                    
                    },
                  },
                ],
                xAxes: [
                  {
                    ticks: {
                      padding: 12,
                      
                                           
                    },
                    gridLines: {
                      display: false,                      
                    },
                  },
                ],
              },
              legend: {
                display: false,
              },
            }}
            /> 
            </div>
        </DialogContent>
        <DialogContent>
        <div className="gray fw6">
          <div>
        Levels gained last seven days: {diff}   
        </div> 
        <div> 
        Levels gained last fifteen days: {diff15days}
        </div> 
        <div>
        Levels gained last month: {diffmonth}
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
    null
    )
}

}
export default LevelHistoryChartModal;