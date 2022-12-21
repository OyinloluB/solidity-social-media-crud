import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { create, CID, IPFSHTTPClient } from 'ipfs-http-client'
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
  let ipfs
  const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
  const projectSecret = process.env.NEXT_PUBLIC_PROJECT_SECRET
  const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64')
  const router = useRouter()
  const address = router.query.address
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')

  const IPFSClientConnect = () => {
    try {
      ipfs = create({
        host: 'infura-ipfs.io',
        port: 5001,
        protocol: 'https',
        headers: {
          authorization: auth,
        },
      })
    } catch (error) {
      console.error('IPFS error ', error)
      ipfs = undefined
    }
  }

  const addDataToIPFS = async (data) => {
    const result = await ipfs.add(data)
    console.log(result)
  }

  useEffect(() => {
    IPFSClientConnect()
  })

  const handleSaveProfile = (e) => {
    e.preventDefault()
    // TO-DO: Store name and bio object to ipfs
    addDataToIPFS(JSON.stringify({ name: 'Hello', bio: 'World' }))
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
              handleClick={(e) => handleSaveProfile(e)}
            />
          </ButtonWrapper>
        </Form>
      </ProfileWrapper>
    </Container>
  )
}

export default Profile
