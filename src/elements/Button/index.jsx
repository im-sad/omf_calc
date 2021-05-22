import * as S from './styles'

const Button = ({
  href,
  onClick,
  className,
  mod,
  size,
  download,
  ariaLabel,
  type,
  disabled,
  children
}) => {
  return (
    <S.Btn
      className={className}
      href={href}
      size={size}
      mod={mod}
      download={download && 'download'}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      type={type}
      as={!href && 'button'}
    >
      {children}
    </S.Btn>
  )
}

export default Button
