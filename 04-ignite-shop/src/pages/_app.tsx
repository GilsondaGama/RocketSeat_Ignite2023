import { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'

import logoIgniteShop from '../assets/logoIgniteShop.svg'
import { Container, Header } from '@/styles/pages/app'

import Image from 'next/image'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoIgniteShop} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
