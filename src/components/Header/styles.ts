import { styled } from '../../styles'

export const HeaderContainer = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  '@bp1': {
    padding: '2rem 1rem',
  },
})

export const TriggerIcon = styled('div', {
  backgroundColor: '$gray800',
  border: 'none',
  borderRadius: '6px',
  padding: '1.10rem 0.85rem 0.91rem 0.85rem',

  cursor: 'pointer',

  position: 'relative',

  svg: {
    color: '$gray500',
  },

  '&:hover': {
    svg: {
      transition: 'all 0.2s ease-in-out ',
      color: '$gray300',
    },
  },
})

export const Amount = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '1.5rem',
  height: '1.5rem',
  borderRadius: '999999px',

  backgroundColor: '$green500',
  border: '3px solid $gray900',
  color: '$white',
  fontSize: '0.875rem',

  position: 'absolute',
  top: '-9px',
  right: '-9px',
})
