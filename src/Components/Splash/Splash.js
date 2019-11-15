//Dependencies
import React from 'react';

//Components
import JoinForm from './JoinForm/JoinForm';
import BigButton from '../BigButton/BigButton';


function Splash() {
  return(
    <section className="main splash">
      <h1>Petful</h1>
      <h3>At Petful, we believe every pet deserves a home</h3>
      <div class="splashImage">
        <img src="#" alt="A woman greets her new pet" />
      </div>
      <p className="petfulDescription">We match pets and people on a first-in first-out basis. Put your name
        in the queue, and when it's your turn, come back and choose whether you want the next available dog,
        cat, or both!</p>

    <JoinForm />
    <h4>or</h4>
    <BigButton classNames='viewPets' text='view pets' />
    </section>
  );
}

export default Splash;