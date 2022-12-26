import Image from 'next/image'
import { useRouter } from 'next/router'

import React from 'react'

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'

import camisa from '../../assets/Camisa-Maratona 1.png'

export default function Product() {
  const { query } = useRouter()
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={camisa} alt="Camisa" />
      </ImageContainer>
      <ProductDetails>
        <h1>Camisa X</h1>
        <span>R$ 79,98</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam error
          eligendi molestiae nobis nostrum ducimus perferendis ex quia minima
          debitis, possimus suscipit reiciendis fuga iure exercitationem dolore
          quos sunt mollitia!
        </p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
