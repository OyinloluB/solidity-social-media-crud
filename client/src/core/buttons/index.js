import React from 'react'
import { ActionButton } from '../../../styles/button'

const Button = ({ text, buttonType, buttonSize, handleClick }) => {
  return (
    <ActionButton buttonType={buttonType} buttonSize={buttonSize} onClick={handleClick}>
      {text}
    </ActionButton>
  )
}

export default Button;
