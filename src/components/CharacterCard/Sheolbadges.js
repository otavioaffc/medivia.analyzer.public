import sheol from './img/sheolaccess.png'
import azzodon from './img/azzodon.png'
import stones from './img/stones.png'
import Tooltip from '@material-ui/core/Tooltip'

const Sheolbadges = ( { tasks = [] }) => {

    if (typeof tasks[0]["monstername"] !== 'undefined') {

        return (

            <div style={{ display: "flex", flexDirection: "row", justifyContent:'center', flexWrap: 'wrap' }}>
                  
                  {tasks.filter(tasks => tasks.monstername.includes('blood witch')).map(filteredTasks => (               
                    <div class="grow dib f3-ns no-underline black-90 pa1" href="#">
                    <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"Character has finished the Blood Witches task so it can pass through the main Hellgate of Sheol located under Mittenhoff."}</span>}> 
                        <img src={sheol} alt="Aividem" width="150px" height="150px"/>
                    </Tooltip>
                    </div>    
                ))}

                    {tasks.filter(tasks => tasks.monstername.includes('ashlord')).map(filteredTasks => (               
                    <div class="grow dib f3-ns no-underline black-90 pa1" href="#">
                    <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"Character has finished the Ashlord task and can pass through the lightning walls blocking the magic stones in Sheol."}</span>}> 
                        <img src={stones} alt="Aividem" width="150px" height="150px"/>
                    </Tooltip>
                    </div>    
                ))}

                  {tasks.filter(tasks => tasks.monstername.includes('demorc warchief')).map(filteredTasks => (               
                    <div class="grow dib f3-ns no-underline black-90 pa1" href="#">
                    <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"Character has finished the Demorc Warchief task and can access Blacksmith Azzodon located past the locked gates deep inside the northeastern part of the swamps of Sheol."}</span>}> 
                        <img src={azzodon} alt="Aividem" width="150px" height="150px"/>
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

export default Sheolbadges;