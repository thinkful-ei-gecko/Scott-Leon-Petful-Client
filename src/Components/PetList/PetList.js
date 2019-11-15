//Dependencies
import React from 'react';

//Components
import PetItem from './PetItem/PetItem'
import BigButton from '../BigButton/BigButton';

function showPetList() {
  let data = [{petType: 'Cat', petName: 'fluffy', gender: 'girl', age: 2, breed: 'bengal', story: 'She was thrown on the streets'},
              {petType: 'Dog', petName: 'Mr. Barker III', gender: 'boy', age: 4, breed: 'golden', story: 'He filed his taxes wrong, got thrown in jail, and now has no home'}];
  data.forEach((pet,index) => {
    return <PetItem pet={pet} key="index" />
  })
}

function PetList() {
  return (
    <section className="petList">
      <h1>Petful</h1>
      <h2>Current Pets</h2>
      {showPetList()}
      <BigButton text='adopt me!' classNames='adopt' />
    </section>
  );

}

export default PetList;