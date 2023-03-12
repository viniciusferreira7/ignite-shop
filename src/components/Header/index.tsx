import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import { Amount, HeaderContainer, TriggerIcon } from './styles'

import logoImg from '../../assets/logo.svg'
import { useShoppingCart } from 'use-shopping-cart'
import Link from 'next/link'

interface HeaderProps {
  handleCloseOrOpenCart: () => void
}

export function Header({ handleCloseOrOpenCart }: HeaderProps) {
  const { cartCount } = useShoppingCart()

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="Logo do ignite" />
      </Link>
      <TriggerIcon onClick={handleCloseOrOpenCart}>
        <Handbag size={24} weight="regular" />
        <Amount>{cartCount}</Amount>
      </TriggerIcon>
    </HeaderContainer>
  )
}
