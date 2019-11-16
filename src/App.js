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
      choiceTime: false
    }
  }

  addToQueue = (name) => {
    window.localStorage.setItem('inQueue', 'inQueue');
    fetch(`${config.API_ENDPOINT}people`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({name})
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('please refresh');
        }
      return res.json();
      })
      .then(() => {
        return fetch(`${config.API_ENDPOINT}people/all`, {
          method: 'GET',
          headers: {
            'content-type': 'application/json'
          }
        })
          .then(res => {
            if (!res.ok) {
              throw new Error('please refresh');
            }
          return res.json();
          })
          .then(resJson => this.setState({people: resJson}))
      })
      .catch(error => console.error('there has been an error'));

  }

  cycleNext = (person) => {
    person = person || {};
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
      if (!res.ok) {
        throw new Error('please refresh');
      }
    return res.json();
    })
    .then(resJson => {
      if (resJson.wants !== null) {
        person = resJson
      }
      if (person.wants === 'cat' || person.wants === 'both') {
      fetch(`${config.API_ENDPOINT}cat`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(res => {
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

  attemptProcess = (resJson) => {
    if (this.state.auto) {
      this.cycleNext();
    }
    else {
      let check = window.localStorage.getItem('inQueue')
      if (check) {
        if (this.state.choiceTime !== true) {
          this.setState({choiceTime: true});
          window.alert('Its time for you to adopt your animal!');
        }
        }
      }
    }

  getNextPerson = () => {
    return fetch(`${config.API_ENDPOINT}people/next`)
      .then(res => {
        if (!res.ok) {
          throw new Error('please refresh');
        }
      return res.json();
      })
      .then(resJson => {
        if (resJson.auto === false) {
          this.setState({auto: false}, this.attemptProcess(resJson));
        }
        this.attemptProcess();
      })
      .catch(error => console.error('error in people'));
  }

  getPeople = () => {
    if (!this.state.people || this.state.people === '') {
    fetch(`${config.API_ENDPOINT}people/all`)
      .then(res => {
        if (!res.ok) {
          throw new Error('please refresh');
        }
      return res.json();
      })
      .then(resJson => this.setState({people: resJson}))
      .catch(error => console.error('there has been a people error'));
    }
  };

  getPets = () => {
    if (!this.state.dog || !this.state.cat) {
    let data = {}
    fetch(`${config.API_ENDPOINT}dog`)
      .then(res => {
        if (!res.ok) {
          throw new Error('please refresh');
        }
      return res.json();
      })
      .then(resJson => {
        data.dog = resJson
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
        })
      })
      .then(() => {
        return fetch(`${config.API_ENDPOINT}people/all`)
        .then(res => {
          if (!res.ok) {
            throw new Error('please refresh');
          }
          return res.json();
        })
        .then(resJson => {
          data.people = resJson;
        })
      })
      .then(() => this.setState({dog: data.dog, cat: data.cat, people: data.people}))
      .catch(error => console.error('refresh please'));
      }
    }

  adoptTime = (adoptingType) => {
    console.log('button press');
    console.log(adoptingType);
    return fetch(`${config.API_ENDPOINT}people/next`)
      .then(res => {
        if (!res.ok) {
          throw new Error('please refresh');
        }
      return res.json();
      })
      .then(resJson => {
        if (window.localStorage.getItem('inQueue')) {
          if (adoptingType === 'cat') {
            resJson.wants = 'cat';
          }
          else if (adoptingType === 'dog') {
            resJson.wants = 'dog';
          }
          else if (adoptingType === 'both') {
            resJson.wants = 'both';
          }
          this.cycleNext(resJson)
        }
    })
  }

  render() {
  this.getPets();
  let auto = setTimeout(() => this.getNextPerson(), 5000);
    return (
      <div className="App">
        <Queue people={this.state.people}/>
        <Route exact path="/" render={() =>
          <Splash addToQueue={this.addToQueue} />} />
        <Route path="/pets" render={() =>
          <PetList dog={this.state.dog} cat={this.state.cat} choiceTime={this.state.choiceTime} adoptTime={this.adoptTime} />} />
        <AdoptedList />
      </div>
    );
  }
}

export default App;
