import { styled } from '@stitches/react'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  strong: {
    textTransform: 'capitalize',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    paddingTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const GalleryContainer = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  height: 145,
  padding: '0.25rem',
  marginBottom: '2rem',
})
export const ImageContainer = styled('main', {
  width: '100%',
  maxWidth: 130,
  height: 145,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100% )',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  boxShadow: '0px 0px 60px 0px #000000CC',

  marginLeft: '-48px',

  '&:first-of-type': {
    marginLeft: 0,
  },

  img: {
    objectFit: 'cover',
  },
})

export const ListContainer = styled('ul', {
  fontSize: '$xl',
  color: '$gray300',
  maxWidth: 560,
  textAlign: 'center',
  marginTop: '1rem',
  lineHeight: 1,
  listStylePosition: 'inside',
  listStyleType: 'none',

  svg: {
    color: '$green300',
  },

  strong: {
    fontSize: '1.6rem',
    color: '$green300',
  },
})
