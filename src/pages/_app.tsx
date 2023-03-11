import type { AppProps } from 'next/app'

import { CartProvider } from 'use-shopping-cart'

import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'
import { DialogCart } from '../components/DialogCart'
import { useState } from 'react'
import { Header } from '../components/Header'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [cartIsOpen, setCartIsOpen] = useState(false)

  function handleCloseOrOpenCart() {
    setCartIsOpen((state) => !state)
  }

  return (
    // remover itens do carrinho
    <CartProvider
      shouldPersist
      currency="BRL"
      cartMode="checkout-session"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string}
    >
      <Container>
        <Header handleCloseOrOpenCart={handleCloseOrOpenCart} />
        <Component {...pageProps} />
      </Container>
      <DialogCart
        cartIsOpen={cartIsOpen}
        handleCloseOrOpenCart={handleCloseOrOpenCart}
      />
    </CartProvider>
  )
}
