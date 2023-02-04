import Image from 'next/image'
import { GetStaticProps } from 'next'

import { useKeenSlider } from 'keen-slider/react'

import { HomeContainer, Product } from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'

import { stripe } from '../lib/stripe'
import Stripe from 'stripe'
import Head from 'next/head'
import { Handbag } from 'phosphor-react'

interface HomeProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ product }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
    breakpoints: {
      '(max-width:768px)': {
        slides: {
          perView: 1,
          spacing: 32,
        },
      },
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {product.map((product) => (
          <Product
            href={`/product/${product.id}`}
            key={product.id}
            className="keen-slider__slide"
            prefetch={false}
          >
            <Image
              src={product.imageUrl}
              width={520}
              height={480}
              alt="Camiseta da Rocketseat"
            />
            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
              <div title="Comprar">
                <Handbag size={32} weight="bold" />
              </div>
            </footer>
          </Product>
        ))}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const product = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }).format((price.unit_amount as number) / 100),
    }
  })

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 2,
  }
}
