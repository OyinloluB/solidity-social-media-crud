import styled from 'styled-components'

export const ActionButton = styled.button`
  width: ${(props) => (props.buttonSize === 'sm' ? '130px' : '100%')};
  height: 48px;
  text-transform: capitalize;
  background: ${(props) =>
    props.buttonType === 'primary' ? '#007AFF' : '#007AFF26'};
  color: ${(props) => (props.buttonType === 'primary' ? '#ffffff' : '#007AFF')};
  border-radius: 8px;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  border: none;
  cursor: pointer;
`
