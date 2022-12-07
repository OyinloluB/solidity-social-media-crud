import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 2;
  background-color: #ffffff;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-end;
`
export const ActionButton = styled.button`
  width: 150px;
  height: 48px;
  text-transform: capitalize;
  background: ${(props) =>
    props.type === 'primary' ? '#007AFF' : '#007AFF26'};
  color: ${(props) => (props.type === 'primary' ? '#ffffff' : '#007AFF')};
  border-radius: 8px;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  border: none;
  cursor: pointer;
`
