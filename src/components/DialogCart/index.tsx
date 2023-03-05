import Image from 'next/image'
import { X } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { CartDetails, CartEntry } from 'use-shopping-cart/core'
import {
  DialogCartContainer,
  FinishButton,
  Item,
  ItemsContainer,
  Overlay,
  TotalContainer,
} from './styles'

type ProductType = {
  id: string
  sku: string
  name: string
  imageUrl: string
  price: number
  currency: string
}

interface DialogCartProps {
  cartIsOpen: boolean
  handleCloseOrOpenCart: () => void
}

export function DialogCart({
  cartIsOpen,
  handleCloseOrOpenCart,
}: DialogCartProps) {
  const { cartDetails } = useShoppingCart()
  const [allProducts, setAllProducts] = useState<(ProductType | CartEntry)[]>(
    [],
  )

  useEffect(() => {
    for (const [key, value] of Object.entries(cartDetails as CartDetails)) {
      setAllProducts((state) => [...state, value])
    }
  }, [cartDetails])

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
              {allProducts.map((product) => (
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
