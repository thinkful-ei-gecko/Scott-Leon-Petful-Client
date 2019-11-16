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
        <li>{props.animalType}</li>
        <li>{props.sex}</li>
        <li>{props.age} years old</li>
        <li>{props.breed}</li>
      </ul>
      <div className="clear description">{props.story}</div>
      <BigButton type="button" text='adopt me!' classNames={`adopt ${props.choiceTime ? '' : 'grayed' }`} onClick={(e) => {
        e.preventDefault();
        props.adoptTime(props.animalType)}
      }/>
    </article>

  );
}

export default PetItem;
