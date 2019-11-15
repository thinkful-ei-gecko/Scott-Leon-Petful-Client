//Dependencies
import React from 'react';

function checkSprite(type) {

}

function AdoptedItem(props) {
  return(
    <li className="adoptedItem">
      <div className="animalSprite">
        <img src={props.petType === 'dog' ? '../../../assets/dogsprite.png' : '/assets/catsprite.png' } alt={props.petType} />
      </div>
      <div className="backgroundRow">
        <div className="nameInfo">
          <span className="petName"><span className="bold">{props.petName}</span> was adopted!</span>
          <span className="ownerName">Thank you {props.ownerName}!!!</span>
        </div>
        <div className="timeAndDate">
          <span className="date">{props.date}</span>
          <span className="time">{props.time}</span>
        </div>
      </div>
    </li>

  );
}

export default AdoptedItem;