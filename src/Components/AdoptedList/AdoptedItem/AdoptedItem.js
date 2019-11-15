//Dependencies
import React from 'react';

function AdoptedItem(props) {
  return(
    <li className="adoptedItem">
      <div className="animalSprite">
        <img src="#" alt="a dog" />
      </div>
      <div className="nameInfo">
        <span className="petName">{props.petName} was adopted!</span>
        <span className="ownerName">Thank you {props.ownerName}!!!</span>
      </div>
      <div className="timeAndDate">
        <span className="date">{props.date}</span>
        <span className="time">{props.time}</span>
      </div>
    </li>

  );
}

export default AdoptedItem;