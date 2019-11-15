//Dependencies
import React from 'react';

//Components
import BigButton from '../../BigButton/BigButton';

function PetItem(props) {
  return(
    <article className="petItem">
      <img src={props.imageURL} alt={props.imageDesc} />
      <ul>
        <li>{props.name}</li>
        <li>{props.breed}</li>
        <li>{props.sex}</li>
        <li>{props.age} years old</li>
      </ul>
      <div className="clear description">{props.story}</div>
      <BigButton text='adopt me!' classNames='adopt' />
    </article>

  );
}

export default PetItem;
