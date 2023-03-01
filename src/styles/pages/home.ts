import Link from 'next/link'
import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',

  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  minHeight: 656,
  marginLeft: 'auto',

  '@bp1': {
    maxWidth: 'none',
    marginLeft: '0',
  },
})

export const Product = styled(Link, {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100% )',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',

  textDecoration: 'none',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  overflow: 'hidden',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'grid',
    gridTemplateAreas: `'name hadBag '
                        'price hadBag'`,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '$gray800',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      gridArea: 'name',
      fontSize: '$lg',
      color: '$white',
    },

    span: {
      gridArea: 'price',
      fontSize: '$xl',
      fonWeight: 'bold',
      color: '$green300',
    },

    div: {
      gridArea: 'hadBag',

      width: '3.5rem',
      height: '3.5rem',
      padding: '0.75rem',
      borderRadius: '6px',
      backgroundColor: '$green500',

      svg: {
        color: '$white',
      },

      '&:hover': {
        transaction: 'all 0.2s ease-in-out',
        backgroundColor: '$green300',
      },
    },
  },

  '&:hover': {
    svg: {
      transform: 'translateY(0%)',
      opacity: 1,
    },

    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})
