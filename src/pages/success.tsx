import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { stripe } from '../lib/stripe'
import { ImageContainer, SuccessContainer } from '../styles/pages/success'

interface SuccessProps {
  customerName: string
  listItems: {
    name: string
    imageUrl: string
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
        <h1>Compra efetuada</h1>
        <ImageContainer>
          {listItems.map((item) => (
            <Image
              key={item.name}
              src={item.imageUrl}
              alt=""
              width={120}
              height={110}
            />
          ))}
        </ImageContainer>
        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{' '}
          {listItems.length} camisetas já está a caminho da sua casa.
        </p>
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

  const responseList = await stripe.checkout.sessions.listLineItems(sessionId)
  const responseCustomerName = await stripe.checkout.sessions.retrieve(
    sessionId,
  )

  const customerName = responseCustomerName.customer_details?.name
  // // const product = response.line_items?.data[0].price?.product as Stripe.Product
  console.log(responseList)

  // Pegar a url da imagem de cada item comprado para exibir na página
  // Ler a documentação do stripe checkout sessions e expand response

  return {
    props: {
      customerName,
      listItems: [responseList.data],
    },
  }
}
