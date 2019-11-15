//Dependencies
import React from 'react';

//Components
import AdoptedItem from './AdoptedItem/AdoptedItem';





function AdoptedList(props) {

  function displayAdoptedItems() {
    let returnItem = props.adoptionList.map((item, index) => {
      return <AdoptedItem petName={item.petName} ownerName={item.ownerName} petType={item.petType} key={index} />
    })
    return returnItem;
  }

  return(
    <section className="adoptedList">
      <h4>Successful Adoptions</h4>
      <ul>
        {displayAdoptedItems()}
      </ul>
    </section>
  );
}

export default AdoptedList;