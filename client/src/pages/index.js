import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import { useRouter } from 'next/router'
import {
  Container,
  ConnectWalletWrapper,
  Heading,
  SubText,
} from '../../styles/home.js'
import { providerOptions } from '../../utils/providerOptions'
import { Spinner, SpinnerWrapper } from '../../styles/spinner.js'
import Button from '../core/buttons'

export default function Home() {
  let web3Modal
  const router = useRouter()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [userInfo, setUserInfo] = useState({
    address: null,
    balance: 0,
  })

  useEffect(() => {
    web3Modal = new Web3Modal({
      cacheProvider: true,
      providerOptions,
    })
  })

  const handleWalletConnect = async () => {
    try {
      const web3ModalProvider = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(web3ModalProvider)
      const signer = provider.getSigner()
      await handleUserInformation(signer, provider)

      provider.send('eth_requestAccounts', []).then(async () => {
        setTimeout(async () => {
          await handleUserInformation(signer, provider)
          setLoading(false)
        }, 3000)
        setLoading(true)
      })
    } catch (error) {
      console.log(error)
      setError(error)
    }
  }

  const handleUserInformation = async (signer, provider) => {
    const address = await signer.getAddress()
    const balance = await provider.getBalance(address, 'latest')
    setUserInfo({
      address,
      balance,
    })
  }

  const handleWalletDisconnect = async () => {
    try {
      await web3Modal.clearCachedProvider()
      setUserInfo({ ...userInfo, address: null })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      handleWalletConnect()
    }
  }, [])

  return (
    <>
      {loading ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : (
        <Container>
          <ConnectWalletWrapper>
            <Heading>Dashboard</Heading>
            {userInfo.address ? (
              <>
                <SubText>
                  Welcome! Click button to begin publishing your first piece
                </SubText>
                <Button
                  text="Create your first post"
                  buttonType="primary"
                  handleClick={() =>
                    router.push({
                      pathname: '/profile',
                      query: { address: userInfo.address },
                    })
                  }
                />
                <Button
                  text="View profile"
                  buttonType="secondary"
                  handleClick={() => handleWalletDisconnect()}
                />
              </>
            ) : (
              <>
                <SubText>
                  Connect your wallet to begin publishing, or visit the
                  knowledge base to learn more.
                </SubText>
                <Button
                  text={
                    !userInfo.address ? 'Connect wallet' : 'Disconnect wallet'
                  }
                  buttonType="primary"
                  handleClick={() =>
                    !userInfo.address
                      ? handleWalletConnect()
                      : handleWalletDisconnect()
                  }
                />
                <Button text="Browse entries" buttonType="secondary" />
              </>
            )}
          </ConnectWalletWrapper>
        </Container>
      )}
    </>
  )
}
