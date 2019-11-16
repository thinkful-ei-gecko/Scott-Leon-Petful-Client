//Dependencies
import React from 'react';
import {Link} from 'react-router-dom'

class Queue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberInQueue: '',
      positionInQueue: '',
      people: []
    }
  }

  numberInQueue = () => {
    let people = this.state.people || [];
    console.log(people);
    let number = <h6 className="bold" key={Math.random()}>{this.state.numberInQueue} people in the queue now</h6>;
    let peopleSprites = people.map((item,index) => {
      return <li key={index} className={`personSprite ${item===1 ? 'nextInLine' : ''}`}>
        <img src="personSprite.png" alt="person waiting"></img>
      </li>
    });
    return [number,peopleSprites];
  }
  
  checkIfInQueue = () => {
    let people = this.state.people || [];
    let inQueueText = <div><h6>You are not in the queue!</h6><Link to="/"><h6 className="bold joinSmall">Join!</h6></Link></div>
    let inQueueCheck = window.localStorage.getItem('inQueue');
    let indexOf = '';
    if (inQueueCheck) {
      let find = people.find(person => person.auto === false);
      indexOf = people.indexOf(find);
      inQueueText = <div><h6 className="bold">You are number {indexOf + 1} in queue!</h6></div>
    }
    return inQueueText;
  }

  componentWillMount() {
    this.setState({numberInQueue: this.props.people.length, people: this.props.people })
  }

  render() {
    return(
      <section className="personQueueList">
        {this.numberInQueue()}
        {this.checkIfInQueue()}
      </section>

    );
  }
}

export default Queue;