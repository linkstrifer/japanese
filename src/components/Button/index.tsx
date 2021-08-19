interface ButtonProps {
  children: string | JSX.Element
  onClick: () => void
  className?: string
}

function Button({ className, children, onClick }: ButtonProps): JSX.Element {
  return (
    <button
      className={`bg-primary-dark hover:bg-primary-light text-white font-bold py-2 px-4 text-lg rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
