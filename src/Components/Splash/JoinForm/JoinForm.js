//Dependencies
import React from 'react';

//Components
import BigButton from '../../BigButton/BigButton'

function JoinForm() {
  return(
    <form id="join" className="join" name="join">
      <label htmlFor="inputName" className="joinLabel">Your name:</label>
      <input type="text" name="inputName" id="inputName" className="inputName" />
      <BigButton classNames='submit' text='join queue' />
    </form>
  );
}

export default JoinForm;