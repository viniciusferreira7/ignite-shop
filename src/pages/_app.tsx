import type { AppProps } from 'next/app'
import Image from 'next/image'

import { CartProvider } from 'use-shopping-cart'

import { globalStyles } from '../styles/global'
import logoImg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      shouldPersist={false}
      currency="BRL"
      cartMode="checkout-session"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string}
    >
      <Container>
        <Header>
          <Image src={logoImg} alt="Logo do ignite" />
        </Header>
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
