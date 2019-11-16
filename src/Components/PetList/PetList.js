//Dependencies
import React from 'react';
import {Link} from 'react-router-dom'

//Components
import PetItem from './PetItem/PetItem'
import BigButton from '../BigButton/BigButton';
import config from '../../config';



class PetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showPetList = () => {
    let returnDog = <PetItem {...this.props.dog} key='dog' />
    let returnCat = <PetItem {...this.props.cat} key='cat' />
    return [returnDog, returnCat]
  }

  render() {
    return (
      <main className="main petList">
        <Link to="/"><h1>Petful</h1></Link>
        <div className="yellowDivider"></div>
        <h2>Current Pets</h2>
        {this.showPetList()}
        <div className="yellowDivider"></div>
        <div className="adoptBoth">
          <h4>or</h4>
          <BigButton text='adopt both' classNames='adopt' />
        </div>
      </main>
    );
  }
}

export default PetList;