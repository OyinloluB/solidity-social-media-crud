import { useEffect, useState } from 'react'
import {
  Container,
  ConnectWalletWrapper,
  Heading,
  SubText,
  ActionButton,
} from '../styles/home.js'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import { providerOptions } from '../utils/providerOptions'
import { useRouter } from 'next/router'
import { Spinner, SpinnerWrapper } from '../styles/spinner.js'

export default function Home() {
  const router = useRouter()
  let web3Modal
  useEffect(() => {
    web3Modal = new Web3Modal({
      cacheProvider: true,
      providerOptions,
    })
  })

  const [error, setError] = useState('')
  const [web3ModalProvider, setWeb3ModalProvider] = useState()
  const [provider, setProvider] = useState()
  const [loading, setLoading] = useState(false)
  const [userInfo, setUserInfo] = useState({
    address: null,
    balance: 0,
  })

  const handleWalletConnect = async () => {
    try {
      const web3ModalProvider = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(web3ModalProvider)
      const network = await provider.getNetwork()
      const signer = provider.getSigner()
      setWeb3ModalProvider(web3ModalProvider)
      setProvider(provider)
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
                <ActionButton
                  type="primary"
                  onClick={() => router.push('/profile')}
                >
                  Create your first post
                </ActionButton>
                <ActionButton
                  type="secondary"
                  onClick={() => handleWalletDisconnect()}
                >
                  View profile
                </ActionButton>
              </>
            ) : (
              <>
                <SubText>
                  Connect your wallet to begin publishing, or visit the
                  knowledge base to learn more.
                </SubText>
                <ActionButton
                  type="primary"
                  onClick={() =>
                    !userInfo.address
                      ? handleWalletConnect()
                      : handleWalletDisconnect()
                  }
                >
                  {!userInfo.address ? 'Connect wallet' : 'Disconnect wallet'}
                </ActionButton>
                <ActionButton type="secondary">Browse entries</ActionButton>
              </>
            )}
          </ConnectWalletWrapper>
        </Container>
      )}
    </>
  )
}
