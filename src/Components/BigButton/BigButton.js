import React from 'react'

export const BigButton = (props) => {
  return (
    <button type="submit" className={`bigButton ${props.classNames}`}>{props.text}</button>
  )
}

export default BigButton;