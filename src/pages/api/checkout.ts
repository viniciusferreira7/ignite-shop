import { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../lib/stripe'
import { CartDetails } from 'use-shopping-cart/core'

type ItemsType = {
  id: string
  quantity: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { cartDetails }: { cartDetails: CartDetails } = req.body

  if (req.method === 'GET') {
    return res.status(405).json({ error: 'Not Allowed' })
  }

  if (!cartDetails) {
    return res.status(400).json({ error: 'Price not found' })
  }

  const items: ItemsType[] = []

  // eslint-disable-next-line no-unused-vars
  for (const [key, value] of Object.entries(cartDetails ?? {})) {
    items.push(value)
  }

  const filterItems = items.map((item) => {
    return { price: item.id, quantity: item.quantity }
  })

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: filterItems,
  })

  return res.status(201).json({ checkoutUrl: checkoutSession.url })
}
