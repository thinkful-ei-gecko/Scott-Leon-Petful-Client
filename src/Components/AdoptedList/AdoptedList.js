//Dependencies
import React from 'react';

//Components
import AdoptedItem from './AdoptedItem/AdoptedItem';

function displayAdoptedItems() {
  let adoptedItem = {petName: 'Maria', ownerName: 'Jenny', date: 'Nov 11', time: '8:45PM', petType: 'dog'};
  let returnItem = [1,2,3].map(item => {
    return <AdoptedItem {...adoptedItem} key={item} />
  })
  return returnItem;

}

function AdoptedList() {
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