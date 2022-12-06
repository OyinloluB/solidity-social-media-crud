import React from 'react'
import {
  Container,
  ProfileWrapper,
  Backdrop,
  ProfileImage,
  ProfileImageWrapper,
} from '../styles/profile'

const Profile = () => {
  return (
    <Container>
      <ProfileWrapper>
        <Backdrop>
          <ProfileImageWrapper>
            <ProfileImage></ProfileImage>
          </ProfileImageWrapper>
        </Backdrop>
        <Form>
          <InputWrapper>
            <InputLabel></InputLabel>
            <InputDescription></InputDescription>
          </InputWrapper>
        </Form>
      </ProfileWrapper>
    </Container>
  )
}

export default Profile
