import React, {useState} from 'react';
import './App.css';
import 'tachyons';
import Logo from './components/Logo/logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
// import Signin from './components/Signin/Signin';
// import Register from './components/Register/Register';
// import Navigation from './components/Navigation/Navigation';
import CharData from './components/CharacterCard/CharData';
import DeathsModal from './components/CharacterCard/DeathsModal';
import FragsModal from './components/CharacterCard/FragsModal';
import LevelHistoryChartModal from './components/CharacterCard/LevelHistoryChartModal';
import CharLevelsDiff from './components/CharacterCard/CharLevelsDiff';
import TaskBadges from './components/CharacterCard/TaskBadges';
import FactionProgress from './components/CharacterCard/FactionProgressModal';
import Sheolcheck from './components/CharacterCard/Sheolcheck'
import ReturnButton from './ReturnButton';
import KoFi from './components/kofi/KoFi'
import WarCharacter from './components/CharacterCard/WarCharacter';
import Sheolbadges from './components/CharacterCard/Sheolbadges';
import ActivityScanner from './components/CharacterCard/ActivityScanner';
import FactionTasksList from './components/CharacterCard/FactionTasksListModal';
import axios from 'axios';
import ReactGA from "react-ga4";

ReactGA.initialize("G-2JW2QBX4D4");
ReactGA.send("pageview");

export default function App () {

  const [forminput, setInput] = useState("nullcharactername")
  const [loading, isLoading] = useState(false)
  const [route, setRoute] = useState('home')
  const [charinfo, setCharInfo] = useState([])
  const [tasks, setTasks] = useState([])
  const [levelhistory, setLevelHistory] = useState([])
  const [playerdeaths, setPlayerDeaths] = useState([])
  const [playerfrags, setPlayerFrags] = useState([])

  const searchAgain = () => {
    setRoute('home')
    setInput("nullcharactername")
  };
  
// Login routing code (disabled for now, also needs refactoring to use hooks, easy peasy)
// const onRouteChange = (route) => {
//   if ( route === 'signout') {
//     this.setState({isSignedIn: false})
//   } else if (route === 'home') {
//     this.setState({isSignedIn: true})
//   }
//   this.setState({route: route});
// }

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
          onButtonSubmit()
      }
  };

  const onButtonSubmit = async () => {
    isLoading(true)
    await axios.post ('https://stormy-basin-76709.herokuapp.com/charname', forminput, {
      headers: {
        "Content-Type": "text/plain"
      }})
      .then (response =>{console.log(response)})

    await fetch('https://stormy-basin-76709.herokuapp.com/chardata')
      .then(res => res.json())
      .then(
        result => {
          isLoading(false)
          setCharInfo(result.base_info)
          setTasks(result.playertasks)
          setLevelHistory(result.playerlevelhistory)
          setPlayerDeaths(result.playerdeaths)
          setPlayerFrags(result.playerfrags)
          setRoute('fetched')
          },
        error => {
          // setError(true)
        })
        };

      return (
        <div className="App">
          {/* Legacy Login routing code, might work on it in the future  */}
          {/* <Navigation isSignedIn ={(this.state.isSignedIn)} onRouteChange={this.onRouteChange} isLoaded={this.state.isLoaded}/> */}
          <div className="gray fw1 f6 ma2">
            <div className="f7">
              <header>Powered by <a href="https://mediviastats.info" target="_blank" rel="noopener noreferrer">MediviaStats</a>
              </header>
            </div>
            <header>
              Developed by Otávio C.
            </header>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'flex-end', flexWrap: 'wrap', padding: '1rem'}}>
                <KoFi color="#383838" id="U7U569OIA" label="Donate if you like the app!" />
            </div>
          </div>
          <div className="pa4">      
            <Logo/>         
          </div>
          { 
            (loading === true)
            ? <div className="flex center pa4">
              <Box>
              <CircularProgress color="inherit"/>
              <h2 className="gray fw5">Fetching character profile...</h2>
              </Box >
              </div>
            : route === 'home' 
            ? <div className="pa4">
              <div className="ba shadow-2 gray pa2">
              <h2 className="gray">What is Medivia Analyzer?</h2>
              <h2 className='gray fw1 pa1 gray'>Medivia Analyzer is a tool that shows you useful information about characters from the MMORPG <a href="https://medivia.online" target="_blank" rel="noopener noreferrer">Medivia Online</a>. Follow the instructions below and try it out!</h2>
              </div>
              <ImageLinkForm 
              onInputChange={onInputChange}
              onButtonSubmit={onButtonSubmit}
              handleKeyPress={handleKeyPress}
              />
              </div>          
            : (route === 'fetched'
            ? <div className='pa2 br3 vh-20'>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center', flexWrap: 'wrap'}}>
                  <div className="pa4">
                    <ReturnButton searchAgain={searchAgain}/>
                  </div>  
                </div>
                <hr/>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center', flexWrap: 'wrap',}}>
                  <div className="ph2 pa2">
                    <DeathsModal playerdeaths={playerdeaths} charinfo={charinfo}/>
                  </div>
                  <div className="ph2 pa2">
                    <FragsModal playerfrags={playerfrags} charinfo={charinfo}/>
                  </div>  
                  <div className="ph2 pa2">  
                    <LevelHistoryChartModal levelhistory={levelhistory}/>
                  </div> 
                  <div className="ph2 pa2">  
                    <FactionProgress tasks={tasks}/>
                  </div>
                  <div className="ph2 pa2">
                    <FactionTasksList tasks={tasks}/>
                  </div>
                  <div className="ph2 pa2">  
                    <ActivityScanner tasks={tasks}/>
                  </div>
                </div>
                <div>
              <div style={{marginTop: '20px', display: "flex", flexDirection: "row", justifyContent: 'center', flexWrap: 'wrap'}}>
              <WarCharacter playerfrags={playerfrags}/>                          
              <CharLevelsDiff levelhistory={levelhistory}/>
              <Sheolcheck tasks={tasks}/>
              </div>
              <CharData charinfo={charinfo} levelhistory={levelhistory}/>                      
              <Sheolbadges tasks={tasks}/>
              <TaskBadges tasks={tasks}/> 
              </div>  
              </div>          
            : (
                route === 'signin' 
                // Login routing, disabled for now
                // ? <Signin onRouteChange={onRouteChange}/>
                // : <Register onRouteChange={onRouteChange}/>
              )
            )  
            }
            
          </div>
        );
}

