import { useEffect, useState } from 'react'
import {
  Container,
  ConnectWalletWrapper,
  Heading,
  SubText,
  ConnectWalletButton,
} from '../styles/home.js'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import { providerOptions } from '../utils/providerOptions'

export default function Home() {
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
  const [account, setAccount] = useState()
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
        await handleUserInformation(signer, provider)
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
      <Container>
        <ConnectWalletWrapper>
          <Heading>Dashboard</Heading>
          <SubText>
            Connect your wallet to begin publishing, or visit the knowledge base
            to learn more.
          </SubText>
          <ConnectWalletButton
            type="primary"
            onClick={() =>
              !userInfo.address
                ? handleWalletConnect()
                : handleWalletDisconnect()
            }
          >
            {!userInfo.address ? 'Connect wallet' : 'Disconnect wallet'}
          </ConnectWalletButton>
          <ConnectWalletButton type="secondary">
            Browse entries
          </ConnectWalletButton>
        </ConnectWalletWrapper>
      </Container>
    </>
  )
}
