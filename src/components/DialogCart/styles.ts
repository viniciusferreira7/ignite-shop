import { styled } from '../../styles'

export const Overlay = styled('div', {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100vh',
  backgroundColor: '$gray900',
  opacity: '0.7',
  zIndex: '999999',
})

export const DialogCartContainer = styled('div', {
  width: '100%',
  maxWidth: '30rem',
  minHeight: '100vh',
  padding: '1.5rem 1.5rem 3rem 3rem',

  backgroundColor: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',

  position: 'absolute',
  top: '0',
  right: '0',
  zIndex: '999999',

  ' & > div:nth-of-type(1)': {
    textAlign: 'right',

    svg: {
      cursor: 'pointer',
    },
  },

  h2: {
    margin: '1.5rem 0 2rem 0',
    fontSize: '$lg',
  },

  '& > h3': {
    fontSize: '$xl',
    color: '$white',
    position: 'absolute',
    top: '50%',
    left: '10%',
  },

  '@bp1': {
    padding: '1.5rem',
  },
})

export const ItemsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.47rem',

  height: '28rem',
  marginBottom: '1.68rem',

  overflow: 'auto',

  '@bp1': {
    height: '21rem',
  },
})

export const Item = styled('div', {
  display: 'grid',
  justifyContent: 'left',
  gridTemplateAreas: `'img h4' 'img h3' 'img button'`,

  h4: {
    gridArea: 'h4',

    fontSize: '1.125rem',
    fontWeight: '400',
    color: '$gray300',

    strong: {
      fontSize: '0.9rem',
      color: '$green300',
    },
  },

  h3: {
    gridArea: 'h3',

    fontSize: '1.125rem',
    color: '$gray100',
  },

  button: {
    all: 'unset',
    gridArea: 'button',

    cursor: 'pointer',

    color: '$green500',
    fontWeight: '700',
  },

  div: {
    gridArea: 'img',

    display: 'flex',
    alignItems: 'center',

    width: '101.94px',
    height: ' 93px',
    marginRight: '1.5rem',

    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    borderRadius: '8px',

    img: {
      objectFill: 'cover',
    },
  },

  '@bp1': {
    div: {
      marginRight: '1rem',
    },
  },
})

export const TotalContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.43rem',
  justifyContent: 'space-between',

  marginBottom: '3.56rem',

  'p:nth-of-type(even)': {
    textAlign: 'right',
  },

  'p:nth-of-type(1)': {
    fontSize: '1rem',
    color: '$gray100',
  },

  'p:nth-of-type(2)': {
    fontSize: '$md',
    color: '$gray300',
  },

  'p:nth-of-type(3)': {
    fontSize: '$md',
    color: '$gray100',
    fontWeight: '700',
  },

  'p:nth-of-type(4)': {
    fontSize: '$xl',
    color: '$gray100',
    fontWeight: '700',
  },
})

export const FinishButton = styled('button', {
  all: 'unset',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  maxWidth: '24rem',
  width: '100%',
  minHeight: '4.31rem',
  borderRadius: '8px',

  backgroundColor: '$green500',

  cursor: 'pointer',

  strong: {
    color: '$white',
    fontSize: '$lg',
  },

  '&:hover': {
    transaction: 'all 0.2s ease-in-out',
    backgroundColor: '$green300',
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    transaction: 'all 2.2s ease-in-out',
    backgroundColor: '$green300',
  },
})
