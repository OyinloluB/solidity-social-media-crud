import Head from 'next/head';
import { Container, ConnectWalletWrapper, Heading, SubText, ConnectWalletButton } from '../styles/home.js'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </Head>
      <Container>
        <ConnectWalletWrapper>
          <Heading>Dashboard</Heading>
          <SubText>Connect your wallet to begin publishing, or visit the knowledge base to learn more.</SubText>
          <ConnectWalletButton type="primary">Connect wallet</ConnectWalletButton>
          <ConnectWalletButton type="secondary">Browse entries</ConnectWalletButton>
        </ConnectWalletWrapper>
      </Container>
    </>
  )
}
