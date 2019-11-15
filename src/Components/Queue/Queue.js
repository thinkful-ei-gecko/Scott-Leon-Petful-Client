//Dependencies
import React from 'react';
import {Link} from 'react-router-dom'

function numberInQueue() {
  let data = [1,2,3,4,5];
  let number = <h6 class="bold">{data.length} people in the queue now</h6>;
  let peopleSprites = data.map(item => {
    return <li key={item} className={`personSprite ${item===1 ? 'nextInLine' : ''}`}>
      <img src="personSprite.png" alt="person waiting"></img>
    </li>
  });
  return [number,peopleSprites];
}

function checkIfInQueue() {
  let inQueueText = <div><h6>You are not in the queue!</h6><Link to="/"><h6 className="bold joinSmall">Join!</h6></Link></div>
  let inQueueCheck = window.localStorage.getItem('inQueue');
  if (inQueueCheck) {
    inQueueText = <div><h6 class="bold">You are number {inQueueCheck} in queue!</h6></div>
  }
  return inQueueText;
}

function Queue() {
  return(
    <section className="personQueueList">
      {numberInQueue()}
      {checkIfInQueue()}
    </section>

  );
}

export default Queue;