import type { AppProps } from 'next/app'
import Image from 'next/image'

import { CartProvider } from 'use-shopping-cart'

import { globalStyles } from '../styles/global'
import logoImg from '../assets/logo.svg'
import { Container, Header, TriggerIcon } from '../styles/pages/app'
import { DialogCart } from '../components/DialogCart'
import { Handbag } from 'phosphor-react'
import { useState } from 'react'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [cartIsOpen, setCartIsOpen] = useState(false)

  function handleCloseOrOpenCart() {
    setCartIsOpen((state) => !state)
  }

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
          <TriggerIcon onClick={handleCloseOrOpenCart}>
            <Handbag size={24} weight="regular" />
          </TriggerIcon>
        </Header>
        <Component {...pageProps} />
      </Container>
      <DialogCart
        cartIsOpen={cartIsOpen}
        handleCloseOrOpenCart={handleCloseOrOpenCart}
      />
    </CartProvider>
  )
}
