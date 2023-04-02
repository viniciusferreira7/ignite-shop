import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { stripe } from '../lib/stripe'
import {
  GalleryContainer,
  ImageContainer,
  ListContainer,
  SuccessContainer,
} from '../styles/pages/success'
import { Check } from 'phosphor-react'

interface SuccessProps {
  customerName: string
  listItems: {
    price: {
      id: string
      product: {
        name: string
        images: string[]
      }
    }
    quantity: number
  }[]
}

export default function Success({ customerName, listItems }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <GalleryContainer>
          {listItems.map((item) => (
            <ImageContainer key={item.price.id}>
              <Image
                src={item.price.product.images[0]}
                alt={item.price.product.name}
                width={120}
                height={110}
              />
            </ImageContainer>
          ))}
        </GalleryContainer>
        <h1>Compra efetuada</h1>
        <p>
          Uhuul <strong>{customerName}</strong>, você comprou:
        </p>
        {listItems.map((item) => (
          <ListContainer key={item.price.id}>
            <li>
              <Check weight="bold" /> {item.price.product.name}{' '}
              <strong>x{item.quantity}</strong>
            </li>
          </ListContainer>
        ))}
        <p>As camisetas já está a caminho da sua casa.</p>
        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      //      notFound: true,
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const sessionId = String(query.session_id) // or  query.session_id as string | undefined

  const response = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = response.customer_details?.name
  const listItems = response.line_items?.data

  console.log(response)

  return {
    props: {
      customerName,
      listItems,
    },
  }
}
