import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 3px #007aff solid;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  animation: ${spin} 2s linear infinite;
`
