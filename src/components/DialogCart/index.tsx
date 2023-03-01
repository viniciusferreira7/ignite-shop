import { X } from 'phosphor-react'
import {
  DialogCartContainer,
  FinishButton,
  Item,
  ItemsContainer,
  Overlay,
  TotalContainer,
} from './styles'

interface DialogCartProps {
  cartIsOpen: boolean
  handleCloseOrOpenCart: () => void
}

export function DialogCart({
  cartIsOpen,
  handleCloseOrOpenCart,
}: DialogCartProps) {
  return (
    <>
      {cartIsOpen ? (
        <>
          <Overlay onClick={handleCloseOrOpenCart} />
          <DialogCartContainer>
            <div>
              <X size={24} onClick={handleCloseOrOpenCart} />
            </div>
            <h2>Sacola de compras</h2>
            <ItemsContainer>
              <Item>
                <div />
                <h4>Camiseta Beyond the Limits</h4>
                <h3>R$ 79,90</h3>
                <button>Remover</button>
              </Item>
              <Item>
                <div />
                <h4>Camiseta Beyond the Limits</h4>
                <h3>R$ 79,90</h3>
                <button>Remover</button>
              </Item>
            </ItemsContainer>
            <TotalContainer>
              <p>Quantidade</p>
              <p>3 itens</p>
              <p>Valor total</p>
              <p>R$ 270,00</p>
            </TotalContainer>
            <FinishButton>
              <strong>Finalizar compra</strong>
            </FinishButton>
          </DialogCartContainer>
        </>
      ) : null}
    </>
  )
}
