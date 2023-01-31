import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  div: {
    backgroundColor: '$gray800',
    borderRadius: '6px',
    padding: '1.10rem 0.85rem 0.91rem 0.85rem',

    cursor: 'pointer',

    svg: {
      color: '$gray500',
    },

    '&:hover': {
      svg: {
        transition: 'all 0.2s ease-in-out ',
        color: '$gray300',
      },
    },
  },
})
