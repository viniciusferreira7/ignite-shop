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
  const { totalPrice, cartCount, cartDetails, removeItem } = useShoppingCart()

  function handleRemoveItem(id: string) {
    removeItem(id)
  }

  const totalPriceConverted = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format((totalPrice as number) / 100)

  return (
    <>
      {cartIsOpen ? (
        <>
          <Overlay onClick={handleCloseOrOpenCart} />
          <DialogCartContainer>
            <div>
              <X size={24} onClick={handleCloseOrOpenCart} />
            </div>
            {(cartCount as number) > 0 ? (
              <>
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
                      <h4>
                        {product.name}{' '}
                        <strong>
                          {product.quantity ? `x${product.quantity}` : null}
                        </strong>
                      </h4>
                      <h3>{product.unit_amount}</h3>
                      <button onClick={() => handleRemoveItem(product.id)}>
                        Remover
                      </button>
                    </Item>
                  ))}
                </ItemsContainer>
                <TotalContainer>
                  <p>Quantidade</p>
                  <p>{cartCount} itens</p>
                  <p>Valor total</p>
                  <p>{totalPriceConverted}</p>
                </TotalContainer>
                <FinishButton>
                  <strong>Finalizar compra</strong>
                </FinishButton>
              </>
            ) : (
              <h3>Seu carrinho est?? vazio...</h3>
            )}
          </DialogCartContainer>
        </>
      ) : null}
    </>
  )
}
