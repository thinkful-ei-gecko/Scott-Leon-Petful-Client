//Dependencies
import React from 'react';
import {Route} from 'react-router-dom';

//Components
import Queue from './Components/Queue/Queue';
import Splash from './Components/Splash/Splash';
import PetList from './Components/PetList/PetList';
import AdoptedList from './Components/AdoptedList/AdoptedList';
import config from './config';

//CSS
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: '',
      cat: '',
      people: '',
      auto: true,
      choiceTime: false,
      adoptionList: [{petName: 'bob', ownerName: 'also bob', petType: 'dog'},
                     {petName: 'steve', ownerName: 'bilbo', petType: 'cat'}],
    }
  }

  cycleNext = () => {
    let person = {};
    let cat = {};
    let dog = {};
    let both = {};
    return fetch(`${config.API_ENDPOINT}people/next`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      console.log(res);
      if (!res.ok) {
        throw new Error('please refresh');
      }
    return res.json();
    })
    .then(resJson => {
      person = resJson;
      if (person.wants === 'cat' || person.wants === 'both') {
      fetch(`${config.API_ENDPOINT}cat`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(res => {
        console.log(res);
        if (!res.ok) {
          throw new Error('please refresh');
        }
      return res.json();
      })
      .then(resJson => {
        cat = resJson
      })
    }

    if (person.wants === 'dog'  || person.wants === 'both') {
      fetch(`${config.API_ENDPOINT}dog`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          }
        })
        .then(res => {
          console.log(res);
          if (!res.ok) {
            throw new Error('please refresh');
          }
        return res.json();
        })
        .then(resJson => {
          dog = resJson
        })
      }
    })
    .then(() => {
      //set recently adopted with dog and cat and person ()
      //call getPets()
    })
    .catch(error => console.error('there has been an error'));

  }

  attemptProcess = () => {
    if (this.state.auto) {
      this.cycleNext();
    }
    else {
      let check = window.localStorage.getItem('inQueue')
      if (check) {
        //it's time to adopt
        //show message on screen saying 'it's your turn to choose your animal'
        //redirect to /pets page
        //timer is halted until this action is completed
        //once the choice is made, process person /next delete
      }
    }
  }

  getNextPerson = () => {
    return fetch(`${config.API_ENDPOINT}people/next`)
      .then(res => {
        console.log(res);
        if (!res.ok) {
          throw new Error('please refresh');
        }
      return res.json();
      })
      .then(resJson => {
        if (resJson.auto === false) {
          this.setState({auto: false}, this.attemptProcess());
        }
        this.attemptProcess();
      })
      .catch(error => console.error('error in people'));
  }

  getPets = () => {
    if (!this.state.dog || !this.state.cat) {
    let data = {}
    fetch(`${config.API_ENDPOINT}dog`)
      .then(res => {
        console.log(res);
        if (!res.ok) {
          throw new Error('please refresh');
        }
      return res.json();
      })
      .then(resJson => {
        data.dog = resJson
        console.log(data);
      })
      .then(() => {
        return fetch(`${config.API_ENDPOINT}cat`)
        .then(res => {
          if (!res.ok) {
            throw new Error('please refresh');
          }
          return res.json();
        })
        .then(resJson => {
          data.cat = resJson;
          console.log(data);
        })
      })
      .then(() => this.setState({dog: data.dog, cat: data.cat}))
      .catch(error => console.error('refresh please'));
      }
    }

  render() {
  this.getPets();
  let auto = setTimeout(() => this.getNextPerson(), 10000);
    return (
      <div className="App">
        <Queue people={this.state.people}/>
        <Route exact path="/" component={Splash} />
        <Route path = "/pets" render={() =>
          <PetList dog={this.state.dog} cat={this.state.cat} />} />
        <AdoptedList adoptionList={this.state.adoptionList} />
      </div>
    );
  }
}

export default App;
