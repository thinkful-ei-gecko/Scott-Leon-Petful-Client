//Dependencies
import React from 'react';

//Components
import PetItem from './PetItem/PetItem'
import BigButton from '../BigButton/BigButton';

function showPetList() {
  
  let data = [{petType: 'Cat', petName: 'fluffy', petImage: "#", petImageAlt: 'A cute cat', gender: 'girl', age: 2, breed: 'bengal', story: 'She was thrown on the streets'},
              {petType: 'Dog', petName: 'Mr. Barker III', petImage: '#', petImageAlt: 'A cute boy', gender: 'boy', age: 4, breed: 'golden', story: 'He filed his taxes wrong, got thrown in jail, and now has no home'}];
  let returnData = data.map((pet,index) => {
    return <PetItem {...pet} key={index} />
  });
  return returnData;
}

function PetList() {
  return (
    <section className="petList">
      <h1>Petful</h1>
      <h2>Current Pets</h2>
      {showPetList()}
      <div className="yellowDivider"></div>
      <div className="adoptBoth">
        <h4>or</h4>
        <BigButton text='adopt both' classNames='adopt' />
      </div>
    </section>
  );

}

export default PetList;