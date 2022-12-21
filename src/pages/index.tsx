import { styled } from '../styles'

const Button = styled('button', {
  backgroundColor: '$rocketSeat',
  color: '#fff',
  padding: '1.5rem 1.5rem',

  'span:nth-of-type(2):hover': {
    color: 'navy',
    fontSize: 30,
  },
})

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Button>
        <span>Para</span>Enviar
        <span>Local</span>
      </Button>
    </>
  )
}
