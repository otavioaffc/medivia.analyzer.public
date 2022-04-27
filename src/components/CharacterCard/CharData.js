import React from 'react';
import './CharData.css';
import Tooltip from '@material-ui/core/Tooltip'
// import archmage from './img/archmage.png'
// import knight from './img/knight.png'
// import ranger from './img/ranger.png'
// import druid from './img/druid.png'
import sevendays from './img/7days.png'
import fifteendays from './img/15days.png'
import thirtydays from './img/30days.png'
import dranus from './img/Dranus.png'


const CharData = ( {charinfo =[], levelhistory =[] }) => {
  

  if ((typeof charinfo[0]["vocation"] !== 'undefined') && (typeof levelhistory[0]['level'] !== 'undefined'))  {  

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
        
  const currentlevel = charinfo.map((charinfo) => charinfo.level);
  const currentexp = (50*(currentlevel -1)**3 - 150* (currentlevel -1)**2 + 400 + (currentlevel -1))/3;
  const sevendaylevel = (currentlevel - diff);
  const diffexp = (50*(sevendaylevel -1)**3 - 150* (sevendaylevel -1)**2 + 400 + (sevendaylevel -1))/3;

  const level15days = (currentlevel - diff15days);
  const diffexp15days = (50*(level15days -1)**3 - 150* (level15days -1)**2 + 400 + (level15days -1))/3;
  
  const monthlevel = (currentlevel - diffmonth);
  const diffexpmonth = (50*(monthlevel -1)**3 - 150* (monthlevel -1)**2 + 400 + (monthlevel -1))/3;  

  const weekexpf = currentexp - diffexp;
  const halfmonthexpf = currentexp - diffexp15days;
  const monthexpf = currentexp - diffexpmonth;

  const weekexp = (weekexpf.toLocaleString())
  const halfmonthexp = (halfmonthexpf.toLocaleString())
  const monthexp = (monthexpf.toLocaleString());


return (

  
  <div>


  {/* <div>
            {charinfo.filter(charinfo => charinfo.vocation.includes('Ranger')).map(filteredTasks => (
                      <img src={ranger} alt="ranger" width="64px" height="64px"/>
                    ))}
            
            {charinfo.filter(charinfo => charinfo.vocation.includes('Archmage')).map(filteredTasks => (
                      <img src={archmage} alt="archmage" width="110px" height="110x"/>
                    ))}

            {charinfo.filter(charinfo => charinfo.vocation.includes('Druid')).map(filteredTasks => (
                      <img src={druid} alt="druid" width="110px" height="110px"/>
                    ))}

            {charinfo.filter(charinfo => charinfo.vocation.includes('Knight')).map(filteredTasks => (
                      <img src={knight} alt="knight" width="110px" height="110px"/>
                    ))}  
  </div> */}

      <div style={{ display: "flex", flexDirection: "column", justifyContent:'center', flexWrap: 'wrap' }}>    
          {charinfo.map(charinfo => (
            <div>
              <h1 className='f2 gray'><a href={'https://medivia.online/community/character/' + charinfo.playername} target="_blank" rel="noopener noreferrer">{charinfo.playername}</a></h1>            
              <hr className="center pa0"></hr>
              <h1 className='f7 pa0 green center'>Exp Gain Summary</h1>
              <div style={{ display: "flex", flexDirection: "row", justifyContent:'center' }}>
                <div className="ph1 grow br1">
                  {/* <span className="f7 b gray">{"Last Week - " + weekexp}</span> */}
                  <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"Experience gained last 7 days: " + weekexp}</span>}>  
                    <img src={sevendays} alt="weekexp" width="30px" height="30px"/>
                  </Tooltip>
                </div>
                <div className="ph1 grow">
                {/* <span className="f7 b gray">{"Last 15 days - " + halfmonthexp}</span>   */}
                  <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"Experience gained last 15 days: " + halfmonthexp}</span>}>  
                    <img src={fifteendays} alt="15daysexp" width="30px" height="30px"/>
                  </Tooltip>
                </div>
                <div className="ph1 grow">
                {/* <span className="f7 b gray">{"Last Month - " + monthexp}</span>   */}
                  <Tooltip enterTouchDelay="50" title={<span style={{ fontSize: "0.7rem" }}>{"Experience gained last 30 days: " + monthexp}</span>}>  
                    <img src={thirtydays} alt="30daysexp" width="30px" height="30px"/>
                  </Tooltip>
                </div> 
              </div>

              <h1 className='f5 gray'>Vocation: {charinfo.vocation}</h1>              
              <h1 className='f5 gray'>Server: <a href={"https://medivia.online/community/online/"+charinfo.server} target="_blank" rel="noopener noreferrer">{charinfo.server}</a></h1>
              <h1 className='f5 gray'>Level: {charinfo.level}</h1>             
            </div>
          ))}

        {/* Account Status check */}

        {charinfo.filter(charinfo => charinfo.vocation.includes('High Mage')).map(filteredTasks => (
          <h4 className='gold'>Premium Account</h4>
        ))}
        
        {charinfo.filter(charinfo => charinfo.vocation.includes('Royal Archer')).map(filteredTasks => (
          <h4 className='gold'>Premium Account</h4>
        ))}

        {charinfo.filter(charinfo => charinfo.vocation.includes('Guardian Druid')).map(filteredTasks => (
          <h4 className='gold'>Premium Account</h4>
        ))}

        {charinfo.filter(charinfo => charinfo.vocation.includes('Imperial Knight')).map(filteredTasks => (
          <h4 className='gold'>Premium Account</h4>
        ))}

        {/* End of Account Status check */}

        {charinfo.filter(charinfo => charinfo.online.includes('true')).map(filteredTasks => (
          <h4 className='dark-green'>Online</h4>
        ))}
        {charinfo.filter(charinfo => charinfo.online.includes('false')).map(filteredTasks => (
          <h4 className='dark-red'>Offline</h4>
        ))} 
        
      </div>

      <div className="pa3">
        
        <hr class="hr1"></hr><h3 className="gray fw6 center ma0">Access Summary</h3>
      
      </div>

  </div>

  ) 
}

  else {
    return (
      <div>
        <h1 className='red fw6 f1 ma3'>404</h1>
        <h2 className='red ma0'>Could not fetch a profile for this character.</h2>
        <h5 className='gray'>Dranus probably ate the character you tried to search for.</h5>
        <img src={dranus} alt="404" width="100px" heigh="109px"/>
      </div>
    )
  }
}



export default CharData;