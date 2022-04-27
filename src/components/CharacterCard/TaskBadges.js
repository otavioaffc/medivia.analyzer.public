import lbkbadge from './img/lbk2.png'
import aividem from './img/aividem2.png'
import whitelight from './img/whitelight2.png'
import blessing from './img/bless2.png'
import grim from './img/grim2.png'
import watcher from './img/watchers2.png'
import abom from './img/abom2.png'
import azure from './img/azure2.png'
import shakir from './img/Shakir.png'
import sphinx from './img/Sphinx.png'
import icons from './img/icons.png'
import Tooltip from '@material-ui/core/Tooltip'

const TaskBadges = ( { tasks = [] }) => {

    if (typeof tasks[0]["monstername"] !== 'undefined') {

        return (

            <div style={{ display: "flex", flexDirection: "row", justifyContent:'center', flexWrap: 'wrap' }}>
                  
                  {tasks.filter(tasks => tasks.monstername.includes('icon of light')).map(filteredTasks => (               
                    <div class="grow dib f3-ns no-underline black-90 pa1" href="#">
                    <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"Character has finished the Icons of Light task and there is a high possibility that it can enter Aividem."}</span>}> 
                        <img src={icons} alt="Aividem" width="150px" height="150px"/>
                    </Tooltip>
                    </div>    
                ))} 

                    {tasks.filter(tasks => tasks.monstername.includes('chaos worshiper')).map(filteredTasks => (               
                    <div class="grow dib f3-ns no-underline black-90 pa1" href="#">
                    <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"Character has access to Aividem's world of shadows."}</span>}> 
                        <img src={aividem} alt="Aividem" width="150px" height="150px"/>
                    </Tooltip>
                    </div>    
                ))} 

                    {tasks.filter(tasks => tasks.monstername.includes('cyclops warrior')).map(filteredTasks => ( 
                    <div class="grow dib f3-ns no-underline black-90 pa1" href="#">
                    <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"Character is likely to have access to the Lightbringer Camp."}</span>}>  
                        <img src={lbkbadge} alt="lbk" width="150px" height="150px"/>
                    </Tooltip>
                    </div>    
                ))}

                    {tasks.filter(tasks => tasks.monstername.includes('ritualist')).map(filteredTasks => ( 
                    <div class="grow dib f3-ns no-underline black-90 pa1" href="#">
                        <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"Character is very likely to have access to the Blessing of Goddess (6th blessing)."}</span>}>  
                        <img src={blessing} alt="bless" width="150px" height="150px"/>
                        </Tooltip>
                    </div>  
                ))}

                    {tasks.filter(tasks => tasks.monstername.includes('grim adept')).map(filteredTasks => (
                    <div class="grow dib f3-ns no-underline black-90 pa1" href="#">
                        <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"Character has access to the Dark Grims Realm."}</span>}>
                        <img src={grim} alt="bless" width="150px" height="150px"/> 
                        </Tooltip>
                    </div>     
                ))}

                    {tasks.filter(tasks => tasks.monstername.includes("slave hunter")).map(filteredTasks => (
                    <div class="grow dib f3-ns no-underline black-90 pa1" href="#">
                        <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"Character has access to the Shakirian Island."}</span>}>
                            <img src={shakir} alt="shakirian" width="150px" height="150px"/>
                        </Tooltip>
                    </div>     
                ))}

                    {tasks.filter(tasks => tasks.monstername.includes('goshnir')).map(filteredTasks => ( 
                    <div class="grow dib f3-ns no-underline black-90 pa1" href="#">
                        <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"Character has access to the Abominations inside the White Rose Tomb."}</span>}>
                        <img src={abom} alt="bless" width="150px" height="150px"/>
                        </Tooltip>  
                    </div>     
                ))}  

                    {tasks.filter(tasks => tasks.monstername.includes('priestess of light')).map(filteredTasks => (
                    <div class="grow dib f3-ns no-underline black-90 pa1" href="#">
                        <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"Character has access to the White Light Church's torture chambers."}</span>}> 
                        <img src={whitelight} alt="bless" width="150px" height="150px"/>
                        </Tooltip>   
                    </div>     
                ))} 

                    {tasks.filter(tasks => tasks.monstername.includes('frost dragon')).map(filteredTasks => (
                    <div class="grow dib f3-ns no-underline black-90 pa1" href="#">
                        <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"Character has access to the Azure Mercenaries camp"}</span>}>  
                        <img src={azure} alt="bless" width="150px" height="150px"/>
                        </Tooltip>   
                    </div>     
                ))} 

                    {tasks.filter(tasks => tasks.monstername.includes('nightmare')).map(filteredTasks => (
                    <div class="grow dib f3-ns no-underline black-90 pa1" href="#">
                        <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"Character has access to the forgotten chambers of the Ancient Watchers."}</span>}>
                            <img src={watcher} alt="bless" width="150px" height="150px"/>
                        </Tooltip>
                    </div>     
                ))}

                    {tasks.filter(tasks => tasks.monstername.includes("blood sphinx")).map(filteredTasks => (
                    <div class="grow dib f3-ns no-underline black-90 pa1" href="#">
                        <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"Character has access to the shortcut door inside the Sphinx Tomb located at Osaris."}</span>}>
                            <img src={sphinx} alt="bless" width="150px" height="150px"/>
                        </Tooltip>
                    </div>     
                ))}
            </div> 
        )
    }

    else {
        return (
            null
        )
    }
} 

export default TaskBadges;





