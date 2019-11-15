//Dependencies
import React from 'react';
import {Route} from 'react-router-dom';

//Components
import Queue from './Components/Queue/Queue';
import Splash from './Components/Splash/Splash';
import PetList from './Components/PetList/PetList';
import JoinForm from './Components/Splash/JoinForm';
import AdoptedList from './Components/AdoptedList/AdoptedList';

//CSS
import './App.css';



function App() {
  return (
    <div className="App">
      <Queue />
      <Route exact path="/" component={Splash} />
      <Route path = "/pets" component={PetList} />
      <JoinForm />
      <AdoptedList />
    </div>
  );
}

export default App;
