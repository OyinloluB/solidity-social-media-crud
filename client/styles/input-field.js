import styled from 'styled-components'

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 5%;
`

export const InputTextContent = styled.div`
  width: 595px;
`

export const InputLabel = styled.label`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  display: flex;
  align-items: center;
  letter-spacing: -0.48px;
  color: #000000;
`

export const Required = styled.span`
  height: 24px;
  padding: 0px 10px;
  background: ${(props) =>
    props.type === 'primary'
      ? 'rgba(0, 122, 255, 0.075)'
      : 'rgba(0, 0, 0, 0.03)'};
  border-radius: 9999px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  letter-spacing: -0.064px;
  color: ${(props) =>
    props.type === 'primary' ? '#007aff' : 'rgba(0, 0, 0, 0.4)'};
  margin-left: 10px;
`

export const InputDescription = styled.p`
  font-style: normal;
  font-weight: 200;
  font-size: 15px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: -0.064px;
  color: rgba(0, 0, 0, 0.6);
`

export const Input = styled.input`
  height: 48px;
  width: 100%;
  left: 0%;
  right: 0%;
  top: 95px;
  background: #ffffff;
  color: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.075);
  border-radius: 8px;
  padding: 0px 10px;

  &:focus {
    outline: none;
  }
`
