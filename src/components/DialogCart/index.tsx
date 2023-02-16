import { X } from 'phosphor-react'
import { DialogCartContainer, Item, ItemsContainer, Overlay } from './styles'

interface DialogCartProps {
  cartIsOpen: boolean
  handleCart: () => void
}

export function DialogCart({ cartIsOpen, handleCart }: DialogCartProps) {
  return (
    <>
      {cartIsOpen ? (
        <>
          <Overlay onClick={handleCart} />
          <DialogCartContainer>
            <div>
              <X size={24} />
            </div>
            <h2>Sacola de compras</h2>
            <ItemsContainer>
              <Item>
                <div />
                <h4>Camiseta Beyond the Limits</h4>
                <h3>R$ 79,90</h3>
                <button>Remover</button>
              </Item>
            </ItemsContainer>
          </DialogCartContainer>
        </>
      ) : null}
    </>
  )
}
