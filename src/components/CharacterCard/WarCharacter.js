import { Tooltip } from '@material-ui/core';
import React from 'react';
import warmonger from './img/warmonger.png'

function WarCharacter( {playerfrags = [] } ) {

    if (typeof playerfrags[0]['cause'] !== 'undefined' ) {  
    
    const today = new Date();
    
    const allFragsCompared = playerfrags.map(row => ({...row, diff: (today - new Date(row.time)) / 8.64e+7})),
          allFragsfiltered = allFragsCompared.filter(row => row.diff < 5000),
          allFragsSorted = allFragsfiltered.sort((a, b) => a.diff - b.diff),
          AllFragsCount = allFragsSorted.length;
        
    
    if (AllFragsCount > 100) {
            return (
                <div>
                    <div class="grow dib f3-ns no-underline black-90 pa0 ph1" href="#">
                        <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"Possible war character. Frags count: " + AllFragsCount}</span>}>
                        <img src={warmonger} alt="war" width="25" height="25"/>
                        </Tooltip>
                    </div>                 
                </div>
            );
        }    


    else if (AllFragsCount < 100) {
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


export default WarCharacter;