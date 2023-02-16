interface DialogCartProps {
  cartIsOpen: boolean
}

export function DialogCart({ cartIsOpen }: DialogCartProps) {
  return <>{cartIsOpen ? <h1>Teste</h1> : null}</>
}
