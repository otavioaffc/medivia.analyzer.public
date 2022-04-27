import { Tooltip } from '@material-ui/core';
import React from 'react';
// import fire from './img/fire.png'
// import thunder from './img/thunder.png'
import warning from './img/warning.png'
import powergamer from './img/powergamer.png'

function CharLevelsDiff( { levelhistory =[] }) {

    if (typeof levelhistory[0]['date'] !== 'undefined' ) {  
    
    const today = new Date();
    
    const comparedmonth = levelhistory.map(row => ({...row, diff: (today - new Date(row.date)) / 8.64e+7})),
          filteredmonth = comparedmonth.filter(row => row.diff < 31),
          sortedmonth = filteredmonth.sort((a, b) => a.diff - b.diff),
          diffmonth = sortedmonth.length ? +sortedmonth[0].level - +sortedmonth[sortedmonth.length - 1].level : null;
          
    
    const comparedyear = levelhistory.map(row => ({...row, diff: (today - new Date(row.date)) / 8.64e+7})),
          filteredyear = comparedyear.filter(row => row.diff < 1200),
          sortedyear = filteredyear.sort((a, b) => a.diff - b.diff),
          diffyear = sortedyear.length ? +sortedyear[0].level - +sortedyear[sortedyear.length - 1].level : null;
              
    
    if (diffyear < -100 ) {
            return (
                <div>
                    <div class="grow dib f3-ns no-underline black-90 pa0 ph1" href="#">
                        <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"There is a high chance that this character has been sold or no longer exists. The data below is likely a snapshot of this character's former stats."}</span>}>
                        <img src={warning} alt="thunder" width="25" height="25"/>
                        </Tooltip>
                    </div>                                     
                </div>
            );
        }
        
    else if (diffyear < -100 && diffmonth < 15) {
            return (
                <div>
                    <div class="grow dib f3-ns no-underline black-90 pa0 ph1" href="#">
                        <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"There is a high chance that this character has been sold or no longer exists. The data below is likely a snapshot of this character's former stats."}</span>}>
                        <img src={warning} alt="thunder" width="25" height="25"/>
                        </Tooltip>
                    </div>                                     
                </div>
            );
        }
  

    else if (diffmonth > 15 ) {
        return (
            <div>
                <div class="grow dib f3-ns no-underline black-90 pa0 ph1" href="#">
                    <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"Character has gained " + diffmonth + " levels this month!"}</span>}>
                        <img src={powergamer} alt="fire" width="25" height="25"/>
                    </Tooltip>
                </div>               
            </div>
        );
    }


    else if (diffmonth < 15)  {
        return (
            null
        )
    }

    else if (typeof levelhistory[0]['date'] !== 'undefined' ) {
        return (
            null
        )
    }

}


else {
    return (
        null
    );
};

}

export default CharLevelsDiff;