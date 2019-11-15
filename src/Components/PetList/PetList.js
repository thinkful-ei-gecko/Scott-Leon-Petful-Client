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
    this.getPets();
    let returnDog = <PetItem {...this.state.dog} key='dog' />
    let returnCat = <PetItem {...this.state.cat} key='cat' />
    return [returnDog, returnCat]
  }
  

  getPets = () => {
    if (!this.state.dog) {
    let data = {}
    fetch(`${config.API_ENDPOINT}dog`)
      .then(res => {
        console.log(res);
        if (!res.ok) {
          throw new Error('please refresh');
        }
      return res.json();
      })
      .then(resJson => {
        data.dog = resJson
        console.log(data);
      })
      .then(() => {
        return fetch(`${config.API_ENDPOINT}cat`)
        .then(res => {
          if (!res.ok) {
            throw new Error('please refresh');
          }
        return res.json();
        })
        .then(resJson => {
          data.cat = resJson;
          console.log(data);
        })
      })
      .then(() => this.setState({dog: data.dog, cat: data.cat}))
      .catch(error => console.error('refresh please'));
      }
    }
  render() {
    let refresh = setTimeout(() => this.setState({dog: '', cat: ''}), 10000);
    return (
      <main className="main petList">
        <Link to="/"><h1>Petful</h1></Link>
        <div class="yellowDivider"></div>
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