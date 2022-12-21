import React from 'react'
import {
  InputWrapper,
  InputTextContent,
  InputLabel,
  InputDescription,
  Required,
  Input,
} from '../../../styles/input-field'

const InputField = ({ label, option, optionType, description, field }) => {
  return (
    <InputWrapper>
      <InputTextContent>
        <InputLabel htmlFor={field}>
          {label} <Required type={optionType}>{option}</Required>
        </InputLabel>
        <InputDescription>{description}</InputDescription>
      </InputTextContent>
      <Input id={field} />
    </InputWrapper>
  )
}

export default InputField
