import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  Container,
  ProfileWrapper,
  Backdrop,
  ProfileImage,
  ProfileImageWrapper,
  AccountAddress,
  Form,
  ButtonWrapper,
} from '../../styles/profile'
import { formatAddress } from '../../utils/addressFormatter'
import InputField from '../components/input-fields'
import Button from '../core/buttons'

const Profile = () => {
  const router = useRouter()
  const address = router.query.address
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')

  const handleSaveProfile = (e) => {
    e.preventDefault()
    // TO-DO: Store profile to ipfs
  }

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
          <InputField
            label="Name"
            option="Required"
            optionType="primary"
            description="What do you want to be known as? This can be either you personally, or
          the name of a project you’re looking to create."
            field="name"
          />
          <InputField
            label="Bio"
            option="Optional"
            description="A brief summary of who you are. Accepts basic markdown."
            field="bio"
          />
          <ButtonWrapper>
            <Button
              text="Save Profile"
              buttonType="primary"
              buttonSize="sm"
              onClick={(e) => handleSaveProfile(e)}
            />
          </ButtonWrapper>
        </Form>
      </ProfileWrapper>
    </Container>
  )
}

export default Profile
