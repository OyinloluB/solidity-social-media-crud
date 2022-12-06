import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Inter', sans-serif;
`

export const ConnectWalletWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  width: 384px;
  height: 265px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 20px;
`

export const Heading = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  letter-spacing: -0.6px;
  margin: 0px;
`

export const SubText = styled.p`
  width: 300px;
  font-style: normal;
  font-weight: 200;
  font-size: 15px;
  line-height: 22px;
  margin: 0px;
  text-align: center;
  letter-spacing: -0.064px;
  color: rgba(0, 0, 0, 0.6);
`

export const ActionButton = styled.button`
  width: 100%;
  text-transform: capitalize;
  background: ${(props) =>
    props.type === 'primary' ? '#007AFF' : '#007AFF26'};
  color: ${(props) => (props.type === 'primary' ? '#ffffff' : '#007AFF')};
  border-radius: 8px;
  height: 48px;
  border: none;
  cursor: pointer;
`
