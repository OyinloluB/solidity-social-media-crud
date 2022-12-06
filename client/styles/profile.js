import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Inter', sans-serif;
  background: rgba(0, 0, 0, 0.03);
`

export const ProfileWrapper = styled.div`
  background: #ffffff;
  border-radius: 24px;
  width: 720px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 25px;
`

export const Backdrop = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100%;
  height: 162px;
  background: #00000013;
  border-radius: 8px 8px 0px 0px;
`

export const ProfileImageWrapper = styled.div`
  position: absolute;
  width: 160px;
  height: 160px;
  background: #ffffff;
  border: 8px solid #ffffff;
  border-radius: 100%;
  top: 50%;
`

export const ProfileImage = styled.div`
  width: 144px;
  height: 144px;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 100%;
`

