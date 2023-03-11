import Image from 'next/image'
import { X } from 'phosphor-react'
import { useShoppingCart } from 'use-shopping-cart'
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
  const { cartDetails } = useShoppingCart()

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
              {Object.values(cartDetails ?? {}).map((product) => (
                <Item key={product.id}>
                  <div>
                    <Image
                      src={product.imageUrl}
                      alt={`foto da ${product.name}`}
                      width={100}
                      height={80}
                    />
                  </div>
                  <h4>{product.name}</h4>
                  <h3>{product.price}</h3>
                  <button>Remover</button>
                </Item>
              ))}
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
