import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Container,
  ProfileWrapper,
  Backdrop,
  ProfileImage,
  ProfileImageWrapper,
  AccountAddress,
  Form,
  InputWrapper,
  InputTextContent,
  InputLabel,
  InputDescription,
  Required,
  Input,
  ButtonWrapper,
  ActionButton,
} from '../styles/profile'
import { formatAddress } from '../utils/addressFormatter'

const Profile = () => {
  const router = useRouter()
  const address = router.query.address

  return (
    <Container>
      <ProfileWrapper>
        <Backdrop>
          <ProfileImageWrapper>
            <ProfileImage></ProfileImage>
          </ProfileImageWrapper>
        </Backdrop>
        <AccountAddress>{formatAddress(address)}</AccountAddress>
        <Form>
          <InputWrapper>
            <InputTextContent>
              <InputLabel>
                Name <Required type="primary">Required</Required>
              </InputLabel>
              <InputDescription>
                What do you want to be known as? This can be either you
                personally, or the name of a project you’re looking to create.
              </InputDescription>
            </InputTextContent>
            <Input />
          </InputWrapper>
          <InputWrapper>
            <InputTextContent>
              <InputLabel>
                Bio <Required>Required</Required>
              </InputLabel>
              <InputDescription>
                A brief summary of who you are. Accepts basic markdown.
              </InputDescription>
            </InputTextContent>
            <Input />
          </InputWrapper>
          {/* TO-DO: Move button to seperate component */}
          <ButtonWrapper>
            <ActionButton type="primary">Save Settings</ActionButton>
          </ButtonWrapper>
        </Form>
      </ProfileWrapper>
    </Container>
  )
}

export default Profile
