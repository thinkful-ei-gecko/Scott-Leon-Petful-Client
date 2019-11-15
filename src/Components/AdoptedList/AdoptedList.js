//Dependencies
import React from 'react';

//Components
import AdoptedItem from './AdoptedItem/AdoptedItem';

function displayAdoptedItems() {
  let adoptedItem = {petName: 'Maria', ownerName: 'Jenny', date: 'Nov 11', time: '8:45PM'};
  [1,2,3].forEach(item => {
    return <AdoptedItem props={adoptedItem} key={item} />
  })

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