import Image from 'next/image'
import { useRouter } from 'next/router'

import React from 'react'

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'

import { GetStaticProps } from 'next'
import { stripe } from '../../lib/stripe'
import Stripe from 'stripe'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
  }
}

export default function Product({ product }: ProductProps) {
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} alt="Camisa" width={520} height={480} />
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params?.id ? params.id : '' // type guard

  const product = await stripe.products.retrieve(productId, {
    expand: ['default.price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-br', {
          style: 'currency',
          currency: 'BRL',
        }).format((price.unit_amount as number) / 100),
        description: product.description,
      },
    },
    redirect: 60 * 60 * 1,
  }
}
