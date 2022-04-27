import React, {Component} from 'react';
import './App.css';
import 'tachyons';
import Logo from './components/Logo/logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
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

class App extends Component {

  constructor () {
    super();
    this.state = {
      input: 'nullcharactername',
      error: null,
      isLoading: false,
      result: [],
      route: 'home',
      isSignedIn: false,
      isFetched: false,
      charinfo: [],
      tasks: [],
      levelhistory: [],
      playerdeaths: [],
      playerfrags: []
      
    }
  }

searchAgain = () => {
  this.setState({route:'home', input: 'nullcharactername'})
};
  
// Login routing code (disabled for now)
// onRouteChange = (route) => {
//   if ( route === 'signout') {
//     this.setState({isSignedIn: false})
//   } else if (route === 'home') {
//     this.setState({isSignedIn: true})
//   }
//   this.setState({route: route});
// }

onInputChange = (event) => {
  this.setState({input: event.target.value});
}

handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        this.onButtonSubmit()
    }
};

onButtonSubmit = async () => {
  this.setState ({isLoading: true})
  await axios.post ('https://stormy-basin-76709.herokuapp.com/charname', this.state.input, {
    headers: {
      "Content-Type": "text/plain"
    }})
    .then (response =>{console.log(response)})

  await fetch('https://stormy-basin-76709.herokuapp.com/chardata')
    .then(res => res.json())
    .then(
      result => {
        this.setState({
          isLoading: false,
          charinfo: result.base_info,
          tasks: result.playertasks,
          levelhistory: result.playerlevelhistory,
          playerdeaths: result.playerdeaths,
          playerfrags: result.playerfrags,      
          route: 'fetched'
        });
      },
      error => {
        this.setState({
          error: error
        });
      }
    );  
}


render() {
    return (
      <div className="App">
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
          <Logo onRouteChange={this.onRouteChange}/>         
        </div>
        { 
          (this.state.isLoading === true)
          ? <div className="flex center pa4">
            <Box>
            <CircularProgress color="inherit"/>
            <h2 className="gray fw5">Fetching character profile...</h2>
            </Box >
            </div>
          :this.state.route === 'home' 
          ? <div className="pa4">
            <div className="ba shadow-2 gray pa2">
            <h2 className="gray">What is Medivia Analyzer?</h2>
            <h2 className='gray fw1 pa1 gray'>Medivia Analyzer is a tool that shows you useful information about characters from the MMORPG <a href="https://medivia.online" target="_blank" rel="noopener noreferrer">Medivia Online</a>. Follow the instructions below and try it out!</h2>
            </div>
            <ImageLinkForm 
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
            handleKeyPress={this.handleKeyPress}
            />
            </div>          
          : (this.state.route === 'fetched'
          ? <div className='pa2 br3 vh-20'>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center', flexWrap: 'wrap'}}>
                <div className="pa4">
                  <ReturnButton searchAgain={this.searchAgain}/>
                </div>  
              </div>
              <hr/>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center', flexWrap: 'wrap',}}>
                <div className="ph2 pa2">
                  <DeathsModal playerdeaths={this.state.playerdeaths} charinfo={this.state.charinfo}/>
                </div>
                <div className="ph2 pa2">
                  <FragsModal playerfrags={this.state.playerfrags} charinfo={this.state.charinfo}/>
                </div>  
                <div className="ph2 pa2">  
                  <LevelHistoryChartModal levelhistory={this.state.levelhistory}/>
                </div> 
                <div className="ph2 pa2">  
                  <FactionProgress tasks={this.state.tasks}/>
                </div>
                <div className="ph2 pa2">
                  <FactionTasksList tasks={this.state.tasks}/>
                </div>
                <div className="ph2 pa2">  
                  <ActivityScanner tasks={this.state.tasks}/>
                </div>
              </div>
              <div>
            <div style={{marginTop: '20px', display: "flex", flexDirection: "row", justifyContent: 'center', flexWrap: 'wrap'}}>
            <WarCharacter playerfrags={this.state.playerfrags} />                          
            <CharLevelsDiff levelhistory={this.state.levelhistory} />
            <Sheolcheck tasks={this.state.tasks} />
            </div>
            <CharData charinfo={this.state.charinfo} levelhistory={this.state.levelhistory} isLoaded={this.state.isLoaded}/>                      
            <Sheolbadges tasks={this.state.tasks}/>
            <TaskBadges tasks={this.state.tasks}/> 
            </div>  
            </div>          
          : (
              this.state.route === 'signin' 
              ? <Signin onRouteChange={this.onRouteChange}/>
              : <Register onRouteChange={this.onRouteChange}/>
            )
          )  
          }
          
        </div>
      );
  }
}

export default App;
