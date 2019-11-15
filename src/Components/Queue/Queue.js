//Dependencies
import React from 'react';

function numberInQueue() {
  let data = [1,2,3,4,5];
  let number = <h6>{data.length} people in the queue now</h6>;
  let peopleSprites = data.map(item => {
    return <li key={item} className={`personSprite ${item===1 ? 'nextInLine' : ''}`}>
      <img src="#" alt="person waiting"></img>
    </li>
  });
  return `${number} ${peopleSprites}`
}

function checkIfInQueue() {
  let inQueueText = <div><h6>You are not in the queue!</h6><h6 className="joinQueueSmall">Join!</h6></div>
  let inQueueCheck = window.localStorage.get('inQueue');
  if (inQueueCheck) {
    inQueueText = <div><h6>You are number {inQueueCheck} in queue!</h6></div>
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