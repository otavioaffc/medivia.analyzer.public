import { Tooltip } from '@material-ui/core';
import React from 'react';
import sheol from './img/sheol3.png'

function Sheolcheck({tasks=[]}) {

    if (typeof tasks[0]["monstername"] !== 'undefined' ) {


        if (tasks.filter(e => e.monstername === 'general manos' || e.monstername === 'General Manos').length > 0 
        && tasks.filter(e => e.monstername === 'ancient watcher').length > 0
        && tasks.filter(e => e.monstername === 'dark grim').length > 0
        && tasks.filter(e => e.monstername === 'honou' || e.monstername === 'Honou').length > 0
        && tasks.filter(e => e.monstername === 'lightbringer hero').length > 0
        && tasks.filter(e => e.monstername === 'corrupted watcher').length > 0
        && tasks.filter(e => e.monstername === 'ancient watcher').length > 0
        && tasks.filter(e => e.monstername === 'dwarf dragoneater').length > 0
        && tasks.filter(e => e.monstername === 'elf swordmaster').length > 0
        ) {
    
            return (
                <div>
                    <div class="grow dib f3-ns no-underline black-90 pa0 ph1" href="#">
                        <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>Character has done all prerequisite quests for Sheol.</span>}>
                        <img src={sheol} alt="war" width="27" height="27"/>
                        </Tooltip>
                    </div>                 
                </div>
            );
        }
    else { return (null)}   
}
   
else {
    return (
        null
    );
};

}


export default Sheolcheck;