//Dependencies
import React from 'react';

//Components
import BigButton from '../../BigButton/BigButton';

function PetItem(props) {
  return(
    <article className="petItem">
      <img src={props.petImage} alt={props.petImageAlt} />
      <ul>
        <li>{props.petName}</li>
        <li>{props.petType}</li>
        <li>{props.gender}</li>
        <li>{props.age} years old</li>
        <li>{props.breed}</li>
      </ul>
      <div className="clear description">{props.story}</div>
      <BigButton text='adopt me!' classNames='adopt' />
    </article>

  );
}

export default PetItem;
