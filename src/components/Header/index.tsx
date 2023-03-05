import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import { Amount, HeaderContainer, TriggerIcon } from './styles'

import logoImg from '../../assets/logo.svg'
import { useShoppingCart } from 'use-shopping-cart'

interface HeaderProps {
  handleCloseOrOpenCart: () => void
}

export function Header({ handleCloseOrOpenCart }: HeaderProps) {
  const { cartCount } = useShoppingCart()

  return (
    <HeaderContainer>
      <Image src={logoImg} alt="Logo do ignite" />
      <TriggerIcon onClick={handleCloseOrOpenCart}>
        <Handbag size={24} weight="regular" />
        <Amount>{cartCount}</Amount>
      </TriggerIcon>
    </HeaderContainer>
  )
}
