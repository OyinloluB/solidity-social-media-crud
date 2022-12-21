import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
  background: rgba(0, 0, 0, 0.03);
  padding: 120px 50px 30px;
`

export const ProfileWrapper = styled.div`
  background: #ffffff;
  border-radius: 24px;
  width: 720px;
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 30px;
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
  cursor: pointer;
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
  cursor: pointer;
`

export const AccountAddress = styled.div`
  margin-top: 13%;
  width: 127.31px;
  height: 24px;
  background: rgba(0, 122, 255, 0.075);
  border-radius: 9999px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: -0.064px;
  color: #007aff;
`

export const Form = styled.form`
  margin-top: 5%;
  width: 100%;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`
