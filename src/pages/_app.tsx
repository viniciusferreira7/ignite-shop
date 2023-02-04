import type { AppProps } from 'next/app'
import Image from 'next/image'

import { CartProvider } from 'use-shopping-cart'
import * as Dialog from '@radix-ui/react-dialog'

import { Handbag } from 'phosphor-react'

import { globalStyles } from '../styles/global'
import logoImg from '../assets/logo.svg'
import { Container, Header, TriggerIcon } from '../styles/pages/app'
import { DialogCart } from '../components/DialogCart'

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
          <Dialog.Root>
            <TriggerIcon>
              {/* O modal não está funcionando */}
              <Handbag size={24} weight="regular" />
            </TriggerIcon>
            <DialogCart />
          </Dialog.Root>
        </Header>
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
