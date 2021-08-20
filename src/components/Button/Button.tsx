interface ButtonProps {
  children: string | JSX.Element
  onClick: () => void
  className?: string
  type?: 'submit' | 'button' | 'reset'
}
function Button({
  className,
  children,
  onClick,
  type = 'button',
}: ButtonProps): JSX.Element {
  return (
    <button
      type={type}
      className={`bg-primary-dark hover:bg-primary-light text-white font-bold py-2 px-4 text-lg rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default Button
